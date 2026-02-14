

# Add Scroll-Triggered and Interactive Animations

## Problem with current animations
Every element using `animate-fade-in-up` fires its animation on page load, even if the element is below the fold and not yet visible. This means sections further down the page have already finished animating before the user scrolls to them -- wasting the effect entirely.

## What we'll add

### 1. Scroll-triggered fade-in (Intersection Observer)
Create a lightweight `useScrollAnimation` hook that uses the browser's Intersection Observer API. Elements will animate only when they enter the viewport.

- Hero section: animates immediately on load (as it does now -- this is correct)
- All other sections (ProofPoints, ServicesSummary, HowWeWork, CTABand, EngagementTypes, FAQSection, CaseStudyCard): animate when scrolled into view
- Staggered children (e.g. proof point cards, service cards, how-we-work steps) animate sequentially with small delays

### 2. Interactive hover effects on cards
- Proof point cards, service summary cards, engagement type cards, case study cards: subtle lift + border colour shift on hover
- Navigation links: underline slide-in effect
- CTA buttons already have `group-hover:translate-x-1` on the arrow -- keep that

### 3. Smooth mobile menu transition
- Mobile nav menu currently pops in with no transition -- add a slide-down animation

### 4. Subtle section dividers
- A thin horizontal rule or gradient fade between some sections for visual rhythm (CSS only, no extra markup needed)

## Technical approach

### New hook: `src/hooks/useScrollAnimation.ts`
- Uses `IntersectionObserver` with a threshold (e.g. 0.15)
- Returns a ref and an `isVisible` boolean
- Applies CSS classes when visible
- `once` option so the animation only triggers the first time

### CSS additions in `src/index.css`
- `.scroll-fade-in` -- starts invisible, transitions to visible when a class is toggled
- `.scroll-fade-in.visible` -- the visible state
- Hover utilities for card lift effect
- Mobile menu slide-down keyframe

### Component updates
Each section component gets the scroll animation hook applied to its wrapper or individual cards:
- `ProofPoints.tsx` -- each card animates on scroll with stagger
- `ServicesSummary.tsx` -- heading + cards animate on scroll
- `HowWeWork.tsx` -- steps animate on scroll with stagger
- `CTABand.tsx` -- animates on scroll
- `EngagementTypes.tsx` -- cards animate on scroll with stagger
- `FAQSection.tsx` -- heading + accordion animate on scroll
- `CaseStudyCard.tsx` -- each card animates on scroll
- `CaseStudies.tsx` -- hero animates on load, cards on scroll
- `Contact.tsx` -- hero on load, form on scroll
- `Services.tsx` -- hero on load, sections on scroll
- `Navigation.tsx` -- mobile menu slide-down transition
- `Footer.tsx` -- fade-in on scroll

### No external libraries
Pure CSS transitions + Intersection Observer. No Framer Motion or heavy animation libraries. Keeps bundle size unchanged and performance fast.

