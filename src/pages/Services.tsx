import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EngagementTypes from "@/components/EngagementTypes";
import HowWeWork from "@/components/HowWeWork";
import FAQSection from "@/components/FAQSection";
import CTABand from "@/components/CTABand";
import SEOHead from "@/components/SEOHead";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Services"
        description="AI transformation for people-heavy, process-driven businesses under margin pressure. From Operational X-Ray to Fractional AI Leadership — strategy, build, and adoption."
        path="/services"
      />
      <Navigation />
      <main>
        <section className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block opacity-0 animate-fade-in">
                [SERVICES]
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6 opacity-0 animate-fade-in-up">
                Eliminating Human Middleware.
              </h1>
              <p
                className="text-lg text-muted-foreground font-light leading-relaxed max-w-[720px] opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                I design how work should move through your organisation, then build the systems to make it happen. Every engagement is structured to deliver measurable outcomes — hours reclaimed, errors eliminated, throughput increased.
              </p>
            </div>
          </div>
        </section>

        <EngagementTypes />
        <HowWeWork />
        <FAQSection />

        <CTABand
          headline={<>Ready to eliminate the Human Middleware?</>}
          subcopy="Start with the free AI Readiness Diagnostic or request a consultation to discuss your operational challenges."
          secondaryCTA={{ label: "Take the AI Readiness Diagnostic", to: "/diagnostic" }}
        />
      </main>
      <Footer hideCTA />
    </div>
  );
};

export default Services;
