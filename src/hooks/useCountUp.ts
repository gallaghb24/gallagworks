import { useEffect, useRef, useState, useCallback } from "react";

interface UseCountUpOptions {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  flickerDuration?: number;
}

export function useCountUp({
  target,
  prefix = "",
  suffix = "",
  duration = 1800,
  flickerDuration = 700,
}: UseCountUpOptions) {
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  const animate = useCallback(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const startTime = performance.now();
    const totalDuration = flickerDuration + duration;

    const step = (now: number) => {
      const elapsed = now - startTime;

      if (elapsed < flickerDuration) {
        // Flicker phase: show random digits
        const digits = target.toString().length;
        const randomNum = Math.floor(Math.random() * Math.pow(10, digits));
        setDisplay(`${prefix}${randomNum}${suffix}`);
        requestAnimationFrame(step);
      } else if (elapsed < totalDuration) {
        // Count-up phase: ease out to target
        const countProgress = (elapsed - flickerDuration) / duration;
        const eased = 1 - Math.pow(1 - countProgress, 3); // cubic ease-out
        const current = Math.round(eased * target);
        setDisplay(`${prefix}${current}${suffix}`);
        requestAnimationFrame(step);
      } else {
        // Lock to final value
        setDisplay(`${prefix}${target}${suffix}`);
      }
    };

    requestAnimationFrame(step);
  }, [target, prefix, suffix, duration, flickerDuration]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          setStarted(true);
          animate();
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animate]);

  return { ref, display, started };
}
