import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    label: "01 DIAGNOSE",
    description:
      "AI is an Operational X-Ray. We scan how work actually flows to expose the Data Glue – the manual re-keying, spreadsheet handoffs, and copy-paste chains – that silently consumes your team's time.",
  },
  {
    label: "02 BUILD",
    description:
      "We fix the Data Glue before we automate. Remove duplication, clarify ownership, clean the data layer. Then we engineer Decision Inboxes so your team moves from managing tasks to making decisions.",
  },
  {
    label: "03 EMBED",
    description:
      "Working automation deployed into day-to-day use with adoption planning, governance, and exception routing baked in. Not strategy decks that gather dust.",
  },
];

const ServicesSummary = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-28 border-t border-border" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl">
          <span
            className={`font-mono text-xs text-primary uppercase tracking-widest mb-4 block scroll-fade-in ${
              isVisible ? "visible" : ""
            }`}
          >
            [SERVICES]
          </span>
          <h2
            className={`font-display text-3xl md:text-4xl font-bold text-foreground mb-12 scroll-fade-in ${
              isVisible ? "visible" : ""
            }`}
          >
            What we do
          </h2>

          <div className="divide-y divide-border">
            {services.map((s, i) => (
              <div
                key={i}
                className={`py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 scroll-fade-in ${
                  isVisible ? "visible" : ""
                }`}
                style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
              >
                <div className="md:col-span-3">
                  <span className="font-mono text-sm text-primary font-semibold">
                    [{s.label}]
                  </span>
                </div>
                <div className="md:col-span-9">
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`mt-10 scroll-fade-in ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.5s" }}
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
