

# Comprehensive UI and Copy Overhaul

## Overview
Update navigation labels, font weights, copy, max-width constraints, and spacing across the site -- focusing on the Services page (new tiered copy) and the About/Principal page (manifesto-style rewrite).

---

## 1. Navigation (src/components/Navigation.tsx)

- Rename "Who we are" to "The Principal" in `navLinks` array (line 34)
- CTA buttons already say "Request a Consultation" -- no change needed

---

## 2. Global Typography: Font Weight Contrast

All H1/H2 elements across all modified files will use `font-extrabold` (800 weight). All body paragraphs will use `font-light` (300 weight). This applies to every file touched below.

Max-width on body text blocks: increase from `max-w-[600px]`/`max-w-[650px]` to `max-w-[720px]`.

---

## 3. Services Page (src/pages/Services.tsx)

- Update page title to "Services | Gallag Works" (already correct)
- Replace intro copy with: "Every engagement starts with the Operational X-Ray. We don't bring pre-built solutions; we engineer around how your organization actually operates."
- H1 font weight to `font-extrabold`
- Body paragraph to `font-light`, `max-w-[720px]`
- Increase bottom padding from `pb-16` to `pb-24`

---

## 4. Engagement Types -- New Tiered Copy (src/components/EngagementTypes.tsx)

Replace the current 5-card engagement list with the 3 exact tiers from the brief:

**Tier 1:** Title: "Operational Audit and X-Ray" | Sub-label: "2-4 Weeks | Fixed Scope" | New copy as specified

**Tier 2:** Title: "Structural Prototype" | Sub-label: "4-8 Weeks | Proof of Value" | New copy as specified

**Tier 3:** Title: "Enterprise Integration" | Sub-label: "Retainer or Phase-Based" | New copy as specified

- H2 to `font-extrabold`, descriptions to `font-light`
- Sub-label paragraph to `font-light`, `max-w-[720px]`
- Card h3 titles to `font-extrabold`
- Section padding increase: `py-20 lg:py-32`

---

## 5. How We Work (src/components/HowWeWork.tsx)

- H2 to `font-extrabold`
- Step descriptions to `font-light`
- Section padding increase: `py-20 lg:py-32`

---

## 6. FAQ Section (src/components/FAQSection.tsx)

- H2 to `font-extrabold`
- Answer text to `font-light`
- Section padding increase: `py-20 lg:py-32`

---

## 7. The Principal Page (src/pages/About.tsx) -- Full Manifesto Rewrite

**Hero:**
- Change kicker to `[THE PRINCIPAL]`
- H1: "Principal-Led Transformation." with `font-extrabold`
- Intro paragraph: "Gallag Works is an independent studio, not a high-volume agency. You work directly with the Principal."
- Body to `font-light`, `max-w-[720px]`
- Update page title to "The Principal | Gallag Works"

**The Approach / Methodology section:**
- Replace the current multi-paragraph block with the methodology copy: "Most organizations don't have an AI problem. They have a 'How things work' problem. I engineer the 'Data Glue' out of the system so your people go back to making decisions, not managing tasks. I lead engagements directly, ensuring that what we build is technically sound, commercially viable, and actually adopted."
- H2 to `font-extrabold`, body to `font-light`
- Max-width to `max-w-[720px]`

**Experience Block (Background section):**
- Replace the current long narrative with the concise stats block and the full narrative paragraph
- Add a stats row: "20 Years in Operations. GBP15m+ Contract Oversight. 4,000+ User Platform Adoptions. 30+ Person Team Leadership." -- styled as monospace stats
- Then the full narrative paragraph from the brief underneath
- H2 to `font-extrabold`, body to `font-light`

**All other sections** (What you can expect, Where this helps most):
- H2 to `font-extrabold`
- Card text to `font-light`
- Increase section padding to `py-24 lg:py-36` (adding 4rem extra)

---

## 8. Principal Component on Homepage (src/components/Principal.tsx)

- Fix the duplicated text (there is a copy-paste duplication in the paragraph)
- Update copy to match the new manifesto narrative
- H2 to `font-extrabold`, body to `font-light`
- Max-width constraint to `max-w-[720px]` on the paragraph

---

## 9. CTA Band (src/components/CTABand.tsx)

- H2 to `font-extrabold` (already bold, change to extrabold)

---

## 10. HeroSection (src/components/HeroSection.tsx)

- H1 to `font-extrabold`
- Body to `font-light`

---

## Files Modified

1. **src/components/Navigation.tsx** -- rename nav link
2. **src/pages/Services.tsx** -- updated intro copy, font weights, max-width
3. **src/components/EngagementTypes.tsx** -- 3-tier card content, font weights, spacing
4. **src/components/HowWeWork.tsx** -- font weights, spacing
5. **src/components/FAQSection.tsx** -- font weights, spacing
6. **src/pages/About.tsx** -- full manifesto rewrite, font weights, stats block, spacing
7. **src/components/Principal.tsx** -- fix duplicated text, update copy, font weights
8. **src/components/CTABand.tsx** -- font weight update
9. **src/components/HeroSection.tsx** -- font weights

