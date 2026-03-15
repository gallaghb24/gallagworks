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
      "Exception routing and governance at scale. Human-in-the-loop safety rails ensuring system control and champion-led adoption across teams.",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`border border-border p-8 clip-reveal-down ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span className="font-mono text-xs text-primary font-semibold tracking-widest block mb-4">
                [{service.id}]
              </span>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`clip-reveal ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.3s" }}>
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
