import { Helmet } from "react-helmet-async";

const caseStudySchemas = [
  {
    id: "GW-LOG-201",
    name: "POS Job Workflow Automation",
    description: "Reporting cycle cut 70%. 15h/week reclaimed for analysis and client advisory by replacing manual data pulls with a single automated pipeline.",
    slug: "pos-job-workflow",
  },
  {
    id: "GW-LOG-202",
    name: "Costing Process Re-engineering",
    description: "Missed deadlines down 85%. 10h/week coordination overhead removed by consolidating spreadsheet handoffs into an automated production system.",
    slug: "costing-process",
  },
  {
    id: "GW-LOG-203",
    name: "Validation Pipeline Automation",
    description: "Manual checking reduced 60%. 20h/week reclaimed by building validation rules into the data pipeline with exception-only routing.",
    slug: "validation-pipeline",
  },
  {
    id: "GW-LOG-204",
    name: "Multichannel Content Orchestration",
    description: "1,200 hours reclaimed annually. Lead times slashed by 50% from 2 days to under 24 hours through LLM-based ingestion and automated data standardisation.",
    slug: "multichannel-content-orchestration",
  },
  {
    id: "GW-LOG-205",
    name: "Enterprise Reporting Automation",
    description: "98% reduction in processing time. 360 hours reclaimed annually while removing 100% of data integrity risk via automated drag-and-drop mapping.",
    slug: "enterprise-reporting-automation",
  },
  {
    id: "GW-LOG-206",
    name: "High-Volume Allocation Logistics",
    description: "Manual workload reduced by 97%. Task duration cut from 10 hours to 15 minutes through intelligent RPA-based allocation merging.",
    slug: "high-volume-allocation-logistics",
  },
];

const StructuredData = () => {
  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Gallag Works",
    description:
      "Principal-led operational engineering for high-volume, handoff-heavy operations. Eradicating 'Data Glue' and manual friction to recover enterprise margins.",
    url: "https://www.gallag.works",
    logo: "https://www.gallag.works/favicon.svg",
    image: "https://www.gallag.works/og-image.png",
    priceRange: "££££",
    areaServed: "GB",
    serviceType: [
      "Operational Engineering",
      "Workflow Automation",
      "Enterprise Transformation",
      "Operational Audit",
    ],
    founder: {
      "@type": "Person",
      name: "Ben Gallagher",
      jobTitle: "Principal",
        description:
        "Operational engineering expert with 15+ years directing enterprise delivery for enterprise clients across retail, financial services, and professional services. Specialises in eradicating manual friction and engineering scalable operational systems.",
      knowsAbout: [
        "Operational Engineering",
        "Enterprise Transformation",
        "Workflow Automation",
        "Enterprise Operations",
      ],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ben Gallagher",
    jobTitle: "Principal, Gallag Works",
    description:
      "Operational engineering specialist with 15+ years of enterprise delivery experience managing £15M+ contracts across retail, financial services, and professional services.",
    knowsAbout: [
      "Operational Engineering",
      "Enterprise Transformation",
      "Data Glue Eradication",
      "Workflow Automation",
      "Multichannel Retail Operations",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Gallag Works",
      url: "https://www.gallag.works",
    },
  };

  const creativeWorks = caseStudySchemas.map((cs) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: cs.name,
    description: cs.description,
    identifier: cs.id,
    url: `https://www.gallag.works/insights/${cs.slug}`,
    hasPart: {
      "@type": "WebPageElement",
      name: "Technical Schematic",
      url: `https://www.gallag.works/insights/${cs.slug}#schematic`,
    },
    author: {
      "@type": "Organization",
      name: "Gallag Works",
    },
    about: {
      "@type": "Thing",
      name: "Operational Engineering",
    },
  }));

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(professionalService)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      {creativeWorks.map((cw, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(cw)}
        </script>
      ))}
    </Helmet>
  );
};

export default StructuredData;
