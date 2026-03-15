import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const glossaryTerms = [
  {
    id: "human-middleware",
    term: "Human Middleware",
    definition:
      "Skilled, expensive talent operating as manual connectors between disconnected systems — performing data transfers, format conversions, status updates, and coordination that should be handled by engineered pipelines. Human Middleware is the single largest source of hidden operational cost in enterprise environments. It emerges when organisations grow faster than their operational infrastructure, leaving teams to bridge system gaps with manual workarounds that become normalised and invisible.",
  },
  {
    id: "operational-x-ray",
    term: "Operational X-Ray",
    definition:
      "A 2–3 week fixed-scope diagnostic that uses Pareto-driven analysis to identify the 20% of Human Middleware causing 80% of operational friction. The X-Ray maps every manual touchpoint, quantifies capacity loss by time cost and error rate, and produces a prioritised transformation roadmap with projected margin recovery figures.",
  },
  {
    id: "ai-transformation",
    term: "AI Transformation",
    definition:
      "The application of AI and engineering principles to business operations to eliminate frictional loss and maximise systemic throughput. Unlike consultancy, which diagnoses, AI Transformation diagnoses and builds – delivering production-ready systems that remove Human Middleware permanently.",
  },
  {
    id: "exception-routing",
    term: "Exception Routing",
    definition:
      "An automated triage pattern that surfaces only the genuine anomalies requiring human judgement, filtering out routine items that can be validated automatically. Exception routing ensures skilled operators spend time on decisions, not data checking.",
  },
  {
    id: "margin-recovery",
    term: "Margin Recovery",
    definition:
      "The measurable financial return achieved by eliminating Human Middleware. Margin recovery is quantified in reclaimed hours, reduced error rates, and eliminated coordination overhead – the fully-loaded cost of manual friction that silently erodes enterprise profitability.",
  },
  {
    id: "data-glue",
    term: "Data Glue",
    definition:
      "A legacy term for what Gallag Works now calls Human Middleware. Refers to the manual re-keying, spreadsheet handoffs, copy-pasting, and status-chasing that has no strategic value but consumes 20–40% of operational capacity.",
  },
  {
    id: "systemic-leakage",
    term: "Systemic Leakage",
    definition:
      "The incremental, often silent loss of operational margin due to unoptimised workflows, redundant communications, and uncaptured data fidelity. Leakage is the cumulative result of Human Middleware that has been left untreated for multiple fiscal cycles.",
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
      "Automated validation checkpoints within an operational pipeline that programmatically determine if data is 'clean' enough to proceed or requires exception routing. Logic Gates replace manual 'quality checking' loops with instant, error-free verification.",
  },
  {
    id: "process-automation",
    term: "Process Automation",
    definition:
      "The use of technology to execute recurring tasks or workflows that previously required manual intervention. Effective process automation requires clean, structured inputs and well-understood decision logic. Automating a process that relies on tacit knowledge or inconsistent data will produce unreliable outputs at speed. The Operational X-Ray identifies which processes are genuinely automatable and which need structural work first.",
  },
  {
    id: "workflow-optimisation",
    term: "Workflow Optimisation",
    definition:
      "The systematic analysis and redesign of how work moves through an organisation. True optimisation is not about making people faster at the same tasks. It is about eliminating tasks that should not exist, clarifying handoffs, and removing the manual coordination overhead that accumulates as organisations grow. Most operational friction is invisible until it is mapped.",
  },
  {
    id: "operational-efficiency",
    term: "Operational Efficiency",
    definition:
      "The ratio of useful output to total input in a business process. In practice, most organisations measure efficiency at the task level while ignoring the systemic friction between tasks. The gap between departmental efficiency metrics and actual end-to-end throughput is where Human Middleware hides. Genuine operational efficiency requires measuring the whole workflow, not just the parts that are easy to measure.",
  },
  {
    id: "ai-readiness",
    term: "AI Readiness",
    definition:
      "The degree to which an organisation's data, processes, governance, skills, tooling, and strategic clarity can support the adoption of AI technologies. Most organisations overestimate their readiness because they assess it against the AI tool's requirements rather than the operational reality of their data and workflows. The AI Readiness Diagnostic provides a structured assessment across six dimensions.",
  },
  {
    id: "digital-transformation",
    term: "Digital Transformation",
    definition:
      "A term that has been stretched to mean everything and therefore means nothing. At Gallag Works, transformation means one thing: changing how work actually gets done, not how it gets reported. If the spreadsheet is still being emailed around after the transformation, nothing has transformed. Real transformation is structural, measurable, and usually less glamorous than the vendor pitch suggests.",
  },
  {
    id: "rpa",
    term: "Robotic Process Automation (RPA)",
    definition:
      "Software that mimics human actions within digital systems to automate repetitive tasks. RPA is effective for high-volume, rule-based processes with structured inputs. It is not effective when the underlying process depends on human interpretation, inconsistent data formats, or tacit knowledge. Many RPA implementations fail not because the technology is wrong but because the process was not engineered before the automation was applied.",
  },
  {
    id: "human-in-the-loop",
    term: "Human-in-the-Loop",
    definition:
      "A design pattern where automated systems handle routine processing but route exceptions, ambiguities, and high-stakes decisions to a human for review. Exception routing is Gallag Works' implementation of this pattern. The key design challenge is not building the automation but defining the threshold: what genuinely needs human judgement versus what is being routed to a human out of organisational anxiety.",
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
      name: "Gallag Works AI Transformation Glossary",
      url: "https://gallag.works/glossary",
    },
  }));

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Glossary — AI Transformation Terms"
        description="Definitions of key AI Transformation concepts: Human Middleware, Operational X-Ray, Exception Routing, Margin Recovery, and more."
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
                 AI Transformation Glossary.
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
