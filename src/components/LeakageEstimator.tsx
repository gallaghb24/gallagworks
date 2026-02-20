import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const RECOVERY_OPTIONS = [50, 70, 90] as const;

const formatGBP = (value: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);

const formatHours = (value: number) =>
  new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 }).format(value);

const LeakageEstimator = () => {
  const { ref, isVisible } = useScrollAnimation();

  const [people, setPeople] = useState("8");
  const [hoursPerWeek, setHoursPerWeek] = useState("6");
  const [hourlyRate, setHourlyRate] = useState("45");
  const [weeksPerYear, setWeeksPerYear] = useState("46");
  const [recoveryPct, setRecoveryPct] = useState<50 | 70 | 90>(70);

  const p = parseFloat(people) || 0;
  const h = parseFloat(hoursPerWeek) || 0;
  const r = parseFloat(hourlyRate) || 0;
  const w = parseFloat(weeksPerYear) || 0;

  const annualHours = p * h * w;
  const annualCost = annualHours * r;
  const recoveredHours = annualHours * (recoveryPct / 100);
  const recoveredCost = annualCost * (recoveryPct / 100);

  const hasInput = p > 0 && h > 0 && r > 0 && w > 0;

  return (
    <section
      ref={ref}
      className="border-draw"
      style={{ background: "#000000" }}
    >
      {/* Header band */}
      <div
        className={`px-16 pt-16 pb-10 clip-reveal ${isVisible ? "visible" : ""}`}
      >
        <span
          className="block mb-5"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            color: "#FF5F1F",
            textTransform: "uppercase",
          }}
        >
          [LEAKAGE ESTIMATOR]
        </span>
        <h2
          className="font-bold mb-3"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          Quantify your operational drag.
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9rem",
            fontWeight: 300,
            color: "hsl(var(--muted-foreground))",
            lineHeight: 1.6,
            maxWidth: "44ch",
          }}
        >
          Input your team's numbers below. See how much capacity and margin you're losing to manual friction – and what recovery looks like.
        </p>
      </div>

      {/* Main 2-col grid with dividing border */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2"
        style={{ borderTop: "1px solid #1A1C1E" }}
      >
        {/* LEFT — Input Terminal */}
        <div
          className={`clip-reveal-down ${isVisible ? "visible" : ""}`}
          style={{
            padding: "4rem",
            borderRight: "1px solid #1A1C1E",
            transitionDelay: "0.2s",
          }}
        >
          <p
            className="mb-8"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#FF5F1F",
          }}
        >
          [INPUT TERMINAL]
        </p>

          <div className="space-y-7">
            {[
              {
                label: "PEOPLE IN WORKFLOW",
                value: people,
                setter: setPeople,
                placeholder: "e.g. 12",
              },
              {
                label: "AVG HOURS / WEEK LOST PER PERSON",
                value: hoursPerWeek,
                setter: setHoursPerWeek,
                placeholder: "e.g. 6",
              },
              {
                label: "FULLY LOADED HOURLY COST (£)",
                value: hourlyRate,
                setter: setHourlyRate,
                placeholder: "e.g. 45",
              },
              {
                label: "WORKING WEEKS / YEAR",
                value: weeksPerYear,
                setter: setWeeksPerYear,
                placeholder: "e.g. 46",
              },
            ].map(({ label, value, setter, placeholder }) => (
              <div key={label}>
                <label
                  style={{
                    display: "block",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.75rem",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "hsl(var(--muted-foreground))",
                    marginBottom: "0.5rem",
                  }}
                >
                  {label}
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder={placeholder}
                  value={value}
                  onChange={(e) => setter(e.target.value)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "1px solid #1A1C1E",
                    borderRadius: 0,
                    padding: "0.75rem 1rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "1rem",
                    color: "#FFFFFF",
                    outline: "none",
                    transition: "border-color 0ms",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#FFFFFF")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#1A1C1E")
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Recovery Outcome */}
        <div
          className={`clip-reveal-down ${isVisible ? "visible" : ""}`}
          style={{ padding: "4rem", transitionDelay: "0.35s" }}
        >
          <p
            className="mb-8"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#FF5F1F",
          }}
        >
          [RECOVERY OUTCOME]
        </p>

          {hasInput ? (
            <div className="space-y-0">
              {/* Leaked Hours */}
              <div style={{ borderBottom: "1px solid #1A1C1E", paddingBottom: "1.75rem", marginBottom: "1.75rem" }}>
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.75rem",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "hsl(var(--muted-foreground))",
                    marginBottom: "0.6rem",
                  }}
                >
                  [ANNUAL LEAKED HOURS]
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    color: "#FFFFFF",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {formatHours(annualHours)}
                </p>
              </div>

              {/* Annual Cost */}
              <div style={{ borderBottom: "1px solid #1A1C1E", paddingBottom: "1.75rem", marginBottom: "1.75rem" }}>
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.75rem",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "hsl(var(--muted-foreground))",
                    marginBottom: "0.6rem",
                  }}
                >
                  [ANNUAL COST]
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    color: "#FFFFFF",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {formatGBP(annualCost)}
                </p>
              </div>

              {/* Recovery Scenario toggles */}
              <div style={{ borderBottom: "1px solid #1A1C1E", paddingBottom: "1.75rem", marginBottom: "1.75rem" }}>
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.75rem",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "hsl(var(--muted-foreground))",
                    marginBottom: "1rem",
                  }}
                >
                  [RECOVERY SCENARIO]
                </p>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  {RECOVERY_OPTIONS.map((pct) => {
                    const isActive = recoveryPct === pct;
                    return (
                      <button
                        key={pct}
                        onClick={() => setRecoveryPct(pct)}
                        style={{
                          padding: "0.5rem 1rem",
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          borderRadius: 0,
                          border: isActive ? "1px solid #FF5F1F" : "1px solid #1A1C1E",
                          background: isActive ? "#FF5F1F" : "transparent",
                          color: isActive ? "#FFFFFF" : "hsl(var(--muted-foreground))",
                          cursor: "pointer",
                          transition: "all 0ms",
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.background = "#FFFFFF";
                            e.currentTarget.style.color = "#000000";
                            e.currentTarget.style.borderColor = "#FFFFFF";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "hsl(var(--muted-foreground))";
                            e.currentTarget.style.borderColor = "#1A1C1E";
                          }
                        }}
                      >
                        {pct}%
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Hero: Recovered Capacity */}
              <div>
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.75rem",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "#FF5F1F",
                    marginBottom: "0.75rem",
                  }}
                >
                  [RECOVERED CAPACITY]
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(2rem, 4vw, 3.25rem)",
                    color: "#FF5F1F",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.05,
                  }}
                >
                  {formatHours(recoveredHours)} hrs
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(2rem, 4vw, 3.25rem)",
                    color: "#FF5F1F",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.05,
                    marginTop: "0.25rem",
                  }}
                >
                  {formatGBP(recoveredCost)}
                </p>
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                minHeight: "320px",
              }}
            >
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  color: "hsl(var(--muted-foreground))",
                  textAlign: "center",
                  lineHeight: 1.8,
                }}
              >
                Enter your numbers to see<br />the leakage calculation.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeakageEstimator;
