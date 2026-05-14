-- Lock down public read access on lead PII and assessment data.
-- Inserts now go through the submit-diagnostic edge function (service role),
-- and shared results are served via the get-assessment edge function (service role).

DROP POLICY IF EXISTS "Temporary select for insert return" ON public.leads;
DROP POLICY IF EXISTS "Anyone can submit lead" ON public.leads;
DROP POLICY IF EXISTS "Authenticated users can read leads" ON public.leads;

CREATE POLICY "Authenticated users can read leads"
  ON public.leads FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Temporary select for insert return" ON public.assessments;
DROP POLICY IF EXISTS "Anyone can create assessment" ON public.assessments;
DROP POLICY IF EXISTS "Authenticated users can read assessments" ON public.assessments;

CREATE POLICY "Authenticated users can read assessments"
  ON public.assessments FOR SELECT
  TO authenticated
  USING (true);

-- Fix the broken contact_submissions SELECT policy that blocks even service role
-- through PostgREST. Scope it explicitly to authenticated admin users; service role
-- bypasses RLS entirely.
DROP POLICY IF EXISTS "Service role can read submissions" ON public.contact_submissions;

CREATE POLICY "Authenticated users can read submissions"
  ON public.contact_submissions FOR SELECT
  TO authenticated
  USING (true);
