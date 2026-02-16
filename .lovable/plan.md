
# Mechanical Reveal Animation System

## Overview

Replace the current soft fade-in animations with a precision-engineered animation system that feels like architectural drawings being unrolled. This includes clipping-mask reveals, border-drawing effects, mechanical counter-up numbers, and staggered step reveals.

---

## 1. New Hook: `useCountUp`

Create `src/hooks/useCountUp.ts` -- a custom hook that animates a number from 0 to a target value with a rapid "odometer flicker" effect. It will:

- Accept a target value (e.g. 98, 50, 150), a prefix (e.g. "£"), and a suffix (e.g. "%", "k+")
- Use `requestAnimationFrame` for smooth 60fps updates
- Flicker through random digits rapidly before locking to the final value
- Only trigger when an Intersection Observer reports 50% visibility (`threshold: 0.5`)
- Keep font-weight at 800 throughout the animation

---

## 2. Replace Global Scroll Animation CSS

Update `src/index.css` to replace the existing `.scroll-fade-in` class with new mechanical animation classes:

- **`.clip-reveal`** -- Uses `clip-path: inset(0 100% 0 0)` transitioning to `clip-path: inset(0 0 0 0)` (left-to-right unroll)
- **`.clip-reveal-down`** -- Top-to-bottom variant using `clip-path: inset(0 0 100% 0)` to `inset(0)`
- **`.clip-reveal.visible`** -- Triggers the transition
- **`.border-draw`** -- A pseudo-element based border animation that draws the border linearly before content appears (using `scale(0)` to `scale(1)` on `::before`/`::after` with `transform-origin` control)
- Keep the existing `.scroll-fade-in` class intact so other pages (About, Services, etc.) continue working unchanged

---

## 3. Update `useScrollAnimation` Hook

Modify `src/hooks/useScrollAnimation.ts` to accept a configurable `threshold` (already supported) -- no structural changes needed. The hook already returns `{ ref, isVisible }` which works with the new CSS classes.

---

## 4. ProofPoints Component -- Mechanical Counter

Update `src/components/ProofPoints.tsx`:

- Import and use the new `useCountUp` hook for each metric
- Parse the stat strings to extract numeric values, prefixes, and suffixes:
  - "£150k+" becomes target: 150, prefix: "£", suffix: "k+"
  - "98%" becomes target: 98, suffix: "%"
  - "50%" becomes target: 50, suffix: "%"
- Use `threshold: 0.5` so counters start when section is half-visible
- Replace the static `{item.stat}` with the animated counter output
- Switch from `.scroll-fade-in` to `.clip-reveal` for the section wrapper and children
- Add `.border-draw` class to the section's top border

---

## 5. ServicesSummary (Methodology) -- Step Reveal

Update `src/components/ServicesSummary.tsx`:

- Give each step its own Intersection Observer (individual `useScrollAnimation` per item, or a single observer with per-element tracking)
- When a step enters the viewport:
  1. The step number (01, 02, 03) highlights in Safety Orange first (already orange, so it reveals first via a shorter delay)
  2. The headline appears 20ms after the number
  3. The body text appears 20ms after the headline
- Use `.clip-reveal` classes with staggered `transition-delay` values (0ms, 20ms, 40ms) for number, title, description respectively
- Add `.border-draw` effect on the horizontal dividers between steps

---

## 6. Other Homepage Sections -- Clip Reveal

Update remaining homepage components to use the new clip-reveal instead of fade-in:

- **`Philosophy.tsx`** -- Replace `.scroll-fade-in` with `.clip-reveal` on the label, heading, and body paragraphs
- **`Principal.tsx`** -- Same treatment: clip-reveal on label, heading, body, and link
- **`HowWeWork.tsx`** -- Replace `.scroll-fade-in` with `.clip-reveal` on cards; add `.border-draw` on card borders

---

## 7. Performance

- All animations use CSS `clip-path` transitions and CSS transforms only -- these are GPU-composited and produce zero layout thrashing
- The counter-up uses `requestAnimationFrame` with no DOM measurement in the loop
- No external animation libraries are added; everything is pure CSS transitions + one lightweight RAF hook
- `will-change: clip-path` is applied to animated elements and removed after transition completes via `transitionend` listener (handled in CSS with the `.visible` state)

---

## Technical Summary

| Change | File | Type |
|---|---|---|
| Counter-up hook | `src/hooks/useCountUp.ts` | New file |
| Mechanical CSS classes | `src/index.css` | Edit (add new classes, keep existing) |
| Proof Points counter | `src/components/ProofPoints.tsx` | Edit |
| Methodology step reveal | `src/components/ServicesSummary.tsx` | Edit |
| Philosophy clip reveal | `src/components/Philosophy.tsx` | Edit |
| Principal clip reveal | `src/components/Principal.tsx` | Edit |
| Blueprint clip reveal | `src/components/HowWeWork.tsx` | Edit |

Pages outside the homepage (About, Services, Case Studies, Contact) will continue using the existing `.scroll-fade-in` class and are not affected.
