import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    id: "01",
    title: "Scan",
    description:
      "The Operational X-Ray. I map every manual touchpoint, handoff, and reconciliation loop. I quantify the capacity loss and identify where the value sits.",
  },
  {
    id: "02",
    title: "Scope",
    description:
      "I design the solution architecture. What gets automated, what stays manual, how the data model works, and how it fits into your existing systems. The output is a clear specification, not a strategy deck.",
  },
  {
    id: "03",
    title: "Prove",
    description:
      "I prototype the solution against your real data at near-zero cost. You see it working before you commit to a full build. This is what separates the approach from traditional consulting — you get a working system, not a recommendation.",
  },
  {
    id: "04",
    title: "Scale",
    description:
      "Production build and deployment through an assembled specialist team. Governance, exception handling, audit trails, and human oversight are embedded from the start — not bolted on afterwards.",
  },
];

const methodologyNote =
  "Some engagements follow this full sequence. Others start at a specific phase — a known problem that needs scoping and proving, or a validated prototype ready for production build. The methodology adapts to where you are.";

const HowWeWork = () => {
  const reduce = useReducedMotion();

  return (
    <section className="py-16 lg:py-36">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.span
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease }}
          className="font-mono text-xs text-primary uppercase tracking-widest mb-6 block"
        >
          [HOW I WORK]
        </motion.span>
        <motion.h2
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease, delay: 0.05 }}
          className="text-3xl md:text-4xl font-extrabold text-foreground mb-12 tracking-tight"
        >
          From diagnosis to deployed system.
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
          }}
          className="grid grid-cols-1 md:grid-cols-5 gap-4"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={{
                hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
              }}
              whileHover={reduce ? undefined : { y: -4 }}
              transition={{ duration: 0.3, ease }}
              className="group relative bg-charcoal-mid border border-white/[0.08] rounded-xl p-8 transition-colors duration-300 hover:border-primary/40 overflow-hidden"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(360px circle at 50% 0%, hsl(var(--primary) / 0.10), transparent 60%)",
                }}
              />
              <span className="relative font-mono text-xs text-primary font-semibold tracking-widest block mb-3">
                [{step.id}]
              </span>
              <h3 className="relative font-display text-lg font-bold text-foreground mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="relative text-muted-foreground font-light leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="mt-8 text-muted-foreground font-light leading-relaxed max-w-[720px] text-sm"
        >
          {methodologyNote}
        </motion.p>
      </div>
    </section>
  );
};

export default HowWeWork;
