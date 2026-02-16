import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import SEOHead from "@/components/SEOHead";
import GallagGlyph from "@/components/GallagGlyph";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Operational Engineering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Operational Engineering is the application of engineering principles to business operations to eliminate frictional loss and maximise systemic throughput. It focuses on identifying and removing 'Data Glue' – the manual re-keying, spreadsheet handoffs, and workarounds that erode margin – and replacing them with engineered, scalable systems.",
      },
    },
    {
      "@type": "Question",
      name: "How does Data Glue affect retail margins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Data Glue is the hidden manual friction where expensive talent operates as human middleware between disconnected systems. In multichannel retail environments, this manifests as manual data pulls, reformatting between tools, and spreadsheet-based coordination. Gallag Works has identified and engineered out over £1.5M in cumulative operational leakage caused by Data Glue for Tier-1 retailers, reclaiming over 1,200 hours of annual capacity.",
      },
    },
    {
      "@type": "Question",
      name: "What is an Operational X-Ray?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An Operational X-Ray is a 2–3 week fixed-scope diagnostic that uses a Pareto-driven framework to identify the 20% of Data Glue causing 80% of operational friction. It maps every manual touchpoint, quantifies the capacity loss, and produces a prioritised engineering roadmap with projected margin recovery figures.",
      },
    },
  ],
};

