import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import SEOHead from "@/components/SEOHead";

const insights = [
  {
    ref: "GW-LOG-101",
    topic: "Eradicating the Enterprise Data Glue",
    metric: "1,200hrs+ Reclaimed",
    status: "VERIFIED",
    slug: "eradicating-enterprise-data-glue",
    type: "MANIFESTO",
  },
  {
    ref: "GW-LOG-201",
    topic: "POS Job Workflow Automation",
    metric: "70% Cycle Reduction",
    status: "VERIFIED",
    slug: "pos-job-workflow",
    type: "SCHEMATIC",
  },
  {
    ref: "GW-LOG-202",
    topic: "Costing Process Re-engineering",
    metric: "85% Fewer Missed Deadlines",
    status: "VERIFIED",
    slug: "costing-process",
    type: "SCHEMATIC",
  },
  {
    ref: "GW-LOG-203",
    topic: "Validation Pipeline Automation",
    metric: "60% Manual Checking Removed",
    status: "VERIFIED",
    slug: "validation-pipeline",
    type: "SCHEMATIC",
  },
  {
    ref: "GW-LOG-204",
    topic: "Multichannel Content Orchestration",
    metric: "1,200hrs Reclaimed Annually",
    status: "VERIFIED",
    slug: "multichannel-content-orchestration",
    type: "SCHEMATIC",
  },
  {
    ref: "GW-LOG-205",
    topic: "Enterprise Reporting Automation",
    metric: "98% Processing Time Cut",
    status: "VERIFIED",
    slug: "enterprise-reporting-automation",
    type: "SCHEMATIC",
  },
  {
    ref: "GW-LOG-206",
    topic: "High-Volume Allocation Logistics",
    metric: "97% Workload Reduction",
    status: "VERIFIED",
    slug: "high-volume-allocation-logistics",
    type: "SCHEMATIC",
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
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block opacity-0 animate-fade-in">
                [KNOWLEDGE HUB]
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6 opacity-0 animate-fade-in-up">
                Insights &amp; Project Schematics
              </h1>
              <p
                className="text-lg text-muted-foreground font-light leading-relaxed max-w-[720px] opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Technical analysis, field-tested methodology, and verified project outcomes from the Principal. Each entry is drawn from live enterprise engagements.
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
                <div className="hidden md:grid grid-cols-12 border-b border-foreground px-6 py-4">
                  <span className="col-span-2 font-mono text-xs text-muted-foreground uppercase tracking-widest">
                    [REF]
                  </span>
                  <span className="col-span-5 font-mono text-xs text-muted-foreground uppercase tracking-widest">
                    [TOPIC]
                  </span>
                  <span className="col-span-3 font-mono text-xs text-muted-foreground uppercase tracking-widest">
                    [PRIMARY METRIC]
                  </span>
                  <span className="col-span-2 font-mono text-xs text-muted-foreground uppercase tracking-widest text-right">
                    [STATUS]
                  </span>
                </div>

                {/* Data Rows */}
                {insights.map((item) => (
                  <Link
                    key={item.ref}
                    to={`/insights/${item.slug}`}
                    className="grid grid-cols-1 md:grid-cols-12 px-6 py-5 border-b border-border last:border-b-0 hover:bg-muted/5 transition-colors group"
                  >
                    <div className="md:col-span-2 flex items-center gap-2 mb-2 md:mb-0">
                      <span className="font-mono text-sm text-primary font-semibold tracking-wider">
                        {item.ref}
                      </span>
                    </div>
                    <span className="md:col-span-5 text-foreground font-medium group-hover:text-primary transition-colors mb-1 md:mb-0">
                      {item.topic}
                    </span>
                    <span className="md:col-span-3 font-mono text-sm text-muted-foreground">
                      {item.metric}
                    </span>
                    <span className="md:col-span-2 font-mono text-xs text-primary uppercase tracking-widest md:text-right">
                      [{item.status}]
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTABand headline="Ready to quantify the friction in your operation?" />
      </main>
      <Footer hideCTA />
    </div>
  );
};

export default Insights;
