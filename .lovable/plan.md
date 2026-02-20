
## Root Cause

Every other section on the page (Philosophy, ServicesSummary, ProofPoints) wraps its content in `container mx-auto px-6 lg:px-12`. This Tailwind pattern centres content within a max-width container and applies consistent horizontal padding — this is the "page grid".

The LeakageEstimator currently uses bare `px-6 lg:px-12` with no `container mx-auto`. On large screens, `container mx-auto` constrains width and centres; without it, the section stretches edge-to-edge and the left edge sits further left than all other sections. This is the misalignment.

The 2-column grid also uses raw `px-6 lg:px-12` on the left cell and a hardcoded `padding: "2rem 4rem"` on the right — both outside any container — compounding the problem.

## Fix

Restructure `LeakageEstimator.tsx` so the entire component lives inside `container mx-auto px-6 lg:px-12`, matching every other section exactly.

The internal full-bleed border rules (the horizontal `borderTop` divider and the vertical `borderRight` between the two columns) need to be handled carefully — they currently span edge-to-edge. The fix is to keep the section `<section>` tag full-width for the background/border-draw, but wrap all content in a `container mx-auto px-6 lg:px-12` div, then let the 2-column grid sit inside that container.

## Technical Detail — Modified file: `src/components/LeakageEstimator.tsx`

### Header block (lines 66–103)
Change:
```
className={`px-6 lg:px-12 pt-16 pb-10 clip-reveal ...`}
```
To:
```
className={`container mx-auto px-6 lg:px-12 pt-16 pb-10 clip-reveal ...`}
```

### 2-column grid (lines 106–316)
Wrap the entire grid in a `container mx-auto px-6 lg:px-12` div. Remove the individual `px-6 lg:px-12` class from the left grid cell (it was compensating for the missing container). The right column's hardcoded `padding: "2rem 4rem"` becomes `paddingTop: "2rem"` only (horizontal padding comes from the container).

The internal `borderRight` between columns and `borderTop` above the grid remain as border decorations on the grid cells — they do not need to be full-bleed, since no other section has full-bleed borders either.

### Right column label row (line 114)
Change the hardcoded `padding: "1.5rem 4rem"` to `paddingTop: "1.5rem" paddingBottom: "1.5rem"` — horizontal padding comes from the container.

This single structural change — adding `container mx-auto` to both the header and the grid wrapper — will snap the entire Leakage Estimator into the same grid as the rest of the page with no other visual changes.
