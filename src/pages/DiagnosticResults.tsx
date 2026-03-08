import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { dimensions } from "@/data/questions";
import type { ScoringResult, DimensionKey } from "@/lib/scoring";

// ── Maturity summaries ─────────────────────────────────────────────────

const MATURITY_SUMMARIES: Record<number, string> = {
  1: "Your organisation has significant groundwork to do before AI can deliver reliable value. The risk is not that AI will not work — it is that it will be applied to broken foundations and produce unreliable results. The priority is to address the data and process layers before investing in AI tooling. Without these foundations, AI adoption will be expensive, frustrating, and unlikely to stick.",
  2: "You have some of the building blocks in place, but critical gaps remain. The biggest risk at this stage is jumping to AI tooling before addressing the underlying operational readiness. Focus on closing the gaps in your weakest dimensions first. Targeted investment now will prevent costly rework later.",
  3: "Your organisation is in a reasonable position to begin targeted AI adoption. The key is to start with high-confidence use cases where the data is clean, the process is understood, and the team is receptive. Avoid the temptation to go broad before going deep. Prove value in one area, then scale.",
  4: "You are well-positioned for AI adoption with strong foundations in most areas. Focus on scaling what works, building internal capability, and ensuring governance keeps pace with adoption. The risk at this stage is fragmentation — too many experiments without a cohesive strategy.",
  5: "Your organisation has the infrastructure, skills, and strategic clarity to drive AI at scale. The challenge now is sustaining momentum, avoiding complacency, and ensuring continued innovation. Consider whether your operating model can absorb the pace of change AI enables.",
};

// ── Recommendation templates ───────────────────────────────────────────

function getHeadlineRecommendation(dimensionName: string, rating: string): string {
  switch (rating) {
    case "Critical Gap":
      return `${dimensionName} is your most urgent priority. Address this before investing in AI tooling.`;
    case "Needs Attention":
      return `${dimensionName} has gaps that will limit the effectiveness of AI initiatives if left unaddressed.`;
    case "Solid Foundation":
      return `${dimensionName} is in good shape. Maintain and refine as you scale AI adoption.`;
    case "Strength":
      return `${dimensionName} is a genuine strength. Use it as a foundation for building momentum.`;
    default:
      return "";
  }
}

// ── Dimension name lookup ──────────────────────────────────────────────

const DIMENSION_NAMES: Record<DimensionKey, string> = {} as Record<DimensionKey, string>;
for (const dim of dimensions) {
  DIMENSION_NAMES[dim.id as DimensionKey] = dim.name;
}

// ── Component ──────────────────────────────────────────────────────────

interface ResultsState {
  scoring: ScoringResult;
  assessmentId: string;
  organisation: string;
}

const DiagnosticResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as ResultsState | null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!state?.scoring) {
      navigate("/diagnostic", { replace: true });
    }
  }, [state, navigate]);

  if (!state?.scoring) return null;

  const { scoring, organisation } = state;
  const { maturityLevel, totalScore, dimensionScores, dimensionRatings, priorityOrder } = scoring;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Your AI Readiness Results"
        description="View your AI Readiness Diagnostic results and recommendations."
        path="/diagnostic/results"
      />
      <Navigation />

      <main>
        {/* ── Top Section ──────────────────────────────────────────── */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="font-mono text-xs text-primary uppercase tracking-widest mb-4 block">
                [YOUR RESULTS]
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-3">
                AI Readiness Assessment.
              </h1>
              <p className="text-lg text-foreground font-medium">{organisation}</p>
              <p className="text-sm text-muted-foreground font-mono mt-1">
                {format(new Date(), "d MMMM yyyy")}
              </p>
            </div>
          </div>
        </section>

        {/* ── Overall Score Card ────────────────────────────────────── */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-6 lg:px-12 flex justify-center">
            <div className="w-full max-w-[600px] border border-border p-8 md:p-10 rounded-none">
              {/* Maturity label */}
              <p
                className="text-3xl md:text-4xl font-extrabold mb-4"
                style={{ color: maturityLevel.color }}
              >
                {maturityLevel.label}
              </p>

              {/* Total score */}
              <p className="font-mono text-5xl md:text-6xl font-bold text-foreground mb-1">
                {totalScore}{" "}
                <span className="text-muted-foreground text-2xl md:text-3xl font-normal">/ 150</span>
              </p>

              {/* Level indicator */}
              <p className="font-mono text-lg text-primary font-semibold mb-6">
                Level {maturityLevel.level}
              </p>

              {/* Summary */}
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {MATURITY_SUMMARIES[maturityLevel.level]}
              </p>
            </div>
          </div>
        </section>

        {/* ── Dimension Breakdown Grid ─────────────────────────────── */}
        <section className="pb-12 md:pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              Dimension Breakdown
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {priorityOrder.map((key) => {
                const score = dimensionScores[key];
                const rating = dimensionRatings[key];
                const name = DIMENSION_NAMES[key];
                const pct = (score / 25) * 100;

                return (
                  <div
                    key={key}
                    className="border border-border p-5 rounded-none"
                  >
                    <p className="font-display text-sm font-bold text-foreground mb-3">
                      {name}
                    </p>

                    <p className="font-mono text-2xl font-bold text-foreground mb-1">
                      {score}{" "}
                      <span className="text-muted-foreground text-sm font-normal">/ 25</span>
                    </p>

                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-3"
                      style={{ color: rating.color }}
                    >
                      {rating.rating}
                    </p>

                    {/* Progress bar */}
                    <div className="w-full h-1.5 bg-secondary rounded-none overflow-hidden">
                      <div
                        className="h-full rounded-none transition-all duration-500"
                        style={{ width: `${pct}%`, backgroundColor: rating.color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Headline Recommendations ─────────────────────────────── */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Priority Recommendations
            </h2>

            <div className="space-y-3 max-w-3xl">
              {priorityOrder.map((key, i) => {
                const name = DIMENSION_NAMES[key];
                const rating = dimensionRatings[key];
                const rec = getHeadlineRecommendation(name, rating.rating);

                return (
                  <div key={key} className="flex gap-3 items-start">
                    <span className="font-mono text-xs text-primary mt-1 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{rec}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer hideCTA />
    </div>
  );
};

export default DiagnosticResults;
