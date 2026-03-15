import { useEffect, ReactNode } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
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
  paragraphs: ReactNode[];
  metrics?: { value: string; label: string }[];
  surface?: "dark" | "light";
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

// ── Inline citation component ─────────────────────────────────────
const LogRef = ({ code, slug }: { code: string; slug: string }) => (
  <Link
    to={`/insights/${slug}#schematic`}
    className="text-primary no-underline hover:brightness-125 transition-all font-mono text-sm"
  >
    [{code}]
  </Link>
);

const insightData: InsightEntry[] = [
  {
    slug: "eradicating-enterprise-data-glue",
    ref: "GW-LOG-101",
    title: "Eradicating Enterprise Human Middleware.",
    subtitle: "How to find and fix the manual friction that's silently draining your capacity and margin.",
    date: "MAR 2025",
    seoDescription: "How AI Transformation identifies and removes the manual friction costing enterprise operations £1M+ annually. 1,200 hours reclaimed through systematic Human Middleware elimination.",
    manifesto: [
      {
        label: "01: THE PROBLEM",
        surface: "light",
        title: "Your Most Expensive Employees Are Being Used as Human Middleware.",
        paragraphs: [
          <>In every business I've worked with, the same pattern appears: skilled, expensive people spending their time as manual routers between disconnected systems. Re-keying data, copying between spreadsheets, chasing status updates, formatting outputs — work that has no strategic value but consumes 20–40% of operational capacity. That's <Link to="/glossary#human-middleware" className="text-primary no-underline hover:brightness-125 transition-all">Human Middleware</Link>.</>,
          "Human Middleware isn't a technology problem. It's a process problem. It emerges when organisations grow faster than their systems can keep up, and teams bridge the gaps with manual workarounds. These workarounds become normalised. They survive restructures. They outlast the people who created them. And they silently erode margin every single day.",
          "The cost is not abstract. It's measurable in hours, headcount, error rates, and missed deadlines. But because it's spread across dozens of small tasks, it never appears on a single line item. It's invisible until someone maps it.",
        ],
      },
      {
        label: "02: THE EVIDENCE",
        surface: "dark",
        title: "Reclaiming 1,200 Hours of Annual Capacity.",
        paragraphs: [
          "During an Operational X-Ray for a major health and beauty retailer, I mapped every manual touchpoint in their content production pipeline. The diagnostic revealed a 25% capacity loss — over a quarter of the team's working hours consumed by Human Middleware with zero strategic value.",
          "High-volume client briefs – 500+ lines of product data – were arriving with inconsistent formatting and misspellings. Each occurrence triggered a 5-hour manual QC loop. Brief-to-studio handoffs carried 2-day lead times. The team had normalised the friction.",
          "I built a custom ingestion pipeline using AI-driven brand correction, automated data standardisation, and one-click reformatting for production-ready outputs. The result:",
        ],
        metrics: [
          { value: "1,200hrs", label: "Reclaimed Annually" },
          { value: "50%", label: "Lead Time Reduction" },
          { value: "100%", label: "Data Integrity" },
        ],
      },
      {
        label: "03: THE RESULT",
        surface: "light",
        title: "Recovering £1M+ in lost capacity.",
        paragraphs: [
          "Across engagements with major retailers and large enterprises, I've identified over £1M in cumulative lost capacity. That's the fully loaded cost of Human Middleware: the salaries consumed by manual re-keying, the margin lost to slow turnaround times, and the opportunity cost of talented people trapped in procedural work.",
          "In one engagement with a national leisure group, a reporting pipeline that consumed 30 hours of manual Excel work per month was reduced to a 10-minute automated workflow — a 98% reduction in processing time. 360 hours reclaimed annually, with data integrity risk eliminated entirely.",
          "The pattern is consistent: organisations don't have an AI problem. They have a process problem. The recovery isn't achieved by adding more tools. It's achieved by eliminating the Human Middleware so your people go back to making decisions, not managing tasks.",
        ],
      },
      {
        label: "04: THE METHODOLOGY",
        surface: "dark",
        title: "The Operational X-Ray: diagnosing before building.",
        paragraphs: [
          "Every engagement begins with the Operational X-Ray — a 2–3 week fixed-scope diagnostic that identifies the small number of manual processes causing the majority of your capacity loss. This isn't a strategy document. It's a map of every manual touchpoint, with each one quantified by time, cost, error rate, and impact.",
          "The X-Ray produces a prioritised roadmap. Each item has a projected ROI. Each solution keeps humans in the loop — I automate the routine so your people retain control over the exceptions that need real judgement. This isn't about replacing people. It's about getting them back to the work that justifies their salary.",
          "Every system is architected by me personally. No junior handoffs. No 50-page strategy decks. Just engineered systems that ship.",
        ],
      },
    ],
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is AI Transformation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI Transformation is the application of AI to business operations to eliminate manual friction and free capacity for the work that actually matters. It focuses on identifying and removing 'Human Middleware' – the manual re-keying, spreadsheet handoffs, and workarounds that erode margin – and replacing them with engineered, scalable systems.",
          },
        },
        {
          "@type": "Question",
          name: "How does Human Middleware affect margins?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Human Middleware is the hidden manual friction where expensive talent operates as connectors between disconnected systems. In enterprise environments, this manifests as manual data pulls, reformatting between tools, and spreadsheet-based coordination. Gallag Works has identified over £1M in cumulative lost capacity caused by Human Middleware across enterprise engagements, reclaiming over 1,200 hours of annual capacity.",
          },
        },
        {
          "@type": "Question",
          name: "What is an Operational X-Ray?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An Operational X-Ray is a 2–3 week fixed-scope diagnostic that identifies the small number of manual processes causing the majority of your capacity loss. It maps every manual touchpoint, quantifies the capacity loss, and produces a prioritised roadmap with projected ROI.",
          },
        },
      ],
    },
  },
  {
    slug: "pos-job-workflow",
    ref: "GW-LOG-201",
    title: "POS Job Workflow Automation.",
    subtitle: "How replacing fragmented data pulls with a single automated pipeline reclaimed 15 hours per week for strategic advisory.",
    date: "MAY 2025",
    seoDescription: "POS Job Workflow Automation: Reporting cycle cut 70%. 15h/week reclaimed for analysis and client advisory by replacing manual data pulls with a single automated pipeline.",
    manifesto: [
      {
        label: "01: THE FRICTION",
        surface: "light",
        title: "Reporting as a Manual Assembly Line.",
        paragraphs: [
          "The team was pulling data from multiple disconnected systems, manually reformatting between tools, and re-keying outputs into client-facing reports. By the time reports reached clients, the underlying data was already stale. The entire reporting function had become a manual assembly line – expensive talent trapped in procedural data wrangling rather than delivering the advisory value that justified their rates.",
        ],
      },
      {
        label: "THE STRATEGIC COST",
        surface: "light",
        title: "When Reporting Becomes the Product.",
        paragraphs: [
          "There is a quiet corrosion that happens when a professional services team spends more time assembling reports than interpreting them. The advisory function – the reason clients pay premium rates – atrophies. The team becomes a data factory, and the client relationship shifts from strategic partnership to transactional delivery.",
          "Stale data compounds the problem. When the numbers in a client-facing report are already 48 hours old by the time they're presented, the advisory layer built on top of them is performative. The client senses it. Trust erodes not through a single failure, but through a pattern of diminishing relevance. The team knows the data is stale. The client suspects it. Neither party addresses it because the manual process is so entrenched that questioning it feels like questioning the team's competence.",
          "The real strategic cost is not the 15 hours per week of wrangling. It is the advisory credibility that leaks away with every outdated report. A team that could be identifying margin opportunities, flagging seasonal risks, or shaping procurement strategy is instead trapped in a cycle of data assembly. The organisation is paying for insight and receiving spreadsheets.",
        ],
      },
      {
        label: "02: THE SOLUTION",
        surface: "dark",
        title: "A Single Pipeline Replacing Manual Pulls.",
        paragraphs: [
          "I engineered a unified data pipeline that replaced the fragmented manual pulls with a single automated feed. Report generation was automated with pre-formatted outputs, and live data feeds replaced the static snapshots that were obsolete before they were delivered. The architecture was designed to be tool-agnostic – the pipeline connects to whatever systems the client uses, not the other way around.",
        ],
      },
    ],
    schematic: {
      ref: "GW-LOG-201",
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
    ref: "GW-LOG-202",
    title: "Costing Process Re-engineering.",
    subtitle: "Eliminating spreadsheet handoffs and email-based coordination to remove 10 hours of weekly overhead and cut missed deadlines by 85%.",
    date: "JUL 2025",
    seoDescription: "Costing Process Re-engineering: Missed deadlines down 85%. 10h/week coordination overhead removed by consolidating spreadsheet handoffs into an automated production system.",
    manifesto: [
      {
        label: "01: THE FRICTION",
        surface: "light",
        title: "Spreadsheets as the Operating System.",
        paragraphs: [
          "Multiple teams were coordinating complex costing workflows through a patchwork of spreadsheets, email chains, and duplicated tracking files. Ownership was unclear. Status chasing consumed hours weekly. Deadlines were missed not because of competence failures, but because the system itself was built on manual handoffs that couldn't scale.",
        ],
      },
      {
        label: "THE STRATEGIC COST",
        surface: "light",
        title: "The Illusion of Under-Resourcing.",
        paragraphs: [
          "When deadlines are consistently missed, the instinctive organisational response is to add headcount. More coordinators. More project managers. More people to chase the status updates that the existing people are already chasing. This is the illusion of under-resourcing – the belief that the problem is capacity when the actual problem is architectural.",
          "Spreadsheet-based coordination creates an invisible tax on every participant. Each handoff requires someone to update their version, notify the next person, and confirm receipt. Multiply this across four teams and a dozen costing submissions per week, and you have built an informal bureaucracy that consumes hours but produces no trackable output. It does not appear on any timesheet. It does not show up in any utilisation report. It is pure friction, and it is indistinguishable from productive work.",
          "The strategic consequence is more damaging than the time loss. When coordination overhead dominates the working week, the team loses the capacity for the analytical work that actually drives margin. Costing accuracy suffers not because the team lacks skill, but because they lack the operational space to apply it. The organisation is paying for expertise and receiving administration.",
        ],
      },
      {
        label: "02: THE SOLUTION",
        surface: "dark",
        title: "A single source of truth.",
        paragraphs: [
          "I replaced the spreadsheet-and-email workflow with a consolidated production system featuring automated status updates, assignment routing, and deadline escalation workflows. The system provided a single source of truth, eliminating the duplicated tracking that had been consuming coordination overhead.",
        ],
      },
    ],
    schematic: {
      ref: "GW-LOG-202",
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
    ref: "GW-LOG-203",
    title: "Validation Pipeline Automation.",
    subtitle: "Building validation rules into the data pipeline to eliminate unsustainable manual checking and free capacity for process improvement.",
    date: "SEP 2025",
    seoDescription: "Validation Pipeline Automation: Manual checking reduced 60%. 20h/week reclaimed by building validation rules into the data pipeline with exception-only routing.",
    manifesto: [
      {
        label: "01: THE FRICTION",
        surface: "light",
        title: "Low Error Rates, Unsustainable Time Cost.",
        paragraphs: [
          "The team was performing high-volume manual checks on structured data. Error rates were low, but the time cost was unsustainable – 20 hours per week consumed by routine verification that left zero capacity for the process improvement initiatives the organisation needed.",
        ],
      },
      {
        label: "THE STRATEGIC COST",
        surface: "light",
        title: "The Paradox of Perfect Compliance.",
        paragraphs: [
          "Low error rates are often celebrated as evidence of a well-functioning team. In this case, they masked a deeper problem: the error rates were low precisely because the team was spending 20 hours per week on manual verification. The process was accurate because it was unsustainably labour-intensive. Remove the labour, and the accuracy collapses. This is not quality – it is dependency.",
          "The paradox creates a strategic trap. Leadership sees low error rates and concludes the process is working. The team knows it is working only because they are absorbing the cost personally – through overtime, through deferred improvement work, through the slow accumulation of operational debt that never gets addressed because there is simply no capacity to address it.",
          "The genuine strategic cost is not the time spent checking. It is the improvement work that never happens. The process optimisation initiatives that get deferred quarter after quarter. The automation opportunities that remain on a backlog no one has time to review. The organisation is paying its most experienced people to perform routine verification that a rules engine could handle in milliseconds, while the work that would actually transform operational performance sits permanently in the queue.",
        ],
      },
      {
        label: "02: THE SOLUTION",
        surface: "dark",
        title: "Exception-Only Routing.",
        paragraphs: [
          "I embedded validation rules directly into the data pipeline with automated routine checks and exception-only routing. An exception triage interface surfaced only the genuine anomalies requiring human judgement, filtering out the noise that had been consuming the team's capacity.",
        ],
      },
    ],
    schematic: {
      ref: "GW-LOG-203",
      sector: "Financial Services",
      friction: [
        "High-volume manual checks on structured data",
        "No capacity for process improvement",
        "Error rates low but time cost unsustainable",
      ],
      engineering: [
        "Validation rules built into the data pipeline",
        "Automated routine checks with exception routing",
        "Exception triage for genuine anomalies only",
      ],
      humanLayer: "Judgement calls on exceptions, relationship management, and process governance.",
      result: "Manual checking reduced 60%. 20h/week reclaimed. Two process improvement initiatives launched in first quarter.",
    },
  },
  {
    slug: "multichannel-content-orchestration",
    ref: "GW-LOG-204",
    title: "Multichannel Content Orchestration.",
    subtitle: "Eliminating the Human Middleware at the briefing stage to reclaim 1,200 hours annually and slash lead times by 50%.",
    date: "NOV 2025",
    seoDescription: "Multichannel Content Orchestration: 1,200 hours reclaimed annually. Lead times slashed by 50% through LLM-based ingestion and automated data standardisation.",
    manifesto: [
      {
        label: "01: THE FRICTION",
        surface: "light",
        title: "500+ Line Briefs and 5-Hour QC Loops.",
        paragraphs: [
          "High-volume client briefs containing 500+ lines of product data were arriving with inconsistent formatting and misspellings. Each occurrence triggered a 5-hour manual QC loop. Brief-to-studio handoffs carried 2-day lead times. The account team had normalised the friction – copy-pasting had become the default operating mode rather than the exception.",
        ],
      },
      {
        label: "THE STRATEGIC COST",
        surface: "light",
        title: "The Normalisation of Copy-Paste Culture.",
        paragraphs: [
          "When an account team spends the majority of its week reformatting client data, something fundamental shifts in the team's identity. They stop thinking of themselves as strategic partners and start thinking of themselves as production operatives. The copy-paste becomes the job. Client calls become data collection exercises rather than relationship-building opportunities. The team's capacity for proactive thinking – for spotting upsell opportunities, for anticipating seasonal challenges, for deepening the client partnership – is consumed by the mechanics of data handling.",
          "This normalisation is insidious because it is gradual. No one decides to become a data entry team. It happens one brief at a time, one QC loop at a time, one 'quick fix' at a time. Each individual task feels manageable. But aggregated across 500-line briefs arriving weekly, the cumulative effect is a team that has been architecturally prevented from scaling client relationships.",
          "The strategic cost extends beyond the team. When lead times stretch to two days for what should be a same-day turnaround, the client begins to look elsewhere – not because the work is poor, but because the responsiveness does not match the premium they are paying. The organisation loses competitive advantage not through a strategic failure, but through an operational one that no one has the bandwidth to diagnose.",
        ],
      },
      {
        label: "02: THE SOLUTION",
        surface: "dark",
        title: "LLM-Based Ingestion and Automated Standardisation.",
        paragraphs: [
          "I deployed a custom RPA ingestion engine using LLM-based brand correction, automated data standardisation, and field mapping. One-click reformatting delivered instant production-ready outputs. By eliminating the Human Middleware at the briefing stage, the account team was freed from copy-pasting to focus on creative strategy and client relationship growth.",
        ],
      },
    ],
    schematic: {
      ref: "GW-LOG-204",
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
      humanLayer: "By eliminating the 'Human Middleware' at the briefing stage, the account team was freed from copy-pasting to focus on creative strategy and client relationship growth.",
      result: "1,200 hours reclaimed annually. Lead times slashed by 50% from 2 days to <24 hours.",
    },
  },
  {
    slug: "enterprise-reporting-automation",
    ref: "GW-LOG-205",
    title: "Enterprise Reporting Automation.",
    subtitle: "Replacing 30 hours of monthly Excel manipulation with a 10-minute automated pipeline – a 98% reduction in processing time.",
    date: "JAN 2026",
    seoDescription: "Enterprise Reporting Automation: 98% reduction in processing time. 360 hours reclaimed annually while removing 100% of data integrity risk via automated drag-and-drop mapping.",
    manifesto: [
      {
        label: "01: THE FRICTION",
        surface: "light",
        title: "30 Hours of Monthly Excel Manipulation.",
        paragraphs: [
          "Fragmented data sources required 30 hours of manual Excel manipulation every month for mission-critical pricing reports. Human error risk was compounded by manual re-keying. Heavy 'Status Chasing' overhead between account and finance teams consumed additional capacity in the days before every reporting deadline.",
        ],
      },
      {
        label: "THE STRATEGIC COST",
        surface: "light",
        title: "The Opportunity Cost of Blind Leadership.",
        paragraphs: [
          "In high-stakes enterprise reporting, the quality of leadership decisions is directly constrained by the quality of the data that informs them. When pricing reports require 30 hours of manual assembly, the data that reaches decision-makers is not just late – it is shaped by the limitations of whoever assembled it. Manual processes introduce silent editorial choices: which columns get included, how outliers are handled, whether discrepancies are flagged or quietly smoothed over. The report becomes an interpretation, not a reflection.",
          "The 'last-minute rush' that precedes every reporting deadline creates a secondary cost that rarely appears in post-mortems. When account and finance teams spend the final 48 hours before a status call scrambling to reconcile numbers, they arrive at the meeting exhausted and defensive rather than prepared and strategic. The conversation shifts from 'what should we do with this data' to 'is this data correct'. Leadership is flying blind – not because the data does not exist, but because the process of assembling it has consumed all the capacity that should have been spent analysing it.",
          "The cumulative effect is an organisation where reporting is feared rather than leveraged. Teams avoid asking new questions because every new data request triggers another manual assembly cycle. The reporting function becomes a bottleneck rather than an enabler, and strategic agility suffers because the operational infrastructure cannot support it.",
        ],
      },
      {
        label: "02: THE SOLUTION",
        surface: "dark",
        title: "Drag-and-Drop Automated Mapping.",
        paragraphs: [
          "I architected a custom drag-and-drop web application for automated column and order mapping, enabling instant fixed-format reporting. The migration from manual Excel work to a 10-minute automated pipeline removed the 'last-minute rush' before reporting deadlines, allowing the team to enter status calls fully prepped with 100% accurate data.",
        ],
      },
    ],
    schematic: {
      ref: "GW-LOG-205",
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
    ref: "GW-LOG-206",
    title: "High-Volume Allocation Logistics.",
    subtitle: "Cutting a 10-hour manual merging task to 15 minutes through intelligent RPA-based allocation consolidation.",
    date: "MAR 2026",
    seoDescription: "High-Volume Allocation Logistics: Manual workload reduced by 97%. Task duration cut from 10 hours to 15 minutes through intelligent RPA-based allocation merging.",
    manifesto: [
      {
        label: "01: THE FRICTION",
        surface: "light",
        title: "30+ Project Owners, One Master List.",
        paragraphs: [
          "Single campaigns were split across 30+ project owners, each with siloed store allocations. Every month, someone spent 10 hours manually merging dozens of Excel files into a 'Master List'. Any client change required repeating hours of manual rework. The team was trapped in a cycle of Human Middleware that made reactive agility impossible.",
        ],
      },
      {
        label: "THE STRATEGIC COST",
        surface: "light",
        title: "Operational Fragility at Scale.",
        paragraphs: [
          "When a single client change – a revised store list, an updated allocation split – requires hours of manual rework, the organisation has built operational fragility into its delivery model. The team cannot respond with agility because the consolidation process is entirely manual. Every change cascades through dozens of spreadsheets, each requiring individual updates, re-validation, and re-export. The process that should take minutes takes half a day, and the client experiences this as sluggishness.",
          "This fragility creates a perverse incentive structure. Teams begin to resist client changes – not explicitly, but through delay and complexity signalling. 'We can do that, but it will take until Thursday.' The client learns to stop asking. The relationship becomes rigid where it should be responsive, and the organisation loses the competitive advantage that comes from being operationally nimble.",
          "At scale, manual consolidation also introduces compounding risk. When 30+ project owners each maintain siloed allocation files, there is no single source of truth. Discrepancies between versions go undetected until they surface as delivery errors. The team spends as much time reconciling conflicts as it does performing the actual consolidation. The organisation is not just slow – it is structurally incapable of guaranteeing accuracy across high-volume campaigns without heroic individual effort.",
        ],
      },
      {
        label: "02: THE SOLUTION",
        surface: "dark",
        title: "Intelligent RPA-Based Consolidation.",
        paragraphs: [
          "I deployed an Intelligent RPA application for bulk allocation merging with instant duplicate removal and automated totals validation. Auto-formatting delivered immediate, client-ready approval exports. The team can now react to client allocation changes instantly, re-running the entire consolidation in minutes rather than being stuck in Human Middleware for a full day.",
        ],
      },
    ],
    schematic: {
      ref: "GW-LOG-206",
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
      humanLayer: "The team can now react to client allocation changes instantly, re-running the entire consolidation in minutes rather than being stuck in 'Human Middleware' for a full day.",
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
            [BEFORE]
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
            [AFTER]
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
                    [FOUNDER: GALLAG, B]
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
                <div className="border border-primary rounded-xl p-8" style={{ backgroundColor: "hsl(var(--primary) / 0.05)" }}>
                  <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-4">
                    [DEFINITION: AI TRANSFORMATION]
                  </span>
                  <p className="text-foreground font-semibold text-lg leading-relaxed">
                    The application of AI to business operations to eliminate manual friction and free capacity for the work that actually matters.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Manifesto Sections */}
        {(() => {
          // Group consecutive sections by surface
          const groups: { surface: "dark" | "light"; sections: { section: ManifestoSection; index: number }[] }[] = [];
          entry.manifesto.forEach((section, i) => {
            const surface = section.surface || "dark";
            const lastGroup = groups[groups.length - 1];
            if (lastGroup && lastGroup.surface === surface) {
              lastGroup.sections.push({ section, index: i });
            } else {
              groups.push({ surface, sections: [{ section, index: i }] });
            }
          });

          return groups.map((group, gi) => {
            const isLight = group.surface === "light";
            return (
              <div
                key={gi}
                className={isLight ? "bg-warm-stone py-4" : ""}
              >
                {group.sections.map(({ section, index: i }) => (
                  <section key={i} className="pb-16">
                    <div className="container mx-auto px-6 lg:px-12">
                      <div className="max-w-3xl">
                        <div className={`border-t pt-12 ${isLight ? "border-black/[0.08]" : "border-border"}`}>
                          <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-6">
                            [{section.label}]
                          </span>
                          <h2 className={`text-2xl md:text-3xl font-extrabold mb-6 ${isLight ? "" : "text-foreground"}`} style={isLight ? { color: '#111113' } : undefined}>
                            {section.title}
                          </h2>
                          <div className={`space-y-6 font-light leading-relaxed max-w-[720px] ${isLight ? "" : "text-muted-foreground"}`} style={isLight ? { color: '#555' } : undefined}>
                            {section.paragraphs.map((p, j) => (
                              <p key={j}>{p}</p>
                            ))}
                          </div>
                          {section.metrics && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                              {section.metrics.map((m, k) => (
                                <div key={k} className={`rounded-xl p-6 ${isLight ? "bg-off-white border border-black/[0.08]" : "border border-white/[0.08]"}`}>
                                  <p className="font-mono text-2xl font-extrabold text-primary mb-2">{m.value}</p>
                                  <p className={`font-mono text-xs uppercase tracking-wider ${isLight ? "" : "text-muted-foreground"}`} style={isLight ? { color: '#666' } : undefined}>{m.label}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            );
          });
        })()}



        {/* Technical Schematic — Blueprint Inset */}
        {entry.schematic && (
          <section id="schematic" className="py-16 border-t border-b border-border" style={{ backgroundColor: '#1A1C1E' }}>
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl">
                <div className="mb-10">
                  <div className="border-b border-border pb-4 mb-6">
                    <span className="font-mono text-sm text-primary uppercase tracking-widest font-semibold">
                      [HOW IT WORKS]
                    </span>
                  </div>
                </div>
                <TechnicalSchematic schematic={entry.schematic} />

                {/* Confidentiality notice */}
                <div className="border border-white/[0.08] rounded-xl p-6 mt-10">
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
