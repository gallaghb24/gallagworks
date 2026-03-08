

## Plan: Database Tables + Lead Capture Page + Diagnostic Context

### 1. Database Migration

Create `leads` and `assessments` tables with RLS policies allowing anonymous inserts (no auth required — this is a public lead-gen tool):

```sql
CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  organisation text NOT NULL,
  role text,
  industry text,
  company_size text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.assessments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id uuid REFERENCES public.leads(id) ON DELETE CASCADE NOT NULL,
  status text NOT NULL DEFAULT 'in_progress',
  started_at timestamptz NOT NULL DEFAULT now(),
  completed_at timestamptz,
  total_score integer,
  maturity_level text,
  dimension_scores jsonb,
  answers jsonb
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessments ENABLE ROW LEVEL SECURITY;

-- Public insert (lead gen, no auth)
CREATE POLICY "Anyone can submit lead" ON public.leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can create assessment" ON public.assessments FOR INSERT WITH CHECK (true);

-- Only service role can read
CREATE POLICY "Service role reads leads" ON public.leads FOR SELECT USING (false);
CREATE POLICY "Service role reads assessments" ON public.assessments FOR SELECT USING (false);
```

### 2. Diagnostic Context (`src/contexts/DiagnosticContext.tsx`)

React Context to persist answers across route changes (`/assess` → `/capture` → `/results`):
- `answers: Record<string, number>` — keyed by `dimension_question` (e.g. `"data_foundation_1": 3`)
- `setAnswers`, `clearAnswers`
- Wrap diagnostic routes in provider (in `App.tsx` or at page level)

### 3. Lead Capture Page (`src/pages/DiagnosticCapture.tsx`)

Rebuild the placeholder with a full form following Contact.tsx patterns:
- Navigation + SEOHead + Footer (hideCTA)
- Centred card (max-w-[520px], bg-slate border border-border)
- `[YOUR RESULTS ARE READY]` monospace label
- Heading: "See how your organisation scored."
- Subtext in muted-foreground
- Form fields using Input/Select with `rounded-none` field style (matching Contact.tsx)
- Required: Name, Email, Organisation
- Optional: Role (text), Industry (Select), Company Size (Select)
- Submit: inserts lead → creates assessment with answers + calculated scores → navigates to `/diagnostic/results` with state

### 4. Score Calculation (inline utility)

Simple calculation on submit:
- Group answers by dimension (5 questions each, scores 1-5)
- Dimension score = sum of 5 answers (max 25)
- Total = sum of all 6 dimensions (max 150)
- Maturity level derived from total score percentage

### 5. Files Modified/Created

| File | Action |
|------|--------|
| Migration SQL | Create leads + assessments tables |
| `src/contexts/DiagnosticContext.tsx` | New — React context for answer state |
| `src/pages/DiagnosticCapture.tsx` | Rewrite — full lead capture form |
| `src/App.tsx` | Wrap diagnostic routes in DiagnosticProvider |

