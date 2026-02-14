import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield } from "lucide-react";

const CredibilitySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-28" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h2
            className={`font-display text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center scroll-fade-in ${isVisible ? "visible" : ""}`}
          >
            Led by Ben Gallagher
          </h2>

          <ul className="space-y-4 mb-8">
            {[
              "Operational AI and workflow transformation across industries – from professional services to media to financial operations.",
              "Implementation-first: working automation, adoption planning, and governance – not just strategy decks.",
              "I lead engagements directly and bring specialist build support when needed.",
            ].map((item, i) => (
              <li
                key={i}
                className={`flex items-start gap-3 scroll-fade-in ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <p className="text-foreground/80 leading-relaxed text-base md:text-sm">{item}</p>
              </li>
            ))}
          </ul>

          <div
            className={`flex items-center justify-center gap-2 text-muted-foreground text-sm scroll-fade-in ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.4s" }}
          >
            <Shield className="h-4 w-4" />
            <span>NDA and InfoSec-aligned delivery as standard.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
