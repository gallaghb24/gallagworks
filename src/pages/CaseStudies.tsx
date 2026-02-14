import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const caseStudies = [
  {
    sector: "Professional Services Firm",
    problem: "A mid-sized professional services firm was spending significant time on client reporting. Teams manually pulled data from multiple systems, reformatted it, and produced reports that were often outdated by the time they reached clients.",
    whatChanged: "We mapped the full reporting workflow, identified three systems that could feed a single data pipeline, and built an automated reporting tool that pulls live data and generates formatted outputs.",
    stayedHuman: "Commentary, narrative context, and client-specific recommendations. The team now spends time on interpretation rather than data wrangling.",
    outcome: "Reporting cycle time cut by 70%, freeing ~15 hours per week for the team to focus on analysis and client advisory.",
  },
  {
    sector: "Media and Publishing Organisation",
    problem: "A content team was managing production across multiple channels with a patchwork of spreadsheets, email threads, and manual handoffs. Work was duplicated, deadlines were missed, and nobody had a clear view of what was in progress.",
    whatChanged: "We redesigned the production workflow from brief to publish, consolidated tracking into a single system, and automated status updates, assignments, and deadline alerts.",
    stayedHuman: "Editorial judgement, creative direction, and stakeholder sign-off. Automation handled the logistics, not the decisions.",
    outcome: "Missed deadlines down 85%. Coordination overhead reduced by ~10 hours per week across the team.",
  },
  {
    sector: "Operations Team in Financial Services",
    problem: "An operations team was processing high volumes of structured data with extensive manual checks. Error rates were low but the cost in time was high, and the team had no capacity for process improvement.",
    whatChanged: "We built validation rules into the data pipeline, automated routine checks, and created exception-handling workflows that escalate only genuine anomalies.",
    stayedHuman: "Judgement calls on exceptions, relationship management, and process governance.",
    outcome: "Manual checking reduced by 60%, reclaiming ~20 hours per week and enabling the team to launch two process improvement initiatives within the first quarter.",
  },
];

const CaseStudies = () => {
  const { ref, isVisible } = useScrollAnimation();

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
              <span className="block text-primary text-xs font-semibold uppercase tracking-[0.15em] mb-4 animate-fade-in-up">
                CASE STUDIES
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6 animate-fade-in-up">
                What this looks like in practice
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Anonymised examples from recent engagements. Different sectors, similar patterns.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20" ref={ref}>
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto space-y-8">
              {caseStudies.map((cs, i) => (
                <div
                  key={i}
                  className={`scroll-fade-in ${isVisible ? "visible" : ""}`}
                  style={{ transitionDelay: `${i * 0.12}s` }}
                >
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
