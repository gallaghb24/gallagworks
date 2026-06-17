import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import SEOHead from "@/components/SEOHead";

interface InsightRow {
  ref: string;
  topic: string;
  metric: string;
  status: string;
  slug: string;
  type: "TOOL" | "MANIFESTO" | "SCHEMATIC";
  date?: string;
  sector?: string;
  problem?: string;
}

const insights: InsightRow[] = [
  {
    ref: "GW-TOOL-001",
    topic: "AI Readiness Diagnostic",
    metric: "Self-Serve Assessment",
    status: "LIVE",
    slug: "diagnostic",
    type: "TOOL",
  },
  {
    ref: "GW-LOG-101",
    topic: "Eradicating Enterprise Human Middleware",
    metric: "1,200hrs+ Reclaimed",
    status: "VERIFIED",
    slug: "eradicating-enterprise-data-glue",
    type: "MANIFESTO",
    date: "MAR 2025",
    sector: "Cross-sector",
    problem: "The hidden manual work draining capacity and margin across an enterprise.",
  },
  {
    ref: "GW-LOG-201",
    topic: "POS Job Workflow Automation",
    metric: "70% Cycle Reduction",
    status: "VERIFIED",
    slug: "pos-job-workflow",
    type: "SCHEMATIC",
    date: "MAY 2025",
    sector: "Professional Services",
    problem: "Reporting run as a manual assembly line from disconnected systems.",
  },
  {
    ref: "GW-LOG-202",
    topic: "Costing Process Re-engineering",
    metric: "85% Fewer Missed Deadlines",
    status: "VERIFIED",
    slug: "costing-process",
    type: "SCHEMATIC",
    date: "JUL 2025",
    sector: "Media / Publishing",
    problem: "Costing managed through spreadsheets, email chains and status chasing.",
  },
  {
    ref: "GW-LOG-203",
    topic: "Validation Pipeline Automation",
    metric: "60% Manual Checking Removed",
    status: "VERIFIED",
    slug: "validation-pipeline",
    type: "SCHEMATIC",
    date: "SEP 2025",
    sector: "Financial Services",
    problem: "20 hours a week of manual checking, with no capacity left to improve.",
  },
  {
    ref: "GW-LOG-204",
    topic: "Multichannel Content Orchestration",
    metric: "1,200hrs Reclaimed Annually",
    status: "VERIFIED",
    slug: "multichannel-content-orchestration",
    type: "SCHEMATIC",
    date: "NOV 2025",
    sector: "Retail & Commerce",
    problem: "500-line client briefs triggering 5-hour manual QC loops.",
  },
  {
    ref: "GW-LOG-205",
    topic: "Enterprise Reporting Automation",
    metric: "98% Processing Time Cut",
    status: "VERIFIED",
    slug: "enterprise-reporting-automation",
    type: "SCHEMATIC",
    date: "JAN 2026",
    sector: "Media / Entertainment",
    problem: "30 hours of monthly Excel manipulation for pricing reports.",
  },
  {
    ref: "GW-LOG-206",
    topic: "High-Volume Allocation Logistics",
    metric: "97% Workload Reduction",
    status: "VERIFIED",
    slug: "high-volume-allocation-logistics",
    type: "SCHEMATIC",
    date: "MAR 2026",
    sector: "Retail & Commerce",
    problem: "A 10-hour monthly task merging dozens of allocation files by hand.",
  },
];

const Insights = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Case Studies"
        description="Real examples from real engagements. AI transformation case studies with verified results: 98% manual effort reduction, 1,200 hours reclaimed annually."
        path="/insights"
      />
      <Navigation />
      <main>
        <section className="pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block opacity-0 animate-fade-in">
                [CASE STUDIES]
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6 opacity-0 animate-fade-in-up">
                Case Studies.
              </h1>
              <p
                className="text-lg text-muted-foreground font-light leading-relaxed max-w-[720px] opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Real examples from real engagements. Each entry documents how Human Middleware was identified, what was built to fix it, and what the measurable outcome was. Client names are anonymised but the numbers are verified.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20 pt-12 md:pt-16 bg-warm-stone">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              {/* Technical Index Table */}
              <div className="border border-black/[0.08] rounded-xl overflow-hidden bg-off-white">
              {/* Case studies list */}
              <div className="border border-black/[0.08] rounded-xl overflow-hidden bg-off-white">
                {insights.map((item) => {
                  const isTool = item.type === "TOOL";
                  const to = isTool ? `/${item.slug}` : `/insights/${item.slug}`;
                  const headline = isTool ? item.topic : (item.problem ?? item.topic);
                  return (
                    <Link
                      key={item.ref}
                      to={to}
                      className="block px-5 py-5 md:px-8 md:py-7 border-b border-black/[0.08] last:border-b-0 hover:bg-black/[0.02] transition-colors group"
                    >
                      {/* Top meta row */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                        {item.sector && (
                          <span className="font-mono text-[11px] uppercase tracking-widest px-2 py-1 rounded border border-black/10" style={{ color: '#444' }}>
                            {item.sector}
                          </span>
                        )}
                        {isTool && (
                          <span className="font-mono text-[11px] uppercase tracking-widest px-2 py-1 rounded border border-black/10" style={{ color: '#444' }}>
                            Tool
                          </span>
                        )}
                        <span className="font-mono text-[11px] tracking-wider" style={{ color: '#8a8a8a' }}>
                          {item.ref}
                        </span>
                        {item.date && (
                          <span className="font-mono text-[11px] tracking-wider" style={{ color: '#8a8a8a' }}>
                            {item.date}
                          </span>
                        )}
                        <span className={`font-mono text-[11px] uppercase tracking-widest md:ml-auto ${isTool ? "text-green-500" : "text-primary"}`}>
                          [{item.status}]
                        </span>
                      </div>

                      {/* Problem / headline */}
                      <p className="text-base md:text-lg font-medium leading-snug group-hover:text-primary transition-colors mb-3" style={{ color: '#111113' }}>
                        {headline}
                      </p>

                      {/* Metric */}
                      <span className="font-mono text-sm md:text-base text-primary font-semibold tracking-wide">
                        {item.metric}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <CTABand headline={<><span className="md:whitespace-nowrap">See something <span className="text-primary">familiar?</span></span></>} subcopy="If these problems look like yours, the Operational X-Ray is where we start." wrapperClassName="max-w-3xl" secondaryCTA={{ label: "Take the Diagnostic", to: "/diagnostic" }} />
      </main>
      <Footer hideCTA />
    </div>
  );
};

export default Insights;
