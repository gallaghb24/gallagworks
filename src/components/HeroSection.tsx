import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSchematic from "@/components/HeroSchematic";

const HeroSection = () => {
  return (
    <section className="relative z-10 min-h-[70vh] md:min-h-[85vh] flex items-center pt-24 pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-8 opacity-0 animate-fade-in-up">
              AI Transformation for<br className="hidden lg:inline" /> <span className="text-primary">Enterprise Operations.</span>
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground font-light max-w-[550px] mb-10 leading-relaxed opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.15s" }}
            >
              I sit in the gap between the consultancies who write the strategy deck and the dev shops who build the tool. I design how work should move, then build the systems that make it happen.
            </p>

            <div
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium group"
              >
                <Link to="/contact">
                  Request a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          <HeroSchematic />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
