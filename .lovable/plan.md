

## Add Assessment Completion Emails

### Approach
Create a new edge function `supabase/functions/send-assessment-email/index.ts` using Resend (already configured with `RESEND_API_KEY`). Call it from `DiagnosticCapture.tsx` after successful assessment insert. The function sends two emails: one to the lead, one to admin.

### Edge Function: `supabase/functions/send-assessment-email/index.ts`

**Input payload:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "organisation": "Acme Corp",
  "role": "COO",
  "industry": "Manufacturing",
  "company_size": "51-200",
  "total_score": 87,
  "maturity_level": "Developing",
  "dimension_scores": { "data_foundation": 15, ... },
  "assessment_id": "uuid"
}
```

**Email 1 — Lead confirmation:**
- From: `Gallag Works <hello@gallag.works>`
- Subject: `Your AI Readiness Results — [Organisation]`
- Content: Score summary, strongest/weakest dimensions, link to results page, CTA for strategy call, Ben Gallagher sign-off
- Dark-themed HTML matching the existing contact confirmation email style

**Email 2 — Admin notification:**
- To: `ben@gallag.co.uk`
- Subject: `New Assessment: [Organisation] — [Maturity Level]`
- Content: Lead details, score, dimension breakdown, link to admin dashboard

**Config:** Add `verify_jwt = false` for the function in `supabase/config.toml`.

### Frontend Change: `src/pages/DiagnosticCapture.tsx`

After successful assessment insert (line ~118), fire-and-forget call to the edge function:

```ts
supabase.functions.invoke("send-assessment-email", {
  body: { name, email, organisation, role, industry, company_size, total_score, maturity_level, dimension_scores, assessment_id }
});
```

Non-blocking — don't await or fail the user flow if email fails.

### Dimension Label Mapping
The edge function will map dimension keys to readable names (e.g. `data_foundation` → `Data Foundation`) and identify the highest/lowest scoring dimensions for the lead email summary.

### Files
1. **Create** `supabase/functions/send-assessment-email/index.ts`
2. **Edit** `src/pages/DiagnosticCapture.tsx` — add edge function call after assessment insert

