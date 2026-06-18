import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { revealContainer, revealItem, revealViewport } from "@/lib/motion";

const cases = [
  {
    slug: "enterprise-reporting-automation",
    sector: "Media / Entertainment",
    problem: "30 hours of monthly Excel manipulation for mission-critical pricing reports.",
    result: "98% less processing time. 360 hours reclaimed a year.",
  },
  {
    slug: "multichannel-content-orchestration",
    sector: "Retail & Commerce",
    problem: "500-line client briefs triggering 5-hour manual QC loops.",
    result: "1,200 hours reclaimed annually. Lead times cut 50%.",
  },
  {
    slug: "high-volume-allocation-logistics",
    sector: "Retail & Commerce",
    problem: "A 10-hour monthly task merging dozens of allocation files by hand.",
    result: "97% less manual work. 10 hours down to 15 minutes.",
  },
];

const ProofSection = () => {
  const { ref } = useScrollAnimation();

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
    <section className="py-16 lg:py-36 bg-warm-stone" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="border-t border-black/[0.08] mb-8 lg:mb-12" />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={revealContainer}
        >
          <motion.div variants={revealItem} className="mb-6">
            <span className="font-mono text-xs text-primary uppercase tracking-widest">[PROOF]</span>
          </motion.div>
          <motion.h2
            variants={revealItem}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-on-light mb-12 leading-tight tracking-tight"
          >
            The outcomes, and the work behind them.
          </motion.h2>

          <motion.div
            variants={revealContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
          >
            {points.map((point) => (
              <motion.div
                key={point.label}
                variants={revealItem}
                whileHover={{ y: -4 }}
              >
                <Link
                  to={point.href}
                  className="group relative flex h-full flex-col bg-off-white border border-black/[0.08] rounded-xl p-8 transition-colors duration-300 hover:border-primary/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(420px circle at 50% 0%, hsl(var(--primary) / 0.08), transparent 60%)",
                    }}
                  />
                  <p
                    ref={point.counter.ref}
                    className="relative font-mono text-3xl md:text-4xl font-extrabold text-primary mb-3"
                  >
                    {point.counter.display}
                  </p>
                  <p className="relative font-display text-lg font-extrabold text-on-light mb-3 tracking-tight">
                    {point.label}
                  </p>
                  <p className="relative text-on-light/60 font-light leading-relaxed text-sm mb-5 flex-1">
                    {point.detail}
                  </p>
                  <span className="relative inline-flex items-center gap-2 font-mono text-xs text-on-light/60 group-hover:text-primary transition-colors">
                    Read the case study
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={revealContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 mt-6"
          >
            {cases.map((c) => (
              <motion.div
                key={c.slug}
                variants={revealItem}
                whileHover={{ y: -4 }}
              >
                <Link
                  to={`/insights/${c.slug}`}
                  className="group relative flex h-full flex-col bg-off-white border border-black/[0.08] rounded-xl p-8 transition-colors duration-300 hover:border-primary/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(420px circle at 50% 0%, hsl(var(--primary) / 0.08), transparent 60%)",
                    }}
                  />
                  <span className="relative font-mono text-xs text-primary font-semibold tracking-widest block mb-5">
                    [{c.sector.toUpperCase()}]
                  </span>
                  <p className="relative text-on-light/60 text-sm leading-relaxed mb-6">
                    {c.problem}
                  </p>
                  <p className="relative font-display text-xl font-extrabold text-primary leading-snug tracking-tight mb-6 flex-1">
                    {c.result}
                  </p>
                  <span className="relative inline-flex items-center gap-2 font-mono text-xs text-on-light/60 group-hover:text-primary transition-colors">
                    Read the case study
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={revealItem}>
            <Link
              to="/insights"
              className="group inline-flex items-center gap-2 font-mono text-sm text-on-light/60 hover:text-primary transition-colors"
            >
              View all case studies
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofSection;
