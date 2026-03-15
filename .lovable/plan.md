

# Phase 3: Home Page Content & Dual-Surface Layout

## What changes

### 1. Dual-surface section pattern
The strategy calls for alternating dark charcoal and warm stone sections. Currently every section is dark. The home page will alternate:

- **Hero** → dark (bg-background) — stays as-is
- **Philosophy** → warm stone (bg-warm-stone, text-on-light)
- **ServicesSummary** → dark (bg-background) — stays as-is
- **Principal / Founder** → warm stone (bg-warm-stone, text-on-light)
- **ProofPoints** → dark (bg-slate) — stays as-is
- **LeakageEstimator** → dark (bg-background) — stays as-is
- **CTABand** → dark — stays as-is

This means Philosophy and Principal sections get the light surface treatment. Need to swap text colours within those sections using `text-on-light` and muted equivalents.

### 2. Typography: add `font-display` to all headings
Currently headings use default `font-bold` without the `font-display` class (Sora). Every `<h1>`, `<h2>`, `<h3>` across home components needs `font-display` and tighter tracking via a utility class or inline style (`tracking-tight` or `-0.02em`).

**Files:** `HeroSection.tsx`, `Philosophy.tsx`, `ServicesSummary.tsx`, `Principal.tsx`, `ProofPoints.tsx`, `LeakageEstimator.tsx`, `CTABand.tsx`

### 3. Hero copy refinement
Current hero is good but can better match the strategy doc's positioning statement. Update subhead to reference the gap between consultancies and dev shops:

> "I sit in the gap between the consultancies who write the strategy deck and the dev shops who build the tool. I design how work should move, then build the systems that make it happen."

### 4. Philosophy content update
Align more closely with the four operating principles from the strategy:
- Process before technology
- Adoption is the product
- Eliminate the Human Middleware
- Human judgement stays in the loop

Keep the punchy headline, refine the body paragraphs.

### 5. Services summary — add Fractional AI Leadership
The strategy doc defines four offerings. Currently showing three (X-Ray, Workflow Engineering, Build & Deploy). Add **Fractional AI Leadership** as a fourth card, or restructure to show the top 3 with a mention of fractional leadership. I recommend keeping 3 cards (cleaner grid) but swapping Build & Deploy for Fractional AI Leadership since it's a key differentiator, and moving Build & Deploy into the services page detail.

### 6. LeakageEstimator header
Update "Quantify your operational drag" → "Quantify your Human Middleware cost" to reinforce the core term.

### 7. Footer CTA headline
Already updated to "Start the Transformation" — confirmed good.

## Files to edit
- `src/components/HeroSection.tsx` — font-display on h1, refined subhead
- `src/components/Philosophy.tsx` — dual-surface (warm stone), font-display, refined copy
- `src/components/ServicesSummary.tsx` — font-display on headings
- `src/components/Principal.tsx` — dual-surface (warm stone), font-display
- `src/components/ProofPoints.tsx` — font-display on headings
- `src/components/LeakageEstimator.tsx` — header copy update
- `src/components/CTABand.tsx` — font-display on h2
- `src/index.css` — add utility classes for light-surface text variants (`.section-light` pattern)

