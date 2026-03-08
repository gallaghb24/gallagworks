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

CREATE POLICY "Anyone can submit lead" ON public.leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can create assessment" ON public.assessments FOR INSERT WITH CHECK (true);
CREATE POLICY "Service role reads leads" ON public.leads FOR SELECT USING (false);
CREATE POLICY "Service role reads assessments" ON public.assessments FOR SELECT USING (false);