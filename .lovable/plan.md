
# Add About page at /about

## Overview
Create a dedicated About page focused on credibility, point of view, and working style. The page reuses existing design patterns (hero styling, section spacing, typography, scroll animations, CTA band) without duplicating service or engagement content.

## Files to create

### `src/pages/About.tsx`
New page component with:
- Page hero matching the Services page pattern (centred H1 + subtitle, `pt-32 pb-16`)
- Five content sections using the existing spacing (`py-16 lg:py-28`), scroll-fade-in animations, and coral kicker labels
- Sections: "My approach", "What you can expect", "Where this helps most", "Background", and a CTA using the existing `CTABand` component
- Bullet sections use the existing coral left-rail card style from ProofPoints
- All copy exactly as specified in the brief, UK English
- Meta title set via `useEffect` consistent with other pages

## Files to modify

### `src/App.tsx`
- Import `About` page component
- Add `<Route path="/about" element={<About />} />` before the catch-all route

### `src/components/Navigation.tsx`
- Add `{ to: "/about", label: "About" }` to the `navLinks` array (inserted before "Contact" to keep logical order: Services, About, Case Studies, Contact)

## Design details
- Hero: same centred layout as Services page (`max-w-3xl mx-auto text-center`)
- Section kickers: small uppercase coral text (e.g. "POINT OF VIEW", "WORKING TOGETHER", "FIT", "BACKGROUND") matching the existing pattern from ProofPoints
- Bullet items: coral left-rail cards (`border border-border border-l-4 border-l-primary rounded-lg p-6 card-hover`) with scroll-fade-in and staggered delays
- "My approach" paragraphs rendered as standard body text with `text-foreground/70` styling
- "Background" paragraphs rendered similarly, each as a `<p>` with spacing
- Final CTA uses the shared `CTABand` component with headline "Want to talk it through?" plus a secondary email line below
- Lucide icons on bullet items are optional; will add appropriate monoline icons (e.g. `Clock`, `Target`, `Wrench`, `Users`, `Shield`) to the "What you can expect" list for visual consistency

## Technical details
- No new dependencies required
- Reuses `useScrollAnimation` hook, `Navigation`, `Footer`, `CTABand` components
- No database or backend changes needed
