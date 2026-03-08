

## Replace "Book a Strategy Call" with "Request Consultation" on Diagnostic Results

### What changes
Replace the Calendly link buttons on the results page with an inline "Request Consultation" button that sends an email notification to you using the lead data already captured during the assessment — no extra form needed.

### Implementation

**1. New edge function: `supabase/functions/send-consultation-request/index.ts`**
- Accepts `{ assessment_id, name, email, organisation, total_score, maturity_level }` 
- Sends admin notification email (to `ben@gallag.co.uk`) with subject like "Consultation Request: {organisation} — {maturity_level}"
- Sends brief confirmation email to the lead ("We've received your request, Ben will be in touch within 24 hours")
- Uses existing Resend API key and same dark-themed email style as other emails
- CORS headers matching existing functions

**2. Update `src/pages/DiagnosticResults.tsx`**
- Replace the Calendly `<a>` button (lines 806-819) with a `<Button>` that calls the edge function
- Add state: `consultationRequested` (boolean) and `consultationLoading` (boolean)
- On click: invoke `send-consultation-request` with the assessment data already in scope, show toast on success, disable button after success (change label to "Consultation Requested ✓")
- Replace the secondary Calendly link at line 831 with the same behaviour or remove it
- Update tracking event from `calendly_clicked` to `consultation_requested`
- Keep the supporting copy: "Walk through your results with Ben Gallagher and identify your highest-leverage next steps. No obligation."

**3. Update `supabase/config.toml`** — not needed, config is auto-managed.

### Files affected
1. `supabase/functions/send-consultation-request/index.ts` (new)
2. `src/pages/DiagnosticResults.tsx` (edit CTA section)

