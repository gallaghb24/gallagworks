import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface CTABandProps {
  headline?: React.ReactNode;
  subcopy?: React.ReactNode;
  wrapperClassName?: string;
  primaryCTA?: { label: string; to: string };
  secondaryCTA?: { label: string; to: string };
}

const CTABand = ({ headline = "Ready to build scalable operations?", subcopy, wrapperClassName, primaryCTA, secondaryCTA }: CTABandProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-40 border-t border-border border-draw" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`max-w-2xl clip-reveal ${isVisible ? "visible" : ""} ${wrapperClassName || ""}`}>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
            {headline}
          </h2>
          {subcopy && (
            <p className="text-foreground/70 font-light mb-8 max-w-[720px]">
              {subcopy}
            </p>
          )}
          <div className={`flex flex-col sm:flex-row gap-4 ${subcopy ? "" : "mt-8"}`}>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-8 py-6 text-lg font-medium group"
            >
              <Link to={primaryCTA?.to ?? "/contact"}>
                {primaryCTA?.label ?? "Request a Consultation"}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            {secondaryCTA && (
              <Button
                asChild
                size="lg"
                className="border border-border bg-transparent text-foreground hover:text-primary rounded-none px-8 py-6 text-lg font-medium"
              >
                <Link to={secondaryCTA.to}>
                  {secondaryCTA.label}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABand;
