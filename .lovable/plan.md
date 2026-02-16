

# Soften the Hero Background Gradient

A single change to `src/pages/Index.tsx` line 21 -- adjust the gradient stops to create a much more gradual, subtle fade from the dark background into the image.

## Current gradient
```
hsl(var(--background)) 20%, hsl(var(--background)/0.6) 45%, transparent 70%
```

## New gradient
```
hsl(var(--background)) 5%, hsl(var(--background)/0.7) 25%, hsl(var(--background)/0.3) 50%, transparent 75%
```

This adds an extra stop and spreads them wider so the transition is smoother and less harsh, revealing more of the image while still protecting the left-side copy legibility.

## File changed
| File | Change |
|------|--------|
| `src/pages/Index.tsx` | Update gradient CSS on line 21 |

