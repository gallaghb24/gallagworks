import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    label: "01",
    title: "The Operational X-Ray",
    description:
      "I map how the work actually flows. Not the org chart version – the real one, with the invisible friction and manual workarounds exposed.",
  },
  {
    label: "02",
    title: "Process Architecture",
    description:
      "I kill redundant steps, standardise inputs, and clarify ownership before touching any technology. Technology comes after the thinking.",
  },
  {
    label: "03",
    title: "Decision Inboxes",
    description:
      "We engineer lightweight, AI-driven automation that handles the routine aggregation, routing only the exceptions to your team for human judgement.",
  },
];

const ServicesSummary = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-32 border-draw" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl">
          <span
            className={`font-mono text-xs text-primary uppercase tracking-widest mb-6 block clip-reveal ${isVisible ? "visible" : ""}`}
          >
            [METHODOLOGY]
          </span>
          <h2
            className={`text-3xl md:text-4xl font-bold text-foreground mb-10 md:mb-16 clip-reveal ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.08s" }}
          >
            The Methodology.
          </h2>

          <div className="divide-y divide-border">
            {services.map((s, i) => (
              <div
                key={i}
                className="py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
              >
                <div className="md:col-span-1">
                  <span
                    className={`font-mono text-sm text-primary font-semibold clip-reveal ${isVisible ? "visible" : ""}`}
                    style={{ transitionDelay: `${0.12 + i * 0.15}s` }}
                  >
                    {s.label}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3
                    className={`text-lg font-bold text-foreground clip-reveal ${isVisible ? "visible" : ""}`}
                    style={{ transitionDelay: `${0.14 + i * 0.15}s` }}
                  >
                    {s.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p
                    className={`text-muted-foreground leading-relaxed text-base clip-reveal ${isVisible ? "visible" : ""}`}
                    style={{ transitionDelay: `${0.16 + i * 0.15}s` }}
                  >
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`mt-12 clip-reveal ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.6s" }}
          >
            <Link
              to="/services"
              className="inline-flex items-center font-mono text-sm text-primary hover:text-primary/80 transition-colors group"
            >
              Explore our services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSummary;
