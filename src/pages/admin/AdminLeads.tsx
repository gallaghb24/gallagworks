import { useEffect, useState, useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ChevronDown, ChevronUp, Download, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getDimensionRating, type DimensionKey } from "@/lib/scoring";
import { dimensions } from "@/data/questions";

interface Lead {
  id: string;
  name: string;
  organisation: string;
  email: string;
  industry: string | null;
  company_size: string | null;
  created_at: string;
}

interface Assessment {
  id: string;
  lead_id: string;
  status: string;
  total_score: number | null;
  maturity_level: string | null;
  dimension_scores: Record<string, number> | null;
  completed_at: string | null;
  started_at: string;
}

interface JoinedLead extends Lead {
  assessment?: Assessment;
}

type SortField = "name" | "organisation" | "email" | "industry" | "company_size" | "status" | "maturity_level" | "created_at";
type SortDir = "asc" | "desc";

const DIMENSION_KEYS: DimensionKey[] = [
  "data_foundation", "process_maturity", "governance_risk",
  "skills_culture", "tooling_infrastructure", "strategic_clarity",
];

const DIMENSION_LABELS: Record<DimensionKey, string> = {
  data_foundation: "Data Foundation",
  process_maturity: "Process Maturity",
  governance_risk: "Governance & Risk",
  skills_culture: "Skills & Culture",
  tooling_infrastructure: "Tooling & Infra",
  strategic_clarity: "Strategic Clarity",
};

