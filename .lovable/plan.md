
# Services Page: Engineering Schematic Polish

## Overview
Strip all SaaS-style elements (rounded corners, thick coloured borders, boxy accordions) from the Services page and enforce the "Engineering Schematic" aesthetic -- sharp corners, 1px graphite borders, generous whitespace, and monospace labels.

---

## 1. Services Intro Paragraph (Services.tsx)

Add `max-w-[600px]` to the body paragraph on line 28 to constrain reading width to ~60-65 characters, matching the Philosophy section treatment.

---

## 2. Engagement Types Cards (EngagementTypes.tsx)

**Remove SaaS styling:**
- Remove `border-l-4 border-l-primary` (thick orange left border)
- Remove `rounded-lg` (rounded corners)
- Remove `card-hover` class

**New "Technical Brief" styling:**
- Sharp corners (no border-radius)
- `bg-[#1A1C1E]` (Matte Slate) background
- `border border-[#2F3133]` (1px Graphite border)
- Increase padding to `p-10` for more whitespace

**Tags (e.g., "Fixed scope", "Time-boxed"):**
- Remove `bg-primary/10 rounded-full`
- Replace with: `font-mono text-[10px] uppercase tracking-widest text-primary border border-primary px-2 py-0.5` -- monospace, Safety Orange text, 1px orange border, transparent background, sharp corners

**Section labels:**
- Change kicker from centred to left-aligned with monospace `[ENGAGEMENTS]` style
- Change heading and subtext to left-aligned

---

## 3. How We Work -- Blueprint Refinement (HowWeWork.tsx)

**Borders:**
- Change step boxes from `border-dashed` to `border border-[#2F3133]` (solid 1px Graphite)

**Connecting lines:**
- Replace dashed connecting lines with solid thin graphite lines
- Replace the `border-2 border-primary` pin dots with smaller `w-1.5 h-1.5 bg-primary rounded-full` Safety Orange dots (no border, just filled)
- Remove `border-dashed border-primary/50` from connecting segments, use `border-[#2F3133]` solid instead

---

## 4. FAQ Section -- Architectural List (FAQSection.tsx)

**Complete restyle:**
- Remove `border border-border border-l-4 border-l-primary rounded-lg px-6 bg-card` from AccordionItem
- Replace with: `border-b border-[#2F3133] bg-transparent` -- just a bottom border separator, no box, no background
- Remove `space-y-3` from the Accordion wrapper (items now flow as a continuous list separated by border lines)
- Keep `hover:no-underline` on the trigger
- Section labels: left-align kicker and heading with monospace `[FAQ]` style

---

## 5. CTA Band (CTABand.tsx)

- Increase vertical padding from `py-20 lg:py-28` to `py-28 lg:py-40` for a more generous, high-end finish
- No other changes needed (button is already Safety Orange)

---

## Files Modified

1. **src/pages/Services.tsx** -- constrain intro paragraph width
2. **src/components/EngagementTypes.tsx** -- card redesign, tag styling, left-align section
3. **src/components/HowWeWork.tsx** -- solid borders, solid connecting lines, smaller orange dots
4. **src/components/FAQSection.tsx** -- strip to minimal bordered list, left-align section
5. **src/components/CTABand.tsx** -- increase vertical padding
