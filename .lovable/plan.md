

## Add CTA Band + Footer to Diagnostic Assess Page

### Change

After the `</main>` closing tag (line 230) in `src/pages/DiagnosticAssess.tsx`:
- Import and render `CTABand` with:
  - `headline`: `<>Stop the leakage. <span className="text-primary">Start the Engineering.</span></>`
  - `subcopy`: "Start with the free AI Readiness Diagnostic or request a consultation to discuss your operational challenges"
  - No `secondaryCTA` — just the default "Request a Consultation" button
- Import and render `Footer` with `hideCTA` prop (to avoid duplicate CTA from footer's own CTA section)

Both components go inside the wrapping `<div>` but after `</main>`, before the final `</div>`.

### Files Modified
- `src/pages/DiagnosticAssess.tsx` — add imports for `CTABand` and `Footer`, render them after `</main>`

