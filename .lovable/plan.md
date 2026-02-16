
# Apply Mechanical Reveal Animations to Services and About Pages

## Overview

Replace all `scroll-fade-in` classes with the mechanical `clip-reveal` / `clip-reveal-down` animations and add `border-draw` effects across the Services and About pages, matching the homepage style.

---

## Components to Update

### 1. About Page (`src/pages/About.tsx`)

**Methodology section:**
- Replace `scroll-fade-in` with `clip-reveal` on the label, heading, and paragraph

**Experience section:**
- Replace `scroll-fade-in` with `clip-reveal` on the label, heading, and closing paragraph
- Replace `scroll-fade-in` with `clip-reveal-down` on the stat cards (keep the existing staggered `transitionDelay`)

---

### 2. EngagementTypes (`src/components/EngagementTypes.tsx`)

- Replace `scroll-fade-in` with `clip-reveal` on the label, heading, and intro paragraph
- Replace `scroll-fade-in` with `clip-reveal-down` on each tier card (keep existing stagger delays)
- Add `border-draw` class to the section element

---

### 3. FAQSection (`src/components/FAQSection.tsx`)

- Replace `scroll-fade-in` with `clip-reveal` on the label and heading
- Replace `scroll-fade-in` with `clip-reveal` on each FAQ item (keep existing stagger delays)

---

### 4. CTABand (`src/components/CTABand.tsx`)

- Replace `scroll-fade-in` with `clip-reveal` on the content wrapper
- Add `border-draw` class to the section (it already has a `border-t`)

---

## Files Changed

| File | Change |
|---|---|
| `src/pages/About.tsx` | `scroll-fade-in` to `clip-reveal` / `clip-reveal-down` |
| `src/components/EngagementTypes.tsx` | `scroll-fade-in` to `clip-reveal` / `clip-reveal-down`, add `border-draw` |
| `src/components/FAQSection.tsx` | `scroll-fade-in` to `clip-reveal` |
| `src/components/CTABand.tsx` | `scroll-fade-in` to `clip-reveal`, add `border-draw` |

No new files. No CSS changes needed -- all animation classes already exist.
