import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
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
  assessment_id: string;
  name: string;
  email: string;
  organisation: string;
  total_score: number;
  maturity_level: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: Payload = await req.json();
    const { assessment_id, name, email, organisation, total_score, maturity_level } = data;

    const safeName = escapeHtml(name.trim());
    const safeOrg = escapeHtml(organisation.trim());
    const safeEmail = escapeHtml(email.trim());
    const resultsUrl = `https://www.gallag.works/diagnostic/results/${assessment_id}`;

    // ── Email 1: Admin notification ─────────────────────────────────
    const adminHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#121212;color:#F5F5F5;font-family:Arial,Helvetica,sans-serif;line-height:1.6;">
  <div style="max-width:600px;margin:0 auto;padding:32px 24px;">
    <h2 style="margin:0 0 24px 0;font-size:18px;color:#FF5F1F;">Consultation Requested</h2>

    <table style="width:100%;border-collapse:collapse;margin:0 0 24px 0;">
      <tr><td style="padding:6px 8px;font-size:13px;color:#888;">Name</td><td style="padding:6px 8px;font-size:13px;color:#F5F5F5;">${safeName}</td></tr>
      <tr><td style="padding:6px 8px;font-size:13px;color:#888;">Email</td><td style="padding:6px 8px;font-size:13px;color:#F5F5F5;"><a href="mailto:${safeEmail}" style="color:#FF5F1F;">${safeEmail}</a></td></tr>
      <tr><td style="padding:6px 8px;font-size:13px;color:#888;">Organisation</td><td style="padding:6px 8px;font-size:13px;color:#F5F5F5;">${safeOrg}</td></tr>
      <tr><td style="padding:6px 8px;font-size:13px;color:#888;">Score</td><td style="padding:6px 8px;font-size:13px;color:#F5F5F5;">${total_score}/150 — ${escapeHtml(maturity_level)}</td></tr>
    </table>

    <p style="margin:0;">
      <a href="${resultsUrl}" style="color:#FF5F1F;font-size:13px;">View results →</a>&nbsp;&nbsp;|&nbsp;&nbsp;
      <a href="mailto:${safeEmail}" style="color:#FF5F1F;font-size:13px;">Reply to lead →</a>
    </p>
  </div>
</body>
</html>`;

    await resend.emails.send({
      from: "Gallag Works <hello@gallag.works>",
      to: ["ben@gallag.co.uk"],
      subject: `Consultation Request: ${organisation.trim()} — ${maturity_level}`,
      html: adminHtml,
    });

    console.log("Admin consultation notification sent");

    // ── Email 2: Lead confirmation ──────────────────────────────────
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

    <p style="margin:0 0 20px 0;font-size:15px;color:#F5F5F5;">Thanks for requesting a consultation. I've received your details and your AI Readiness results.</p>

    <p style="margin:0 0 20px 0;font-size:15px;color:#F5F5F5;">I'll be in touch within 24 hours to arrange a time that works for you. I'll walk through your results, identify your highest-leverage opportunities, and discuss practical next steps.</p>

    <p style="margin:0 0 32px 0;font-size:15px;color:#F5F5F5;">No obligation — just a focused conversation about where AI can move the needle for ${safeOrg}.</p>

    <p style="margin:0;font-size:15px;color:#F5F5F5;">Best,</p>
    <p style="margin:4px 0 0 0;font-size:15px;font-weight:700;color:#F5F5F5;">Ben Gallagher</p>
    <p style="margin:2px 0 0 0;font-size:13px;color:#888;">Principal, Gallag Works</p>

    <hr style="border:none;border-top:1px solid #2F3133;margin:32px 0 16px 0;">

    <div style="font-family:'Courier New',Courier,monospace;font-size:11px;color:#555;line-height:1.5;">
      <a href="https://www.gallag.works" style="color:#888;text-decoration:none;">gallag.works</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="mailto:hello@gallag.works" style="color:#888;text-decoration:none;">hello@gallag.works</a>
    </div>

    <hr style="border:none;border-top:1px solid #2F3133;margin:16px 0 0 0;">

  </div>
</body>
</html>`;

    await resend.emails.send({
      from: "Gallag Works <hello@gallag.works>",
      to: [email.trim()],
      subject: "Consultation Request Received — Gallag Works",
      html: leadHtml,
    });

    console.log("Lead consultation confirmation sent to:", email);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-consultation-request:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send consultation request" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
