import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, message }: ContactFormData = await req.json();

    console.log("Received contact form submission:", { name, email, company });

    // Send notification email to the business
    const notificationEmail = await resend.emails.send({
      from: "Intelligent Transformation Studio <onboarding@resend.dev>",
      to: [email], // In production, change this to your business email
      subject: `New contact from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    // Send confirmation email to the person who submitted
    const confirmationEmail = await resend.emails.send({
      from: "Intelligent Transformation Studio <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for reaching out",
      html: `
        <h2>Thank you for contacting us, ${name}!</h2>
        <p>We've received your message and will be in touch shortly.</p>
        <p>In the meantime, if you have any urgent questions, please don't hesitate to reach out.</p>
        <br>
        <p>Best regards,</p>
        <p><strong>Intelligent Transformation Studio</strong></p>
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
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
