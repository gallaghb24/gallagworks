

# Fix Header Flicker on /services and /about

## Problem

The homepage hero uses `opacity-0 animate-fade-in-up` — elements start invisible and animate in cleanly. The Services and About page heroes use only `animate-fade-in` / `animate-fade-in-up` without the initial `opacity-0` class, causing a visible flash as the browser renders the text, then the animation resets opacity to 0 before playing.

## Fix

Add `opacity-0` to all hero text elements on both pages, matching the homepage pattern.

---

## File Changes

### `src/pages/Services.tsx` (lines 22-29)

- **Label** `[SERVICES]`: change `animate-fade-in` to `opacity-0 animate-fade-in`
- **H1**: change `animate-fade-in-up` to `opacity-0 animate-fade-in-up`
- **Paragraph**: change `animate-fade-in-up` to `opacity-0 animate-fade-in-up`

### `src/pages/About.tsx` (lines 39-47)

- **Label** `[THE PRINCIPAL]`: change `animate-fade-in` to `opacity-0 animate-fade-in`
- **H1**: change `animate-fade-in-up` to `opacity-0 animate-fade-in-up`
- **Paragraph**: change `animate-fade-in-up` to `opacity-0 animate-fade-in-up`

---

## Why This Works

The `opacity-0` utility sets the element to invisible immediately on render. The `animate-fade-in-up` animation then runs with `animation-fill-mode: forwards`, ending at `opacity: 1`. Without `opacity-0`, there is a single frame where the element is fully visible before the animation applies its starting keyframe (`opacity: 0`), causing the flicker.

