

## Add Labels to Recovery Scenario Buttons

**Changes to `src/components/LeakageEstimator.tsx`:**

1. **Line 4** — Replace `RECOVERY_OPTIONS` from `[50, 70, 90]` to `[{ pct: 50, label: "CONSERVATIVE" }, { pct: 70, label: "MODERATE" }, { pct: 90, label: "AGGRESSIVE" }]`

2. **Lines 228-268** — Update the button rendering:
   - Change `.map((pct) =>` to `.map(({ pct, label }) =>`
   - Wrap each `<button>` in a `<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>`
   - Add `<span>` with the label below each button using the specified styling (0.6rem, muted-foreground, 0.35rem top margin)

3. **Update type reference** — The `recoveryPct` state type changes from `typeof RECOVERY_OPTIONS[number]` (if used) to just `number` or `50 | 70 | 90`. Need to check the state declaration for any type dependency.

Single file change, no structural or dependency changes.

