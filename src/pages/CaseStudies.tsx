import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const caseStudies = [
  {
    projectId: "GW-001",
    title: "POS Job Workflow",
    sector: "Professional Services",
    friction: [
      "Manual data pulls from multiple systems",
      "Reformatting and re-keying between tools",
      "Reports outdated by the time they reached clients",
    ],
    engineering: [
      "Single data pipeline replacing manual pulls",
      "Automated report generation with formatted outputs",
      "Live data feeds replacing static snapshots",
    ],
    humanLayer: "Commentary, narrative context, and client-specific recommendations. The team now spends time on interpretation rather than data wrangling.",
    result: "Reporting cycle cut 70%. 15h/week reclaimed for analysis and client advisory.",
  },
  {
    projectId: "GW-002",
    title: "Costing Process",
    sector: "Media / Publishing",
    friction: [
      "Spreadsheet handoffs between teams",
      "Email-based coordination and status chasing",
      "Duplicated tracking across multiple sheets",
      "Missed deadlines from unclear ownership",
    ],
    engineering: [
      "Consolidated production system replacing spreadsheets",
      "Automated status updates and assignment routing",
      "Deadline alerts and escalation workflows",
    ],
    humanLayer: "Editorial judgement, creative direction, and stakeholder sign-off. Automation handled the logistics, not the decisions.",
    result: "Missed deadlines down 85%. 10h/week coordination overhead removed.",
  },
  {
    projectId: "GW-003",
    title: "Validation Pipeline",
    sector: "Financial Services",
    friction: [
      "High-volume manual checks on structured data",
      "No capacity for process improvement",
      "Error rates low but time cost unsustainable",
    ],
    engineering: [
      "Validation rules built into the data pipeline",
      "Automated routine checks with exception routing",
      "Decision Inbox for genuine anomalies only",
    ],
    humanLayer: "Judgement calls on exceptions, relationship management, and process governance.",
    result: "Manual checking reduced 60%. 20h/week reclaimed. Two process improvement initiatives launched in first quarter.",
  },
];

const CaseStudies = () => {
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    document.title = "Project Schematics | Gallag Works";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block animate-fade-in">
                [PROJECT SCHEMATICS]
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
                Project Schematics
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Technical summaries from recent engagements. Different sectors, same engineering approach.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20" ref={ref}>
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl space-y-8">
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
