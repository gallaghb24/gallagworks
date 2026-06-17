import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const ProofPoints = () => {
  const { ref, isVisible } = useScrollAnimation();
  const reduce = useReducedMotion();

  const stat1 = useCountUp({ target: 32, suffix: "k+" });
  const stat2 = useCountUp({ target: 98, suffix: "%" });
  const stat3 = useCountUp({ target: 50, suffix: "%+" });

  const points = [
    {
      counter: stat1,
      label: "Hours Reclaimed Annually",
      detail: "Capacity recovered from manual Human Middleware across enterprise engagements.",
      href: "/insights/eradicating-enterprise-data-glue",
    },
    {
      counter: stat2,
      label: "Manual Effort Reduction",
      detail: "Enterprise reporting pipelines reduced from 30 hours to 10 minutes.",
      href: "/insights/enterprise-reporting-automation",
    },
    {
      counter: stat3,
      label: "Lead Time Reduction",
      detail: "Brief-to-production turnaround times slashed through automated ingestion.",
      href: "/insights/multichannel-content-orchestration",
    },
  ];

  return (
    <section className="py-16 lg:py-36 bg-slate" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <span
          className={`font-mono text-xs text-primary uppercase tracking-widest mb-6 block clip-reveal ${isVisible ? "visible" : ""}`}
        >
          [PROOF POINTS]
        </span>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {points.map((point) => (
            <motion.div
              key={point.label}
              variants={{
                hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 },
                show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
              }}
              whileHover={reduce ? undefined : { y: -4 }}
              className="group relative bg-charcoal-mid border border-white/[0.08] rounded-xl p-8 transition-colors duration-300 hover:border-primary/40 overflow-hidden"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(420px circle at 50% 0%, hsl(var(--primary) / 0.10), transparent 60%)",
                }}
              />
              <p
                ref={point.counter.ref}
                className="relative font-mono text-3xl md:text-4xl font-extrabold text-primary mb-3"
              >
                {point.counter.display}
              </p>
              <p className="relative font-display text-lg font-extrabold text-foreground mb-3 tracking-tight">
                {point.label}
              </p>
              <p className="relative text-muted-foreground font-light leading-relaxed text-sm">
                {point.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProofPoints;
