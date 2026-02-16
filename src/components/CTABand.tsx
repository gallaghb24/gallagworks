import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface CTABandProps {
  headline?: React.ReactNode;
}

const CTABand = ({ headline = "Ready to build scalable operations?" }: CTABandProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28 lg:py-40 border-t border-border" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`max-w-2xl scroll-fade-in ${isVisible ? "visible" : ""}`}>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-8">
            {headline}
          </h2>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-8 py-6 text-lg font-medium group"
          >
            <Link to="/contact">
              Request a Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <p className="mt-3 font-mono text-xs text-muted-foreground/50">
            Data is processed in accordance with our{" "}
            <Link to="/privacy" className="underline hover:text-muted-foreground transition-colors">
              Privacy Policy
            </Link>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTABand;
