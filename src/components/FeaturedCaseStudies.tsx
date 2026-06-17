import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

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

const FeaturedCaseStudies = () => {
  const reduce = useReducedMotion();

  return (
    <section className="py-16 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.span
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease }}
          className="font-mono text-xs text-primary uppercase tracking-widest mb-6 block"
        >
          [SELECTED WORK]
        </motion.span>
        <motion.h2
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-12 leading-tight tracking-tight"
        >
          Proof, not promises.
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
          {cases.map((c) => (
            <motion.div
              key={c.slug}
              variants={{
                hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
              }}
              whileHover={reduce ? undefined : { y: -4 }}
            >
              <Link
                to={`/insights/${c.slug}`}
                className="group relative flex h-full flex-col bg-charcoal-mid border border-white/[0.08] rounded-xl p-8 transition-colors duration-300 hover:border-primary/40 overflow-hidden"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(420px circle at 50% 0%, hsl(var(--primary) / 0.10), transparent 60%)",
                  }}
                />
                <span className="relative font-mono text-xs text-primary font-semibold tracking-widest block mb-5">
                  [{c.sector.toUpperCase()}]
                </span>
                <p className="relative text-muted-foreground text-sm leading-relaxed mb-6">
                  {c.problem}
                </p>
                <p className="relative font-display text-xl font-extrabold text-primary leading-snug tracking-tight mb-6 flex-1">
                  {c.result}
                </p>
                <span className="relative inline-flex items-center gap-2 font-mono text-xs text-foreground/80 group-hover:text-primary transition-colors">
                  Read the case study
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <Link
          to="/insights"
          className="group inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary/80 transition-colors"
        >
          View all case studies
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;
