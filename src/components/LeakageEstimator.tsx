import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const RECOVERY_OPTIONS = [50, 70, 90] as const;

const formatGBP = (value: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);

const formatHours = (value: number) => new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 }).format(value);

const MONO: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "0.75rem",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
};

const BORDER = "1px solid #1A1C1E";

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
    maxWidth: "400px",
    background: "hsl(210, 3%, 16%)",
    border: BORDER,
    borderRadius: 0,
    padding: "0.75rem 1rem",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "1rem",
    color: "#FFFFFF",
    outline: "none",
    display: "block",
  };

  // Shared cell styles
  const leftCell: React.CSSProperties = {
    borderRight: BORDER,
    paddingTop: "2rem",
    paddingBottom: "2rem",
  };
  const rightCell: React.CSSProperties = {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    paddingLeft: "2rem",
  };

  return (
    <section ref={ref} className="border-draw" style={{ background: "#000000" }}>
      {/* Header */}
      <div className={`container mx-auto px-6 lg:px-12 pt-16 pb-10 clip-reveal ${isVisible ? "visible" : ""}`}>
        <span className="block mb-5" style={{ ...MONO, letterSpacing: "0.12em", color: "#FF5F1F" }}>
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
            maxWidth: "70ch",
          }}
        >
          Input your team's numbers below. See how much capacity and margin you're losing to manual friction – and what
          recovery looks like.
        </p>
      </div>

      {/* Grid — container aligns with header and rest of page */}
      <div
        className={`container mx-auto px-6 lg:px-12 clip-reveal-down ${isVisible ? "visible" : ""}`}
        style={{ transitionDelay: "0.2s" }}
      >
        {/*
          4-row × 2-column grid.
          Each row contains one left input and its matching right metric,
          so their tops are automatically on the same horizontal line.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ borderTop: BORDER }}>
          {/* ── Row 0: Column labels ── */}
          <div style={{ ...leftCell, paddingTop: "1.5rem", paddingBottom: "1.5rem" }}>
            <p style={{ ...MONO, color: "#FF5F1F" }}>[INPUT TERMINAL]</p>
          </div>
          <div style={{ ...rightCell, paddingTop: "1.5rem", paddingBottom: "1.5rem" }}>
            <p style={{ ...MONO, color: "#FF5F1F" }}>[RECOVERY OUTCOME]</p>
          </div>

          {/* ── Row 1: People ↔ Annual Leaked Hours ── */}
          <div style={leftCell}>
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
              onFocus={(e) => (e.currentTarget.style.borderColor = "#FFFFFF")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#1A1C1E")}
            />
          </div>
          <div style={rightCell}>
            <p style={{ ...MONO, color: "hsl(var(--muted-foreground))", marginBottom: "0.6rem" }}>
              ANNUAL LEAKED HOURS
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
              {hasInput ? formatHours(annualHours) : "—"}
            </p>
          </div>

          {/* ── Row 2: Hours/week ↔ Annual Cost ── */}
          <div style={leftCell}>
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
              onFocus={(e) => (e.currentTarget.style.borderColor = "#FFFFFF")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#1A1C1E")}
            />
          </div>
          <div style={rightCell}>
            <p style={{ ...MONO, color: "hsl(var(--muted-foreground))", marginBottom: "0.6rem" }}>ANNUAL COST</p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
              }}
            >
              {hasInput ? formatGBP(annualCost) : "—"}
            </p>
          </div>

          {/* ── Row 3: Hourly rate ↔ Recovery Scenario ── */}
          <div style={leftCell}>
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
              onFocus={(e) => (e.currentTarget.style.borderColor = "#FFFFFF")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#1A1C1E")}
            />
          </div>
          <div style={rightCell}>
            <p style={{ ...MONO, color: "#FF5F1F", marginBottom: "0.75rem" }}>[RECOVERY SCENARIO]</p>
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "5px" }}>
              {RECOVERY_OPTIONS.map((pct) => {
                const isActive = recoveryPct === pct;
                return (
                  <button
                    key={pct}
                    onClick={() => setRecoveryPct(pct)}
                    style={{
                      padding: "0.5rem 2rem",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      borderRadius: 0,
                      border: isActive ? "1px solid #FF5F1F" : BORDER,
                      background: isActive ? "#FF5F1F" : "hsl(210, 3%, 16%)",
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
                        e.currentTarget.style.background = "hsl(210, 3%, 16%)";
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

          {/* ── Row 4: empty ↔ Recovered Capacity ── */}
          <div style={{ ...leftCell, borderTop: BORDER }} />
          <div style={{ ...rightCell, borderTop: BORDER }}>
            <p style={{ ...MONO, color: "#FF5F1F", marginBottom: "0.5rem" }}>[RECOVERED CAPACITY]</p>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                color: "#FF5F1F",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                whiteSpace: "nowrap",
              }}
            >
              {hasInput ? formatHours(recoveredHours) : "—"} hrs
              <span style={{ color: "#FF5F1F", margin: "0 0.4em" }}>·</span>
              {hasInput ? formatGBP(recoveredCost) : "—"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeakageEstimator;
