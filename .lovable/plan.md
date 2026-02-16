
# Final Refinements: Ref System, Shadow Glossary, Recursive Linking, and Sitemap Refresh

## Overview

Four coordinated changes: migrate all display refs to GW-LOG-XXX, create a stealth Glossary page with DefinedTerm schema, add inline cross-references within the primary manifesto, and refresh the sitemap.

---

## 1. Unified Ref System (GW-LOG-XXX)

Update all `ref` fields across three files. URL slugs remain unchanged -- only the display reference codes change.

**Mapping:**
- `GW-INS-001` becomes `GW-LOG-101`
- `GW-001` becomes `GW-LOG-201`
- `GW-002` becomes `GW-LOG-202`
- `GW-003` becomes `GW-LOG-203`
- `GW-004` becomes `GW-LOG-204`
- `GW-005` becomes `GW-LOG-205`
- `GW-006` becomes `GW-LOG-206`

**Files affected:**
- `src/pages/InsightManifesto.tsx` -- update `ref` on each entry and `schematic.ref` fields
- `src/pages/Insights.tsx` -- update `ref` in the index table array
- `src/components/StructuredData.tsx` -- update `id` fields in `caseStudySchemas` and the `identifier` in the generated JSON-LD

---

## 2. The 'Shadow' Glossary

**New file: `src/pages/Glossary.tsx`**

A stealth page at `/glossary` with no header navigation link.

**Terms (each with an anchor ID and `scroll-mt-24` for sticky header clearance):**
- `#data-glue` -- Data Glue
- `#operational-x-ray` -- Operational X-Ray
- `#operational-engineering` -- Operational Engineering
- `#decision-inbox` -- Decision Inbox
- `#margin-recovery` -- Margin Recovery
- `#human-middleware` -- Human Middleware

Each term gets a 2-3 sentence definition in the Principal-to-Peer tone. The page includes JSON-LD `DefinedTerm` schema for each entry to maximise Featured Snippet and AI answer capture.

**Layout:** Technical index aesthetic matching the existing site -- monospace labels, 1px graphite borders, 0px border-radius.

**Route:** Add to `src/App.tsx` above the catch-all.

**Footer:** Add a monospace `[GLOSSARY]` link in the Legal column of `src/components/Footer.tsx`.

---

## 3. Recursive Linking

**Update `src/pages/InsightManifesto.tsx`:**

1. Change the `ManifestoSection` interface so `paragraphs` accepts `React.ReactNode[]` instead of `string[]`.

2. In the GW-LOG-101 (Data Glue manifesto) entry:
   - First mention of "Data Glue" in section 01 becomes a link to `/glossary#data-glue`
   - Section 02 ("THE EVIDENCE") paragraph mentioning "98% reduction in processing time" gets an inline `[LOG-205]` cross-reference linking to `/insights/enterprise-reporting-automation#schematic`
   - Section 02 paragraph mentioning "multichannel content orchestration pipeline" gets an inline `[LOG-204]` linking to `/insights/multichannel-content-orchestration#schematic`

3. **Link styling:** Safety Orange (`text-primary`) with no underline, wrapped in brackets: `[LOG-205]`. On hover, slight brightness increase. This gives the appearance of a citation in a technical paper.

---

## 4. Sitemap Refresh

**`public/sitemap.xml`:**
- Add `/glossary` entry with `priority: 0.5` and `changefreq: monthly`
- No slug changes needed (URL paths are unchanged)

---

## Technical Details

### Files to create:
1. `src/pages/Glossary.tsx` -- Glossary page with DefinedTerm JSON-LD, anchor IDs with `scroll-mt-24`, and the schematic visual language

### Files to modify:
1. `src/pages/InsightManifesto.tsx` -- Update refs to GW-LOG-XXX, change `paragraphs` type to `ReactNode[]`, add inline cross-links in GW-LOG-101 manifesto with Safety Orange bracket styling
2. `src/pages/Insights.tsx` -- Update refs in index table
3. `src/components/StructuredData.tsx` -- Update identifier fields to GW-LOG-XXX
4. `src/App.tsx` -- Add `/glossary` route
5. `src/components/Footer.tsx` -- Add `[GLOSSARY]` monospace link in Legal column
6. `public/sitemap.xml` -- Add glossary entry
