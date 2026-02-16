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
            className={`font-mono text-xs text-primary uppercase tracking-widest mb-6 block scroll-fade-in ${isVisible ? "visible" : ""}`}
          >
            [THE PRINCIPAL]
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className={`lg:col-span-8 scroll-fade-in ${isVisible ? "visible" : ""}`}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-8 leading-tight">
                Built by an Operator, not an Agency.
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-[720px]">
                Gallag Works is an independent operational engineering studio founded by Ben Gallagher. With nearly two decades of experience directing enterprise client delivery and managing £15m+ multichannel contracts for major UK retailers, Ben learned a hard truth: efficiency protects the P&L. Managing high-stakes, 30+ person teams required a ruthless focus on operations. He founded Gallag Works to bring that exact 'efficiency-first' methodology to leaders across industries who are drowning in manual workarounds and ready to build scalable systems.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary/80 transition-colors mt-8"
              >
                Meet the Principal <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div
              className={`lg:col-span-4 scroll-fade-in ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: "0.15s" }}
            >
              <div className="border border-border aspect-square flex items-center justify-center">
                <span className="font-mono text-sm text-muted-foreground">Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principal;
