import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EngagementTypes from "@/components/EngagementTypes";
import HowWeWork from "@/components/HowWeWork";
import FAQSection from "@/components/FAQSection";
import CTABand from "@/components/CTABand";
import SEOHead from "@/components/SEOHead";
import SmoothScroll from "@/components/SmoothScroll";

const ease = [0.16, 1, 0.3, 1] as const;

const Services = () => {
  const reduce = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = (delay = 0) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease, delay },
  });

  return (
    <div className="min-h-screen bg-background">
      <SmoothScroll />
      <SEOHead
        title="Services"
        description="AI transformation for people-heavy, process-driven businesses under margin pressure. From Operational X-Ray to Fractional AI Leadership — strategy, build, and adoption."
        path="/services"
      />
      <Navigation />
      <main>
        <section className="pt-36 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <motion.span
                {...fadeUp(0)}
                className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block"
              >
                [SERVICES]
              </motion.span>
              <motion.h1
                {...fadeUp(0.08)}
                className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.05]"
              >
                Eliminating Human Middleware.
              </motion.h1>
              <motion.p
                {...fadeUp(0.16)}
                className="text-lg text-muted-foreground font-light leading-relaxed max-w-[720px]"
              >
                Most businesses over a certain size are held together by Human Middleware — senior people spending 30% of their time acting as manual routers between systems. I design how work should move through your organisation, then build the systems to make it happen. Strategy, build, and adoption — measured by capacity reclaimed and margin recovered.
              </motion.p>
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
