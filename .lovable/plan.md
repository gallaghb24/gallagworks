

# Copy and Visual Overhaul: Operational Engineering Voice

## Overview
Update copy across the entire site to embed three signature concepts -- "AI is an Operational X-Ray" (diagnostic), "Decision Inboxes" (outcome), and "Data Glue" (the problem we fix) -- and reformat case studies as technical Project Schematics. The "How we work" section gets a blueprint/technical-drawing aesthetic.

---

## 1. Hero Section (HeroSection.tsx)

**Copy changes:**
- Subtext updated to introduce the core concepts: "We use AI as an Operational X-Ray to expose the Data Glue -- the manual re-keying and spreadsheet handoffs -- then engineer Decision Inboxes so your team moves from managing tasks to making decisions."
- Terminal lines updated to reflect the new vocabulary:
  - `> running operational x-ray...`
  - `> scanning data glue: manual re-keying detected`
  - `> mapping spreadsheet handoffs...`
  - `> friction identified: 4 handoff points`
  - `> engineering decision inbox...`
  - `> routing exceptions to human judgement`
  - `> deploying automation pipeline...`
  - `> data glue eliminated: 3 processes`
  - `> decision inbox live: ops team`
  - `> capacity released: 12h/week`

---

## 2. Services / What We Do (ServicesSummary.tsx)

**Copy changes to the three service rows:**
- **[01 DIAGNOSE]**: "AI is an Operational X-Ray. We scan how work actually flows to expose the Data Glue -- the manual re-keying, spreadsheet handoffs, and copy-paste chains -- that silently consumes your team's time."
- **[02 BUILD]**: "We fix the Data Glue before we automate. Remove duplication, clarify ownership, clean the data layer. Then we engineer Decision Inboxes so your team moves from managing tasks to making decisions."
- **[03 EMBED]**: "Working automation deployed into day-to-day use with adoption planning, governance, and exception routing baked in. Not strategy decks that gather dust."

---

## 3. How We Work -- Blueprint Aesthetic (HowWeWork.tsx)

**Copy changes to the three steps:**
- **01 X-Ray**: "Run the Operational X-Ray. Map every input, handoff, decision point, and failure mode. Find the Data Glue."
- **02 Engineer**: "Fix the Data Glue first. Eliminate re-keying, consolidate spreadsheet handoffs, clarify ownership. Build Decision Inboxes that surface only what needs human judgement."
- **03 Deploy**: "Ship working automation with adoption planning and governance baked in. Monitor, iterate, and hand over."

**Visual changes -- blueprint aesthetic:**
- Add a subtle CSS grid-dot or grid-line background pattern to the section (using a repeating CSS background-image of faint dots/lines on the charcoal) to evoke a technical drawing
- Add a monospace `[BLUEPRINT]` kicker label
- Add dashed connecting lines between steps (dashed border style instead of solid) to look like technical drawing annotation lines
- Add small "pin" markers (small circles) at connection points
- Keep the bordered boxes but switch to dashed borders to reinforce the schematic feel

---

## 4. Outcomes / Proof Points (ProofPoints.tsx)

**Updated metrics to reflect new vocabulary:**
- **Data Glue Eliminated**: "Manual re-keying, spreadsheet handoffs, and copy-paste chains removed from core workflows."
- **Decision Inboxes Live**: "Exceptions and decisions routed to the right humans -- not buried in process noise."
- **Capacity Released**: "Routine work handled by systems, freeing teams for judgement-led tasks."
- **Adoption Achieved**: "Automation deployed into day-to-day use -- not left in a slide deck."

---

## 5. Case Studies -- Project Schematic Format (CaseStudies.tsx + CaseStudyCard.tsx)

**CaseStudyCard.tsx -- new props and layout:**
- Replace the current props (`problem`, `whatChanged`, `stayedHuman`, `outcome`) with a new "Project Schematic" structure:
  - `projectId` (e.g., "GW-001")
  - `title` (e.g., "POS Job Workflow")
  - `sector`
  - `friction` -- array of strings describing the friction points (the Data Glue)
  - `engineering` -- array of strings describing what was engineered
  - `humanLayer` -- what stayed human
  - `result` -- the measurable outcome
- Visual layout: monospace project ID header, then two columns on desktop -- left column for FRICTION (in orange-tinted section), right column for ENGINEERING -- followed by HUMAN LAYER and RESULT rows
- Use 1px borders and monospace section labels (`[FRICTION]`, `[ENGINEERING]`, `[HUMAN LAYER]`, `[RESULT]`) to look like a technical project spec

**CaseStudies.tsx -- updated data:**
- Rename the three case studies with project schematic framing:
  1. **GW-001 | POS Job Workflow** (Professional Services): Friction = manual data pulls from multiple systems, reformatting, reports outdated on delivery. Engineering = single data pipeline, automated report generation, live data feeds. Human Layer = commentary, narrative, client recommendations. Result = reporting cycle cut 70%, 15h/week reclaimed.
  2. **GW-002 | Costing Process** (Media/Publishing): Friction = spreadsheet handoffs, email coordination, duplicated tracking, missed deadlines. Engineering = consolidated production system, automated status/assignments/alerts. Human Layer = editorial judgement, creative direction, stakeholder sign-off. Result = missed deadlines down 85%, 10h/week coordination overhead removed.
  3. **GW-003 | Validation Pipeline** (Financial Services): Friction = high-volume manual checks, no capacity for improvement. Engineering = validation rules in data pipeline, automated checks, exception-handling workflows. Human Layer = judgement calls on exceptions, relationship management, governance. Result = manual checking reduced 60%, 20h/week reclaimed.
- Update page title to "Project Schematics | Gallag Works"
- Update heading to "Project Schematics" with subtext "Technical summaries from recent engagements. Different sectors, same engineering approach."

---

## 6. About Page (About.tsx)

**Copy updates to embed new vocabulary:**
- Point of View section: weave in "Data Glue" and "Decision Inboxes" language. E.g., "Most organisations don't have an AI problem. They have a Data Glue problem -- manual re-keying, spreadsheet handoffs, and copy-paste chains that silently consume capacity."
- Add a line: "We engineer Decision Inboxes: structured views that surface only the exceptions and choices that need human judgement."

---

## 7. Services Page (Services.tsx)

- Update page title to "Services | Gallag Works"
- Update intro copy to reference the Operational X-Ray and Data Glue concepts

---

## 8. Navigation and CTA updates

- Update CTA headline in Index.tsx to: "Ready to eliminate the Data Glue from your operations?"
- Update the email address across the site from `hello@intelligenttransformation.studio` to `hello@gallagworks.com` (Index.tsx, About.tsx, Footer.tsx)

---

## Files Modified

1. `src/components/HeroSection.tsx` -- copy + terminal lines
2. `src/components/ServicesSummary.tsx` -- service descriptions
3. `src/components/HowWeWork.tsx` -- step copy + blueprint CSS aesthetic (dashed borders, grid-dot background, pin markers)
4. `src/components/ProofPoints.tsx` -- metric labels and descriptions
5. `src/components/CaseStudyCard.tsx` -- new props interface and schematic layout
6. `src/pages/CaseStudies.tsx` -- new data structure, page title, heading
7. `src/pages/About.tsx` -- copy updates with new vocabulary
8. `src/pages/Services.tsx` -- page title and intro copy
9. `src/pages/Index.tsx` -- CTA headline, email address
10. `src/components/Footer.tsx` -- email address
11. `src/index.css` -- blueprint grid-dot background utility class for How We Work section

No new dependencies required.

