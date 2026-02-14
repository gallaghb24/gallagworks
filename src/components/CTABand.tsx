import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface CTABandProps {
  headline?: string;
}

const CTABand = ({ headline = "Ready to remove friction from a specific workflow?" }: CTABandProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-24" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`max-w-2xl mx-auto text-center scroll-fade-in ${isVisible ? "visible" : ""}`}>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
            {headline}
          </h2>
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
        </div>
      </div>
    </section>
  );
};

export default CTABand;
