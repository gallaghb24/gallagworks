import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

// Rate limiting configuration
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 submissions per hour per IP

// In-memory rate limit store (resets on function cold start)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function getClientIP(req: Request): string {
  // Check various headers for the real IP
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIP = req.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }
  return "unknown";
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetIn: number } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  // Clean up expired entries periodically
  if (rateLimitStore.size > 1000) {
    for (const [key, value] of rateLimitStore.entries()) {
      if (now > value.resetTime) {
        rateLimitStore.delete(key);
      }
    }
  }

  if (!record || now > record.resetTime) {
    // First request or window expired
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - 1, resetIn: RATE_LIMIT_WINDOW_MS };
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    // Rate limit exceeded
    return { allowed: false, remaining: 0, resetIn: record.resetTime - now };
  }

  // Increment count
  record.count++;
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - record.count, resetIn: record.resetTime - now };
}

// Input validation
function validateInput(data: any): { valid: boolean; error?: string } {
  if (!data.name || typeof data.name !== "string" || data.name.trim().length === 0) {
    return { valid: false, error: "Name is required" };
  }
  if (data.name.length > 100) {
    return { valid: false, error: "Name must be less than 100 characters" };
  }
  if (!data.email || typeof data.email !== "string") {
    return { valid: false, error: "Email is required" };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { valid: false, error: "Invalid email format" };
  }
  if (data.email.length > 255) {
    return { valid: false, error: "Email must be less than 255 characters" };
  }
  if (!data.message || typeof data.message !== "string" || data.message.trim().length === 0) {
    return { valid: false, error: "Message is required" };
  }
  if (data.message.length > 5000) {
    return { valid: false, error: "Message must be less than 5000 characters" };
  }
  if (data.company && data.company.length > 200) {
    return { valid: false, error: "Company name must be less than 200 characters" };
  }
  return { valid: true };
}

// Simple HTML escaping to prevent XSS in emails
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const clientIP = getClientIP(req);
    const rateLimit = checkRateLimit(clientIP);
    
    console.log(`Rate limit check for IP ${clientIP}: allowed=${rateLimit.allowed}, remaining=${rateLimit.remaining}`);

    if (!rateLimit.allowed) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ 
          error: "Too many requests. Please try again later.",
          retryAfter: Math.ceil(rateLimit.resetIn / 1000)
        }),
        {
          status: 429,
          headers: { 
            "Content-Type": "application/json",
            "Retry-After": String(Math.ceil(rateLimit.resetIn / 1000)),
            ...corsHeaders 
          },
        }
      );
    }

    const data = await req.json();
    
    // Validate input
    const validation = validateInput(data);
    if (!validation.valid) {
      console.log("Validation failed:", validation.error);
      return new Response(
        JSON.stringify({ error: validation.error }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, company, message }: ContactFormData = data;

    // Sanitize inputs for HTML email
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeCompany = company ? escapeHtml(company.trim()) : null;
    const safeMessage = escapeHtml(message.trim());

    console.log("Received contact form submission:", { name: safeName, email: safeEmail, company: safeCompany });

    // Send notification email to Ben
    const notificationEmail = await resend.emails.send({
      from: "Gallag Works <hello@gallag.works>",
      to: ["ben@gallag.co.uk"],
      subject: `New contact from ${safeName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Company:</strong> ${safeCompany || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage.replace(/\n/g, "<br>")}</p>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    // Generate a pseudo-unique reference
    const refId = `GW-${Date.now().toString(36).toUpperCase().slice(-6)}`;

    // Send confirmation email to the person who submitted
    const confirmationEmail = await resend.emails.send({
      from: "Gallag Works <hello@gallag.works>",
      to: [email.trim()],
      subject: "Re: Your Consultation Request | Gallag Works",
      html: `
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

    <p style="margin:0 0 20px 0;font-size:15px;color:#F5F5F5;">Thanks for reaching out${safeCompany ? ` and sharing some background on <span style="font-family:'Courier New',Courier,monospace;color:#FF5F1F;">${safeCompany}</span>` : ''}.</p>

    <p style="margin:0 0 20px 0;font-size:15px;color:#F5F5F5;">I've personally received your request and the details you provided regarding your current operational context. It sounds like there is a significant opportunity to look at the &lsquo;Data Glue&rsquo; and reclaim some capacity within your workflows.</p>

    <p style="margin:0 0 20px 0;font-size:15px;color:#F5F5F5;">I am reviewing the information now and will be in touch within the next 24 hours to suggest a time for us to speak.</p>

    <p style="margin:0 0 32px 0;font-size:15px;color:#F5F5F5;">Looking forward to the conversation.</p>

    <p style="margin:0;font-size:15px;color:#F5F5F5;">Best,</p>
    <p style="margin:4px 0 0 0;font-size:15px;font-weight:700;color:#F5F5F5;">Ben Gallagher</p>
    <p style="margin:2px 0 0 0;font-size:13px;color:#888;">Principal, Gallag Works</p>

    <hr style="border:none;border-top:1px solid #2F3133;margin:32px 0 16px 0;">

    <div style="font-family:'Courier New',Courier,monospace;font-size:11px;color:#555;line-height:1.5;">
      <span style="color:#888;">[SUBMISSION LOG]</span> Ref: <span style="color:#FF5F1F;">${refId}</span><br>
      Context: ${safeMessage.length > 120 ? safeMessage.substring(0, 120) + '…' : safeMessage}
    </div>

    <hr style="border:none;border-top:1px solid #2F3133;margin:16px 0 0 0;">

  </div>
</body>
</html>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmail);

    return new Response(
      JSON.stringify({ success: true, notificationEmail, confirmationEmail }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: "Request Briefing Failed. Technical logs recorded." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
