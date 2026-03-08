import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const dimensions = [
  {
    number: "01",
    title: "Data Foundation",
    question: "Can AI actually work with what you have?",
  },
  {
    number: "02",
    title: "Process Maturity",
    question:
      "Are your workflows ready to be automated, or will AI just automate your chaos?",
  },
  {
    number: "03",
    title: "Governance & Risk",
    question: "Can you adopt AI without exposing the business?",
  },
  {
    number: "04",
    title: "Skills & Culture",
    question: "Will your people use it, resist it, or ignore it?",
  },
  {
    number: "05",
    title: "Tooling & Infrastructure",
    question: "Is your tech stack ready for AI, or will it fight you?",
  },
  {
    number: "06",
    title: "Strategic Clarity",
    question: "Do you know what you actually want AI to do?",
  },
];

const Diagnostic = () => {
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="AI Readiness Diagnostic"
        description="How ready is your organisation for AI? A free 5-minute diagnostic across six critical dimensions. Built by practitioners, not consultants."
        path="/diagnostic"
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block opacity-0 animate-fade-in">
                [DIAGNOSTIC]
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6 opacity-0 animate-fade-in-up">
                How ready is your organisation for AI.
              </h1>
              <p
                className="text-lg text-muted-foreground font-light leading-relaxed max-w-[720px] mb-8 opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                A 5-minute diagnostic built by practitioners, not consultants.
                No jargon. No sales pitch. Just an honest assessment of where
                you stand.
              </p>
              <div
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-8 py-6 text-lg font-medium group"
                >
                  <Link to="/diagnostic/assess">
                    Start the Diagnostic
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Free results. No sign-up to start.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dimensions */}
        <section className="py-16 lg:py-36 bg-slate border-draw" ref={ref}>
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-7xl">
              <span
                className={`font-mono text-xs text-primary uppercase tracking-widest mb-6 block clip-reveal ${isVisible ? "visible" : ""}`}
              >
                [THE FRAMEWORK]
              </span>
              <h2
                className={`text-3xl md:text-4xl font-extrabold text-foreground mb-6 clip-reveal ${isVisible ? "visible" : ""}`}
              >
                Six dimensions of AI readiness.
              </h2>
              <p
                className={`text-lg text-muted-foreground font-light leading-relaxed max-w-[720px] mb-16 clip-reveal ${isVisible ? "visible" : ""}`}
              >
                Each dimension is scored independently, giving you a clear map
                of where to invest and what to fix first.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dimensions.map((dim, index) => (
                  <div
                    key={dim.number}
                    className={`bg-slate border border-border p-6 md:p-8 clip-reveal-down ${isVisible ? "visible" : ""}`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block">
                      [{dim.number}]
                    </span>
                    <h3 className="text-xl font-extrabold text-foreground mb-2">
                      {dim.title}
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      {dim.question}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTABand
          headline={
            <span className="md:whitespace-nowrap">
              Find out where you stand.{" "}
              <span className="text-primary">In 5 minutes.</span>
            </span>
          }
          subcopy="No sign-up required. Get your AI readiness score and a clear action plan."
        />
      </main>
      <Footer hideCTA />
    </div>
  );
};

export default Diagnostic;
