import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CTABand from "@/components/CTABand";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitState("idle");

    // Track conversion intent anonymously
    try {
      const posthog = (await import("posthog-js")).default;
      posthog.capture("consultation_request_initiated");
    } catch (_) { /* analytics should never block submission */ }

    try {
      const { error: dbError } = await supabase
        .from("contact_submissions")
        .insert([formData]);

      if (dbError) throw dbError;

      const { error: emailError } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (emailError) {
        console.error("Email notification failed:", emailError);
      }

      setSubmitState("success");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitState("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldStyle =
    "bg-off-white border border-black/[0.08] focus:border-primary focus:ring-0 focus:outline-none placeholder:text-black/30 rounded-lg";

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact"
        description="Request a consultation with Gallag Works. Every engagement starts with the Operational X-Ray – a structured diagnostic of your workflow friction."
        path="/contact"
      />
      <Navigation />
      <main>
        {/* Dark header */}
        <section className="pt-36 pb-16 md:pt-40 md:pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl">
              <h1 className="font-display text-4xl md:text-5xl font-[800] text-foreground mb-6">
                Request a Consultation.
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed font-light max-w-[720px]">
                Every engagement starts with the Operational X-Ray. Whether you're ready to tackle the Human Middleware or just want to talk through where AI could make a difference, start here.
              </p>
            </div>
          </div>
        </section>

        {/* Light form section */}
        <section className="bg-warm-stone py-16 lg:py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl">
              {submitState === "success" ? (
                <div className="space-y-4">
                  <p className="font-mono text-sm tracking-widest uppercase" style={{ color: '#333' }}>
                    [RECEIVED]
                  </p>
                  <p className="leading-relaxed font-light" style={{ color: '#555' }}>
                    Thank you. I will review your submission and respond within 24 hours with initial thoughts on how I can help.
                  </p>
                  <p className="leading-relaxed font-light" style={{ color: '#555' }}>
                    If you need to add anything in the meantime, email{" "}
                    <a href="mailto:hello@gallag.works" className="text-primary hover:text-primary/80 transition-colors">hello@gallag.works</a>{" "}
                    directly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className={`space-y-8 ${submitState === "error" ? "border border-red-600 rounded-xl p-8" : ""}`}
                >
                  {submitState === "error" && (
                    <p className="font-mono text-xs text-red-500">
                      Transmission error. Please contact{" "}
                      <a href="mailto:hello@gallag.works" className="underline">hello@gallag.works</a>{" "}
                      directly.
                    </p>
                  )}

                  {/* [01] NAME */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block font-mono text-xs tracking-widest uppercase"
                      style={{ color: '#333' }}
                    >
                      [01] Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={fieldStyle}
                      style={{ color: '#111113' }}
                      placeholder="Your name"
                    />
                  </div>

                  {/* [02] EMAIL */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block font-mono text-xs tracking-widest uppercase"
                      style={{ color: '#333' }}
                    >
                      [02] Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={fieldStyle}
                      style={{ color: '#111113' }}
                      placeholder="you@company.com"
                    />
                  </div>

                  {/* [03] COMPANY */}
                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="block font-mono text-xs tracking-widest uppercase"
                      style={{ color: '#333' }}
                    >
                      [03] Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={fieldStyle}
                      style={{ color: '#111113' }}
                      placeholder="Your organisation"
                    />
                  </div>

                  {/* [04] WHAT ARE YOU LOOKING TO SOLVE? */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block font-mono text-xs tracking-widest uppercase"
                      style={{ color: '#333' }}
                    >
                      [04] What Are You Looking to Solve?
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`${fieldStyle} resize-none`}
                      style={{ color: '#111113' }}
                      placeholder="Tell us about the workflow or problem you're looking at..."
                    />
                  </div>

                  {/* CTA */}
                  <div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base font-medium"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Request a Consultation"
                      )}
                    </Button>
                    <p className="mt-3 font-mono text-xs" style={{ color: '#666' }}>
                      Data is processed in accordance with our{" "}
                      <a
                        href="/privacy"
                        className="underline hover:text-primary transition-colors"
                      >
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
        <CTABand
          headline={<>Stop losing capacity to manual friction. <strong>Start the transformation.</strong></>}
          subcopy="Start with the free AI Readiness Diagnostic, or request an Operational X-Ray to see where the biggest opportunities are."
          primaryCTA={{ label: "Request a Consultation", to: "/contact" }}
          secondaryCTA={{ label: "Take the Diagnostic", to: "/diagnostic" }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
