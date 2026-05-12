import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const engagements = [
  {
    id: "01",
    title: "Operational X-Ray",
    duration: "2–3 weeks · Fixed scope",
    description:
      "A structured diagnostic that maps how work actually moves through your business — not how the org chart says it should, but how it really does. I expose the Human Middleware, quantify the capacity loss, and produce a prioritised transformation roadmap with projected ROI. This is the starting point for every engagement.",
    deliverables: [
      "Complete workflow mapping with friction quantification across every manual touchpoint",
      "Capacity loss analysis — hours, cost, and error rates attributed to Human Middleware",
      "Prioritised transformation roadmap with projected margin recovery and payback timeline",
    ],
  },
  {
    id: "02",
    title: "Solution Design & Proof",
    duration: "4–8 weeks · Proof of value",
    description:
      "I design the target operating model for your highest-friction workflows, then prototype the solution against your real data to prove it works before you commit to a full production build. AI handles the predictable majority — the routine data processing, formatting, and routing — while your experts retain governance over the genuine exceptions that require human judgement. You see a working system running on your own data, not a slide deck describing one.",
    deliverables: [
      "Solution architecture specifying what gets automated, what stays manual, and how the data flows",
      "Working prototype validated against real operational data",
      "Measurable before/after metrics on capacity, throughput, and error rates",
      "Clear production specification for the build phase",
    ],
  },
  {
    id: "03",
    title: "Production Delivery",
    duration: "Project-based",
    description:
      "Full build and deployment of AI-enabled tools and workflows through an assembled specialist team. I architect the system and govern the build — the right engineers deliver production-grade code. Every deployment includes exception handling, human oversight, and audit trails as standard. This is not proof-of-concept work. These are the systems your team runs on every day.",
    deliverables: [
      "Production-ready automated workflows replacing manual processes",
      "Exception routing with human-in-the-loop escalation for judgement-led decisions",
      "Governance framework including audit trails, data handling protocols, and oversight controls",
      "Adoption support and team capability transfer",
    ],
  },
  {
    id: "04",
    title: "Agents as a Service",
    duration: "Scoped & delivered",
    description:
      "Custom AI agents designed around a specific operational or customer problem in your business. I scope the challenge, design the agent's logic, build it against your data, and deploy it where it needs to live — whether that's inside your operations, on your website, or embedded in your existing platforms. Not generic chatbots. Purpose-built agents with guardrails, domain awareness, and measurable outcomes.",
    deliverables: [
      "Bespoke agent scoping and design",
      "Knowledge base and data integration",
      "Deployment across internal or customer-facing channels",
      "Governance and human oversight framework",
      "Iterative refinement based on live performance data and usage patterns",
    ],
  },
  {
    id: "05",
    title: "Fractional AI Leadership",
    duration: "Retained · Part-time",
    description:
      "Embedded, part-time AI leadership for businesses that need strategic direction and hands-on delivery but aren't ready for — or can't justify — a full-time Head of AI. I operate as an extension of your leadership team: setting the strategy, standing up governance, shipping production tools, and driving adoption across the business.",
    deliverables: [
      "AI strategy and roadmap development aligned to your business priorities",
      "Governance framework design and oversight",
      "Tool selection, prototyping, and production deployment",
      "Team training and capability building, including apprenticeship programme design",
    ],
  },
];

const EngagementTypes = () => {
  const reduce = useReducedMotion();

  return (
    <section className="py-16 lg:py-36 bg-warm-stone">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.span
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease }}
          className="font-mono text-xs text-primary uppercase tracking-widest mb-6 block"
        >
          [ENGAGEMENT TYPES]
        </motion.span>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
          }}
          className="space-y-6"
        >
          {engagements.map((eng) => (
            <motion.div
              key={eng.id}
              variants={{
                hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
              }}
              whileHover={reduce ? undefined : { y: -3 }}
              transition={{ duration: 0.3, ease }}
              className="group relative bg-off-white border border-black/[0.08] rounded-xl p-8 transition-colors duration-300 hover:border-primary/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(520px circle at 50% 0%, hsl(var(--primary) / 0.08), transparent 60%)",
                }}
              />
              <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                <div>
                  <span className="font-mono text-xs text-primary font-semibold tracking-widest block mb-2">
                    [{eng.id}]
                  </span>
                  <h3 className="font-display text-2xl font-bold text-on-light tracking-tight">
                    {eng.title}
                  </h3>
                </div>
                <span className="font-mono text-xs text-on-light/40 uppercase tracking-widest shrink-0">
                  {eng.duration}
                </span>
              </div>
              <p className="relative text-on-light/70 font-light leading-relaxed mb-6 max-w-[720px]">
                {eng.description}
              </p>
              <div className="relative">
                <span className="font-mono text-xs text-primary/80 tracking-widest block mb-3">
                  [DELIVERABLES]
                </span>
                <ul className="space-y-2">
                  {eng.deliverables.map((d, i) => (
                    <li key={i} className="text-on-light/60 text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-primary/60 mt-0.5 flex-shrink-0">→</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EngagementTypes;
