import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import EngagementTypes from "@/components/EngagementTypes";
import HowWeWork from "@/components/HowWeWork";
import FAQSection from "@/components/FAQSection";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Services"
        description="Operational X-Ray diagnostics, structural prototypes, and enterprise integration. Engineering out the Data Glue consuming your team's capacity."
        path="/services"
      />
      <Navigation />
      <main>
        <section className="pt-32 pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block opacity-0 animate-fade-in">
                [SERVICES]
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6 opacity-0 animate-fade-in-up">
                Operational Engineering Services
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-[720px] opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Most operational friction is invisible. We use a proprietary diagnostic framework to expose the 'Data Glue' consuming your team's capacity – then we engineer the infrastructure to remove it. No 50-page strategy decks; just working systems.
              </p>
            </div>
          </div>
        </section>

        <EngagementTypes />
        <HowWeWork />
        <FAQSection />
        <CTABand headline="Have a workflow in mind? Let's look at it together." />
      </main>
      <Footer hideCTA />
    </div>
  );
};

export default Services;
