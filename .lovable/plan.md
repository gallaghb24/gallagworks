

# Restore Dynamic Energy to the Orange Output Line

## Problem

The orange output line now appears static after the timing fix. It draws in via a single CSS transition and then just sits there. The only movement is output dots on the center line, but the line itself lacks the "alive" pulsating quality it had before.

## Solution

Add two visual enhancements to restore dynamic energy, without changing the delay logic:

1. **Pulsating glow on the orange center line** -- once revealed, apply a subtle CSS animation that pulses the orange line's opacity and glow filter, making it look like a live "laser."

2. **Spread output dots across all 3 output lines** -- currently output pulses only spawn on `OUTPUT_Y[1]` (center). Cycle through all 3 output Y positions so dots stream out on the grey lines too, adding movement across the full output zone.

## Technical Details (single file: `src/components/HeroSchematic.tsx`)

**1. Add a pulsating CSS animation to the orange output line**

After the `stroke-dashoffset` transition completes (the line is fully drawn), apply an inline animation on the center output line:
- `animation: "pulse-glow 2s ease-in-out infinite"` 
- This will cycle the line's opacity between ~0.7 and 1.0
- Add a matching `@keyframes` via a `<style>` tag inside the SVG `<defs>`, or use inline `style` with the animation

**2. Apply the glow filter to the orange line once revealed**

Add `filter="url(#glow)"` to the center output line when `outputRevealed` is true, giving it the same soft bloom as the core flash.

**3. Cycle output pulse spawning across all 3 output lines**

Change the output pulse spawn logic from always using `OUTPUT_Y[1]` to cycling through `OUTPUT_Y[0]`, `OUTPUT_Y[1]`, `OUTPUT_Y[2]` using a modulo counter. This spreads dots across all three output lines for more visual movement.

No changes to the delay/arrival logic or any other component.

