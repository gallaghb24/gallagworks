CREATE TABLE public.analytics_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  assessment_id uuid,
  event_name text NOT NULL,
  properties jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert analytics events"
  ON public.analytics_events FOR INSERT
  WITH CHECK (true);

CREATE POLICY "No public reads"
  ON public.analytics_events FOR SELECT
  USING (false);