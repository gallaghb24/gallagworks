

## Add Radar Chart to Results Page

Insert a Recharts `RadarChart` between the overall score card (line 129) and the dimension breakdown grid (line 131).

### Implementation

**Edit `src/pages/DiagnosticResults.tsx`:**

1. Import `RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer` from `recharts`

2. Define shortened dimension labels map:
```ts
const SHORT_NAMES: Record<DimensionKey, string> = {
  data_foundation: "Data",
  process_maturity: "Process",
  governance_risk: "Governance",
  skills_culture: "Skills",
  tooling_infrastructure: "Tooling",
  strategic_clarity: "Strategy",
};
```

3. Build chart data from `dimensionScores` using the canonical dimension key order (not priority order — radar should be consistent):
```ts
const radarData = DIMENSION_KEYS.map(key => ({
  dimension: SHORT_NAMES[key],
  score: dimensionScores[key],
}));
```

4. Insert new section between lines 129-131 with:
   - Container: `max-w-[500px]` centered, `border border-border rounded-none p-6`
   - Monospace label: `[DIMENSION MAP]`
   - `ResponsiveContainer` wrapping a `RadarChart`
   - `PolarGrid` with `stroke="#1A1C1E"`
   - `PolarAngleAxis` with `tick` styled white, Inter, 12px
   - Single `Radar` with `fill="#FF5F1F"` at 30% opacity, `stroke="#FF5F1F"` 2px, dots 4px radius
   - Domain `[0, 25]` on the radial axis (hidden axis labels)

No new dependencies needed — `recharts` is already installed.

