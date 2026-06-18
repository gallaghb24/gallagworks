import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { revealContainer, revealItem, revealViewport } from "@/lib/motion";

const statements = [
  "We can't take on more work without adding headcount, and the headcount is what's eating the margin.",
  "My most expensive people spend half their week copying things between systems and chasing approvals.",
  "Every project kicks off the same manual scramble. Nothing we learned last time made this time faster.",
  "Half the process lives in one person's head. When they're off, it stalls.",
  "We've bought the AI tools. Nothing has actually changed.",
  "Everyone agrees we should do more with AI. No one has the time or the remit to own it.",
];

const SoundLikeYou = () => {
  return (
    <section className="py-16 lg:py-32 bg-warm-stone">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={revealContainer}
          className="max-w-4xl"
        >
          <motion.div variants={revealItem} className="mb-6">
            <span className="font-mono text-xs text-primary uppercase tracking-widest">[SOUND FAMILIAR]</span>
          </motion.div>
          <motion.h2
            variants={revealItem}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-on-light mb-12 leading-tight tracking-tight"
          >
            You don't have an AI problem. You have a process that only works because people hold it together by hand.
          </motion.h2>

          <motion.ul
            variants={revealContainer}
            className="space-y-4 mb-12 max-w-[760px]"
          >
            {statements.map((s) => (
              <motion.li
                key={s}
                variants={revealItem}
                className="border-l-2 border-primary/60 pl-5 py-1 text-on-light/85 text-lg leading-relaxed italic"
              >
                "{s}"
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            variants={revealItem}
            className="text-lg text-on-light/70 leading-relaxed max-w-[680px] mb-8"
          >
            If you recognised yourself in two or three of those, the technology isn't the problem. Nobody has redesigned how the work moves, and nobody has built the tools around the people who actually do it. That gap has a name: Human Middleware, the senior people quietly acting as manual routers between systems, holding the operation together by hand. It's the largest hidden cost in most businesses, and it's the thing I engineer out.
          </motion.p>

          <motion.div variants={revealItem} className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#capacity-calculator"
              className="group inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary/80 transition-colors"
            >
              See what it's costing you
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <Link
              to="/insights"
              className="group inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary/80 transition-colors"
            >
              See how I've fixed it
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SoundLikeYou;
