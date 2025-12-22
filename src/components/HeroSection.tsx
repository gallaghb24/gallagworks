import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToNextSection = () => {
    const element = document.querySelector("#what-we-do");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Chequered background pattern */}
      <div className="hero-background-pattern" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal text-foreground leading-tight mb-8 animate-fade-in-up">
            Transforming how work gets done.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            We help ambitious organisations simplify complexity, embed intelligent automation, 
            and release capacity for the work that truly matters.
          </p>
          
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-medium group"
            >
              Talk to us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll to next section"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default HeroSection;
