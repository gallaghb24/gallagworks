import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const glossaryTerms = [
  {
    id: "data-glue",
    term: "Data Glue",
    definition:
      "The manual re-keying, spreadsheet handoffs, copy-pasting, and status-chasing that has no strategic value but consumes 20–40% of operational capacity. Data Glue emerges when organisations grow faster than their operational infrastructure, leaving teams to bridge system gaps with manual workarounds that become normalised and invisible.",
  },
  {
    id: "operational-x-ray",
    term: "Operational X-Ray",
    definition:
      "A 2–3 week fixed-scope diagnostic that uses Pareto-driven analysis to identify the 20% of Data Glue causing 80% of operational friction. The X-Ray maps every manual touchpoint, quantifies capacity loss by time cost and error rate, and produces a prioritised engineering roadmap with projected margin recovery figures.",
  },
  {
    id: "operational-engineering",
    term: "Operational Engineering",
    definition:
      "The application of engineering principles to business operations to eliminate frictional loss and maximise systemic throughput. Unlike consultancy, which diagnoses, Operational Engineering diagnoses and builds – delivering production-ready systems that remove manual friction permanently.",
  },
  {
    id: "decision-inbox",
    term: "Decision Inbox",
    definition:
      "An exception-routing interface that surfaces only the genuine anomalies requiring human judgement, filtering out routine items that can be validated automatically. The Decision Inbox ensures skilled operators spend time on decisions, not data checking.",
  },
  {
    id: "margin-recovery",
    term: "Margin Recovery",
    definition:
      "The measurable financial return achieved by engineering out Data Glue. Margin recovery is quantified in reclaimed hours, reduced error rates, and eliminated coordination overhead – the fully-loaded cost of manual friction that silently erodes enterprise profitability.",
  },
  {
    id: "human-middleware",
    term: "Human Middleware",
    definition:
      "Skilled, expensive talent operating as manual connectors between disconnected systems – performing data transfers, format conversions, and status updates that should be handled by engineered pipelines. Human Middleware is the most visible symptom of Data Glue in an organisation.",
  },
  {
    id: "systemic-leakage",
    term: "Systemic Leakage",
    definition:
      "The incremental, often silent loss of operational margin due to unoptimised workflows, redundant communications, and uncaptured data fidelity. Leakage is the cumulative result of Data Glue that has been left untreated for multiple fiscal cycles.",
  },
  {
    id: "capacity-reclamation",
    term: "Capacity Reclamation",
    definition:
      "The measurable conversion of 'shadow work' into strategic bandwidth. Reclamation is not about reducing headcount, but about redirecting the 20–40% of time currently lost to manual friction back into high-value, revenue-generating activities.",
  },
  {
    id: "logic-gates",
    term: "Logic Gates",
    definition:
      "Automated validation checkpoints within an operational pipeline that programmatically determine if data is 'clean' enough to proceed or requires routing to a Decision Inbox. Logic Gates replace manual 'quality checking' loops with instant, error-free verification.",
  },
];

const Glossary = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const definedTermSchemas = glossaryTerms.map((t) => ({
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: t.term,
    description: t.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Gallag Works Operational Engineering Glossary",
      url: "https://gallag.works/glossary",
    },
  }));

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Glossary — Operational Engineering Terms"
        description="Definitions of key Operational Engineering concepts: Data Glue, Operational X-Ray, Decision Inbox, Margin Recovery, and Human Middleware."
        path="/glossary"
      />
      <Helmet>
        {definedTermSchemas.map((schema, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>
      <Navigation />
      <main>
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block opacity-0 animate-fade-in">
                [GLOSSARY]
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6 opacity-0 animate-fade-in-up">
                Operational Engineering Glossary
              </h1>
              <p
                className="text-lg text-muted-foreground font-light leading-relaxed max-w-[720px] opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Key terminology used across Gallag Works engagements and technical schematics.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <div className="border border-border">
                {glossaryTerms.map((t, i) => (
                  <div
                    key={t.id}
                    id={t.id}
                    className={`scroll-mt-24 px-8 py-8 ${
                      i < glossaryTerms.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-3">
                      [{t.term.toUpperCase().replace(/ /g, " ")}]
                    </span>
                    <h2 className="text-xl font-extrabold text-foreground mb-4">
                      {t.term}
                    </h2>
                    <p className="text-muted-foreground font-light leading-relaxed max-w-[720px]">
                      {t.definition}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Glossary;
