

## Mobile Responsiveness, Page Transitions, Loading/Error States & Scroll-to-Top

### 1. Scroll-to-Top on Route Change
**File: `src/App.tsx`**
- Create a `<ScrollToTop />` component inline (or in a small file) that uses `useLocation` + `useEffect` to scroll to top on `pathname` change
- Place it inside `<BrowserRouter>` before `<Routes>`

### 2. Page Transitions (Subtle Fade)
**File: `src/App.tsx`**
- Wrap each route's element with a `<PageTransition>` wrapper component that applies a CSS fade-in animation on mount
- Component: a `<div className="animate-fade-in">` wrapper (already defined in tailwind config / index.css)
- Alternatively, create a `<PageWrapper>` that children are wrapped in, using the existing `animate-fade-in` utility

### 3. Mobile Responsiveness Fixes

**`src/components/HeroSection.tsx`**
- Hero text already scales (`text-4xl md:text-5xl lg:text-6xl`) — looks OK
- CTA button: add `w-full sm:w-auto` so it's full-width on mobile
- Reduce `min-h-[85vh]` to `min-h-[70vh] md:min-h-[85vh]` for better mobile sizing

**`src/pages/Diagnostic.tsx`**
- Dimension grid already has `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` — correct
- CTA button: add `w-full sm:w-auto`

**`src/pages/DiagnosticCapture.tsx`**
- Form inputs: add `min-h-[48px]` to all `<Input>` and `<SelectTrigger>` elements (add `h-12` class)
- Error text: change from `text-destructive` to `text-primary` (Safety Orange) for brand consistency

**`src/pages/DiagnosticAssess.tsx`**
- Radio option buttons: add `min-h-[56px]` (`min-h-14`) for larger touch targets
- Progress bar header: dimension name — add `truncate` or allow wrapping (it already wraps naturally)
- Back/Next buttons: make them a sticky footer bar on mobile
  - Wrap in `<div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 md:relative md:border-0 md:p-0 md:mt-10">` 
  - Add `pb-24 md:pb-12` to main content to prevent overlap on mobile

**`src/pages/DiagnosticResults.tsx`**
- Radar chart: already in `ResponsiveContainer` with max-w-500, will scale — add smaller height on mobile: `height={280}` on mobile via a state check or just reduce to 280 universally (still readable)
- Dimension grid: already `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` — correct
- CTA buttons: already have `flex-col sm:flex-row` — correct, but add `w-full sm:w-auto` to each button
- Share buttons: add `w-full sm:w-auto` for full-width on mobile

### 4. Global Mobile Text Size
**File: `src/index.css`**
- Add base rule: `body { font-size: 14px; }` on mobile — but since Tailwind already uses `text-sm` (14px) and `text-base` (16px), just ensure no body text goes below 14px
- Add a utility: ensure `text-sm` minimum on all body text paragraphs (most are already ≥14px)

### 5. Prevent Horizontal Scroll
**File: `src/index.css`**
- Add `html, body { overflow-x: hidden; }` as a safety net

### 6. Loading States (Skeleton Screens)
**File: `src/pages/DiagnosticResults.tsx`**
- Replace the simple `<Loader2>` spinner with branded skeleton screens:
  - A skeleton card for the score area
  - Skeleton bars for the dimension breakdown
  - Use existing `<Skeleton>` component with `bg-secondary` (graphite) and `rounded-none`

**File: `src/pages/admin/AdminOverview.tsx`, `AdminLeads.tsx`, `AdminAssessments.tsx`**
- Replace "Loading…" text with skeleton table rows / cards

### 7. Error States
- Use Safety Orange (`text-primary`) for error messages instead of red `text-destructive`
- Apply to: `DiagnosticCapture.tsx` form validation errors, `DiagnosticResults.tsx` fetch error, `AdminLogin.tsx` auth error

### Files to Edit
1. `src/index.css` — overflow-x hidden
2. `src/App.tsx` — ScrollToTop component + PageTransition wrapper
3. `src/components/HeroSection.tsx` — mobile CTA width
4. `src/pages/Diagnostic.tsx` — mobile CTA width  
5. `src/pages/DiagnosticAssess.tsx` — sticky footer buttons, larger touch targets
6. `src/pages/DiagnosticCapture.tsx` — input heights, error color
7. `src/pages/DiagnosticResults.tsx` — skeleton loading, button widths, radar height
8. `src/pages/AdminLogin.tsx` — error color
9. `src/pages/admin/AdminOverview.tsx` — skeleton loading
10. `src/pages/admin/AdminLeads.tsx` — skeleton loading
11. `src/pages/admin/AdminAssessments.tsx` — skeleton loading

No new dependencies needed.

