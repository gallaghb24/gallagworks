import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import SEOHead from "@/components/SEOHead";

const insights = [
  {
    ref: "GW-INS-001",
    topic: "Eradicating the Enterprise Data Glue",
    metric: "1,200hrs+ Reclaimed",
    status: "VERIFIED",
    slug: "eradicating-enterprise-data-glue",
  },
];

const Insights = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Insights"
        description="Operational engineering insights and manifestos. Technical analysis of enterprise Data Glue, margin recovery, and workflow transformation from Gallag Works."
        path="/insights"
      />
      <Navigation />
      <main>
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block opacity-0 animate-fade-in">
                [INSIGHTS]
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6 opacity-0 animate-fade-in-up">
                Operational Engineering Insights
              </h1>
              <p
                className="text-lg text-muted-foreground font-light leading-relaxed max-w-[720px] opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Technical analysis and field-tested methodology from the Principal. Each insight is drawn from live enterprise engagements.
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
                <div className="grid grid-cols-12 border-b border-foreground px-6 py-4">
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
                    className="grid grid-cols-12 px-6 py-5 border-b border-border last:border-b-0 hover:bg-muted/5 transition-colors group"
                  >
                    <span className="col-span-2 font-mono text-sm text-primary font-semibold tracking-wider">
                      {item.ref}
                    </span>
                    <span className="col-span-5 text-foreground font-medium group-hover:text-primary transition-colors">
                      {item.topic}
                    </span>
                    <span className="col-span-3 font-mono text-sm text-muted-foreground">
                      {item.metric}
                    </span>
                    <span className="col-span-2 font-mono text-xs text-primary uppercase tracking-widest text-right">
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
