import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { assessment_id } = await req.json().catch(() => ({}));
    if (!assessment_id || typeof assessment_id !== "string" || !UUID_RE.test(assessment_id)) {
      return new Response(JSON.stringify({ error: "Invalid assessment id" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const { data, error } = await supabase
      .from("assessments")
      .select("id, completed_at, started_at, total_score, maturity_level, dimension_scores, status, leads(organisation)")
      .eq("id", assessment_id)
      .maybeSingle();

    if (error || !data) {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Only return non-PII fields needed for the public results view.
    const lead = (data as any).leads;
    const payload = {
      id: data.id,
      completed_at: data.completed_at,
      started_at: data.started_at,
      total_score: data.total_score,
      maturity_level: data.maturity_level,
      dimension_scores: data.dimension_scores,
      status: data.status,
      organisation: lead?.organisation ?? "Unknown Organisation",
    };

    return new Response(JSON.stringify(payload), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (err) {
    console.error("get-assessment error:", err);
    return new Response(JSON.stringify({ error: "Unable to load assessment" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
