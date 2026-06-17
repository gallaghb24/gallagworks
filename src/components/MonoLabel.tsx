import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*";

const scramble = (text: string) =>
  text
    .split("")
    .map((c) =>
      c === "[" || c === "]" || c === " "
        ? c
        : CHARS[Math.floor(Math.random() * CHARS.length)]
    )
    .join("");

interface MonoLabelProps {
  text: string;
  className?: string;
}

const MonoLabel = ({ text, className = "" }: MonoLabelProps) => {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(() => (reduce ? text : scramble(text)));
  const ref = useRef<HTMLSpanElement>(null);
  const playedRef = useRef(false);

  useEffect(() => {
    if (reduce) {
      setDisplay(text);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !playedRef.current) {
            playedRef.current = true;
            obs.disconnect();

            const start = performance.now();
            const duration = 250;
            let raf = 0;

            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const reveal = Math.floor(t * text.length);
              let out = "";
              for (let i = 0; i < text.length; i++) {
                const ch = text[i];
                if (i < reveal || ch === "[" || ch === "]" || ch === " ") {
                  out += ch;
                } else {
                  out += CHARS[Math.floor(Math.random() * CHARS.length)];
                }
              }
              setDisplay(out);
              if (t < 1) {
                raf = requestAnimationFrame(tick);
              } else {
                setDisplay(text);
              }
            };
            raf = requestAnimationFrame(tick);

            return () => cancelAnimationFrame(raf);
          }
        });
      },
      { threshold: 0.3 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [reduce, text]);

  return (
    <span
      ref={ref}
      aria-label={text}
      className={`font-mono text-xs text-primary uppercase tracking-widest ${className}`}
    >
      {display}
    </span>
  );
};

export default MonoLabel;
