# Add Full Stops to All Headings Site-Wide

Every `h1`, and`h2` across the site will receive a trailing full stop, except where one already exists or where the text ends in another punctuation mark (e.g. `?`).

---

## Files to Change

### 1. `src/components/ServicesSummary.tsx`

- `h2`: "The Methodology" → "The Methodology."

### 2. `src/components/ProofPoints.tsx`

- `h2`: "What changes" → "What changes."

### 3. `src/components/HowWeWork.tsx`

- `h2`: "How we work" → "How we work."

### 5. `src/components/FAQSection.tsx`

- `h2`: "Common questions" → "Common questions."

### 6. `src/pages/InsightManifesto.tsx`

- `h1`: rendered from `entry.title` — titles need full stops added to the data strings in the `insightData` array:
  - "Eradicating the Enterprise Data Glue" → "Eradicating the Enterprise Data Glue."
  - "POS Job Workflow Automation" → "POS Job Workflow Automation."
  - "Costing Process Re-engineering" → "Costing Process Re-engineering."
  - "Validation Pipeline Automation" → "Validation Pipeline Automation."
  - "Multichannel Content Orchestration" → "Multichannel Content Orchestration."
  - "Enterprise Reporting Automation" → "Enterprise Reporting Automation."
  - "High-Volume Allocation Logistics" → "High-Volume Allocation Logistics."
- `h2` section titles rendered from `section.title` — full stops added to the data strings for all manifesto section titles across all insight entries (e.g. "Your Most Expensive Employees Are Being Used as Human Middleware." etc.)
- `CTABand` headline props (lines 643): "See something similar to your situation?" (already has `?`) and "Ready to run the Operational X-Ray on your workflows?" (already has `?`) — no change needed

### 7. `src/pages/Glossary.tsx`

- `h1`: "Operational Engineering Glossary" → "Operational Engineering Glossary."
- `h2` term headings rendered from `t.term` (e.g. "Data Glue", "Operational X-Ray" …): full stops added to each term string in the `glossaryTerms` array

### 8. `src/pages/Privacy.tsx`

- `h1`: "Privacy Policy" → "Privacy Policy."
- `h2` section headings: "1. Who we are" → "1. Who we are." etc. (all 6 sub-headings)

### 9. `src/pages/Cookies.tsx`

- `h1`: "Cookie Policy" → "Cookie Policy."
- `h2` section headings: "1. Our Approach" → "1. Our Approach." etc. (all 5 sub-headings)

---

## Technical Notes

- All `h1` and `h2` tags already ending in `.`, `?`, or `!` are left untouched.
- For components where heading text comes from a data array (InsightManifesto, ServicesSummary, ProofPoints, HowWeWork, EngagementTypes, FAQSection, Glossary), the full stop is added to the string in the data array, not to the JSX tag — this keeps the code clean.
- No visual layout changes are made; this is a pure copy edit.
- InsightManifesto contains a large data array spread over ~400 lines — every manifesto section `title` field across all 7 insight entries will be updated.