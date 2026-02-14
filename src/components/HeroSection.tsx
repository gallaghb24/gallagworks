import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center pt-24 pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-8 animate-fade-in-up">
            We <span className="font-bold">redesign workflows</span> and build automation that{" "}
            <span className="text-primary">removes friction</span> from day-to-day operations.
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Operational AI and workflow transformation for organisations ready to move past slides and into implementation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-medium group"
            >
              <Link to="/contact">
                Book a discovery call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <span className="text-muted-foreground text-sm">
              or email{" "}
              <a href="mailto:hello@intelligenttransformation.studio" className="underline hover:text-foreground transition-colors">
                hello@intelligenttransformation.studio
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
