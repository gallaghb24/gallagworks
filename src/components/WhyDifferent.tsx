import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const items = [
  {
    label: "STRATEGY FIRMS",
    body: "Strategy firms write the roadmap and build nothing. You get a deck and no idea what to do on Monday.",
  },
  {
    label: "TOOL BUILDERS",
    body: "Tool builders ship the app but don't understand the commercial reality, the team dynamics, or why the last three transformation projects stalled.",
  },
  {
    label: "AI FREELANCERS",
    body: "AI freelancers know the tools but have never operated inside a complex, multi-stakeholder business where adoption is the real battle.",
  },
];

const WhyDifferent = () => {
  const reduce = useReducedMotion();

  return (
    <section className="py-16 lg:py-32 bg-warm-stone">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.span
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease }}
          className="font-mono text-xs text-primary uppercase tracking-widest mb-6 block"
        >
          [WHY THIS IS DIFFERENT]
        </motion.span>
        <motion.h2
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-on-light mb-12 leading-tight tracking-tight max-w-4xl"
        >
          Most operators give you one of three things. I give you all three.
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {items.map((it) => (
            <motion.div
              key={it.label}
              variants={{
                hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
              }}
              whileHover={reduce ? undefined : { y: -4 }}
              className="group relative bg-background/[0.03] border border-on-light/10 rounded-xl p-8 transition-colors duration-300 hover:border-primary/40 overflow-hidden"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(400px circle at 50% 0%, hsl(var(--primary) / 0.08), transparent 60%)",
                }}
              />
              <span className="relative font-mono text-xs text-primary font-semibold tracking-widest block mb-4">
                [{it.label}]
              </span>
              <p className="relative text-on-light/75 leading-relaxed text-base">
                {it.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="font-display text-xl md:text-2xl font-extrabold text-on-light leading-snug tracking-tight max-w-3xl"
        >
          I sit across all three: strategy, build and adoption, led by someone who's done it at scale, not theorised about it.
        </motion.p>
      </div>
    </section>
  );
};

export default WhyDifferent;
