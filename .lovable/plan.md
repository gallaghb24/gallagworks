

# Gallag Works: Premium Executive Rebrand

## Overview
Complete visual and copy overhaul of the homepage (and site-wide global styles) to shift from a "developer/hacker" aesthetic to a premium "Management Consultancy meets Architectural Studio" look. This includes a new colour palette, restructured sections with all-new copy, removal of all terminal/code elements, and addition of a "Principal's Note" origin story section.

---

## 1. Global Theme Updates

### Colour Palette (src/index.css)
- **Background**: `#121212` (Deep Charcoal)
- **Secondary/alternating sections**: `#1A1C1E` (Matte Slate)
- **Foreground text**: `#F5F5F5` (Off-White)
- **Borders**: `#2F3133` (Graphite)
- **Primary accent**: `#FF5F1F` (Safety Orange -- buttons and tiny highlights only)
- **Muted foreground**: `#9A9A9A`
- **Card background**: `#1A1C1E`
- **Footer**: `#0E0E0E`

### Typography
- Drop Archivo. Use **Inter** for everything (headings bold 700/800, body 400).
- Keep **JetBrains Mono** for monospace labels/step numbers only.
- Remove `font-display` mapping from Archivo; map it to Inter instead (or just use `font-sans` for headings).
- Remove Archivo from Google Fonts import in `index.html`.

### Global Styles (src/index.css)
- Remove `terminal-scroll` keyframes and `.terminal-scroll` class.
- Remove `.blueprint-grid` dot pattern.
- Keep scroll-fade-in, fade-in-up animations.
- Add a `.bg-slate` utility for alternating section backgrounds.

### Tailwind Config (tailwind.config.ts)
- Update `font-display` to `["Inter", "system-ui", "sans-serif"]` (or remove it entirely and use `font-sans` with bold weights).

---

## 2. Navigation (Navigation.tsx)

- Change CTA button text from "Book a discovery call" to **"Request a Consultation"**.
- Keep the glassmorphism sticky header and text wordmark.
- Update mobile CTA text to match.

---

## 3. Hero Section (HeroSection.tsx) -- Complete Rewrite

**Remove**: Terminal window, terminal lines array, all code/hacker elements.

**New layout**: Full-width, left-aligned hero with generous padding.
- Monospace kicker: `[OPERATIONAL ENGINEERING]`
- **H1**: "Operational Engineering for the AI Era."
- **H2/subtext**: "We help operations and commercial leaders untangle the 'Data Glue' -- the manual re-keying, spreadsheets, and workarounds that kill capacity. We simplify the logic, then build the AI infrastructure to run it."
- **CTA**: "Request a Consultation" (Safety Orange pill button).
- **Right column**: Replace terminal with a minimalist "Workflow Node" SVG diagram -- thin crisp lines showing a messy tangled process on the left transforming into clean structured lines on the right. Pure SVG, no animation needed. This is an abstract line-art illustration, not a code window.

---

## 4. New Section: "The Philosophy" (New component: Philosophy.tsx)

This replaces the old ServicesSummary as Section 2 on the homepage. It is a text-heavy section with alternating background (`bg-slate`).

- Monospace kicker: `[PHILOSOPHY]`
- **Heading**: "Automating a broken process just creates a faster mess."
- **Body** (left-aligned paragraph, not centred): "You cannot scale a business on brute-force human effort, but you also can't fix bad logic with shiny technology. At Gallag Works, we start with the operational reality. We understand margin, SLAs, and adoption. We simplify the workflow first, kill the redundant steps, and build the automation second."

---

## 5. The Methodology (ServicesSummary.tsx) -- Copy and Style Update

Keep the vertical list with 1px dividers. Update copy and increase whitespace significantly (`py-12` per row instead of `py-8`).

- **[01] The Operational X-Ray**: "We map how the work actually flows. We don't just look at the org chart; we expose the invisible friction and manual workarounds."
- **[02] Process Architecture**: "We kill redundant steps, standardise inputs, and clarify ownership before touching any technology. Technology comes after the thinking."
- **[03] Decision Inboxes**: "We engineer lightweight, AI-driven automation that handles the routine aggregation, routing only the exceptions to your team for human judgement."
- Section heading: "The Methodology"
- Kicker label: `[METHODOLOGY]`

