import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    sector: "Professional Services Firm",
    problem: "A mid-sized professional services firm was spending significant time on client reporting. Teams manually pulled data from multiple systems, reformatted it, and produced reports that were often outdated by the time they reached clients.",
    whatChanged: "We mapped the full reporting workflow, identified three systems that could feed a single data pipeline, and built an automated reporting tool that pulls live data and generates formatted outputs.",
    stayedHuman: "Commentary, narrative context, and client-specific recommendations. The team now spends time on interpretation rather than data wrangling.",
    outcome: "Cycle time reduced materially, shifting effort from manual assembly to interpretation.",
  },
  {
    sector: "Media and Publishing Organisation",
    problem: "A content team was managing production across multiple channels with a patchwork of spreadsheets, email threads, and manual handoffs. Work was duplicated, deadlines were missed, and nobody had a clear view of what was in progress.",
    whatChanged: "We redesigned the production workflow from brief to publish, consolidated tracking into a single system, and automated status updates, assignments, and deadline alerts.",
    stayedHuman: "Editorial judgement, creative direction, and stakeholder sign-off. Automation handled the logistics, not the decisions.",
    outcome: "Fewer missed deadlines, clearer ownership, and less time spent on coordination.",
  },
  {
    sector: "Operations Team in Financial Services",
    problem: "An operations team was processing high volumes of structured data with extensive manual checks. Error rates were low but the cost in time was high, and the team had no capacity for process improvement.",
    whatChanged: "We built validation rules into the data pipeline, automated routine checks, and created exception-handling workflows that escalate only genuine anomalies.",
    stayedHuman: "Judgement calls on exceptions, relationship management, and process governance.",
    outcome: "Manual checking reduced substantially, with capacity redirected to improvement work.",
  },
];

const CaseStudies = () => {
  useEffect(() => {
    document.title = "Case Studies | Intelligent Transformation Studio";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6 animate-fade-in-up">
                What this looks like in practice
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Anonymised examples from recent engagements. Different sectors, similar patterns.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto space-y-8">
              {caseStudies.map((cs, i) => (
                <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <CaseStudyCard {...cs} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABand headline="See something similar to your situation?" />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
