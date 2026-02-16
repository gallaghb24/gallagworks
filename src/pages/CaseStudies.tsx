import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

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
  {
    projectId: "GW-004",
    title: "Multichannel Content Orchestration",
    sector: "Retail & Commerce",
    friction: [
      "High-volume client briefs (500+ lines) arriving with inconsistent data and misspellings",
      "Manual data cleansing forcing 5-hour QC loops per occurrence",
      "2-day lead times for brief-to-studio handoffs",
    ],
    engineering: [
      "Custom RPA ingestion engine using LLM-based brand correction",
      "Automated data standardisation and field mapping",
      "One-click reformatting for instant production-ready outputs",
    ],
    humanLayer: "By engineering out the 'Data Glue' at the briefing stage, the account team was freed from copy-pasting to focus on creative strategy and client relationship growth.",
    result: "1,200 hours reclaimed annually. Lead times slashed by 50% from 2 days to <24 hours.",
  },
  {
    projectId: "GW-005",
    title: "Enterprise Reporting Engine",
    sector: "Media / Entertainment",
    friction: [
      "Fragmented data sources requiring 30 hours of manual Excel manipulation per month",
      "High risk of human error in manual re-keying for mission-critical pricing reports",
      "Heavy 'Status Chasing' overhead between account and finance teams",
    ],
    engineering: [
      "Architecture of a custom drag-and-drop web application for automated mapping",
      "Automated column/order mapping for instant, fixed-format reporting",
      "Migration from manual Excel work to a 10-minute automated pipeline",
    ],
    humanLayer: "The system removed the 'last-minute rush' before reporting deadlines, allowing the team to enter status calls fully prepped with 100% accurate data.",
    result: "98% reduction in processing time. 360 hours reclaimed annually while removing 100% of data integrity risk.",
  },
  {
    projectId: "GW-006",
    title: "High-Volume Allocation Logistics",
    sector: "Retail & Commerce",
    friction: [
      "Single campaigns split across 30+ project owners, each with siloed store allocations",
      "10 hours per month spent manually merging dozens of Excel files into a 'Master List'",
      "Inability to react to client changes without repeating hours of manual rework",
    ],
    engineering: [
      "Deployment of an Intelligent RPA app for bulk allocation merging",
      "Instant duplicate removal and automated totals validation",
      "Auto-formatting for immediate, client-ready approval exports",
    ],
    humanLayer: "The team can now react to client allocation changes instantly, re-running the entire consolidation in minutes rather than being stuck in 'Data Glue' for a full day.",
    result: "Manual workload reduced by 97%. Task duration cut from 10 hours to 15 minutes.",
  },
];

const CaseStudies = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Project Schematics"
        description="Technical case studies in operational engineering. Proven results: 98% manual effort reduction, 1,200 hours reclaimed annually, £1.5M+ leakage recovery for enterprise clients."
        path="/case-studies"
      />
      <Navigation />
      <main>
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block opacity-0 animate-fade-in">
                [PROJECT SCHEMATICS]
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up">
                Project Schematics
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Technical summaries from recent engagements. Different sectors, same engineering approach.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl space-y-32">
              {caseStudies.map((cs, i) => (
                <CaseStudyCard key={i} {...cs} />
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <div className="border border-border p-6">
                <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                  [NOTICE: CLIENT PRIVACY] To respect enterprise non-disclosure agreements, specific brand names have been abstracted. Verification of outcomes and deeper operational context can be provided during a formal consultation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTABand headline="See something similar to your situation?" />

      </main>
      <Footer hideCTA />
    </div>
  );
};

export default CaseStudies;
