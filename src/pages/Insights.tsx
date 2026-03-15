import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import SEOHead from "@/components/SEOHead";

const insights = [
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
  },
  {
    ref: "GW-LOG-201",
    topic: "POS Job Workflow Automation",
    metric: "70% Cycle Reduction",
    status: "VERIFIED",
    slug: "pos-job-workflow",
    type: "SCHEMATIC",
    date: "MAY 2025",
  },
  {
    ref: "GW-LOG-202",
    topic: "Costing Process Re-engineering",
    metric: "85% Fewer Missed Deadlines",
    status: "VERIFIED",
    slug: "costing-process",
    type: "SCHEMATIC",
    date: "JUL 2025",
  },
  {
    ref: "GW-LOG-203",
    topic: "Validation Pipeline Automation",
    metric: "60% Manual Checking Removed",
    status: "VERIFIED",
    slug: "validation-pipeline",
    type: "SCHEMATIC",
    date: "SEP 2025",
  },
  {
    ref: "GW-LOG-204",
    topic: "Multichannel Content Orchestration",
    metric: "1,200hrs Reclaimed Annually",
    status: "VERIFIED",
    slug: "multichannel-content-orchestration",
    type: "SCHEMATIC",
    date: "NOV 2025",
  },
  {
    ref: "GW-LOG-205",
    topic: "Enterprise Reporting Automation",
    metric: "98% Processing Time Cut",
    status: "VERIFIED",
    slug: "enterprise-reporting-automation",
    type: "SCHEMATIC",
    date: "JAN 2026",
  },
  {
    ref: "GW-LOG-206",
    topic: "High-Volume Allocation Logistics",
    metric: "97% Workload Reduction",
    status: "VERIFIED",
    slug: "high-volume-allocation-logistics",
    type: "SCHEMATIC",
    date: "MAR 2026",
  },
];

const Insights = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Insights & Project Schematics"
        description="Operational engineering insights, manifestos, and technical project schematics. Proven results: 98% manual effort reduction, 1,200 hours reclaimed annually for Tier-1 retailers."
        path="/insights"
      />
      <Navigation />
      <main>
        <section className="pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block opacity-0 animate-fade-in">
                [KNOWLEDGE HUB]
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6 opacity-0 animate-fade-in-up">
                Insights &amp; Project Schematics.
              </h1>
              <p
                className="text-lg text-muted-foreground font-light leading-relaxed max-w-[720px] opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Each entry below is a field-documented engagement led by the Principal. The GW-LOG series covers the technical methodology, friction diagnosis, and engineering outcomes from real operational transformations across retail, financial services, professional services, and media.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              {/* Technical Index Table */}
              <div className="border border-border">
                {/* Header Row */}
                <div className="hidden md:grid border-b border-foreground px-6 py-4" style={{ gridTemplateColumns: '12% 38% 24% 14% 12%' }}>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest leading-relaxed">
                    [REF]
                  </span>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest leading-relaxed">
                    [TOPIC]
                  </span>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest leading-relaxed">
                    [PRIMARY METRIC]
                  </span>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest leading-relaxed">
                    [DATE]
                  </span>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest leading-relaxed text-right">
                    [STATUS]
                  </span>
                </div>

                {/* Data Rows */}
                {insights.map((item) => (
                  <Link
                    key={item.ref}
                    to={item.type === "TOOL" ? `/${item.slug}` : `/insights/${item.slug}`}
                    className="block md:grid px-5 pt-5 pb-4 md:px-6 md:pt-6 md:pb-5 border-b border-border last:border-b-0 hover:bg-muted/5 transition-colors group"
                    style={{ gridTemplateColumns: '12% 38% 24% 14% 12%' }}
                  >
                    <span className="font-mono text-sm text-primary font-semibold tracking-wider leading-relaxed block mb-1 md:mb-0">
                      {item.ref}
                    </span>
                    <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors leading-relaxed block mb-1 md:mb-0">
                      {item.topic}
                    </span>
                    <span className="font-mono text-sm text-muted-foreground leading-relaxed block mb-1 md:mb-0">
                      {item.metric}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground leading-relaxed block mb-1 md:mb-0">
                      {item.date || "—"}
                    </span>
                    <span className={`font-mono text-xs uppercase tracking-widest leading-relaxed block md:text-right ${item.type === "TOOL" ? "text-green-500" : "text-primary"}`}>
                      [{item.status}]
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTABand headline={<><span className="md:whitespace-nowrap">Turn field-tested logic into <span className="text-primary">measurable throughput.</span></span></>} subcopy="Apply these operational schematics to your environment with a targeted diagnostic." wrapperClassName="max-w-3xl" secondaryCTA={{ label: "Take the Diagnostic", to: "/diagnostic" }} />
      </main>
      <Footer hideCTA />
    </div>
  );
};

export default Insights;
