import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    document.title = "Contact | Gallag Works";
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

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

      toast({
        title: "Message sent",
        description: "Thank you for reaching out. I'll be in touch soon.",
      });

      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldStyle =
    "bg-transparent border border-border rounded-none focus:border-primary focus:ring-0 focus:outline-none text-foreground placeholder:text-muted-foreground/40";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="pt-32 pb-20 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl">
              {/* Header */}
              <h1 className="font-display text-4xl md:text-5xl font-[800] text-foreground mb-6">
                Request a Consultation.
              </h1>
              <p
                className="text-lg text-foreground/70 leading-relaxed font-light max-w-[720px]"
              >
                Every engagement starts with the Operational X-Ray. Whether you are ready to engineer out the 'Data Glue' or are still quantifying the margin recovery opportunity, start here to discuss a structured engagement.
              </p>

              {/* Form — 4rem gap from header */}
              <form onSubmit={handleSubmit} className="mt-16 space-y-8">
                {/* [01] NAME */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block font-mono text-xs tracking-widest uppercase text-foreground/70"
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
                    placeholder="Your name"
                  />
                </div>

                {/* [02] EMAIL */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block font-mono text-xs tracking-widest uppercase text-foreground/70"
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
                    placeholder="you@company.com"
                  />
                </div>

                {/* [03] COMPANY */}
                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="block font-mono text-xs tracking-widest uppercase text-foreground/70"
                  >
                    [03] Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={fieldStyle}
                    placeholder="Your organisation"
                  />
                </div>

                {/* [04] OPERATIONAL CONTEXT */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block font-mono text-xs tracking-widest uppercase text-foreground/70"
                  >
                    [04] Operational Context
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`${fieldStyle} resize-none`}
                    placeholder="Tell us about the workflow or problem you're looking at..."
                  />
                </div>

                {/* CTA */}
                <div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-8 py-3 text-base font-medium"
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
                  <p className="mt-3 font-mono text-xs text-muted-foreground/50">
                    Data is processed in accordance with our{" "}
                    <a
                      href="/privacy"
                      className="underline hover:text-muted-foreground transition-colors"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
