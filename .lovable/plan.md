

## Update Questions Data — Dimensions 1 & 2

### ID conflict

The scoring function in `diagnosticScoring.ts` builds answer keys as `${dim.key}_${i}` (e.g., `data_foundation_1`). The user wants question IDs like `df_1`, `pm_1`. Two options:

1. **Use the user's IDs** (`df_1`, `pm_1`) and update `diagnosticScoring.ts` to derive keys from the questions data instead of constructing them
2. **Keep existing ID pattern** (`data_foundation_1`) to avoid breaking scoring

**Recommended: Option 1** — use the user's IDs and update scoring to iterate over the actual `dimensions` data from `questions.ts` rather than hardcoding key patterns. This is cleaner and avoids ID duplication.

### Changes

**`src/data/questions.ts`** — Update dimensions 1 and 2:
- Dimension 1: Change intro text, rename question IDs from `data_foundation_1..5` to `df_1..5`
- Dimension 2: Change intro text, rename question IDs from `process_maturity_1..5` to `pm_1..5`
- Question text and options are nearly identical to current content (minor punctuation differences like `—` vs `-`)

**`src/lib/diagnosticScoring.ts`** — Update `calculateScores` to iterate over the imported `dimensions` array and sum each dimension's question IDs directly, rather than constructing IDs with string interpolation. This makes it work with any ID scheme.

