DROP POLICY "Service role reads leads" ON public.leads;
DROP POLICY "Service role reads assessments" ON public.assessments;

-- Allow selecting the row just inserted (needed for .select().single() after insert)
CREATE POLICY "Temporary select for insert return" ON public.leads FOR SELECT USING (true);
CREATE POLICY "Temporary select for insert return" ON public.assessments FOR SELECT USING (true);