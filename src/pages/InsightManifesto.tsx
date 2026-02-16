import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import SEOHead from "@/components/SEOHead";
import GallagGlyph from "@/components/GallagGlyph";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// ── Unified data map ──────────────────────────────────────────────

interface ManifestoSection {
  label: string;
  title: string;
  paragraphs: string[];
  metrics?: { value: string; label: string }[];
}

interface TechnicalSchematic {
  ref: string;
  sector: string;
  friction: string[];
  engineering: string[];
  humanLayer: string;
  result: string;
}

interface InsightEntry {
  slug: string;
  ref: string;
  title: string;
  subtitle: string;
  date: string;
  seoDescription: string;
  manifesto: ManifestoSection[];
  schematic?: TechnicalSchematic;
  faqSchema?: object;
}

const insightData: InsightEntry[] = [
  {
    slug: "eradicating-enterprise-data-glue",
    ref: "GW-INS-001",
    title: "Eradicating the Enterprise Data Glue",
    subtitle: "A field manifesto on identifying and engineering out the manual friction that silently erodes enterprise margins.",
    date: "FEB 2026",
    seoDescription: "How Operational Engineering identifies and removes the manual friction costing Tier-1 retailers £1.5M+ annually. 1,200 hours reclaimed through systematic Data Glue eradication.",
    manifesto: [
      {
        label: "01: THE PROBLEM",
        title: "Your Most Expensive Employees Are Being Used as Human Middleware",
        paragraphs: [
          "In every enterprise we've diagnosed, the same structural failure appears: skilled, expensive talent operating as human middleware between disconnected systems. This is Data Glue – the manual re-keying, spreadsheet handoffs, copy-pasting, and status-chasing that has no strategic value but consumes 20–40% of operational capacity.",
          "Data Glue is not a technology problem. It's an architectural one. It emerges when organisations grow faster than their operational infrastructure, leaving teams to bridge the gaps with manual workarounds. These workarounds become normalised. They survive restructures. They outlast the people who created them. And they silently erode margin every single day.",
          "The cost is not abstract. It is measurable in hours, headcount, error rates, and missed deadlines. But because it's distributed across dozens of micro-tasks, it never appears on a single line item. It's invisible until you engineer the visibility.",
        ],
      },
      {
        label: "02: THE EVIDENCE",
        title: "Reclaiming 1,200 Hours of Annual Capacity",
        paragraphs: [
          "During an Operational X-Ray for a Tier-1 Health & Beauty Retailer, we mapped every manual touchpoint in their multichannel content orchestration pipeline. The diagnostic revealed a 25% capacity loss – over a quarter of the team's working hours consumed by Data Glue activities with zero strategic value.",
          "High-volume client briefs – 500+ lines of product data – were arriving with inconsistent formatting and misspellings. Each occurrence triggered a 5-hour manual QC loop. Brief-to-studio handoffs carried 2-day lead times. The team had normalised the friction.",
          "We engineered a custom ingestion pipeline using LLM-based brand correction, automated data standardisation, and one-click reformatting for production-ready outputs. The result:",
        ],
        metrics: [
          { value: "1,200hrs", label: "Reclaimed Annually" },
          { value: "50%", label: "Lead Time Reduction" },
          { value: "100%", label: "Data Integrity" },
        ],
      },
      {
        label: "03: THE ECONOMIC RESULT",
        title: "Engineering Out £1.5M+ in Annual Operational Leakage",
        paragraphs: [
          "Across engagements with Tier-1 retailers and FTSE 100 entities, we have identified and engineered out over £1.5M in cumulative annual operational leakage. This figure represents the fully-loaded cost of Data Glue: the salaries consumed by manual re-keying, the margin lost to delayed turnaround times, and the opportunity cost of strategic talent trapped in procedural work.",
          "In one engagement with a national leisure group, an enterprise reporting pipeline that consumed 30 hours of manual Excel manipulation per month was reduced to a 10-minute automated workflow – a 98% reduction in processing time. 360 hours were reclaimed annually while removing 100% of data integrity risk.",
          "The pattern is consistent: organisations don't have an AI problem. They have a structural workflow problem. The margin recovery is not achieved by adding more tools. It is achieved by engineering the Data Glue out of the system so your people return to making decisions, not managing tasks.",
        ],
      },
      {
        label: "04: THE METHODOLOGY",
        title: "The Operational X-Ray: Diagnosing Before Engineering",
        paragraphs: [
          "Every engagement begins with the Operational X-Ray – a 2–3 week fixed-scope diagnostic that uses Pareto-driven analysis to identify the 20% of Data Glue causing 80% of operational friction. This is not a strategy document. It is a technical map of every manual touchpoint, with each one quantified by time cost, error rate, and margin impact.",
          "The X-Ray produces a prioritised engineering roadmap. Each item has a projected ROI. Each solution is designed with human-in-the-loop safety rails – we automate the routine so your experts retain governance over the exceptions. This is not about replacing people. It is about returning them to the work that justifies their salary.",
          "Every system is architected by the Principal personally. No junior handoffs. No 50-page strategy decks. Just engineered systems that ship.",
        ],
      },
    ],
    faqSchema: {
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
    },
  },
  {
    slug: "pos-job-workflow",
    ref: "GW-001",
    title: "POS Job Workflow Automation",
    subtitle: "How replacing fragmented data pulls with a single automated pipeline reclaimed 15 hours per week for strategic advisory.",
    date: "FEB 2026",
    seoDescription: "POS Job Workflow Automation: Reporting cycle cut 70%. 15h/week reclaimed for analysis and client advisory by replacing manual data pulls with a single automated pipeline.",
    manifesto: [
      {
        label: "01: THE FRICTION",
        title: "Reporting as a Manual Assembly Line",
        paragraphs: [
          "The team was pulling data from multiple disconnected systems, manually reformatting between tools, and re-keying outputs into client-facing reports. By the time reports reached clients, the underlying data was already stale. The entire reporting function had become a manual assembly line – expensive talent trapped in procedural data wrangling rather than delivering the advisory value that justified their rates.",
        ],
      },
      {
        label: "02: THE ENGINEERING",
        title: "A Single Pipeline Replacing Manual Pulls",
        paragraphs: [
          "We engineered a unified data pipeline that replaced the fragmented manual pulls with a single automated feed. Report generation was automated with pre-formatted outputs, and live data feeds replaced the static snapshots that were obsolete before they were delivered. The architecture was designed to be tool-agnostic – the pipeline connects to whatever systems the client uses, not the other way around.",
        ],
      },
    ],
    schematic: {
      ref: "GW-001",
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
  },
  {
    slug: "costing-process",
    ref: "GW-002",
    title: "Costing Process Re-engineering",
    subtitle: "Eliminating spreadsheet handoffs and email-based coordination to remove 10 hours of weekly overhead and cut missed deadlines by 85%.",
    date: "FEB 2026",
    seoDescription: "Costing Process Re-engineering: Missed deadlines down 85%. 10h/week coordination overhead removed by consolidating spreadsheet handoffs into an automated production system.",
    manifesto: [
      {
        label: "01: THE FRICTION",
        title: "Spreadsheets as the Operating System",
        paragraphs: [
          "Multiple teams were coordinating complex costing workflows through a patchwork of spreadsheets, email chains, and duplicated tracking files. Ownership was unclear. Status chasing consumed hours weekly. Deadlines were missed not because of competence failures, but because the system itself was built on manual handoffs that couldn't scale.",
        ],
      },
      {
        label: "02: THE ENGINEERING",
        title: "Consolidated Production Logic",
        paragraphs: [
          "We replaced the spreadsheet-and-email workflow with a consolidated production system featuring automated status updates, assignment routing, and deadline escalation workflows. The system provided a single source of truth, eliminating the duplicated tracking that had been consuming coordination overhead.",
        ],
      },
    ],
    schematic: {
      ref: "GW-002",
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
  },
  {
    slug: "validation-pipeline",
    ref: "GW-003",
    title: "Validation Pipeline Automation",
    subtitle: "Building validation rules into the data pipeline to eliminate unsustainable manual checking and free capacity for process improvement.",
    date: "FEB 2026",
    seoDescription: "Validation Pipeline Automation: Manual checking reduced 60%. 20h/week reclaimed by building validation rules into the data pipeline with exception-only routing.",
    manifesto: [
      {
        label: "01: THE FRICTION",
        title: "Low Error Rates, Unsustainable Time Cost",
        paragraphs: [
          "The team was performing high-volume manual checks on structured data. Error rates were low, but the time cost was unsustainable – 20 hours per week consumed by routine verification that left zero capacity for the process improvement initiatives the organisation needed.",
        ],
      },
      {
        label: "02: THE ENGINEERING",
        title: "Exception-Only Routing",
        paragraphs: [
          "We embedded validation rules directly into the data pipeline with automated routine checks and exception-only routing. A Decision Inbox surfaced only the genuine anomalies requiring human judgement, filtering out the noise that had been consuming the team's capacity.",
        ],
      },
    ],
    schematic: {
      ref: "GW-003",
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
  },
  {
    slug: "multichannel-content-orchestration",
    ref: "GW-004",
    title: "Multichannel Content Orchestration",
    subtitle: "Engineering out the Data Glue at the briefing stage to reclaim 1,200 hours annually and slash lead times by 50%.",
    date: "FEB 2026",
    seoDescription: "Multichannel Content Orchestration: 1,200 hours reclaimed annually. Lead times slashed by 50% through LLM-based ingestion and automated data standardisation.",
    manifesto: [
      {
        label: "01: THE FRICTION",
        title: "500+ Line Briefs and 5-Hour QC Loops",
        paragraphs: [
          "High-volume client briefs containing 500+ lines of product data were arriving with inconsistent formatting and misspellings. Each occurrence triggered a 5-hour manual QC loop. Brief-to-studio handoffs carried 2-day lead times. The account team had normalised the friction – copy-pasting had become the default operating mode rather than the exception.",
        ],
      },
      {
        label: "02: THE ENGINEERING",
        title: "LLM-Based Ingestion and Automated Standardisation",
        paragraphs: [
          "We deployed a custom RPA ingestion engine using LLM-based brand correction, automated data standardisation, and field mapping. One-click reformatting delivered instant production-ready outputs. By engineering out the Data Glue at the briefing stage, the account team was freed from copy-pasting to focus on creative strategy and client relationship growth.",
        ],
      },
    ],
    schematic: {
      ref: "GW-004",
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
  },
  {
    slug: "enterprise-reporting-automation",
    ref: "GW-005",
    title: "Enterprise Reporting Automation",
    subtitle: "Replacing 30 hours of monthly Excel manipulation with a 10-minute automated pipeline – a 98% reduction in processing time.",
    date: "FEB 2026",
    seoDescription: "Enterprise Reporting Automation: 98% reduction in processing time. 360 hours reclaimed annually while removing 100% of data integrity risk via automated drag-and-drop mapping.",
    manifesto: [
      {
        label: "01: THE FRICTION",
        title: "30 Hours of Monthly Excel Manipulation",
        paragraphs: [
          "Fragmented data sources required 30 hours of manual Excel manipulation every month for mission-critical pricing reports. Human error risk was compounded by manual re-keying. Heavy 'Status Chasing' overhead between account and finance teams consumed additional capacity in the days before every reporting deadline.",
        ],
      },
      {
        label: "02: THE ENGINEERING",
        title: "Drag-and-Drop Automated Mapping",
        paragraphs: [
          "We architected a custom drag-and-drop web application for automated column and order mapping, enabling instant fixed-format reporting. The migration from manual Excel work to a 10-minute automated pipeline removed the 'last-minute rush' before reporting deadlines, allowing the team to enter status calls fully prepped with 100% accurate data.",
        ],
      },
    ],
    schematic: {
      ref: "GW-005",
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
  },
  {
    slug: "high-volume-allocation-logistics",
    ref: "GW-006",
    title: "High-Volume Allocation Logistics",
    subtitle: "Cutting a 10-hour manual merging task to 15 minutes through intelligent RPA-based allocation consolidation.",
    date: "FEB 2026",
    seoDescription: "High-Volume Allocation Logistics: Manual workload reduced by 97%. Task duration cut from 10 hours to 15 minutes through intelligent RPA-based allocation merging.",
    manifesto: [
      {
        label: "01: THE FRICTION",
        title: "30+ Project Owners, One Master List",
        paragraphs: [
          "Single campaigns were split across 30+ project owners, each with siloed store allocations. Every month, someone spent 10 hours manually merging dozens of Excel files into a 'Master List'. Any client change required repeating hours of manual rework. The team was trapped in a cycle of Data Glue that made reactive agility impossible.",
        ],
      },
      {
        label: "02: THE ENGINEERING",
        title: "Intelligent RPA-Based Consolidation",
        paragraphs: [
          "We deployed an Intelligent RPA application for bulk allocation merging with instant duplicate removal and automated totals validation. Auto-formatting delivered immediate, client-ready approval exports. The team can now react to client allocation changes instantly, re-running the entire consolidation in minutes rather than being stuck in Data Glue for a full day.",
        ],
      },
    ],
    schematic: {
      ref: "GW-006",
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
  },
];

// ── Technical Schematic Component ─────────────────────────────────

const TechnicalSchematic = ({ schematic }: { schematic: TechnicalSchematic }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`border border-border transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Hard-stop rule */}
      <div className="border-b border-foreground" />

      {/* Header */}
      <div className="px-10 py-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <span className="font-mono text-sm text-primary font-semibold tracking-widest">
          Ref: {schematic.ref}
        </span>
        <span className="font-mono text-xs text-muted-foreground/60 uppercase tracking-widest">
          {schematic.sector}
        </span>
      </div>

      {/* Friction / Engineering grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-border">
        <div className="px-10 py-8 md:border-r border-border">
          <span className="font-mono text-xs text-primary font-semibold tracking-widest block mb-5">
            [FRICTION]
          </span>
          <ul className="space-y-3">
            {schematic.friction.map((item, i) => (
              <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                <span className="text-primary/60 mt-0.5 flex-shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="px-10 py-8 border-t md:border-t-0 border-border">
          <span className="font-mono text-xs text-primary font-semibold tracking-widest block mb-5">
            [ENGINEERING]
          </span>
          <ul className="space-y-3">
            {schematic.engineering.map((item, i) => (
              <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                <span className="text-primary/60 mt-0.5 flex-shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Human Layer */}
      <div className="border-t border-border px-10 py-8">
        <span className="font-mono text-xs text-primary font-semibold tracking-widest block mb-3">
          [HUMAN LAYER]
        </span>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-[720px]">{schematic.humanLayer}</p>
      </div>

      {/* Result */}
      <div className="border-t border-primary px-10 py-8" style={{ backgroundColor: "hsl(var(--primary) / 0.05)" }}>
        <span className="font-mono text-xs text-primary font-semibold tracking-widest block mb-3">
          [RESULT]
        </span>
        <p className="text-foreground font-semibold text-base leading-relaxed">{schematic.result}</p>
      </div>
    </div>
  );
};

// ── Page Component ────────────────────────────────────────────────

const InsightManifesto = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const entry = insightData.find((e) => e.slug === slug);

  if (!entry) {
    return <Navigate to="/insights" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={entry.title}
        description={entry.seoDescription}
        path={`/insights/${entry.slug}`}
      />
      {entry.faqSchema && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(entry.faqSchema)}
          </script>
        </Helmet>
      )}
      <Navigation />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8 opacity-0 animate-fade-in">
                <GallagGlyph size={20} />
                <div className="flex gap-6">
                  <span className="font-mono text-xs text-muted-foreground tracking-widest">
                    [PUBLISHED: {entry.date}]
                  </span>
                  <span className="font-mono text-xs text-muted-foreground tracking-widest">
                    [PRINCIPAL: GALLAG, B]
                  </span>
                </div>
              </div>

              <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block opacity-0 animate-fade-in">
                [{entry.ref}]
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6 opacity-0 animate-fade-in-up">
                {entry.title}
              </h1>
              <p
                className="text-lg text-muted-foreground font-light leading-relaxed max-w-[720px] opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                {entry.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Definition call-out for the primary manifesto */}
        {entry.slug === "eradicating-enterprise-data-glue" && (
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
        )}

        {/* Manifesto Sections */}
        {entry.manifesto.map((section, i) => (
          <section key={i} className="pb-16">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl">
                <div className="border-t border-border pt-12">
                  <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-6">
                    [{section.label}]
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6">
                    {section.title}
                  </h2>
                  <div className="space-y-6 text-muted-foreground font-light leading-relaxed max-w-[720px]">
                    {section.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                  {section.metrics && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                      {section.metrics.map((m, k) => (
                        <div key={k} className="border border-border p-6">
                          <p className="font-mono text-2xl font-extrabold text-primary mb-2">{m.value}</p>
                          <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Technical Schematic */}
        {entry.schematic && (
          <section className="pb-20">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl">
                <div className="border-t border-border pt-12 mb-10">
                  <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-2">
                    [TECHNICAL SCHEMATIC]
                  </span>
                </div>
                <TechnicalSchematic schematic={entry.schematic} />

                {/* Confidentiality notice */}
                <div className="border border-border p-6 mt-10">
                  <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                    [NOTICE: CLIENT PRIVACY] To respect enterprise non-disclosure agreements, specific brand names have been abstracted. Verification of outcomes and deeper operational context can be provided during a formal consultation.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        <CTABand headline={entry.schematic ? "See something similar to your situation?" : "Ready to run the Operational X-Ray on your workflows?"} />
      </main>
      <Footer hideCTA />
    </div>
  );
};

export default InsightManifesto;
