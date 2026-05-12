import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSchematic from "@/components/HeroSchematic";

const ease = [0.16, 1, 0.3, 1] as const;

const HeroSection = () => {
  const reduce = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <section className="relative z-10 min-h-[90vh] flex items-center pt-32 md:pt-28 pb-24 md:pb-20 overflow-hidden">
      {/* Ambient orange glow */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease }}
        className="pointer-events-none absolute top-1/2 right-[-10%] -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-primary/[0.08] blur-[150px]"
      />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-7 max-w-[740px]">
            {/* Status pill */}
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 mb-8 rounded-full border border-foreground/10 bg-foreground/[0.03] backdrop-blur-sm"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                Available — One engagement at a time
              </span>
            </motion.div>

            {/* Headline — single column, no clipping */}
            <motion.h1
              {...fadeUp(0.1)}
              className="font-display font-extrabold text-foreground leading-[1.02] tracking-tight mb-10 text-[clamp(2.5rem,6.4vw,5.25rem)]"
            >
              AI Transformation.{" "}
              <span className="text-primary">Built,</span>{" "}
              <span className="bg-gradient-to-r from-foreground to-foreground/40 bg-clip-text text-transparent italic font-light">
                not theorised.
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.25)}
              className="text-lg md:text-xl text-muted-foreground font-light max-w-[560px] mb-12 leading-relaxed"
            >
              I sit in the gap between the consultancies who write the strategy
              deck and the dev shops who build the tool. I design how work
              should move, then build the systems that make it happen.
            </motion.p>

            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                className="group relative inline-flex h-14 items-center gap-3 overflow-hidden rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.55)] transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                <span className="absolute inset-0 -translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-background">
                  Request a Consultation
                </span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-all duration-300 group-hover:translate-x-1 group-hover:text-background" />
              </Link>

              <Link
                to="/diagnostic"
                className="group relative inline-flex h-14 items-center gap-3 px-2 text-base font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                <span>Take the AI Readiness Diagnostic</span>
                <span className="relative h-px w-8 overflow-hidden bg-foreground/20">
                  <span className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right schematic */}
          <motion.div
            initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease }}
            className="lg:col-span-5 relative h-[480px] lg:h-[560px]"
          >
            <HeroSchematic />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
