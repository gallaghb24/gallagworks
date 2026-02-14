import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Map, Layers, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "We map how work actually flows. Not the org chart version – the real one, with the workarounds and the spreadsheets.",
    icon: Map,
  },
  {
    number: "02",
    title: "Redesign",
    description: "We simplify before we automate. Remove duplication, clarify ownership, fix the data. Technology comes after the thinking.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Build and embed",
    description: "We implement working automation and stay until it's adopted. No handover documents that gather dust.",
    icon: Zap,
  },
];

const HowWeWork = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-28" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <span className={`block text-primary text-xs font-semibold uppercase tracking-[0.15em] text-center mb-4 scroll-fade-in ${isVisible ? "visible" : ""}`}>
            METHOD
          </span>
          <h2 className={`font-display text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center scroll-fade-in ${isVisible ? "visible" : ""}`}>
            How we work
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`scroll-fade-in ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${(i + 1) * 0.12}s` }}
              >
                <span className="text-primary font-display text-sm font-semibold tracking-wide">{step.number}</span>
                <div className="flex items-center gap-2 mt-2 mb-3">
                  <step.icon className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                  <h3 className="font-display text-xl font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base md:text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
