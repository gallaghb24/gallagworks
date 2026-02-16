

# Consolidate Case Studies and Insights into a Unified Knowledge Hub

## Overview

Merge the standalone Case Studies page into the Insights hub, creating a single "Knowledge Hub" at `/insights`. Each case study becomes a unified insight page at `/insights/[slug]` combining manifesto-style narrative with a Technical Schematic section. The existing `/case-studies` routes will be removed, and all navigation, footer, structured data, and SEO assets will be updated accordingly.

---

## 1. Navigation and Footer Updates

**Navigation (`src/components/Navigation.tsx`)**
- Remove the "Case Studies" link from `navLinks`
- Keep "Insights" as the primary anchor to `/insights`

**Footer (`src/components/Footer.tsx`)**
- Replace the "Case Studies" link with "Insights" pointing to `/insights`

---

## 2. Expand the Insights Index Page (`src/pages/Insights.tsx`)

- Add all six case study entries (GW-001 through GW-006) to the technical index table alongside the existing GW-INS-001 manifesto entry
- Each row links to `/insights/[slug]` using the existing semantic slugs (e.g., `multichannel-content-orchestration`, `enterprise-reporting-automation`)
- Group entries: manifestos first, then project schematics (or interleave by relevance)

---

## 3. Create Unified Insight Pages

**New component or expanded `InsightManifesto.tsx`**

Each `/insights/[slug]` page will have a two-part structure:

**Part 1 -- Manifesto (narrative copy)**
- Header with Surgical Viewfinder brandmark and monospace datestamp
- Written in the "Principal-to-Peer" tone with contextual narrative about the operational challenge and engineering approach
- For the existing Data Glue manifesto, this content already exists
- For the six case studies, generate brief manifesto-style narratives from the existing friction/engineering/result data

**Part 2 -- Technical Schematic**
- Separated by a horizontal 1px Graphite rule
- Section title: `[TECHNICAL SCHEMATIC]` in monospace
- Displays the structured case study data:
  - `Ref: GW-XXX`
  - `Friction:` bullet points
  - `Engineering:` bullet points
  - `Human Layer:` paragraph
  - `Result:` highlighted block (with the existing orange-border treatment)
- Includes the confidentiality disclaimer box

**Implementation approach:** Create a data structure that maps each slug to both its manifesto content and its technical schematic data. Use a single page component with slug-based routing to render the correct content.

---

## 4. Routing Updates (`src/App.tsx`)

- Remove `/case-studies` and `/case-studies/:slug` routes
- Remove the `CaseStudies` import
- Keep `/insights` and `/insights/:slug` routes (already exist)

---

## 5. Structured Data Updates (`src/components/StructuredData.tsx`)

- Update all `CreativeWork` URLs from `/case-studies/[slug]` to `/insights/[slug]`
- Embed FAQPage schema within unified insight pages where applicable

---

## 6. Sitemap and Robots.txt

**`public/sitemap.xml`**
- Remove all `/case-studies/*` URLs
- Add `/insights/[slug]` entries for all six project schematics
- Keep existing `/insights/eradicating-enterprise-data-glue` entry
- Maintain priority levels: Insights Hub at 1.0, individual insights at 0.9

**`public/robots.txt`**
- No changes needed (already points to correct sitemap URL)

---

## 7. Cleanup

- The `src/pages/CaseStudies.tsx` file can be deleted (or left unused)
- The `src/components/CaseStudyCard.tsx` component will be repurposed as the Technical Schematic rendering within the unified insight pages

---

## Technical Details

### Files to modify:
1. `src/components/Navigation.tsx` -- remove Case Studies link
2. `src/components/Footer.tsx` -- replace Case Studies with Insights link
3. `src/App.tsx` -- remove case-studies routes and import
4. `src/pages/Insights.tsx` -- expand index with all entries
5. `src/pages/InsightManifesto.tsx` -- refactor into a unified template that renders both manifesto narrative and technical schematic based on slug
6. `src/components/StructuredData.tsx` -- update URLs to `/insights/`
7. `public/sitemap.xml` -- consolidate under `/insights/` paths

### Files to delete:
- `src/pages/CaseStudies.tsx` (content absorbed into InsightManifesto)

### Data architecture:
A single data map keyed by slug will hold: manifesto copy (title, subtitle, sections), technical schematic data (ref, sector, friction array, engineering array, human layer, result), and FAQPage schema entries where applicable.

