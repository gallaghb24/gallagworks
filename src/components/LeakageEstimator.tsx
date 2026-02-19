import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const SALARY_BANDS = [
  { label: "Manual entry", value: "" },
  { label: "Junior ~£25/hr", value: "25" },
  { label: "Mid ~£40/hr", value: "40" },
  { label: "Senior ~£55/hr", value: "55" },
  { label: "Lead ~£75/hr", value: "75" },
];

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

  const [people, setPeople] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
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
    <section className="py-16 lg:py-32 bg-slate border-draw" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl">
          <span
            className={`font-mono text-xs text-primary uppercase tracking-widest mb-6 block clip-reveal ${isVisible ? "visible" : ""}`}
          >
            [LEAKAGE ESTIMATOR]
          </span>
          <h2
            className={`text-3xl md:text-4xl font-extrabold text-foreground mb-4 clip-reveal ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.08s" }}
          >
            Quantify your operational drag
          </h2>
          <p
            className={`text-muted-foreground font-light leading-relaxed mb-10 md:mb-16 max-w-2xl clip-reveal ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.16s" }}
          >
            Input your team's numbers below. See how much capacity and margin
            you're losing to manual friction — and what recovery looks like.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Inputs */}
            <div
              className={`space-y-6 clip-reveal-down ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: "0.24s" }}
            >
              <div>
                <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                  People in workflow
                </label>
                <Input
                  type="number"
                  min="0"
                  placeholder="e.g. 12"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  className="bg-background border-border text-foreground"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                  Avg hours/week lost per person
                </label>
                <Input
                  type="number"
                  min="0"
                  placeholder="e.g. 6"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(e.target.value)}
                />
              </div>

              <div>
                <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                  Fully loaded hourly cost (£)
                </label>
                <div className="flex gap-3">
                  <Input
                    type="number"
                    min="0"
                    placeholder="e.g. 40"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(e.target.value)}
                    className="flex-1"
                  />
                  <select
                    className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    value=""
                    onChange={(e) => {
                      if (e.target.value) setHourlyRate(e.target.value);
                    }}
                  >
                    {SALARY_BANDS.map((band) => (
                      <option key={band.label} value={band.value}>
                        {band.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                  Working weeks/year
                </label>
                <Input
                  type="number"
                  min="0"
                  max="52"
                  value={weeksPerYear}
                  onChange={(e) => setWeeksPerYear(e.target.value)}
                />
              </div>
            </div>

            {/* Outputs */}
            <div
              className={`clip-reveal-down ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: "0.4s" }}
            >
              {hasInput ? (
                <div className="space-y-8">
                  <div>
                    <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      Annual hours leaked
                    </p>
                    <p className="font-mono text-4xl md:text-5xl font-extrabold text-foreground">
                      {formatHours(annualHours)}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      Annual cost leaked
                    </p>
                    <p className="font-mono text-4xl md:text-5xl font-extrabold text-primary">
                      {formatGBP(annualCost)}
                    </p>
                  </div>

                  <div className="border-t border-border pt-8">
                    <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-4">
                      If we remove…
                    </p>
                    <div className="flex gap-3 mb-6">
                      {RECOVERY_OPTIONS.map((pct) => (
                        <button
                          key={pct}
                          onClick={() => setRecoveryPct(pct)}
                          className={`px-5 py-2.5 rounded-md font-mono text-sm font-semibold transition-all ${
                            recoveryPct === pct
                              ? "bg-primary text-primary-foreground"
                              : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                          }`}
                        >
                          {pct}%
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                          Hours recovered
                        </p>
                        <p className="font-mono text-2xl md:text-3xl font-extrabold text-foreground">
                          {formatHours(recoveredHours)}
                        </p>
                      </div>
                      <div>
                        <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                          Cost recovered
                        </p>
                        <p className="font-mono text-2xl md:text-3xl font-extrabold text-primary">
                          {formatGBP(recoveredCost)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-block font-mono text-sm text-primary hover:text-primary/80 transition-colors mt-4 underline underline-offset-4"
                  >
                    Request a Consultation →
                  </Link>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full min-h-[300px]">
                  <p className="font-mono text-sm text-muted-foreground text-center">
                    Enter your numbers to see<br />the leakage calculation.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeakageEstimator;
