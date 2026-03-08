

## Create Recommendations Data File

**Create `src/data/recommendations.ts`** with:

- Export the `Recommendation` type with fields: `dimension`, `ratingLevel`, `headline`, `detail`, `whatGoodLooksLike`, `internalQuestion`
- Export a `recommendations` array containing all 24 entries (6 dimensions × 4 rating levels) using the exact content provided
- Export a helper function `getRecommendation(dimensionId: DimensionKey, ratingLevel: string): Recommendation` that looks up the matching entry

The `ratingLevel` values map from the existing `getDimensionRating` output: "Critical Gap" → `critical_gap`, "Needs Attention" → `needs_attention`, "Solid Foundation" → `solid_foundation`, "Strength" → `strength`.

Single file creation, no other changes needed.

