import posthog from "posthog-js";
import { supabase } from "@/integrations/supabase/client";

export const trackEvent = (
  eventName: string,
  properties: Record<string, any> = {}
) => {
  // PostHog
  posthog.capture(eventName, properties);

  // Fire-and-forget to Supabase
  supabase
    .from("analytics_events")
    .insert({
      event_name: eventName,
      properties,
      assessment_id: properties.assessment_id ?? null,
    })
    .then(({ error }) => {
      if (error) console.error("Analytics insert failed:", error.message);
    });
};
