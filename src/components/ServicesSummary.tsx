import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    title: "Diagnose",
    description: "Understand where time, errors, and rework accumulate.",
  },
  {
    title: "Build",
    description: "Redesign the workflow and implement automation that fits how your team actually works.",
  },
  {
    title: "Embed",
    description: "Ongoing advisory and support to make change stick.",
  },
];

const ServicesSummary = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className={`font-display text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center scroll-fade-in ${isVisible ? "visible" : ""}`}>
            What we do
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {services.map((s, i) => (
              <div
                key={i}
                className={`bg-card border border-border rounded-lg p-8 card-hover scroll-fade-in ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>

          <div className={`text-center scroll-fade-in ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.4s" }}>
            <Link
              to="/services"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors group"
            >
              See how we work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSummary;
