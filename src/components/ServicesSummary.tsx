import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    id: "01",
    title: "Operational X-Ray",
    description:
      "A Pareto-driven diagnostic that maps every manual touchpoint across your workflows, quantifies the capacity loss, and produces a prioritised transformation roadmap with projected ROI.",
  },
  {
    id: "02",
    title: "Workflow Engineering",
    description:
      "Re-engineer your highest-friction workflows into production-ready systems. AI handles the predictable majority while your experts retain governance over the exceptions.",
  },
  {
    id: "03",
    title: "Build & Deploy",
    description:
      "Hands-on delivery of AI-enabled tools and workflows — production systems designed for real adoption, not proofs of concept.",
  },
  {
    id: "04",
    title: "Fractional AI Leadership",
    description:
      "Embedded strategic leadership for teams who need an experienced operator to drive their AI transformation – without the overhead of a full-time hire.",
  },
];

const ServicesSummary = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-36" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <span
          className={`font-mono text-xs text-primary uppercase tracking-widest mb-6 block clip-reveal ${isVisible ? "visible" : ""}`}
        >
          [SERVICES]
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`border border-border p-8 clip-reveal-down ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span className="font-mono text-xs text-primary font-semibold tracking-widest block mb-4">
                [{service.id}]
              </span>
              <h3 className="font-display text-xl font-extrabold text-foreground mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`clip-reveal ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.4s" }}>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary/80 transition-colors"
          >
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSummary;
