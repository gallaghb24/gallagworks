

# Replace centred bullets with coral left-rail cards in "Where this helps most"

## What changes
The five bullet items in the "Where this helps most" section (lines 126-137) will be replaced with the same coral left-rail card grid used in the "What you can expect" section above it.

## Changes to `src/pages/About.tsx`

1. **Add Lucide icons** to the imports: `Settings`, `BarChart3`, `Megaphone`, `BookOpen`, `Mail`
2. **Replace the `fitItems` string array** (lines 16-22) with an array of objects containing icon and text, matching the `expectItems` pattern
3. **Replace the `<ul>` list** (lines 126-137) with a `grid sm:grid-cols-2 gap-6` layout using the coral left-rail card style (`border border-border border-l-4 border-l-primary rounded-lg p-6 card-hover`) with icon + text, identical to the "What you can expect" cards
4. **Update the wrapper** from `max-w-3xl` to `max-w-4xl` to match the expect section width

No new files or dependencies needed.

