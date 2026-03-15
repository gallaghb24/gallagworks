import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Principal = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-36 bg-slate" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl">
          <span
            className={`font-mono text-xs text-primary uppercase tracking-widest mb-6 block clip-reveal ${isVisible ? "visible" : ""}`}
          >
            [THE FOUNDER]
          </span>

          <div className={`clip-reveal ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.08s" }}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-8 leading-tight">
              Built by an Operator, not an Agency.
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-[720px]">
              Gallag Works is an independent AI transformation practice founded by Ben Gallagher. After 15 years managing £15m+ multichannel contracts as operational lead within a 2,100-person content production agency, I learned a hard truth: efficiency protects the P&L. I'm not here to bill hours – I'm here to recover them. Gallag Works exists to bring that exact methodology to leaders who are drowning in Human Middleware and ready to build scalable systems.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary/80 transition-colors mt-8"
            >
              Meet the Founder <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://www.linkedin.com/in/bengallagher/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors mt-3"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principal;
