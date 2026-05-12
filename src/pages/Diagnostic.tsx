import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SmoothScroll from "@/components/SmoothScroll";

const ease = [0.16, 1, 0.3, 1] as const;

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
        title="AI Readiness Diagnostic"
        description="How ready is your organisation for AI? A free 5-minute diagnostic across six critical dimensions. Built by practitioners, not consultants."
        path="/diagnostic"
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-36 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <motion.span
                {...fadeUp(0)}
                className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block"
              >
                [DIAGNOSTIC]
              </motion.span>
              <motion.h1
                {...fadeUp(0.08)}
                className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.05]"
              >
                How ready is your organisation for AI.
              </motion.h1>
              <motion.p
                {...fadeUp(0.16)}
                className="text-lg text-muted-foreground font-light leading-relaxed max-w-[720px] mb-8"
              >
                A 5-minute diagnostic built by practitioners, not consultants.
                No jargon. No sales pitch. Just an honest assessment of where
                you stand.
              </motion.p>
              <motion.div {...fadeUp(0.24)}>
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium group"
                >
                  <Link to="/diagnostic/assess">
                    Start the Diagnostic
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Free results. No sign-up to start.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Dimensions */}
        <section className="py-16 lg:py-36 bg-warm-stone">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-7xl">
              <motion.span
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease }}
                className="font-mono text-xs text-primary uppercase tracking-widest mb-6 block"
              >
                [THE FRAMEWORK]
              </motion.span>
              <motion.h2
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease, delay: 0.05 }}
                className="text-3xl md:text-4xl font-extrabold text-on-light mb-6 tracking-tight"
              >
                Six dimensions of AI readiness.
              </motion.h2>
              <motion.p
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease, delay: 0.1 }}
                className="text-lg text-[#333] font-light leading-relaxed max-w-[720px] mb-16"
              >
                Each dimension is scored independently, giving you a clear map
                of where to invest and what to fix first.
              </motion.p>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {dimensions.map((dim) => (
                  <motion.div
                    key={dim.number}
                    variants={{
                      hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
                    }}
                    whileHover={reduce ? undefined : { y: -4 }}
                    transition={{ duration: 0.3, ease }}
                    className="group relative bg-off-white border border-black/[0.08] rounded-xl p-8 transition-colors duration-300 hover:border-primary/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(400px circle at 50% 0%, hsl(var(--primary) / 0.08), transparent 60%)",
                      }}
                    />
                    <span className="relative font-mono text-xs text-primary uppercase tracking-widest mb-4 block">
                      [{dim.number}]
                    </span>
                    <h3 className="relative text-xl font-extrabold text-on-light mb-2 tracking-tight">
                      {dim.title}
                    </h3>
                    <p className="relative text-[#555] font-light leading-relaxed">
                      {dim.question}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
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
          primaryCTA={{ label: "Start the Diagnostic", to: "/diagnostic/assess" }}
          secondaryCTA={{ label: "Request a Consultation", to: "/contact" }}
        />
      </main>
      <Footer hideCTA />
    </div>
  );
};

export default Diagnostic;
