import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const RECOVERY_OPTIONS = [
  { pct: 50, label: "CONSERVATIVE" },
  { pct: 70, label: "MODERATE" },
  { pct: 90, label: "AGGRESSIVE" },
] as const;

const formatGBP = (value: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);

const formatHours = (value: number) =>
  new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 }).format(value);

const MONO: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "0.75rem",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
};

const LeakageEstimator = () => {
  const { ref, isVisible } = useScrollAnimation();

  const [people, setPeople] = useState("8");
  const [hoursPerWeek, setHoursPerWeek] = useState("6");
  const [hourlyRate, setHourlyRate] = useState("45");
  const [recoveryPct, setRecoveryPct] = useState<50 | 70 | 90>(70);
  const weeksPerYear = 46;

  const p = parseFloat(people) || 0;
  const h = parseFloat(hoursPerWeek) || 0;
  const r = parseFloat(hourlyRate) || 0;

  const annualHours = p * h * weeksPerYear;
  const annualCost = annualHours * r;
  const recoveredHours = annualHours * (recoveryPct / 100);
  const recoveredCost = annualCost * (recoveryPct / 100);

  const hasInput = p > 0 && h > 0 && r > 0;

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "hsl(var(--input))",
    border: "1px solid hsl(var(--border))",
    borderRadius: "0.625rem",
    padding: "0.75rem 1rem",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "1rem",
    color: "hsl(var(--foreground))",
    outline: "none",
    display: "block",
  };

  return (
    <section
      ref={ref}
      className="border-draw bg-background"
    >
      {/* Header */}
      <div
        className={`container mx-auto px-6 lg:px-12 pt-16 pb-10 clip-reveal ${isVisible ? "visible" : ""}`}
      >
        <span
          className="block mb-5 text-primary"
          style={{ ...MONO, letterSpacing: "0.12em" }}
        >
          [LEAKAGE ESTIMATOR]
        </span>

        <h2
          className="font-bold mb-3 text-foreground"
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          Quantify your operational drag.
        </h2>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.9rem",
            fontWeight: 300,
            color: "hsl(var(--muted-foreground))",
            lineHeight: 1.6,
            maxWidth: "70ch",
          }}
        >
          Input your team's numbers below. See how much capacity and margin
          you're losing to manual friction – and what recovery looks like.
        </p>
      </div>

      {/* Grid */}
      <div
        className={`container mx-auto px-6 lg:px-12 clip-reveal-down ${isVisible ? "visible" : ""}`}
        style={{ transitionDelay: "0.2s" }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 border-t border-border"
        >
          {/* ── Row 0: Column labels ── */}
          <div className="py-6 lg:border-r border-border">
            <p className="text-primary" style={MONO}>[INPUT TERMINAL]</p>
          </div>
          <div className="hidden lg:block py-6 pl-0 lg:pl-8">
            <p className="text-primary" style={MONO}>[RECOVERY OUTCOME]</p>
          </div>

          {/* ── Row 1: People ↔ Annual Leaked Hours ── */}
          <div className="py-8 lg:border-r border-border">
            <label
              style={{
                ...MONO,
                color: "hsl(var(--muted-foreground))",
                display: "block",
                marginBottom: "0.6rem",
              }}
            >
              PEOPLE IN WORKFLOW
            </label>
            <input
              type="number"
              min="0"
              placeholder="e.g. 12"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "hsl(var(--foreground))")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "hsl(var(--border))")}
            />
          </div>
          <div
            className="py-8 pl-0 lg:pl-8 border-t lg:border-t-0 border-border"
          >
            <p style={{ ...MONO, color: "hsl(var(--muted-foreground))", marginBottom: "0.6rem" }}>
              ANNUAL LEAKED HOURS
            </p>
            <p
              className="text-foreground"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                letterSpacing: "-0.02em",
              }}
            >
              {hasInput ? formatHours(annualHours) : "—"}
            </p>
          </div>

          {/* ── Row 2: Hours/week ↔ Annual Cost ── */}
          <div className="py-8 lg:border-r border-border">
            <label
              style={{
                ...MONO,
                color: "hsl(var(--muted-foreground))",
                display: "block",
                marginBottom: "0.6rem",
              }}
            >
              AVG HOURS / WEEK LOST PER PERSON
            </label>
            <input
              type="number"
              min="0"
              placeholder="e.g. 6"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(e.target.value)}
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "hsl(var(--foreground))")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "hsl(var(--border))")}
            />
          </div>
          <div
            className="py-8 pl-0 lg:pl-8 border-t lg:border-t-0 border-border"
          >
            <p style={{ ...MONO, color: "hsl(var(--muted-foreground))", marginBottom: "0.6rem" }}>
              ANNUAL COST
            </p>
            <p
              className="text-foreground"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                letterSpacing: "-0.02em",
              }}
            >
              {hasInput ? formatGBP(annualCost) : "—"}
            </p>
          </div>

          {/* ── Row 3: Hourly rate ↔ Recovery Scenario ── */}
          <div className="py-8 lg:border-r border-border">
            <label
              style={{
                ...MONO,
                color: "hsl(var(--muted-foreground))",
                display: "block",
                marginBottom: "0.6rem",
              }}
            >
              FULLY LOADED HOURLY COST (£)
            </label>
            <input
              type="number"
              min="0"
              placeholder="e.g. 45"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "hsl(var(--foreground))")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "hsl(var(--border))")}
            />
          </div>
          <div
            className="py-8 pl-0 lg:pl-8 border-t lg:border-t-0 border-border"
          >
            <p className="text-primary" style={{ ...MONO, marginBottom: "0.75rem" }}>
              [RECOVERY SCENARIO]
            </p>
            <div className="flex gap-2 mt-[5px]">
              {RECOVERY_OPTIONS.map(({ pct, label }) => {
                const isActive = recoveryPct === pct;
                return (
                  <div key={pct} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <button
                      onClick={() => setRecoveryPct(pct)}
                      className="px-5 lg:px-8"
                      style={{
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        borderRadius: "0.625rem",
                        border: isActive ? "1px solid hsl(var(--primary))" : "1px solid hsl(var(--border))",
                        background: isActive ? "hsl(var(--primary))" : "hsl(var(--input))",
                        color: isActive ? "hsl(var(--primary-foreground))" : "hsl(var(--muted-foreground))",
                        cursor: "pointer",
                        transition: "all 0ms",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.background = "hsl(var(--foreground))";
                          e.currentTarget.style.color = "hsl(var(--background))";
                          e.currentTarget.style.borderColor = "hsl(var(--foreground))";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.background = "hsl(var(--input))";
                          e.currentTarget.style.color = "hsl(var(--muted-foreground))";
                          e.currentTarget.style.borderColor = "hsl(var(--border))";
                        }
                      }}
                    >
                      {pct}%
                    </button>
                    <span style={{ ...MONO, fontSize: "0.6rem", color: "hsl(var(--muted-foreground))", marginTop: "0.35rem", display: "block", textAlign: "center" }}>
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Row 4: empty ↔ Recovered Capacity ── */}
          <div
            className="hidden lg:block py-8 lg:border-r border-t border-border"
          />
          <div
            className="py-8 pl-0 lg:pl-8 border-t border-border"
          >
            <p className="text-primary" style={{ ...MONO, marginBottom: "0.5rem" }}>
              [RECOVERED CAPACITY]
            </p>
            <p
              className="flex flex-col lg:flex-row lg:items-baseline text-primary"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 4vw, 3.25rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              <span>{hasInput ? formatHours(recoveredHours) : "—"} hrs</span>
              <span className="hidden lg:inline text-primary" style={{ margin: "0 0.4em" }}>·</span>
              <span>{hasInput ? formatGBP(recoveredCost) : "—"}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeakageEstimator;
