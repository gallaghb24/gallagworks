
# Mobile Optimise the Leakage Estimator

The current 2-column grid collapses to `grid-cols-1` on mobile via the existing `lg:` breakpoint, but several issues remain:

1. **Left cell keeps `borderRight`** even when stacked -- creates a visible right border on single-column layout
2. **Right cell `paddingLeft: 2rem`** is unnecessary when stacked and wastes horizontal space
3. **Recovery buttons have fixed `padding: 0.5rem 2rem`** -- too wide on small screens, may overflow
4. **Recovered Capacity line uses `whiteSpace: "nowrap"`** and large font -- overflows on narrow viewports
5. **Row 0 column labels** show both `[INPUT TERMINAL]` and `[RECOVERY OUTCOME]` side by side -- on mobile they stack awkwardly with the border-right still present
6. **Row 4 empty left cell** is visible on mobile as a blank bordered block

---

## Changes (single file: `src/components/LeakageEstimator.tsx`)

### A. Responsive cell styles

Replace the static `leftCell` / `rightCell` objects with Tailwind classes so borders and padding adapt:

- **Left cells**: `border-r` only on `lg:` screens (`lg:border-r`), no border on mobile
- **Right cells**: `pl-0 lg:pl-8`, removing the wasted left padding on mobile
- Add a top border on each stacked cell on mobile for visual separation (`border-t lg:border-t-0` on right cells)

### B. Row 0 column labels

- Hide `[RECOVERY OUTCOME]` on mobile (`hidden lg:block`) since results appear inline below each input anyway
- Keep `[INPUT TERMINAL]` visible on mobile

### C. Row 4 empty left cell

- Hide on mobile (`hidden lg:block`) so there's no blank bordered block

### D. Recovery buttons

- Reduce horizontal padding on mobile: `padding: 0.5rem 1.25rem` on small screens, keep `0.5rem 2rem` on desktop
- Use Tailwind responsive classes or a CSS clamp for the padding

### E. Recovered Capacity overflow

- Remove `whiteSpace: "nowrap"` and allow wrapping on mobile
- Stack the hours and cost on two lines on mobile using a flex-wrap or explicit line break below `lg:`

### F. Input max-width

- Remove `maxWidth: "400px"` on inputs so they span full width on mobile (already `width: 100%` but the max-width caps them)

---

## Technical approach

Switch cell styling from inline `style` objects to Tailwind utility classes where responsive behaviour is needed, keeping inline styles only for non-responsive properties (font-family, colors). This follows the existing pattern in other site components.
