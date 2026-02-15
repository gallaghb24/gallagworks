import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutTeaser = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 lg:py-16" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <span className={`block text-primary text-xs font-semibold uppercase tracking-[0.15em] mb-4 scroll-fade-in ${isVisible ? "visible" : ""}`}>
            ABOUT
          </span>
          <h2 className={`font-display text-2xl md:text-3xl font-semibold text-foreground mb-6 scroll-fade-in ${isVisible ? "visible" : ""}`}>
            Operator-led transformation, built for implementation.
          </h2>
          <p className={`text-foreground/70 leading-relaxed text-base mb-8 scroll-fade-in ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.1s" }}>
            We help teams take messy, high-variation repetitive work and turn it into clear systems that run reliably day to day.
            {" "}Implementation-first: working automation, adoption planning, and governance – not just strategy decks.
          </p>
          <Button
            asChild
            variant="outline"
            className={`rounded-full px-6 group scroll-fade-in ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.15s" }}
          >
            <Link to="/about">
              About
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;
