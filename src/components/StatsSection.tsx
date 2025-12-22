import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 1000, suffix: "+", label: "hours released" },
  { value: 50, suffix: "%", label: "faster campaign delivery" },
  { value: 90, suffix: "%", label: "reduction in manual data handling" },
];

const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span className="font-display text-5xl md:text-6xl lg:text-7xl font-normal text-primary">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground mb-4">
            Measurable impact, lasting change
          </h2>
          <p className="text-lg text-muted-foreground">
            Measurable uplift in accuracy, speed and satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              <p className="mt-4 text-lg text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
