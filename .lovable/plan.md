

## Update Dimensions 5 & 6 with Real Content

The changes are straightforward — update `src/data/questions.ts` lines 268-393:

**Dimension 5 — Tooling & Infrastructure (lines 268-329):**
- Update `intro` to user's version
- Rename question IDs: `tooling_infrastructure_1..5` → `ti_1..5`
- Replace em dashes (`—`) with hyphens (`-`) in option labels to match user's content

**Dimension 6 — Strategic Clarity (lines 331-393):**
- Update `intro` to user's version
- Rename question IDs: `strategic_clarity_1..5` → `stc_1..5`
- Update option labels to match user's exact wording (e.g., remove quotes around "felt", change "AI/innovation" to "AI or innovation", etc.)

No other files need changes — the scoring function already iterates over question IDs from the data.

