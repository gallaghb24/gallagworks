import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { getMaturityLevel, type DimensionKey } from "@/lib/scoring";
import { dimensions } from "@/data/questions";

interface Stats {
  total: number;
  thisMonth: number;
  avgScore: number;
  completionRate: number;
  maturityDistribution: { name: string; count: number; color: string }[];
  dimensionAverages: { name: string; avg: number }[];
}

const MATURITY_LEVELS = [
  { label: "Foundation", min: 0, max: 59, color: "#EF4444" },
  { label: "Emerging", min: 60, max: 89, color: "#F97316" },
  { label: "Developing", min: 90, max: 109, color: "#EAB308" },
  { label: "Advancing", min: 110, max: 129, color: "#22C55E" },
  { label: "Leading", min: 130, max: 150, color: "#10B981" },
];

const DIMENSION_KEYS: DimensionKey[] = [
  "data_foundation", "process_maturity", "governance_risk",
  "skills_culture", "tooling_infrastructure", "strategic_clarity",
];

const DIMENSION_LABELS: Record<DimensionKey, string> = {
  data_foundation: "Data",
  process_maturity: "Process",
  governance_risk: "Governance",
  skills_culture: "Skills",
  tooling_infrastructure: "Tooling",
  strategic_clarity: "Strategy",
};

const AdminOverview = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data: assessments } = await supabase
        .from("assessments")
        .select("*");

      if (!assessments) { setLoading(false); return; }

      const completed = assessments.filter((a) => a.status === "completed");
      const now = new Date();
      const thisMonth = completed.filter((a) => {
        const d = new Date(a.completed_at || a.started_at);
        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
      });

      const avgScore = completed.length
        ? Math.round(completed.reduce((s, a) => s + (a.total_score || 0), 0) / completed.length)
        : 0;

      const completionRate = assessments.length
        ? Math.round((completed.length / assessments.length) * 100)
        : 0;

      // Maturity distribution
      const maturityDistribution = MATURITY_LEVELS.map((ml) => ({
        name: ml.label,
        count: completed.filter((a) => (a.total_score || 0) >= ml.min && (a.total_score || 0) <= ml.max).length,
        color: ml.color,
      }));

      // Dimension averages
      const dimensionAverages = DIMENSION_KEYS.map((key) => {
        const scores = completed
          .map((a) => {
            const ds = a.dimension_scores as Record<string, number> | null;
            return ds ? ds[key] || 0 : 0;
          });
        const avg = scores.length ? Math.round((scores.reduce((s, v) => s + v, 0) / scores.length) * 10) / 10 : 0;
        return { name: DIMENSION_LABELS[key], avg };
      });

      setStats({
        total: completed.length,
        thisMonth: thisMonth.length,
        avgScore,
        completionRate,
        maturityDistribution,
        dimensionAverages,
      });
      setLoading(false);
    };
    fetch();
  }, []);

  if (loading) return (
    <div className="space-y-8">
      <div className="h-6 w-32 bg-secondary rounded-none animate-pulse" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="border border-border rounded-none p-5 bg-card">
            <div className="h-3 w-20 bg-secondary rounded-none mb-2 animate-pulse" />
            <div className="h-7 w-16 bg-secondary rounded-none animate-pulse" />
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="border border-border rounded-none p-5 bg-card h-[300px] animate-pulse bg-secondary/20" />
        ))}
      </div>
    </div>
  );
  if (!stats) return <p className="text-muted-foreground font-mono text-sm">No data available.</p>;

  const cards = [
    { label: "Total Assessments", value: stats.total },
    { label: "This Month", value: stats.thisMonth },
    { label: "Avg Score", value: `${stats.avgScore}/150` },
    { label: "Completion Rate", value: `${stats.completionRate}%` },
  ];

  return (
    <div className="space-y-8">
      <h1 className="font-mono text-lg uppercase tracking-widest text-foreground">Overview</h1>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => (
          <div key={c.label} className="border border-border rounded-none p-5 bg-card">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{c.label}</p>
            <p className="text-2xl font-semibold text-foreground">{c.value}</p>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Maturity distribution */}
        <div className="border border-border p-5 bg-card">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Assessments by Maturity Level
          </p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={stats.maturityDistribution}>
              <XAxis dataKey="name" tick={{ fill: "hsl(0,0%,60%)", fontSize: 11, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "hsl(0,0%,60%)", fontSize: 11 }} axisLine={false} tickLine={false} allowDecimals={false} />
              <Tooltip
                contentStyle={{ background: "hsl(210,5%,11%)", border: "1px solid hsl(210,3%,19%)", borderRadius: 0, fontFamily: "Inter" }}
                labelStyle={{ color: "hsl(0,0%,96%)" }}
              />
              <Bar dataKey="count" radius={0}>
                {stats.maturityDistribution.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Dimension averages */}
        <div className="border border-border rounded-none p-5 bg-card">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Average Score by Dimension
          </p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={stats.dimensionAverages}>
              <XAxis dataKey="name" tick={{ fill: "hsl(0,0%,60%)", fontSize: 11, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "hsl(0,0%,60%)", fontSize: 11 }} axisLine={false} tickLine={false} domain={[0, 25]} />
              <Tooltip
                contentStyle={{ background: "hsl(210,5%,11%)", border: "1px solid hsl(210,3%,19%)", borderRadius: 0, fontFamily: "Inter" }}
                labelStyle={{ color: "hsl(0,0%,96%)" }}
              />
              <Bar dataKey="avg" fill="hsl(20,100%,56%)" radius={0} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
