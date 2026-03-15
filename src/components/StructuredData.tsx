const StructuredData = () => {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gallag Works",
    url: "https://www.gallag.works",
    logo: "https://www.gallag.works/favicon.svg",
    description:
      "Founder-led AI transformation for enterprise operations. Eliminating 'Human Middleware' and manual friction to recover enterprise margins.",
    founder: {
      "@type": "Person",
      name: "Ben Gallagher",
      jobTitle: "Founder",
    },
    areaServed: "GB",
    serviceType: [
      "AI Transformation",
      "Workflow Automation",
      "Enterprise Transformation",
      "Operational Audit",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does Gallag Works do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gallag Works provides founder-led AI transformation for enterprise operations. I identify and eradicate 'Human Middleware' — the invisible manual processes, spreadsheet workarounds, and coordination overhead that consume enterprise capacity and erode margins.",
        },
      },
      {
        "@type": "Question",
        name: "What is 'Human Middleware'?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Human Middleware is the invisible connective tissue of manual processes — copy-paste routines, spreadsheet reconciliation, email-based approvals, and human coordination overhead — that holds enterprise operations together but consumes vast amounts of skilled capacity. It is the single largest source of hidden operational cost in enterprise operations.",
        },
      },
      {
        "@type": "Question",
        name: "Who is Ben Gallagher?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ben Gallagher is the Founder of Gallag Works, with 15+ years directing enterprise delivery for Tier-1 retailers and FTSE 100 entities. He has managed £15M+ multichannel contracts and specialises in eliminating Human Middleware and engineering scalable operational systems.",
        },
      },
      {
        "@type": "Question",
        name: "What results has Gallag Works delivered?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Proven outcomes include: £1.5M+ in identified operational leakage recovered, 1,200 hours of annual capacity reclaimed, 98% reduction in manual processing effort, 50%+ reduction in turnaround times, and 97% workload reduction on high-volume allocation tasks.",
        },
      },
      {
        "@type": "Question",
        name: "How does the engagement process work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Engagements follow three tiers: (1) Operational Audit & X-Ray (2–3 weeks, fixed scope) to diagnose friction; (2) Workflow Engineering (4–8 weeks) to re-engineer workflows; (3) Build & Deploy (retainer-based) to embed governance and scale adoption across teams.",
        },
      },
      {
        "@type": "Question",
        name: "Does Gallag Works replace existing systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Gallag Works is tool-agnostic and works within your existing technology stack. I re-engineer the operational architecture around your current systems rather than replacing them, eliminating the manual workarounds that have grown up between them.",
        },
      },
      {
        "@type": "Question",
        name: "Is data kept secure during an engagement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All engagements are InfoSec-aligned with enterprise-grade data handling protocols. I work within your existing security frameworks and never require data to leave your controlled environment.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};

export default StructuredData;
