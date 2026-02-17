
# Mobile Optimisation: /services and /insights

## Issues Identified

### /services page
1. **CTA headline overflow**: The `whitespace-nowrap` on "Stop managing the process. Build the system." forces the text onto one line, which overflows the 390px mobile viewport and likely causes horizontal scroll or content clipping.
2. **Hero section spacing**: The `pt-32 pb-24` on the hero section creates excessive vertical spacing on mobile before the Engagement Tiers section.
3. **Engagement Tiers cards**: The `p-8` padding on each tier card is generous for mobile; could be tightened.

### /insights page
1. **CTA headline overflow**: Same `whitespace-nowrap` issue on "Turn field-tested logic into measurable throughput." -- forces horizontal overflow on mobile.
2. **Table layout on mobile**: The inline `gridTemplateColumns: '15% 45% 28% 12%'` style applies at ALL breakpoints (even mobile), overriding the `grid-cols-1` class. This causes the 4-column layout to render on mobile screens, cramming text into tiny columns.
3. **Hero section spacing**: Same `pt-32 pb-16` creates excess top padding on mobile.

---

## Plan

### 1. Fix CTA headlines for mobile (Services + Insights)
- Remove `whitespace-nowrap` from both CTA headlines on mobile by making it responsive: apply `whitespace-nowrap` only at `md:` breakpoint and above.
- **Services**: Change `<span className="whitespace-nowrap">` to `<span className="md:whitespace-nowrap">`.
- **Insights**: Same treatment -- `<span className="md:whitespace-nowrap">`.

### 2. Fix Insights table mobile layout
- The inline `style={{ gridTemplateColumns: '15% 45% 28% 12%' }}` on each row overrides Tailwind's `grid-cols-1` on mobile. Move the grid template to only apply at `md:` using a conditional approach or by removing the inline style and using Tailwind classes.
- On mobile, each row should stack vertically with the ref, topic, metric, and status on separate lines with proper spacing.
- Add a `[TYPE]` badge (MANIFESTO/SCHEMATIC) to the mobile card view for better context.

### 3. Reduce mobile vertical spacing
- **Services hero**: Change `pt-32 pb-24` to `pt-24 pb-16 md:pt-32 md:pb-24` for tighter mobile spacing.
- **Insights hero**: Change `pt-32 pb-16` to `pt-24 pb-12 md:pt-32 md:pb-16`.
- **Engagement Tiers**: Reduce `py-24 lg:py-36` to `py-16 lg:py-36` on mobile.
- **Engagement tier cards**: Reduce padding from `p-8` to `p-6 md:p-8`.

### 4. Tighten FAQ and Blueprint mobile spacing
- **HowWeWork (Blueprint)**: Reduce `py-24 lg:py-36` to `py-16 lg:py-36`.
- **FAQSection**: Reduce `py-24 lg:py-36` to `py-16 lg:py-36`.
- **CTABand**: Reduce `py-28 lg:py-40` to `py-20 lg:py-40` for mobile.

---

## Technical Details

### Files to modify:
- `src/pages/Services.tsx` -- responsive `whitespace-nowrap`, tighter hero padding
- `src/pages/Insights.tsx` -- responsive `whitespace-nowrap`, tighter hero padding, fix table grid
- `src/components/EngagementTypes.tsx` -- mobile padding reductions
- `src/components/HowWeWork.tsx` -- mobile padding reductions
- `src/components/FAQSection.tsx` -- mobile padding reductions
- `src/components/CTABand.tsx` -- mobile padding reductions
