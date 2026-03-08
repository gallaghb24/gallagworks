

## Add Detailed Recommendations, Action Plan, and CTAs to Results Page

### Changes — single file: `src/pages/DiagnosticResults.tsx`

**1. Import `getRecommendation`** from `@/data/recommendations`

**2. Replace the "Headline Recommendations" section (lines 247-271) with three new sections:**

**A. Detailed Recommendations (per dimension, priority ordered):**
For each dimension in `priorityOrder`:
- Dimension name + score + rating label (colored)
- Headline from `getRecommendation()` in bold
- Full `detail` paragraph
- "What good looks like" block with a left border in the dimension's `rating.color`
- `[ASK YOUR TEAM]` callout box: graphite bg (`bg-secondary`), 1px border, JetBrains Mono label, containing `internalQuestion`

**B. Priority Action Plan:**
- Monospace label: `[NEXT STEPS]`
- Heading: "Your Prioritised Action Plan."
- 3-column grid: "Quick Wins (0-3 months)", "Medium-term (3-6 months)", "Strategic (6-12 months)"
- Actions derived from the weakest 2-3 dimensions (critical gap → quick wins, needs attention → medium-term, solid/strength → strategic)
- Each action tagged with dimension name

**C. CTAs (side by side):**
- Primary: "Download PDF Report" — Safety Orange button (placeholder onClick for now, PDF generation is a later prompt)
- Secondary: "Book a Strategy Call" — outlined button, links to Calendly (`https://calendly.com/bengallagher`)
- Copy below: "Walk through your results with Ben Gallagher and identify your highest-leverage next steps. 30 minutes, no obligation."

No new dependencies or database changes needed.

