import type { Variants } from "framer-motion";

export const ease = [0.16, 1, 0.3, 1] as const;

export const revealContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export const revealViewport = { once: true, amount: 0.2 } as const;
