import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import EngagementTypes from "@/components/EngagementTypes";
import HowWeWork from "@/components/HowWeWork";
import FAQSection from "@/components/FAQSection";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";

const Services = () => {
  useEffect(() => {
    document.title = "Services | Gallag Works";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block animate-fade-in">
                [SERVICES]
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
                Our services
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Every engagement starts with the Operational X-Ray – understanding where the Data Glue sits before we design anything. We don't bring pre-built solutions; we engineer around how your organisation actually operates.
              </p>
            </div>
          </div>
        </section>

        <EngagementTypes />
        <HowWeWork />
        <FAQSection />
        <CTABand headline="Have a workflow in mind? Let's look at it together." />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
