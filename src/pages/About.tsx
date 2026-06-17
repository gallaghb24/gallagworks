import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { useCountUp } from "@/hooks/useCountUp";
import SEOHead from "@/components/SEOHead";
import SmoothScroll from "@/components/SmoothScroll";
import benGallagher from "@/assets/ben-gallagher.jpg";

const ease = [0.16, 1, 0.3, 1] as const;
const commaFormat = (n: number) => n.toLocaleString();

const About = () => {
  const reduce = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const c1 = useCountUp({ target: 15, suffix: "+ Years" });
  const c2 = useCountUp({ target: 15, prefix: "£", suffix: "m+" });
  const c3 = useCountUp({ target: 4000, suffix: "+", formatValue: commaFormat });
  const c4 = useCountUp({ target: 30, suffix: "+" });

  const stats = [
    { counter: c1, label: "in Operations" },
    { counter: c2, label: "Contract Oversight" },
    { counter: c3, label: "Users Transitioned to New Systems" },
    { counter: c4, label: "Person Team Leadership" },
  ];

  const fadeUp = (delay = 0) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease, delay },
  });

  const inViewLabel = {
    initial: reduce ? { opacity: 1 } : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.6 },
    transition: { duration: 0.6, ease },
  };

  const inViewH2 = {
    initial: reduce ? { opacity: 1 } : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.7, ease, delay: 0.05 },
  };

  const inViewBody = (delay = 0.1) => ({
    initial: reduce ? { opacity: 1 } : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.6, ease, delay },
  });

  return (
    <div className="min-h-screen bg-background">
      <SmoothScroll />
      <SEOHead
        title="The Founder"
        description="15+ years directing enterprise delivery in retail and financial services. Independent AI transformation — strategy, build, adoption."
        path="/about"
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-36 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-3 order-2 lg:order-1">
                <motion.span
                  {...fadeUp(0)}
                  className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block"
                >
                  [THE FOUNDER]
                </motion.span>
                <motion.h1
                  {...fadeUp(0.08)}
                  className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.05]"
                >
                  AI Transformation, led from the inside.
                </motion.h1>
                <motion.p
                  {...fadeUp(0.16)}
                  className="text-lg text-muted-foreground font-light leading-relaxed max-w-[720px]"
                >
                  Gallag Works is an independent AI transformation practice. I don't advise from the sidelines — I embed in your team, set the strategy, build the tools, and drive adoption. You work directly with me across every engagement. My background: 15+ years as operational lead inside a 2,100-person content production agency, managing £15M+ annual contracts, before building the company's AI transformation function from scratch.
                </motion.p>
                <motion.a
                  {...fadeUp(0.24)}
                  href="https://www.linkedin.com/in/bengallagher/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary/80 transition-colors mt-6"
                >
                  Connect on LinkedIn →
                </motion.a>
              </div>
              <motion.div
                {...fadeUp(0.12)}
                className="lg:col-span-2 order-1 lg:order-2"
              >
                <img
                  src={benGallagher}
                  alt="Ben Gallagher, founder of Gallag Works"
                  className="w-full h-[280px] sm:h-[350px] lg:h-[480px] object-cover rounded-lg"
                  style={{ objectPosition: "center top", filter: "sepia(0.08) saturate(1.05)" }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Methodology — Light surface */}
        <section className="py-16 lg:py-36 bg-warm-stone">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl">
              <motion.span {...inViewLabel} className="font-mono text-xs text-primary uppercase tracking-widest mb-6 block">
                [THE METHODOLOGY]
              </motion.span>
              <motion.h2 {...inViewH2} className="text-3xl md:text-4xl font-extrabold text-on-light mb-8 tracking-tight">
                Engineering the problem, not the symptom.
              </motion.h2>
              <motion.p {...inViewBody(0.1)} className="text-lg text-on-light/70 font-light leading-relaxed max-w-[720px]">
                Most organisations don't have an AI problem. They have a process problem that AI can't fix on its own. I find the Human Middleware — the senior people acting as manual routers between systems — and engineer it out, so your team goes back to making decisions instead of managing tasks.
              </motion.p>
              <motion.p {...inViewBody(0.18)} className="text-lg text-on-light/70 font-light leading-relaxed max-w-[720px] mt-6">
                But fixing the process is only half the problem. The other half is designing tools that people actually want to use. The best automation in the world fails if the interface ignores how humans really work — how they make decisions, where they need to intervene, what they need to see at a glance. I design for adoption, not just for automation.
              </motion.p>
              <motion.p {...inViewBody(0.26)} className="text-lg text-on-light/70 font-light leading-relaxed max-w-[720px] mt-6">
                I architect every solution personally and stay accountable for the outcome end to end. When a build moves to production, I bring in specialists I direct and govern, so delivery scales without the quality dropping. You are never handed to a junior and left there. The judgement, the design and the accountability stay with me.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Experience Block — Light */}
        <section className="py-16 lg:py-36 bg-warm-stone">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl">
              <motion.span {...inViewLabel} className="font-mono text-xs text-primary uppercase tracking-widest mb-6 block">
                [EXPERIENCE]
              </motion.span>
              <motion.h2 {...inViewH2} className="text-3xl md:text-4xl font-extrabold text-on-light mb-12 tracking-tight">
                The track record.
              </motion.h2>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
                }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-10 md:mb-16"
              >
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={{
                      hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
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
                          "radial-gradient(360px circle at 50% 0%, hsl(var(--primary) / 0.08), transparent 60%)",
                      }}
                    />
                    <p
                      ref={stat.counter.ref}
                      className="relative font-mono text-2xl md:text-3xl font-extrabold text-primary mb-2"
                    >
                      {stat.counter.display}
                    </p>
                    <p className="relative font-mono text-xs text-[#555] uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p {...inViewBody(0.1)} className="text-lg text-[#333] font-light leading-relaxed max-w-[720px]">
                15 years directing enterprise client delivery and managing £15M+ contracts inside a 2,100-person agency taught me where businesses actually bleed time and money: not in the big strategic decisions, but in the thousands of small manual handoffs that nobody questions anymore. The last two years building an AI transformation function — governance, production tools, training programmes, adoption across the business — showed me that most companies need someone who can do all of it, not just advise on parts of it. That's what Gallag Works is.
              </motion.p>
            </div>
          </div>
        </section>

        <CTABand
          headline={<>AI transformation, led by someone who's built it at scale.</>}
          subcopy="Work directly with me to move your business from AI ambition to AI execution."
        />
      </main>
      <Footer hideCTA />
    </div>
  );
};

export default About;
