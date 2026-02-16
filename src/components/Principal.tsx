import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Principal = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-36 bg-slate" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl">
          <span
            className={`font-mono text-xs text-primary uppercase tracking-widest mb-6 block clip-reveal ${isVisible ? "visible" : ""}`}
          >
            [THE PRINCIPAL]
          </span>

          <div className={`clip-reveal ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.08s" }}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-8 leading-tight">
              Built by an Operator, not an Agency.
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-[720px]">
              Gallag Works is an independent operational engineering studio founded by Ben Gallagher. After 20 years managing £15m+ multichannel contracts and 30+ person teams for major UK retailers, Ben learned a hard truth: efficiency protects the P&L. He's not here to bill hours – he's here to recover them. Gallag Works exists to bring that exact 'efficiency-first' methodology to leaders who are drowning in manual workarounds and ready to build scalable systems.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary/80 transition-colors mt-8"
            >
              Meet the Principal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principal;
