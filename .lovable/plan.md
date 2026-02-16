
# "Who We Are" Page: Architectural Polish

## Overview
Strip all SaaS-style elements and centre-alignment from the About page. Enforce the same left-aligned engineering grid, sharp-cornered cards, and generous whitespace established on the homepage and Services page.

---

## 1. Hero Section (lines 41-52)

- Remove `mx-auto text-center` from the inner container
- Left-align the H1 and intro paragraph
- Add monospace kicker: `[WHO WE ARE]`
- Constrain intro paragraph with `max-w-[600px]`
- Use `font-bold` on H1 to match other pages

---

## 2. "The Approach" Section (lines 55-80)

- Remove `mx-auto text-center` from container -- left-align everything
- Change kicker to monospace style: `font-mono text-xs text-primary uppercase tracking-widest` with text `[POINT OF VIEW]`
- Constrain paragraph block with `max-w-[650px]`
- Left-align all body paragraphs (they inherit from parent, just need to remove the centred container)
- Increase vertical padding to `py-20 lg:py-32` for more generous spacing

---

## 3. "What You Can Expect" Cards (lines 83-110)

- Remove `mx-auto` from container -- left-align the section
- Left-align kicker and heading, switch kicker to monospace `[WORKING TOGETHER]`
- **Card styling changes:**
  - Remove: `border-l-4 border-l-primary rounded-lg card-hover`
  - Add: `bg-[#1A1C1E] border border-[#2F3133] p-8` (sharp corners, Matte Slate background, 1px Graphite border)
- Icon styling: keep `strokeWidth={1.5}` for thin line-art look, keep Safety Orange colour
- Increase section padding to `py-20 lg:py-32`

---

## 4. "Where This Helps Most" Cards (lines 114-145)

- Same treatment as "What you can expect" above
- Remove `mx-auto` and `text-center` from container, kicker, heading, and description
- Switch kicker to monospace `[FIT]`
- Constrain the sub-paragraph with `max-w-[600px]`
- **Card styling**: identical to above -- remove SaaS borders, apply `bg-[#1A1C1E] border border-[#2F3133] p-8`
- Increase section padding to `py-20 lg:py-32`

---

## 5. "Experience and Working Style" Section (lines 148-173)

- **Convert to 2-column layout**: heading on the left (4-5 columns), body paragraphs on the right (7-8 columns)
- Remove `mx-auto text-center` from container
- Switch kicker to monospace `[BACKGROUND]`
- Left-align all paragraphs
- Constrain the right-column text with `max-w-[650px]`
- Ensure text is `text-foreground` (Crisp Off-White) for the "Executive Memo" feel -- or keep muted-foreground for body with foreground for heading
- Increase section padding to `py-20 lg:py-32`
- Use alternating `bg-slate` background to create depth

---

## 6. CTA / Email Section (lines 176-186)

- Keep as-is (already handled by CTABand component with generous padding from prior updates)

---

## Files Modified

1. **src/pages/About.tsx** -- all changes are in this single file

## Summary of Changes
- Kill all `text-center` and `mx-auto` centring on text containers
- Replace all kickers with monospace `font-mono text-xs text-primary uppercase tracking-widest` format
- Replace card classes from `border-l-4 border-l-primary rounded-lg card-hover` to `bg-[#1A1C1E] border border-[#2F3133]` with increased padding
- Convert "Experience" section to a 2-column grid layout
- Add `max-w-[600px]` / `max-w-[650px]` constraints to all body text blocks
- Increase vertical padding on all sections for generous, premium spacing
