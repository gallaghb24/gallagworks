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
          <h2 className="font-display text-[23px] md:text-3xl font-extrabold text-foreground mb-4 tracking-tight" style={{ textWrap: 'balance' } as React.CSSProperties}>
            {headline}
          </h2>
          {subcopy && (
            <p className="text-foreground/70 font-light mb-8 max-w-[720px]">
              {subcopy}
            </p>
          )}
          <div className={`flex flex-col sm:flex-row gap-4 ${subcopy ? "" : "mt-8"}`}>
            <Link
              to={primaryCTA?.to ?? "/contact"}
              className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.5)] transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              <span className="absolute inset-0 -translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-background">
                {primaryCTA?.label ?? "Request a Consultation"}
              </span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-all duration-300 group-hover:translate-x-1 group-hover:text-background" />
            </Link>
            {secondaryCTA && (
              <Link
                to={secondaryCTA.to}
                className="group relative inline-flex h-14 items-center justify-center gap-3 rounded-lg border border-border bg-transparent px-8 text-base font-medium text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
              >
                <span>{secondaryCTA.label}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABand;
