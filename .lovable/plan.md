
# Leakage Estimator -- Interactive Calculator

## Placement

The estimator will sit between **ProofPoints** (outcomes) and the **Footer**, as a new standalone section. This is the natural conversion point: the user has just seen your proven outcomes and is now invited to quantify their own pain before the final CTA. The page flow becomes:

1. Hero
2. Philosophy
3. Methodology (ServicesSummary)
4. Principal
5. ProofPoints (outcomes)
6. **Leakage Estimator (new)**
7. Footer

## What Gets Built

A new `LeakageEstimator.tsx` component with:

**Inputs (left/top column)**
- Number of people in workflow (numeric input, default empty, placeholder "e.g. 12")
- Avg hours/week lost to re-keying, checking, chasing (numeric input, placeholder "e.g. 6")
- Fully loaded hourly cost in GBP (numeric input with a salary band helper -- dropdown selector that auto-fills common bands like "Junior ~£25/hr", "Mid ~£40/hr", "Senior ~£55/hr", or manual entry)
- Weeks/year (numeric input, default 46)

**Outputs (right/bottom column)**
- Annual hours leaked (people x hours/week x weeks)
- Annual cost leaked (hours x hourly rate), formatted as GBP
- Three toggle buttons: "Remove 50%", "Remove 70%", "Remove 90%" showing the recovered hours and cost at each level
- A subtle CTA link at the bottom: "Request a Consultation" linking to /contact

**Design Approach**
- Matches the existing dark theme and design language (font-mono labels, `[SECTION TAG]`, clip-reveal scroll animation, `bg-slate` background to alternate with ProofPoints)
- Toggle buttons use the Safety Orange primary colour when active
- Numbers animate/update in real-time as inputs change
- Responsive: stacked on mobile, side-by-side on desktop
- All calculation is client-side, no backend needed

## Technical Details

### New file: `src/components/LeakageEstimator.tsx`
- Uses React `useState` for all four inputs and the selected recovery percentage
- Uses `useScrollAnimation` hook for entry animation (consistent with all other sections)
- Formats currency with `Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' })`
- Toggle group for 50/70/90% uses three styled buttons with active state highlighting
- Inputs use the existing `Input` component from `src/components/ui/input.tsx`
- Salary band selector uses a small dropdown/select that pre-fills the hourly cost field

### Modified file: `src/pages/Index.tsx`
- Import and render `LeakageEstimator` after `ProofPoints` and before `Footer`

### No database, edge functions, or new dependencies required
- Pure client-side React component using existing UI primitives and styling patterns
