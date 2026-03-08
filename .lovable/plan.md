

## AI Readiness Diagnostic — Landing Page

### Files to create/modify

1. **`src/pages/Diagnostic.tsx`** — New landing page following Services.tsx pattern exactly:
   - Navigation + SEOHead + Footer (hideCTA)
   - Hero section: `[DIAGNOSTIC]` label, heading "How ready is your organisation for AI.", subheading, CTA button to `/diagnostic/assess`, muted helper text
   - Dimensions section: `bg-slate border-draw`, `[THE FRAMEWORK]` label, heading "Six dimensions of AI readiness.", 2x3 grid of cards with `bg-slate border border-border`, each showing dimension number (`[01]`), name, and question
   - CTABand at bottom

2. **`src/App.tsx`** — Add import + routes for `/diagnostic`, `/diagnostic/assess`, `/diagnostic/capture`, `/diagnostic/results`, `/diagnostic/results/:assessmentId` (placeholder pages for future routes)

3. **`src/components/Navigation.tsx`** — Add `{ to: "/diagnostic", label: "Diagnostic" }` to navLinks array

4. **Placeholder pages** — Create minimal `DiagnosticAssess.tsx`, `DiagnosticCapture.tsx`, `DiagnosticResults.tsx` stubs so routes don't 404

### Design system compliance

All styling uses existing semantic classes — no hardcoded colours. Animations use `useScrollAnimation` + `clip-reveal`/`clip-reveal-down` for the framework section, and `opacity-0 animate-fade-in` / `animate-fade-in-up` with `animationDelay` for the hero. Cards follow the exact EngagementTypes pattern.

### Six dimensions data

```
01 Data Foundation — "Can AI actually work with what you have?"
02 Process Maturity — "Are your workflows ready to be automated, or will AI just automate your chaos?"
03 Governance & Risk — "Can you adopt AI without exposing the business?"
04 Skills & Culture — "Will your people use it, resist it, or ignore it?"
05 Tooling & Infrastructure — "Is your tech stack ready for AI, or will it fight you?"
06 Strategic Clarity — "Do you know what you actually want AI to do?"
```

Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`, staggered reveal via `transitionDelay`.

