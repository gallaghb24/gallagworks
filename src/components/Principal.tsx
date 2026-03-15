import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Principal = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-36 bg-warm-stone" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl">
          <span
            className={`font-mono text-xs text-primary uppercase tracking-widest mb-6 block clip-reveal ${isVisible ? "visible" : ""}`}
          >
            [THE FOUNDER]
          </span>

          <h2
            className={`font-display text-3xl md:text-4xl font-extrabold text-on-light mb-8 leading-tight tracking-tight clip-reveal ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.08s" }}
          >
            Built by someone who's done it, not just advised on it.
          </h2>
          <p className="text-lg text-on-light/70 font-light leading-relaxed max-w-[720px]">
            Gallag Works is an independent AI transformation practice founded by Ben Gallagher. After 15 years inside marketing production operations — and the last two building an AI transformation function from scratch inside a 2,100-person PE-backed agency group — I learned that most businesses don't fail at AI because of the technology. They fail because nobody fixes the process first. Gallag Works exists to bring that experience to businesses that are ready to move on AI but don't have the in-house leadership to make it happen.
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
            className="inline-flex items-center gap-2 font-mono text-sm text-on-light/50 hover:text-primary transition-colors mt-3"
          >
            LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Principal;