const AdminLeads = () => {
  const [leads, setLeads] = useState<JoinedLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortField, setSortField] = useState<SortField>("created_at");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Filters
  const [filterIndustry, setFilterIndustry] = useState("");
  const [filterSize, setFilterSize] = useState("");
  const [filterMaturity, setFilterMaturity] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const { data: leadsData } = await supabase.from("leads").select("*");
      const { data: assessmentsData } = await supabase.from("assessments").select("*");

      if (!leadsData) { setLoading(false); return; }

      const assessmentMap = new Map<string, Assessment>();
      (assessmentsData || []).forEach((a: any) => assessmentMap.set(a.lead_id, a));

      const joined: JoinedLead[] = leadsData.map((l: any) => ({
        ...l,
        assessment: assessmentMap.get(l.id),
      }));

      setLeads(joined);
      setLoading(false);
    };
    fetch();
  }, []);

  const uniqueIndustries = useMemo(() => [...new Set(leads.map((l) => l.industry).filter(Boolean))], [leads]);
  const uniqueSizes = useMemo(() => [...new Set(leads.map((l) => l.company_size).filter(Boolean))], [leads]);
  const uniqueMaturity = useMemo(() => [...new Set(leads.map((l) => l.assessment?.maturity_level).filter(Boolean))], [leads]);

  const filtered = useMemo(() => {
    return leads.filter((l) => {
      if (filterIndustry && l.industry !== filterIndustry) return false;
      if (filterSize && l.company_size !== filterSize) return false;
      if (filterMaturity && l.assessment?.maturity_level !== filterMaturity) return false;
      return true;
    });
  }, [leads, filterIndustry, filterSize, filterMaturity]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      let av: string | number = "";
      let bv: string | number = "";

      switch (sortField) {
        case "name": av = a.name; bv = b.name; break;
        case "organisation": av = a.organisation; bv = b.organisation; break;
        case "email": av = a.email; bv = b.email; break;
        case "industry": av = a.industry || ""; bv = b.industry || ""; break;
        case "company_size": av = a.company_size || ""; bv = b.company_size || ""; break;
        case "status": av = a.assessment?.status || ""; bv = b.assessment?.status || ""; break;
        case "maturity_level": av = a.assessment?.total_score || 0; bv = b.assessment?.total_score || 0; break;
        case "created_at": av = a.created_at; bv = b.created_at; break;
      }

      if (typeof av === "number" && typeof bv === "number") {
        return sortDir === "asc" ? av - bv : bv - av;
      }
      return sortDir === "asc"
        ? String(av).localeCompare(String(bv))
        : String(bv).localeCompare(String(av));
    });
  }, [filtered, sortField, sortDir]);

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDir("asc");
    }
  };

  const exportCSV = () => {
    const headers = ["Name", "Organisation", "Email", "Industry", "Company Size", "Status", "Maturity Level", "Score", "Date"];
    const rows = sorted.map((l) => [
      l.name,
      l.organisation,
      l.email,
      l.industry || "",
      l.company_size || "",
      l.assessment?.status || "No assessment",
      l.assessment?.maturity_level || "",
      l.assessment?.total_score?.toString() || "",
      new Date(l.created_at).toLocaleDateString(),
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
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

  if (loading) return (
    <div className="space-y-6">
      <div className="h-6 w-24 bg-secondary rounded-none animate-pulse" />
      <div className="border border-border rounded-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex gap-4 px-3 py-3 border-b border-border">
            <div className="h-4 w-24 bg-secondary rounded-none animate-pulse" />
            <div className="h-4 w-32 bg-secondary rounded-none animate-pulse" />
            <div className="h-4 w-40 bg-secondary rounded-none animate-pulse" />
            <div className="h-4 w-20 bg-secondary rounded-none animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-mono text-lg uppercase tracking-widest text-foreground">Leads</h1>
        <Button onClick={exportCSV} variant="outline" className="rounded-none border-border font-mono text-xs uppercase tracking-wider gap-2">
          <Download className="h-3.5 w-3.5" />
          Export CSV
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-3 flex-wrap">
        <select
          value={filterIndustry}
          onChange={(e) => setFilterIndustry(e.target.value)}
          className="bg-card border border-border rounded-none px-3 py-1.5 text-sm text-foreground font-mono text-xs"
        >
          <option value="">All Industries</option>
          {uniqueIndustries.map((i) => <option key={i} value={i!}>{i}</option>)}
        </select>
        <select
          value={filterSize}
          onChange={(e) => setFilterSize(e.target.value)}
          className="bg-card border border-border rounded-none px-3 py-1.5 text-sm text-foreground font-mono text-xs"
        >
          <option value="">All Sizes</option>
          {uniqueSizes.map((s) => <option key={s} value={s!}>{s}</option>)}
        </select>
        <select
          value={filterMaturity}
          onChange={(e) => setFilterMaturity(e.target.value)}
          className="bg-card border border-border rounded-none px-3 py-1.5 text-sm text-foreground font-mono text-xs"
        >
          <option value="">All Maturity</option>
          {uniqueMaturity.map((m) => <option key={m} value={m!}>{m}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="border border-border rounded-none overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b border-border bg-card">
            <tr>
              <th className="w-8" />
              <ThCell field="name">Name</ThCell>
              <ThCell field="organisation">Organisation</ThCell>
              <ThCell field="email">Email</ThCell>
              <ThCell field="industry">Industry</ThCell>
              <ThCell field="company_size">Size</ThCell>
              <ThCell field="status">Status</ThCell>
              <ThCell field="maturity_level">Maturity</ThCell>
              <ThCell field="created_at">Date</ThCell>
            </tr>
          </thead>
          <tbody>
            {sorted.map((lead) => (
              <>
                <tr
                  key={lead.id}
                  className="border-b border-border hover:bg-card/50 cursor-pointer transition-colors"
                  onClick={() => setExpandedId(expandedId === lead.id ? null : lead.id)}
                >
                  <td className="px-2 py-2.5 text-muted-foreground">
                    <ChevronRight className={`h-3.5 w-3.5 transition-transform ${expandedId === lead.id ? "rotate-90" : ""}`} />
                  </td>
                  <td className="px-3 py-2.5 text-foreground">{lead.name}</td>
                  <td className="px-3 py-2.5 text-foreground">{lead.organisation}</td>
                  <td className="px-3 py-2.5 text-muted-foreground">{lead.email}</td>
                  <td className="px-3 py-2.5 text-muted-foreground">{lead.industry || "—"}</td>
                  <td className="px-3 py-2.5 text-muted-foreground">{lead.company_size || "—"}</td>
                  <td className="px-3 py-2.5">
                    <span className={`font-mono text-xs uppercase ${lead.assessment?.status === "completed" ? "text-green-500" : "text-muted-foreground"}`}>
                      {lead.assessment?.status || "None"}
                    </span>
                  </td>
                  <td className="px-3 py-2.5">
                    <span className="text-primary font-medium">{lead.assessment?.maturity_level || "—"}</span>
                  </td>
                  <td className="px-3 py-2.5 text-muted-foreground whitespace-nowrap">
                    {new Date(lead.created_at).toLocaleDateString()}
                  </td>
                </tr>
                {expandedId === lead.id && lead.assessment?.dimension_scores && (
                  <tr key={`${lead.id}-exp`} className="border-b border-border bg-card/30">
                    <td colSpan={9} className="px-8 py-4">
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {DIMENSION_KEYS.map((key) => {
                          const score = (lead.assessment!.dimension_scores as Record<string, number>)?.[key] || 0;
                          const rating = getDimensionRating(score);
                          return (
                            <div key={key} className="space-y-1">
                              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{DIMENSION_LABELS[key]}</p>
                              <p className="text-lg font-semibold text-foreground">{score}/25</p>
                              <p className="text-xs" style={{ color: rating.color }}>{rating.rating}</p>
                            </div>
                          );
                        })}
                      </div>
                      <p className="mt-3 font-mono text-xs text-muted-foreground">
                        Total: <span className="text-foreground font-semibold">{lead.assessment!.total_score}/150</span>
                      </p>
                    </td>
                  </tr>
                )}
              </>
            ))}
            {sorted.length === 0 && (
              <tr>
                <td colSpan={9} className="text-center py-8 text-muted-foreground font-mono text-sm">No leads found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminLeads;
