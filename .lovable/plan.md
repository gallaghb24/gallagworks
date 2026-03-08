

## Plan: Replace Calendly link in results email with "Request a Consultation" + add confirmation page

### What changes

**1. Update the assessment results email** (`supabase/functions/send-assessment-email/index.ts`)
- Replace line 106's Calendly link (`Book a 30-minute strategy call`) with a link that points to a new consultation confirmation route on the website
- The link URL will be: `https://www.gallag.works/diagnostic/results/${assessment_id}?request=consultation`
- Label: "Request a Consultation"
- When clicked, this will load the results page which detects the `?request=consultation` query param and auto-triggers the existing `handleConsultationRequest` function (which already sends the admin email via `send-consultation-request` edge function), then redirects to a new confirmation page

**2. Create a consultation confirmation page** (`src/pages/ConsultationConfirmation.tsx`)
- Simple page with the standard Navigation header and Footer (no CTA band)
- Content: confirmation message like "Thanks, [name]. I'll be in touch." with supportive copy
- Clean, minimal design consistent with the site

**3. Update routing** (`src/App.tsx`)
- Add route: `/consultation/confirmed`

**4. Update DiagnosticResults page** (`src/pages/DiagnosticResults.tsx`)
- After successful `handleConsultationRequest`, navigate to `/consultation/confirmed` instead of just showing a toast
- Also handle the `?request=consultation` query param from the email link: auto-trigger the consultation request on mount and redirect to the confirmation page

### Technical detail

- The email link approach avoids needing a separate edge function endpoint. The existing `send-consultation-request` function already handles admin notification and lead confirmation emails.
- The `?request=consultation` param on the results URL ensures the flow works even if the user isn't on the page — it loads results, fires the request, and redirects.
- The confirmation page will use `useLocation` state or URL params to optionally display the lead's name.