const InsightManifesto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Eradicating the Enterprise Data Glue"
        description="How Operational Engineering identifies and removes the manual friction costing Tier-1 retailers £1.5M+ annually. 1,200 hours reclaimed through systematic Data Glue eradication."
        path="/insights/eradicating-enterprise-data-glue"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <Navigation />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              {/* Brandmark + Datestamp */}
              <div className="flex items-center gap-4 mb-8 opacity-0 animate-fade-in">
                <GallagGlyph size={20} />
                <div className="flex gap-6">
                  <span className="font-mono text-xs text-muted-foreground tracking-widest">
                    [PUBLISHED: FEB 2026]
                  </span>
                  <span className="font-mono text-xs text-muted-foreground tracking-widest">
                    [PRINCIPAL: GALLAG, B]
                  </span>
                </div>
              </div>

              <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block opacity-0 animate-fade-in">
                [GW-INS-001]
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6 opacity-0 animate-fade-in-up">
                Eradicating the Enterprise Data Glue
              </h1>
              <p
                className="text-lg text-muted-foreground font-light leading-relaxed max-w-[720px] opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                A field manifesto on identifying and engineering out the manual friction that silently erodes enterprise margins.
              </p>
            </div>
          </div>
        </section>

        {/* Definition Call-out */}
        <section className="pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <div className="border border-primary p-8" style={{ backgroundColor: "hsl(var(--primary) / 0.05)" }}>
                <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-4">
                  [DEFINITION: OPERATIONAL ENGINEERING]
                </span>
                <p className="text-foreground font-semibold text-lg leading-relaxed">
                  The application of engineering principles to business operations to eliminate frictional loss and maximise systemic throughput.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Hook */}
        <section className="pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <div className="border-t border-border pt-12">
                <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-6">
                  [01: THE PROBLEM]
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6">
                  Your Most Expensive Employees Are Being Used as Human Middleware
                </h2>
                <div className="space-y-6 text-muted-foreground font-light leading-relaxed max-w-[720px]">
                  <p>
                    In every enterprise we've diagnosed, the same structural failure appears: skilled, expensive talent operating as human middleware between disconnected systems. This is Data Glue – the manual re-keying, spreadsheet handoffs, copy-pasting, and status-chasing that has no strategic value but consumes 20–40% of operational capacity.
                  </p>
                  <p>
                    Data Glue is not a technology problem. It's an architectural one. It emerges when organisations grow faster than their operational infrastructure, leaving teams to bridge the gaps with manual workarounds. These workarounds become normalised. They survive restructures. They outlast the people who created them. And they silently erode margin every single day.
                  </p>
                  <p>
                    The cost is not abstract. It is measurable in hours, headcount, error rates, and missed deadlines. But because it's distributed across dozens of micro-tasks, it never appears on a single line item. It's invisible until you engineer the visibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Evidence */}
        <section className="pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <div className="border-t border-border pt-12">
                <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-6">
                  [02: THE EVIDENCE]
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6">
                  Reclaiming 1,200 Hours of Annual Capacity
                </h2>
                <div className="space-y-6 text-muted-foreground font-light leading-relaxed max-w-[720px]">
                  <p>
                    During an Operational X-Ray for a Tier-1 Health &amp; Beauty Retailer, we mapped every manual touchpoint in their multichannel content orchestration pipeline. The diagnostic revealed a 25% capacity loss – over a quarter of the team's working hours consumed by Data Glue activities with zero strategic value.
                  </p>
                  <p>
                    High-volume client briefs – 500+ lines of product data – were arriving with inconsistent formatting and misspellings. Each occurrence triggered a 5-hour manual QC loop. Brief-to-studio handoffs carried 2-day lead times. The team had normalised the friction.
                  </p>
                  <p>
                    We engineered a custom ingestion pipeline using LLM-based brand correction, automated data standardisation, and one-click reformatting for production-ready outputs. The result:
                  </p>
                </div>

                {/* Result Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="border border-border p-6">
                    <p className="font-mono text-2xl font-extrabold text-primary mb-2">1,200hrs</p>
                    <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Reclaimed Annually</p>
                  </div>
                  <div className="border border-border p-6">
                    <p className="font-mono text-2xl font-extrabold text-primary mb-2">50%</p>
                    <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Lead Time Reduction</p>
                  </div>
                  <div className="border border-border p-6">
                    <p className="font-mono text-2xl font-extrabold text-primary mb-2">100%</p>
                    <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Data Integrity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Economic Result */}
        <section className="pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <div className="border-t border-border pt-12">
                <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-6">
                  [03: THE ECONOMIC RESULT]
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6">
                  Engineering Out £1.5M+ in Annual Operational Leakage
                </h2>
                <div className="space-y-6 text-muted-foreground font-light leading-relaxed max-w-[720px]">
                  <p>
                    Across engagements with Tier-1 retailers and FTSE 100 entities, we have identified and engineered out over £1.5M in cumulative annual operational leakage. This figure represents the fully-loaded cost of Data Glue: the salaries consumed by manual re-keying, the margin lost to delayed turnaround times, and the opportunity cost of strategic talent trapped in procedural work.
                  </p>
                  <p>
                    In one engagement with a national leisure group, an enterprise reporting pipeline that consumed 30 hours of manual Excel manipulation per month was reduced to a 10-minute automated workflow – a 98% reduction in processing time. 360 hours were reclaimed annually while removing 100% of data integrity risk.
                  </p>
                  <p>
                    The pattern is consistent: organisations don't have an AI problem. They have a structural workflow problem. The margin recovery is not achieved by adding more tools. It is achieved by engineering the Data Glue out of the system so your people return to making decisions, not managing tasks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Methodology */}
        <section className="pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <div className="border-t border-border pt-12">
                <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-6">
                  [04: THE METHODOLOGY]
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6">
                  The Operational X-Ray: Diagnosing Before Engineering
                </h2>
                <div className="space-y-6 text-muted-foreground font-light leading-relaxed max-w-[720px]">
                  <p>
                    Every engagement begins with the Operational X-Ray – a 2–3 week fixed-scope diagnostic that uses Pareto-driven analysis to identify the 20% of Data Glue causing 80% of operational friction. This is not a strategy document. It is a technical map of every manual touchpoint, with each one quantified by time cost, error rate, and margin impact.
                  </p>
                  <p>
                    The X-Ray produces a prioritised engineering roadmap. Each item has a projected ROI. Each solution is designed with human-in-the-loop safety rails – we automate the routine so your experts retain governance over the exceptions. This is not about replacing people. It is about returning them to the work that justifies their salary.
                  </p>
                  <p>
                    Every system is architected by the Principal personally. No junior handoffs. No 50-page strategy decks. Just engineered systems that ship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTABand headline="Ready to run the Operational X-Ray on your workflows?" />
      </main>
      <Footer hideCTA />
    </div>
  );
};

export default InsightManifesto;
