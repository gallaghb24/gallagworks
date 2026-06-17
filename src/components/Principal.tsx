import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import MonoLabel from "@/components/MonoLabel";

const ease = [0.16, 1, 0.3, 1] as const;

const Principal = () => {
  const reduce = useReducedMotion();

  const item = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  return (
    <section className="py-16 lg:py-36 bg-warm-stone">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="max-w-5xl"
        >
          <motion.div variants={item} className="mb-6">
            <MonoLabel text="[THE FOUNDER]" />
          </motion.div>

          <motion.h2
            variants={item}
            className="font-display text-3xl md:text-4xl font-extrabold text-on-light mb-8 leading-tight tracking-tight"
          >
            Built by someone who's done it, not just advised on it.
          </motion.h2>
          <motion.p
            variants={item}
            className="text-lg text-on-light/70 font-light leading-relaxed max-w-[720px]"
          >
            Gallag Works is an independent AI transformation practice founded by Ben Gallagher. After 15 years inside marketing production operations — and the last two building an AI transformation function from scratch inside a 2,100-person PE-backed agency group — I learned that most businesses don't fail at AI because of the technology. They fail because nobody fixes the process first, and nobody designs the tools for the people who actually have to use them. Gallag Works exists to bring that experience to businesses that are ready to move on AI but don't have the in-house leadership to make it happen.
          </motion.p>
          <motion.div variants={item} className="flex flex-col gap-4 mt-8">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary/80 transition-colors w-fit"
            >
              Meet the Founder
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="https://www.linkedin.com/in/bengallagher/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-sm text-on-light/50 hover:text-primary transition-colors w-fit"
            >
              LinkedIn
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Principal;
