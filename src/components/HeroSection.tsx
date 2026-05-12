import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSchematic from "@/components/HeroSchematic";

const ease = [0.16, 1, 0.3, 1] as const;

const HeroSection = () => {
  const reduce = useReducedMotion();

  const lineUp = {
    hidden: { y: "110%" },
    show: (i: number) => ({
      y: "0%",
      transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease },
    }),
  };

  const fade = {
    hidden: { opacity: 0, y: 14 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.55 + i * 0.1, ease },
    }),
  };

  return (
    <section className="relative z-10 min-h-[88vh] flex items-center pt-32 md:pt-24 pb-24 md:pb-16 overflow-hidden">
      {/* Ambient orange glow */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease }}
        className="pointer-events-none absolute -top-1/4 -right-1/4 h-[700px] w-[700px] rounded-full bg-primary/10 blur-[140px]"
      />
      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2.5 px-3 py-1 mb-8 rounded-full border border-foreground/10 bg-foreground/[0.03] backdrop-blur-sm"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                Available — One engagement at a time
              </span>
            </motion.div>

            {/* Kinetic headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground leading-[0.95] tracking-tight mb-10">
              {[
                <>AI Transformation.</>,
                <span key="2" className="text-primary">Built,</span>,
                <span
                  key="3"
                  className="bg-gradient-to-r from-foreground to-foreground/40 bg-clip-text text-transparent italic font-light"
                >
                  not theorised.
                </span>,
              ].map((node, i) => (
                <span
                  key={i}
                  className="block overflow-hidden pb-[0.08em]"
                >
                  <motion.span
                    className="block will-change-transform"
                    variants={lineUp}
                    initial={reduce ? { y: 0 } : "hidden"}
                    animate="show"
                    custom={i}
                  >
                    {node}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              variants={fade}
              custom={0}
              initial={reduce ? { opacity: 1, y: 0 } : "hidden"}
              animate="show"
              className="text-lg md:text-xl text-muted-foreground font-light max-w-[550px] mb-12 leading-relaxed"
            >
              I sit in the gap between the consultancies who write the strategy
              deck and the dev shops who build the tool. I design how work
              should move, then build the systems that make it happen.
            </motion.p>

            <motion.div
              variants={fade}
              custom={1}
              initial={reduce ? { opacity: 1, y: 0 } : "hidden"}
              animate="show"
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                className="group relative inline-flex h-14 items-center gap-3 overflow-hidden rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.5)]"
              >
                <span className="absolute inset-0 -translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-background">
                  Request a Consultation
                </span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-all duration-300 group-hover:translate-x-1 group-hover:text-background" />
              </Link>

              <Link
                to="/diagnostic"
                className="group relative inline-flex h-14 items-center gap-2 px-6 text-base font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                <span>Take the AI Readiness Diagnostic</span>
                <span className="relative h-px w-8 overflow-hidden bg-foreground/20">
                  <span className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right schematic with parallax-style entrance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.4, ease }}
            className="relative"
          >
            <HeroSchematic />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="hidden md:flex absolute -bottom-2 left-1/2 -translate-x-1/2 flex-col items-center gap-3"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground/60">
            Scroll
          </span>
          <span className="relative block h-10 w-px overflow-hidden bg-foreground/10">
            <motion.span
              className="absolute inset-x-0 top-0 h-1/2 bg-primary"
              animate={{ y: ["-100%", "200%"] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
