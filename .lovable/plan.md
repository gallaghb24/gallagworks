

# Leakage Estimator -- Prefill + Redesigned Output Layout

## Changes

### 1. Prefill default values
- People: `8`
- Hours/week: `6`
- Hourly rate: `45`
- Weeks/year: `46` (already set)

This means results display immediately on load without user interaction.

### 2. Redesigned output section (matching the screenshot reference)

The current output shows "Annual hours leaked" and "Annual cost leaked" as plain text, then recovery toggles with a 2-column grid for recovered values. The new layout uses **card-style containers** with clear visual hierarchy:

- **Annual Leaked Hours** -- inside a bordered card, large orange number
- **Annual Cost** -- inside a bordered card, large orange number
- **Recovery Scenario** label with three toggle buttons ("Remove 50%", "Remove 70%", "Remove 90%") -- 70% active by default, orange fill on active button
- **Recovered Capacity** -- single bordered card showing combined "X,XXX hrs . £XXX,XXX" on one line, bold white text

The "Request a Consultation" CTA link remains below.

### 3. Desktop adaptation
On desktop (lg:grid-cols-2), the inputs stay on the left and outputs on the right as they are now. The card-style output blocks simply stack vertically in the right column. On mobile they stack below the inputs.

## Technical Detail

### Modified file: `src/components/LeakageEstimator.tsx`
- Change `useState` defaults: `people="8"`, `hoursPerWeek="6"`, `hourlyRate="45"`
- Restructure the output JSX:
  - Each metric in a `div` with `border border-border rounded-lg p-6` styling
  - "Annual Leaked Hours" card with orange number
  - "Annual Cost" card with orange number
  - "Recovery Scenario" label + 3 buttons (styled as currently but with "Remove" prefix text)
  - "Recovered Capacity" card combining hours and cost in one line: `{hours} hrs . {cost}`
- Remove the `border-t` divider approach and the separate 2-column recovered grid

No new files or dependencies needed.

