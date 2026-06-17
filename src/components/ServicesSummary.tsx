import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import MonoLabel from "@/components/MonoLabel";

const ease = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    id: "01",
    title: "Operational X-Ray",
    description:
      "A structured diagnostic that maps how work actually moves through your business, quantifies the capacity loss, and produces a prioritised transformation roadmap with projected ROI.",
  },
  {
    id: "02",
    title: "Solution Design & Proof",
    description:
      "I design how the fix should work, then prototype it against your real data to prove it delivers before you commit to a full build. You see a working system, not a strategy deck.",
  },
  {
    id: "03",
    title: "Production Delivery",
    description:
      "Full build and deployment of AI-enabled tools and workflows through an assembled specialist team. Production-grade systems with governance, exception handling, and audit trails baked in from day one.",
  },
  {
    id: "04",
    title: "Agents as a Service",
    description:
      "Purpose-built AI agents scoped around your specific business challenge — deployed, governed, and refined. Not generic chatbots. Intelligent systems with guardrails, domain awareness, and measurable outcomes.",
  },
  {
    id: "05",
    title: "Fractional AI Leadership",
    description:
      "Embedded strategic leadership for teams who need an experienced operator to drive their AI transformation – without the overhead of a full-time hire.",
  },
];

const ServicesSummary = () => {
  const reduce = useReducedMotion();

  return (
    <section className="py-16 lg:py-36 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease }}
          className="mb-6"
        >
          <MonoLabel text="[SERVICES]" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease },
                },
              }}
              whileHover={reduce ? undefined : { y: -4 }}
              className="group relative bg-charcoal-mid border border-white/[0.08] rounded-xl p-8 transition-colors duration-300 hover:border-primary/40 overflow-hidden"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(400px circle at 50% 0%, hsl(var(--primary) / 0.10), transparent 60%)",
                }}
              />
              <span className="relative font-mono text-xs text-primary font-semibold tracking-widest block mb-4">
                [{service.id}]
              </span>
              <h3 className="relative font-display text-xl font-extrabold text-foreground mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="relative text-muted-foreground font-light leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary/80 transition-colors"
          >
            View all services
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSummary;
