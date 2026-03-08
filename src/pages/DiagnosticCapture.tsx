import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useDiagnostic } from "@/contexts/DiagnosticContext";
import { calculateFullScoring } from "@/lib/scoring";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { trackEvent } from "@/lib/analytics";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  organisation: z.string().trim().min(1, "Organisation is required").max(200),
  role: z.string().max(100).optional().or(z.literal("")),
  industry: z.string().optional().or(z.literal("")),
  company_size: z.string().optional().or(z.literal("")),
});

const INDUSTRIES = [
  "Agency / Marketing Services",
  "Retail",
  "Financial Services",
  "Healthcare",
  "Technology",
  "Manufacturing",
  "Public Sector",
  "Other",
];

const COMPANY_SIZES = ["1-50", "51-200", "201-1,000", "1,001-5,000", "5,000+"];

const DiagnosticCapture = () => {
  const navigate = useNavigate();
  const { answers } = useDiagnostic();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    role: "",
    industry: "",
    company_size: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
    if (Object.keys(answers).length === 0) {
      navigate("/diagnostic/assess", { replace: true });
    }
  }, [answers, navigate]);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = leadSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      const scoring = calculateFullScoring(answers);

      const { data: lead, error: leadError } = await supabase
        .from("leads")
        .insert({
          name: result.data.name,
          email: result.data.email,
          organisation: result.data.organisation,
          role: result.data.role || null,
          industry: result.data.industry || null,
          company_size: result.data.company_size || null,
        })
        .select("id")
        .single();

      if (leadError) throw leadError;

      const { data: assessment, error: assessError } = await supabase
        .from("assessments")
        .insert({
          lead_id: lead.id,
          status: "completed",
          completed_at: new Date().toISOString(),
          total_score: scoring.totalScore,
          maturity_level: scoring.maturityLevel.label,
          dimension_scores: scoring.dimensionScores,
          answers: answers,
        })
        .select("id")
        .single();

      if (assessError) throw assessError;

      // Fire-and-forget: send confirmation + admin notification emails
      supabase.functions.invoke("send-assessment-email", {
        body: {
          name: result.data.name,
          email: result.data.email,
          organisation: result.data.organisation,
          role: result.data.role || null,
          industry: result.data.industry || null,
          company_size: result.data.company_size || null,
          total_score: scoring.totalScore,
          maturity_level: scoring.maturityLevel.label,
          dimension_scores: scoring.dimensionScores,
          assessment_id: assessment.id,
        },
      }).catch((err) => console.error("Email send failed (non-blocking):", err));

      navigate(`/diagnostic/results/${assessment.id}`, {
        state: { scoring, assessmentId: assessment.id, organisation: result.data.organisation },
      });
    } catch (err) {
      console.error("Submission error:", err);
      toast({
        title: "Something went wrong",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Your Results Are Ready"
        description="How ready is your organisation for AI? A free 5-minute diagnostic across six critical dimensions. Built by practitioners, not consultants."
        path="/diagnostic/capture"
      />
      <Navigation />
      <main>
        <section className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex justify-center">
            <div className="w-full max-w-[520px] bg-slate border border-border p-6 sm:p-8 md:p-10">
              <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block">
                [YOUR RESULTS ARE READY]
              </span>
              <h1 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mb-3">
                See how your organisation scored.
              </h1>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                Enter your details to view your results. No spam, no sales calls
                unless you ask for them.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="rounded-none h-12"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-sm text-primary">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="rounded-none h-12"
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p className="text-sm text-primary">{errors.email}</p>
                  )}
                </div>

                {/* Organisation */}
                <div className="space-y-2">
                  <Label htmlFor="organisation">Organisation *</Label>
                  <Input
                    id="organisation"
                    value={form.organisation}
                    onChange={(e) =>
                      handleChange("organisation", e.target.value)
                    }
                    className="rounded-none h-12"
                    placeholder="Your company"
                  />
                  {errors.organisation && (
                    <p className="text-sm text-primary">
                      {errors.organisation}
                    </p>
                  )}
                </div>

                {/* Role */}
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input
                    id="role"
                    value={form.role}
                    onChange={(e) => handleChange("role", e.target.value)}
                    className="rounded-none h-12"
                    placeholder="e.g. Head of Operations"
                  />
                </div>

                {/* Industry */}
                <div className="space-y-2">
                  <Label>Industry</Label>
                  <Select
                    value={form.industry}
                    onValueChange={(v) => handleChange("industry", v)}
                  >
                    <SelectTrigger className="rounded-none h-12">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {INDUSTRIES.map((ind) => (
                        <SelectItem key={ind} value={ind}>
                          {ind}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Company Size */}
                <div className="space-y-2">
                  <Label>Company Size</Label>
                  <Select
                    value={form.company_size}
                    onValueChange={(v) => handleChange("company_size", v)}
                  >
                    <SelectTrigger className="rounded-none h-12">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      {COMPANY_SIZES.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none h-12"
                >
                  {submitting ? "Submitting..." : "See My Results"}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer hideCTA />
    </div>
  );
};

export default DiagnosticCapture;
