import { useEffect, useState, useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import { getDimensionRating, type DimensionKey } from "@/lib/scoring";
import { dimensions } from "@/data/questions";

interface AssessmentRow {
  id: string;
  lead_id: string;
  status: string;
  total_score: number | null;
  maturity_level: string | null;
  dimension_scores: Record<string, number> | null;
  answers: Record<string, number> | null;
  completed_at: string | null;
  started_at: string;
  lead_name: string;
  lead_org: string;
}

type SortField = "lead_org" | "lead_name" | "total_score" | "maturity_level" | "status" | "started_at";
type SortDir = "asc" | "desc";

const AdminAssessments = () => {
  const [rows, setRows] = useState<AssessmentRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortField, setSortField] = useState<SortField>("started_at");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const { data: assessments } = await supabase.from("assessments").select("*");
      const { data: leads } = await supabase.from("leads").select("*");

      if (!assessments) { setLoading(false); return; }

      const leadMap = new Map<string, any>();
      (leads || []).forEach((l: any) => leadMap.set(l.id, l));

      const joined: AssessmentRow[] = assessments.map((a: any) => {
        const lead = leadMap.get(a.lead_id);
        return {
          ...a,
          dimension_scores: a.dimension_scores as Record<string, number> | null,
          answers: a.answers as Record<string, number> | null,
          lead_name: lead?.name || "Unknown",
          lead_org: lead?.organisation || "Unknown",
        };
      });

      setRows(joined);
      setLoading(false);
    };
    fetch();
  }, []);

  const sorted = useMemo(() => {
    return [...rows].sort((a, b) => {
      let av: string | number = "";
      let bv: string | number = "";

      switch (sortField) {
        case "lead_org": av = a.lead_org; bv = b.lead_org; break;
        case "lead_name": av = a.lead_name; bv = b.lead_name; break;
        case "total_score": av = a.total_score || 0; bv = b.total_score || 0; break;
        case "maturity_level": av = a.total_score || 0; bv = b.total_score || 0; break;
        case "status": av = a.status; bv = b.status; break;
        case "started_at": av = a.started_at; bv = b.started_at; break;
      }

      if (typeof av === "number" && typeof bv === "number") return sortDir === "asc" ? av - bv : bv - av;
      return sortDir === "asc" ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av));
    });
  }, [rows, sortField, sortDir]);

  const toggleSort = (field: SortField) => {
    if (sortField === field) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortField(field); setSortDir("asc"); }
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return sortDir === "asc" ? <ChevronUp className="h-3 w-3 inline ml-1" /> : <ChevronDown className="h-3 w-3 inline ml-1" />;
  };

  const ThCell = ({ field, children }: { field: SortField; children: React.ReactNode }) => (
    <th
      className="text-left px-3 py-2.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground cursor-pointer hover:text-foreground select-none whitespace-nowrap"
      onClick={() => toggleSort(field)}
    >
      {children}
      <SortIcon field={field} />
    </th>
  );

  // Find question text by id
  const questionText = (qId: string): string => {
    for (const dim of dimensions) {
      for (const q of dim.questions) {
        if (q.id === qId) return q.text;
      }
    }
    return qId;
  };

  const answerLabel = (qId: string, value: number): string => {
    for (const dim of dimensions) {
      for (const q of dim.questions) {
        if (q.id === qId) {
          const opt = q.options.find((o) => o.value === value);
          return opt ? opt.label : `Score: ${value}`;
        }
      }
    }
    return `Score: ${value}`;
  };

  if (loading) return (
    <div className="space-y-6">
      <div className="h-6 w-36 bg-secondary animate-pulse rounded" />
      <div className="border border-border rounded">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex gap-4 px-3 py-3 border-b border-border">
            <div className="h-4 w-32 bg-secondary animate-pulse rounded" />
            <div className="h-4 w-24 bg-secondary animate-pulse rounded" />
            <div className="h-4 w-16 bg-secondary animate-pulse rounded" />
            <div className="h-4 w-20 bg-secondary animate-pulse rounded" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <h1 className="font-mono text-lg uppercase tracking-widest text-foreground">Assessments</h1>

      <div className="border border-border rounded overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b border-border bg-card">
            <tr>
              <th className="w-8" />
              <ThCell field="lead_org">Organisation</ThCell>
              <ThCell field="lead_name">Name</ThCell>
              <ThCell field="total_score">Score</ThCell>
              <ThCell field="maturity_level">Maturity</ThCell>
              <ThCell field="status">Status</ThCell>
              <ThCell field="started_at">Date</ThCell>
            </tr>
          </thead>
          <tbody>
            {sorted.map((row) => (
              <>
                <tr
                  key={row.id}
                  className="border-b border-border hover:bg-card/50 cursor-pointer transition-colors"
                  onClick={() => setExpandedId(expandedId === row.id ? null : row.id)}
                >
                  <td className="px-2 py-2.5 text-muted-foreground">
                    <ChevronRight className={`h-3.5 w-3.5 transition-transform ${expandedId === row.id ? "rotate-90" : ""}`} />
                  </td>
                  <td className="px-3 py-2.5 text-foreground">{row.lead_org}</td>
                  <td className="px-3 py-2.5 text-foreground">{row.lead_name}</td>
                  <td className="px-3 py-2.5 text-foreground font-semibold">{row.total_score !== null ? `${row.total_score}/150` : "—"}</td>
                  <td className="px-3 py-2.5"><span className="text-primary font-medium">{row.maturity_level || "—"}</span></td>
                  <td className="px-3 py-2.5">
                    <span className={`font-mono text-xs uppercase ${row.status === "completed" ? "text-green-500" : "text-muted-foreground"}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-muted-foreground whitespace-nowrap">
                    {new Date(row.completed_at || row.started_at).toLocaleDateString()}
                  </td>
                </tr>
                {expandedId === row.id && (
                  <tr key={`${row.id}-exp`} className="border-b border-border bg-card/30">
                    <td colSpan={7} className="px-8 py-5">
                      {row.answers ? (
                        <div className="space-y-4">
                          {dimensions.map((dim) => (
                            <div key={dim.id}>
                              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">{dim.name}</p>
                              <div className="space-y-2">
                                {dim.questions.map((q) => {
                                  const val = (row.answers as Record<string, number>)?.[q.id];
                                  return (
                                    <div key={q.id} className="grid grid-cols-[1fr_auto] gap-4 text-xs">
                                      <p className="text-muted-foreground">{q.text}</p>
                                      <p className="text-foreground font-mono font-semibold text-right">{val ?? "—"}/5</p>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-sm">No answers recorded.</p>
                      )}
                    </td>
                  </tr>
                )}
              </>
            ))}
            {sorted.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-8 text-muted-foreground font-mono text-sm">No assessments found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAssessments;
