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
      "The pattern where skilled, expensive people spend their time as manual routers between disconnected systems — re-keying data, copying between spreadsheets, chasing status updates, and coordinating handoffs that should be automated. Human Middleware is the single largest source of hidden operational cost in most businesses. It emerges when organisations grow faster than their systems can keep up, and teams bridge the gaps with manual workarounds that become normalised and invisible.",
  },
  {
    id: "operational-x-ray",
    term: "Operational X-Ray",
    definition:
      "A 2–3 week fixed-scope diagnostic that identifies the small number of manual processes causing the majority of capacity loss. The X-Ray maps every manual touchpoint, quantifies the cost in time and errors, and produces a prioritised transformation roadmap with projected ROI. This is the starting point for every Gallag Works engagement.",
  },
  {
    id: "ai-transformation",
    term: "AI Transformation",
    definition:
      "The application of AI to business operations to eliminate manual friction and free capacity for work that actually matters. Unlike traditional consultancy, AI transformation means diagnosing the problem and building the solution — delivering production systems that remove Human Middleware permanently.",
  },
  {
    id: "ai-readiness",
    term: "AI Readiness",
    definition:
      "The degree to which an organisation's data, processes, governance, skills, tooling, and strategic clarity can support the adoption of AI technologies. Most organisations overestimate their readiness because they assess it against the AI tool's requirements rather than the operational reality of their data and workflows. The AI Readiness Diagnostic on gallag.ai provides a free, structured assessment across six dimensions.",
  },
  {
    id: "fractional-ai-leadership",
    term: "Fractional AI Leadership",
    definition:
      "A model where an experienced AI leader embeds in your business part-time — typically two to three days per week — to set strategy, build tools, stand up governance, and drive adoption. It gives you Head of AI capability without the overhead or commitment of a full-time senior hire. The fractional model works best for businesses that know they need to move on AI but aren't yet at the scale where a permanent role makes financial sense.",
  },
  {
    id: "exception-routing",
    term: "Exception Routing",
    definition:
      "An automated triage pattern that surfaces only the genuine anomalies requiring human judgement, filtering out routine items that can be validated automatically. Exception routing ensures skilled operators spend time on decisions, not data checking.",
  },
  {
    id: "human-in-the-loop",
    term: "Human-in-the-Loop",
    definition:
      "A design pattern where automated systems handle routine processing but route exceptions, ambiguities, and high-stakes decisions to a human for review. Exception routing is Gallag Works' implementation of this pattern. The key design challenge is not building the automation but defining the threshold: what genuinely needs human judgement versus what is being routed to a human out of organisational anxiety.",
  },
  {
    id: "invisible-admin",
    term: "Invisible Admin",
    definition:
      "The accumulation of small manual tasks — re-keying data, reformatting documents, chasing approvals, updating trackers — that individually take minutes but collectively consume hours every week. Invisible admin is rarely captured on timesheets because each task feels too small to log. It's the raw material of Human Middleware: the thousands of micro-tasks that nobody questions because they've always been done that way.",
  },
  {
    id: "adoption-rate",
    term: "Adoption Rate",
    definition:
      "The percentage of intended users who are actively using a new system or workflow. Adoption rate is the single most important metric for any transformation project. A tool with 30% adoption has failed regardless of how well it was built. Gallag Works measures every engagement by adoption, not by delivery date.",
  },
  {
    id: "governance-framework",
    term: "Governance Framework",
    definition:
      "The policies, processes, and oversight structures that control how AI is used within an organisation. A governance framework covers acceptable use, data handling, risk management, audit trails, and decision-making authority. Without one, AI adoption either stalls because nobody knows what's allowed, or runs unchecked because nobody's asked the question.",
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
    id: "proof-of-concept-vs-production",
    term: "Proof of Concept vs Production System",
    definition:
      "A proof of concept demonstrates that something is technically possible. A production system is something people actually use every day. The gap between the two is where most AI projects die. Building a demo is easy. Building something that handles edge cases, integrates with existing systems, survives contact with real users, and runs reliably without the person who built it — that's the hard part. Gallag Works builds for production, not for demos.",
  },
  {
    id: "change-management",
    term: "Change Management",
    definition:
      "The process of helping people actually adopt new ways of working. Most transformation failures are not technology failures — they are change management failures. People resist new systems when they don't understand the reason for the change, weren't involved in the design, or don't trust that the new way will be better than what they already know. Effective change management starts before the tool is built, not after.",
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
    id: "llm",
    term: "Large Language Model (LLM)",
    definition:
      "A type of AI system trained on large volumes of text data that can generate, summarise, classify, and transform written content. LLMs like GPT and Claude are the underlying technology behind many of the tools Gallag Works builds — but the model is never the hard part. The hard part is designing the workflow around it, feeding it clean data, handling the cases where it gets things wrong, and making the output useful in context.",
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
        description="Definitions of key AI Transformation concepts: Human Middleware, Operational X-Ray, Exception Routing, and more."
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
        {/* Dark header */}
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
                Key terminology used across Gallag Works engagements and case studies.
              </p>
            </div>
          </div>
        </section>

        {/* Light glossary entries */}
        <section className="pb-20 bg-warm-stone pt-8">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              {glossaryTerms.map((t, i) => (
                <div
                  key={t.id}
                  id={t.id}
                  className={`scroll-mt-24 py-8 ${
                    i < glossaryTerms.length - 1 ? "border-b border-black/[0.08]" : ""
                  }`}
                >
                  <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-3">
                    [{t.term.toUpperCase()}]
                  </span>
                  <h2 className="text-xl font-semibold mb-4" style={{ color: '#111113', fontFamily: 'Sora, sans-serif' }}>
                    {t.term}
                  </h2>
                  <p className="font-light leading-relaxed max-w-[720px]" style={{ color: '#333' }}>
                    {t.definition}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Glossary;
