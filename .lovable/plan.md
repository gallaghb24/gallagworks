

## Build the DiagnosticResults Page

### Changes needed

**1. Update `src/pages/DiagnosticCapture.tsx` (line 123-124)**
Pass organisation name in router state alongside scoring data:
```ts
navigate(`/diagnostic/results/${assessment.id}`, {
  state: { scoring, assessmentId: assessment.id, organisation: result.data.organisation },
});
```

**2. Rewrite `src/pages/DiagnosticResults.tsx`**

Read `scoring` (type `ScoringResult`), `organisation`, and `assessmentId` from `useLocation().state`. If state is missing, redirect to `/diagnostic`.

Layout structure (all on black `bg-background`):

**Top section:**
- `[YOUR RESULTS]` monospace label
- `"AI Readiness Assessment."` heading (Inter Bold, 4xl/5xl)
- Organisation name below heading
- Assessment date formatted with `date-fns`

**Overall score card** (centered, `max-w-[600px]`, 1px graphite border, 0px radius):
- Maturity label (e.g. "Developing") in its color, large text
- Total score as `"87 / 150"` — numbers in `font-mono` (JetBrains Mono)
- `"Level 3"` in Safety Orange, `font-mono`
- 4-5 sentence summary paragraph keyed by maturity level (hardcoded map of level → text)

**Dimension breakdown** (2x3 grid, `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`):
- Cards ordered by `scoring.priorityOrder` (weakest first)
- Each card (1px graphite border, 0px radius):
  - Dimension name (from `dimensions` data, looked up by key)
  - Score as `"18 / 25"` in `font-mono`
  - Rating label in its color
  - Thin progress bar (graphite bg, filled in rating color, 0px radius)

**Headline recommendations** below grid:
- One line per dimension (ordered by priority)
- Template based on rating: Critical Gap / Needs Attention / Solid Foundation / Strength

**Dependencies:** Uses existing `dimensions` from `@/data/questions`, `ScoringResult` types from `@/lib/scoring`, `date-fns` for formatting. No new packages needed.

No database or schema changes required.

