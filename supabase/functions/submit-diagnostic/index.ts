import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(v: unknown, max: number): string | null {
  if (typeof v !== "string") return null;
  const t = v.trim();
  if (!t || t.length > max) return null;
  return t;
}

function optStr(v: unknown, max: number): string | null {
  if (v === null || v === undefined || v === "") return null;
  return str(v, max);
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = await req.json().catch(() => null) as any;
    if (!body || typeof body !== "object") {
      return new Response(JSON.stringify({ error: "Invalid request" }), {
        status: 400, headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const name = str(body.name, 100);
    const email = str(body.email, 255);
    const organisation = str(body.organisation, 200);
    const role = optStr(body.role, 100);
    const industry = optStr(body.industry, 100);
    const company_size = optStr(body.company_size, 50);
    const total_score = Number(body.total_score);
    const maturity_level = str(body.maturity_level, 50);
    const dimension_scores = body.dimension_scores;
    const answers = body.answers;

    if (!name || !email || !EMAIL_RE.test(email) || !organisation || !maturity_level) {
      return new Response(JSON.stringify({ error: "Missing or invalid required fields" }), {
        status: 400, headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }
    if (!Number.isFinite(total_score) || total_score < 0 || total_score > 150) {
      return new Response(JSON.stringify({ error: "Invalid score" }), {
        status: 400, headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }
    if (!dimension_scores || typeof dimension_scores !== "object") {
      return new Response(JSON.stringify({ error: "Invalid dimension scores" }), {
        status: 400, headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const { data: lead, error: leadErr } = await supabase
      .from("leads")
      .insert({ name, email, organisation, role, industry, company_size })
      .select("id")
      .single();
    if (leadErr || !lead) throw leadErr ?? new Error("Lead insert failed");

    const { data: assessment, error: aErr } = await supabase
      .from("assessments")
      .insert({
        lead_id: lead.id,
        status: "completed",
        completed_at: new Date().toISOString(),
        total_score,
        maturity_level,
        dimension_scores,
        answers,
      })
      .select("id")
      .single();
    if (aErr || !assessment) throw aErr ?? new Error("Assessment insert failed");

    // Fire-and-forget email notification
    supabase.functions.invoke("send-assessment-email", {
      body: { assessment_id: assessment.id },
    }).catch((e) => console.error("email invoke failed:", e));

    return new Response(JSON.stringify({ assessment_id: assessment.id }), {
      status: 200, headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (err) {
    console.error("submit-diagnostic error:", err);
    return new Response(JSON.stringify({ error: "Unable to submit diagnostic" }), {
      status: 500, headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
