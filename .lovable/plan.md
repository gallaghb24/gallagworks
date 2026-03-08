

## Add Diagnostic Tier to EngagementTypes

Single file edit to `src/components/EngagementTypes.tsx`:

1. **Add new first tier** to the `tiers` array with number "00", title "AI Readiness Diagnostic", sublabel "5 Minutes | Self-Serve | Free", and the provided description
2. **Update heading** from "Three tiers" to "Four tiers"
3. **Update intro paragraph** to the new copy mentioning the diagnostic as starting point
4. **Update grid classes** from `md:grid-cols-3` to `md:grid-cols-2 lg:grid-cols-4`
5. **Wrap the first card** (index 0) in a `Link` to `/diagnostic` with appropriate hover styling, import `Link` from `react-router-dom`

