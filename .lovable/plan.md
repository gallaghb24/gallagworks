

# Phase 2: Terminology & Voice Update

This is a comprehensive find-and-replace across the entire site, updating terminology, voice, and positioning to match Strategic Intent v2. I'll touch every file that contains outdated terms.

## Terminology map

| Old | New |
|---|---|
| "Data Glue" | "Human Middleware" |
| "Operational Engineering" | "AI Transformation" |
| "The Principal" (label/nav) | "The Founder" |
| "Principal" (job title) | "Founder" |
| "Principal-led" | "Founder-led" |
| "operational engineering studio" | "AI transformation practice" |
| "Decision Inbox(es)" | Rephrase to plain English (e.g. "exception routing", "AI-assisted triage") |
| "Process Architecture" (service 02) | "Workflow Engineering" |
| SEO suffix "Operational Engineering" | "AI Transformation" |

## Voice update

The strategy says "I" voice (already mostly done) but some "we" instances remain in the manifesto and edge functions. Will update to "I" consistently. The tone shifts from "engineering out friction" to "AI transformation practice that designs how work should move, then builds the systems."

## Files to edit (grouped)

### Navigation & Layout
- **Navigation.tsx**: "The Principal" → "The Founder" in navLinks
- **Footer.tsx**: "The Principal" → "The Founder" in nav links
- **SEOHead.tsx**: "Operational Engineering" → "AI Transformation" in title suffix

### Home page components
- **HeroSection.tsx**: Rewrite headline and subheadline — "Data Glue" → "Human Middleware", update positioning
- **Philosophy.tsx**: Update copy to match new operating principles
- **ServicesSummary.tsx**: Rename services (Process Architecture → Workflow Engineering, Decision Inboxes → Build & Deploy), update descriptions
- **Principal.tsx**: Rename to "The Founder", rewrite bio to emphasise AI transformation experience
- **ProofPoints.tsx**: "Data Glue" → "Human Middleware" in detail text
- **LeakageEstimator.tsx**: Update "operational drag" header, fix `Inter` font reference to `DM Sans`

### Services page
- **Services.tsx**: "Data Glue" → "Human Middleware" in hero and SEO
- **EngagementTypes.tsx**: "Data Glue" → "Human Middleware", "Decision Inboxes" → plain English
- **HowWeWork.tsx**: Same terminology swaps
- **FAQSection.tsx**: Full terminology update across all 6 answers, "Data Glue" → "Human Middleware", "Decision Inboxes" → plain English, "Principal" → "Founder"

### Other pages
- **About.tsx**: "The Principal" → "The Founder", "operational engineering studio" → "AI transformation practice", update bio
- **Contact.tsx**: "Data Glue" → "Human Middleware" in SEO and body copy
- **Insights.tsx**: "Enterprise Data Glue" → updated topic name, "Principal" → "Founder" in description
- **InsightManifesto.tsx**: All "Data Glue" → "Human Middleware", "Operational Engineering" → "AI Transformation", "Principal" → "Founder" (this is the largest file — ~650 lines)
- **Glossary.tsx**: Update definitions to flip hierarchy — "Human Middleware" becomes the primary concept, "Data Glue" becomes secondary/removed. Update SEO title.
- **Diagnostic.tsx**: Minor SEO updates
- **Index.tsx**: SEO description update

### Structured data & SEO
- **StructuredData.tsx**: All schema.org data updated
- **GallagGlyph.tsx**: aria-label update

### Edge functions (email templates)
- **send-contact-email/index.ts**: "Data Glue" → "Human Middleware", "Principal" → "Founder"
- **send-assessment-email/index.ts**: "Principal" → "Founder"
- **send-consultation-request/index.ts**: "Principal" → "Founder", "We'll" → "I'll"

### Static files
- **public/llm.html**: Full terminology overhaul (this is the LLM-readable summary page)

## What this does NOT change
- No design/layout changes (that's Phase 3)
- No domain changes (keeping gallag.works for now)
- Logo stays as-is
- No file renames (Principal.tsx component file name stays, just content changes)

## Implementation approach
All files edited in one pass — the changes are all text replacements with no interdependencies.

