import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const DIMENSION_LABELS: Record<string, string> = {
  data_foundation: "Data Foundation",
  process_maturity: "Process Maturity",
  governance_risk: "Governance & Risk",
  skills_culture: "Skills & Culture",
  tooling_infrastructure: "Tooling & Infrastructure",
  strategic_clarity: "Strategic Clarity",
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

interface Payload {
  name: string;
  email: string;
  organisation: string;
  role?: string;
  industry?: string;
  company_size?: string;
  total_score: number;
  maturity_level: string;
  dimension_scores: Record<string, number>;
  assessment_id: string;
}

function getStrongestAndWeakest(scores: Record<string, number>) {
  const entries = Object.entries(scores);
  entries.sort((a, b) => b[1] - a[1]);
  return {
    strongest: { key: entries[0][0], score: entries[0][1] },
    weakest: { key: entries[entries.length - 1][0], score: entries[entries.length - 1][1] },
  };
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: Payload = await req.json();
    const {
      name, email, organisation, role, industry, company_size,
      total_score, maturity_level, dimension_scores, assessment_id,
    } = data;

    const safeName = escapeHtml(name.trim());
    const safeOrg = escapeHtml(organisation.trim());
    const { strongest, weakest } = getStrongestAndWeakest(dimension_scores);

    const resultsUrl = `https://www.gallag.works/diagnostic/results/${assessment_id}`;
    const calendlyUrl = "https://calendly.com/bengallagher/30min";
    const refId = `GW-DX-${Date.now().toString(36).toUpperCase().slice(-6)}`;

    // ── Email 1: Lead confirmation ──────────────────────────────────
    const leadHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#121212;color:#F5F5F5;font-family:Arial,Helvetica,sans-serif;line-height:1.6;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">

    <hr style="border:none;border-top:1px solid #2F3133;margin:0 0 32px 0;">

    <p style="margin:0 0 24px 0;font-size:15px;color:#F5F5F5;">Hi ${safeName},</p>

    <p style="margin:0 0 20px 0;font-size:15px;color:#F5F5F5;">Thanks for completing the AI Readiness Diagnostic.</p>

    <p style="margin:0 0 20px 0;font-size:15px;color:#F5F5F5;">Your organisation scored <strong style="color:#FF5F1F;">${total_score}</strong> out of 150, placing you at <strong style="color:#FF5F1F;">${escapeHtml(maturity_level)}</strong> level.</p>

    <table style="width:100%;border-collapse:collapse;margin:0 0 24px 0;">
      <tr>
        <td style="padding:8px 12px;font-size:13px;color:#888;font-family:'Courier New',Courier,monospace;border-bottom:1px solid #2F3133;">Strongest dimension</td>
        <td style="padding:8px 12px;font-size:13px;color:#F5F5F5;font-family:'Courier New',Courier,monospace;border-bottom:1px solid #2F3133;text-align:right;">${DIMENSION_LABELS[strongest.key] || strongest.key} (${strongest.score})</td>
      </tr>
      <tr>
        <td style="padding:8px 12px;font-size:13px;color:#888;font-family:'Courier New',Courier,monospace;">Needs most attention</td>
        <td style="padding:8px 12px;font-size:13px;color:#F5F5F5;font-family:'Courier New',Courier,monospace;text-align:right;">${DIMENSION_LABELS[weakest.key] || weakest.key} (${weakest.score})</td>
      </tr>
    </table>

    <p style="margin:0 0 24px 0;">
      <a href="${resultsUrl}" style="display:inline-block;padding:12px 24px;background-color:#FF5F1F;color:#FFFFFF;text-decoration:none;font-size:14px;font-weight:700;letter-spacing:0.5px;">VIEW FULL RESULTS</a>
    </p>

    <p style="margin:0 0 20px 0;font-size:15px;color:#F5F5F5;">Want to talk through your results? <a href="${calendlyUrl}" style="color:#FF5F1F;text-decoration:underline;">Book a 30-minute strategy call</a>.</p>

    <p style="margin:0 0 32px 0;font-size:15px;color:#F5F5F5;">No obligation — just a practical conversation about where AI can move the needle for ${safeOrg}.</p>

    <p style="margin:0;font-size:15px;color:#F5F5F5;">Best,</p>
    <p style="margin:4px 0 0 0;font-size:15px;font-weight:700;color:#F5F5F5;">Ben Gallagher</p>
    <p style="margin:2px 0 0 0;font-size:13px;color:#888;">Principal, Gallag Works</p>

    <hr style="border:none;border-top:1px solid #2F3133;margin:32px 0 16px 0;">

    <div style="font-family:'Courier New',Courier,monospace;font-size:11px;color:#555;line-height:1.5;">
      <a href="https://www.gallag.works" style="color:#888;text-decoration:none;">gallag.works</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="mailto:hello@gallag.works" style="color:#888;text-decoration:none;">hello@gallag.works</a><br>
      Ref: <span style="color:#FF5F1F;">${refId}</span>
    </div>

    <hr style="border:none;border-top:1px solid #2F3133;margin:16px 0 0 0;">

  </div>
</body>
</html>`;

    await resend.emails.send({
      from: "Gallag Works <hello@gallag.works>",
      to: [email.trim()],
      subject: `Your AI Readiness Results — ${organisation.trim()}`,
      html: leadHtml,
    });

    console.log("Lead confirmation email sent to:", email);

    // ── Email 2: Admin notification ─────────────────────────────────
    const dimensionRows = Object.entries(dimension_scores)
      .map(([key, score]) => `<tr><td style="padding:4px 8px;font-size:13px;color:#F5F5F5;">${DIMENSION_LABELS[key] || key}</td><td style="padding:4px 8px;font-size:13px;color:#FF5F1F;text-align:right;">${score}/25</td></tr>`)
      .join("");

    const adminHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#121212;color:#F5F5F5;font-family:Arial,Helvetica,sans-serif;line-height:1.6;">
  <div style="max-width:600px;margin:0 auto;padding:32px 24px;">
    <h2 style="margin:0 0 24px 0;font-size:18px;color:#FF5F1F;">New Assessment Completed</h2>

    <table style="width:100%;border-collapse:collapse;margin:0 0 24px 0;">
      <tr><td style="padding:6px 8px;font-size:13px;color:#888;">Name</td><td style="padding:6px 8px;font-size:13px;color:#F5F5F5;">${safeName}</td></tr>
      <tr><td style="padding:6px 8px;font-size:13px;color:#888;">Email</td><td style="padding:6px 8px;font-size:13px;color:#F5F5F5;">${escapeHtml(email.trim())}</td></tr>
      <tr><td style="padding:6px 8px;font-size:13px;color:#888;">Organisation</td><td style="padding:6px 8px;font-size:13px;color:#F5F5F5;">${safeOrg}</td></tr>
      <tr><td style="padding:6px 8px;font-size:13px;color:#888;">Role</td><td style="padding:6px 8px;font-size:13px;color:#F5F5F5;">${role ? escapeHtml(role) : '—'}</td></tr>
      <tr><td style="padding:6px 8px;font-size:13px;color:#888;">Industry</td><td style="padding:6px 8px;font-size:13px;color:#F5F5F5;">${industry ? escapeHtml(industry) : '—'}</td></tr>
      <tr><td style="padding:6px 8px;font-size:13px;color:#888;">Company Size</td><td style="padding:6px 8px;font-size:13px;color:#F5F5F5;">${company_size ? escapeHtml(company_size) : '—'}</td></tr>
    </table>

    <hr style="border:none;border-top:1px solid #2F3133;margin:0 0 16px 0;">

    <p style="margin:0 0 8px 0;font-size:15px;color:#F5F5F5;"><strong>Score:</strong> ${total_score}/150 — <strong>${escapeHtml(maturity_level)}</strong></p>

    <table style="width:100%;border-collapse:collapse;margin:8px 0 24px 0;">
      ${dimensionRows}
    </table>

    <p style="margin:0;">
      <a href="${resultsUrl}" style="color:#FF5F1F;font-size:13px;">View results →</a>&nbsp;&nbsp;|&nbsp;&nbsp;
      <a href="https://www.gallag.works/admin" style="color:#FF5F1F;font-size:13px;">Admin dashboard →</a>
    </p>
  </div>
</body>
</html>`;

    await resend.emails.send({
      from: "Gallag Works <hello@gallag.works>",
      to: ["ben@gallag.co.uk"],
      subject: `New Assessment: ${organisation.trim()} — ${maturity_level}`,
      html: adminHtml,
    });

    console.log("Admin notification email sent");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-assessment-email:", error);
    return new Response(
      JSON.stringify({ error: "Email delivery failed" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
