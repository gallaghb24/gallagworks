import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { revealContainer, revealItem, revealViewport } from "@/lib/motion";

const Principal = () => {
  return (
    <section className="py-16 lg:py-36 bg-warm-stone">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={revealContainer}
          className="max-w-5xl"
        >
          <motion.div variants={revealItem} className="mb-6">
            <span className="font-mono text-xs text-primary uppercase tracking-widest">[THE FOUNDER]</span>
          </motion.div>

          <motion.h2
            variants={revealItem}
            className="font-display text-3xl md:text-4xl font-extrabold text-on-light mb-8 leading-tight tracking-tight"
          >
            Built by someone who's done it, not just advised on it.
          </motion.h2>
          <motion.p
            variants={revealItem}
            className="text-lg text-on-light/70 font-light leading-relaxed max-w-[720px]"
          >
            Gallag Works is an independent AI transformation practice founded by Ben Gallagher. After 15 years inside marketing production operations — and the last two building an AI transformation function from scratch inside a 2,100-person PE-backed agency group — I learned that most businesses don't fail at AI because of the technology. They fail because nobody fixes the process first, and nobody designs the tools for the people who actually have to use them. Gallag Works exists to bring that experience to businesses that are ready to move on AI but don't have the in-house leadership to make it happen.
          </motion.p>
          <motion.div variants={revealItem} className="flex flex-col gap-4 mt-8">
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