---

## 6. New Section: "The Principal" (New component: Principal.tsx)

Origin story section with alternating background.

- Monospace kicker: `[THE PRINCIPAL]`
- **Heading**: "Built by an Operator, not an Agency."
- **Body** (left-aligned): "Gallag Works is an independent operational design studio founded by Ben Gallagher. With nearly two decades of experience directing enterprise client delivery and managing multi-million-pound multichannel marketing and retail accounts, Ben learned a hard truth: efficiency protects the P&L. Managing high-stakes, 30+ person teams required a ruthless focus on operations. He founded Gallag Works to bring that exact 'efficiency-first' methodology to leaders across industries who are drowning in manual workarounds and ready to build scalable systems."
- Layout: Text on the left (8 columns), photo placeholder on the right (4 columns). Use a simple bordered placeholder square with monospace text "Photo" until a real image is provided.

---

## 7. Outcomes (ProofPoints.tsx) -- Redesign

Replace the 4-cell bordered grid with 3 elegant metric blocks using large typography.

- Remove box borders. Use clean vertical layout or a 3-column grid with generous spacing.
- Each metric: large bold number/label in Off-White (e.g., the metric name rendered in large display type), with a clean muted description underneath.
- Metrics:
  1. **Reclaimed Capacity** -- "Hours returned to margin-positive growth."
  2. **Protected Margins** -- "Reducing avoidable rework and errors."
  3. **High-Volume Adoption** -- "Building systems humans actually want to use."
- Kicker: `[OUTCOMES]`

---

## 8. How We Work (HowWeWork.tsx) -- Remove from Homepage

The methodology is now covered by the ServicesSummary vertical list. Remove HowWeWork from the homepage Index.tsx to avoid redundancy. It remains available on the Services page.

---

## 9. CTA Band (CTABand.tsx)

- Update default CTA text to: "Ready to build scalable operations?"
- Keep Safety Orange button, change text to "Request a Consultation".
- Left-align the content instead of centring.

---

## 10. Footer (Footer.tsx)

- Change email to `hello@gallag.works`.
- Clean minimal styling (already mostly correct).

---

## 11. Index.tsx -- Updated Section Order

New homepage section flow:
1. Hero (HeroSection)
2. The Philosophy (new Philosophy component)
3. The Methodology (ServicesSummary -- updated)
4. The Principal (new Principal component)
5. Outcomes (ProofPoints -- updated)
6. CTA Band
7. Footer

Remove HowWeWork from the homepage. Update email reference to `hello@gallag.works`.

---

## 12. About.tsx -- Email Update

- Update email references from `hello@gallagworks.com` to `hello@gallag.works`.

---

## Files Modified

1. **index.html** -- Remove Archivo font, keep Inter + JetBrains Mono
2. **src/index.css** -- New colour palette, remove terminal/blueprint CSS, add `.bg-slate` utility
3. **tailwind.config.ts** -- Update font-display to Inter, update colour tokens
4. **src/components/Navigation.tsx** -- CTA text to "Request a Consultation"
5. **src/components/HeroSection.tsx** -- Full rewrite: remove terminal, add workflow SVG diagram, new copy
6. **src/components/ServicesSummary.tsx** -- New methodology copy, increased whitespace, updated labels
7. **src/components/ProofPoints.tsx** -- 3 metrics with large elegant typography, no borders
8. **src/components/CTABand.tsx** -- Left-aligned, new copy, "Request a Consultation" button
9. **src/components/Footer.tsx** -- Email to `hello@gallag.works`
10. **src/pages/Index.tsx** -- New section order, add Philosophy + Principal, remove HowWeWork, update email

## New Files

11. **src/components/Philosophy.tsx** -- "Automating a broken process" philosophy section
12. **src/components/Principal.tsx** -- Ben Gallagher origin story with photo placeholder

## No Changes Needed

- **tailwind.config.ts** colour definitions are driven by CSS variables, so no structural changes needed there beyond font-display
- **HowWeWork.tsx** -- kept as-is for the Services page, just removed from homepage

