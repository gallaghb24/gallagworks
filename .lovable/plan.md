

## Final Polish Pass

### 1. Route-level Code Splitting (App.tsx)
Replace all static imports with `React.lazy()` + `Suspense` for diagnostic pages, results, admin pages, and other secondary routes. Keep `Index` eager. Wrap routes in `<Suspense fallback={<LoadingFallback />}>` with a minimal full-screen spinner.

### 2. Loading Skeleton for Results
Already implemented — the `loading` state in `DiagnosticResults.tsx` (lines 338-368) renders a skeleton matching the layout. No changes needed.

### 3. Accessibility Improvements (DiagnosticAssess.tsx)
- Convert answer `<button>` elements to proper `<fieldset>` + `<legend>` + `<input type="radio">` with `<label>` wrappers for keyboard navigation and screen reader support
- Add `aria-label` to the progress bar div (e.g. `aria-label="Dimension 2 of 6"` and `role="progressbar"` with `aria-valuenow`)
- Add `sr-only` text to dimension score bars on results page

### 4. Focus States (index.css)
Add a global focus-visible rule using Safety Orange:
```css
*:focus-visible {
  outline: 2px solid hsl(var(--primary));
  outline-offset: 2px;
}
```

### 5. Error Handling — Retry on Results Page
The error state already shows a message and CTA. Add a "Try Again" button that re-fetches the assessment (resets error and re-triggers the fetch useEffect) rather than only linking to `/diagnostic`.

### 6. Visual Polish
- Add staggered `fade-in-up` animation to results dimension cards using inline `animation-delay` (100ms increments)
- Progress bar already has `transition-all duration-500` — confirmed smooth
- Font loading: already using `&display=swap` in the Google Fonts URL — confirmed in both `index.html` and `index.css`

### 7. 404 Page (NotFound.tsx)
Restyle to match brand:
- Black background (`bg-background`)
- `[404]` in JetBrains Mono, muted
- "Page not found." in Inter Bold, white
- "Back to the diagnostic" link in Safety Orange (`text-primary`)

### Files to Edit
1. **`src/App.tsx`** — Lazy imports + Suspense wrapper
2. **`src/pages/DiagnosticAssess.tsx`** — Radio inputs with labels, progress bar aria attributes
3. **`src/pages/DiagnosticResults.tsx`** — Retry button on error, staggered card animations, sr-only score text
4. **`src/index.css`** — focus-visible rule
5. **`src/pages/NotFound.tsx`** — Brand-consistent 404 page

