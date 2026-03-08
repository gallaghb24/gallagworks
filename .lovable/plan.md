

## Build Scoring Engine (`src/lib/scoring.ts`)

### What exists now

- `src/lib/diagnosticScoring.ts` — has a `calculateScores` function with percentage-based maturity levels (Unaware/Exploring/Developing/Competent/Leading). Already used in `DiagnosticCapture.tsx`.
- `DiagnosticCapture.tsx` — already calculates scores and saves to the database on form submit. Uses the old scoring module.
- `DiagnosticResults.tsx` — placeholder page, receives `scoring` via router state.

### Plan

**1. Create `src/lib/scoring.ts`** with the five functions specified:

- `calculateDimensionScores(answers)` — imports `dimensions` from questions data, iterates question IDs per dimension, returns `Record<DimensionKey, number>`
- `calculateTotalScore(dimensionScores)` — sums values (max 150)
- `getMaturityLevel(totalScore)` — returns `{ level, label, color }` using the specified thresholds (30-59 Foundation, 60-89 Emerging, etc.)
- `getDimensionRating(score)` — returns `{ rating, color }` for a single dimension score (5-10 Critical Gap, 11-15 Needs Attention, 16-20 Solid Foundation, 21-25 Strength)
- `getPriorityOrder(dimensionScores)` — returns dimension keys sorted by priority: Data Foundation and Process Maturity first if below 16, then Governance & Risk, then remaining sorted by score ascending

Export types for `MaturityLevel`, `DimensionRating`, and `ScoringResult`.

**2. Update `src/pages/DiagnosticCapture.tsx`** — switch import from `diagnosticScoring` to the new `scoring.ts` module. Update the submit handler to use the new functions and store the new maturity level format (label string) in the database.

**3. Keep `src/lib/diagnosticScoring.ts`** — leave it for now (no other files import it besides DiagnosticCapture which we're updating). Can be removed later.

No database schema changes needed — the existing `assessments` table already has `total_score`, `maturity_level`, `dimension_scores`, `answers`, `status`, and `completed_at` columns.

