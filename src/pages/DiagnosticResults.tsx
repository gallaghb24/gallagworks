import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const DiagnosticResults = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Your AI Readiness Results" description="View your AI Readiness Diagnostic results and recommendations." path="/diagnostic/results" />
      <Navigation />
      <main>
        <section className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block">
                [RESULTS]
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6">
                Results page coming soon.
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                The results dashboard is being built.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer hideCTA />
    </div>
  );
};

export default DiagnosticResults;
