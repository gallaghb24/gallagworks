
# Mobile Optimisation: `/` (Home) and `/about`

## Changes

### Home Page (`/`)

**1. HeroSection -- reduce excessive mobile height and spacing**
- Change `min-h-[85vh]` to `min-h-[60vh] md:min-h-[85vh]` so the hero doesn't consume nearly the entire mobile screen before content appears.
- Reduce `pt-24 pb-16` to `pt-20 pb-10 md:pt-24 md:pb-16` for tighter mobile vertical rhythm.
- Reduce `mb-8` on the H1 to `mb-6 md:mb-8`.
- Reduce `mb-10` on the body copy to `mb-8 md:mb-10`.

**2. Philosophy -- tighten mobile padding**
- Change `py-20 lg:py-32` to `py-16 lg:py-32`.

**3. ServicesSummary -- tighten mobile row spacing**
- Change `py-20 lg:py-32` to `py-16 lg:py-32` on the section.
- Reduce `mb-16` on the heading to `mb-10 md:mb-16`.
- Reduce inner row `py-12` to `py-8 md:py-12`.

**4. Principal -- tighten mobile padding**
- Change `py-24 lg:py-36` to `py-16 lg:py-36`.

**5. ProofPoints -- tighten mobile spacing**
- Change `py-20 lg:py-32` to `py-16 lg:py-32`.
- Reduce `mb-16` on the heading to `mb-10 md:mb-16`.
- Reduce `gap-16` on the metrics grid to `gap-10 md:gap-16`.

**6. Footer CTA -- tighten mobile padding**
- Change `py-28 lg:py-40` to `py-20 lg:py-40` (consistent with CTABand changes already made).

---

### About Page (`/about`)

**1. Hero section -- reduce mobile top padding**
- Change `pt-32 pb-24` to `pt-24 pb-16 md:pt-32 md:pb-24`.

**2. Methodology section -- tighten mobile padding**
- Change `py-24 lg:py-36` to `py-16 lg:py-36`.

**3. Experience section -- tighten mobile padding and stat grid**
- Change `py-24 lg:py-36` to `py-16 lg:py-36`.
- Reduce stat card `gap-8` to `gap-4 md:gap-8` for tighter mobile grid.
- Reduce `mb-16` after stats to `mb-10 md:mb-16`.

---

## Technical Details

### Files to modify:
- `src/components/HeroSection.tsx` -- mobile height, padding, and margin reductions
- `src/components/Philosophy.tsx` -- mobile padding reduction
- `src/components/ServicesSummary.tsx` -- mobile padding and gap reductions
- `src/components/Principal.tsx` -- mobile padding reduction
- `src/components/ProofPoints.tsx` -- mobile padding and gap reductions
- `src/components/Footer.tsx` -- mobile CTA padding reduction
- `src/pages/About.tsx` -- mobile padding reductions on hero, methodology, experience sections
