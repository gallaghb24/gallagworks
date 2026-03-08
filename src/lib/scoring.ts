import { dimensions } from "@/data/questions";

// ── Types ──────────────────────────────────────────────────────────────

export type DimensionKey =
  | "data_foundation"
  | "process_maturity"
  | "governance_risk"
  | "skills_culture"
  | "tooling_infrastructure"
  | "strategic_clarity";

export interface MaturityLevel {
  level: number;
  label: string;
  color: string;
}

export interface DimensionRating {
  rating: string;
  color: string;
}

export interface ScoringResult {
  dimensionScores: Record<DimensionKey, number>;
  totalScore: number;
  maturityLevel: MaturityLevel;
  dimensionRatings: Record<DimensionKey, DimensionRating>;
  priorityOrder: DimensionKey[];
}

// ── Dimension keys in canonical order ──────────────────────────────────

const DIMENSION_KEYS: DimensionKey[] = [
  "data_foundation",
  "process_maturity",
  "governance_risk",
  "skills_culture",
  "tooling_infrastructure",
  "strategic_clarity",
];

// ── 1. calculateDimensionScores ────────────────────────────────────────

export function calculateDimensionScores(
  answers: Record<string, number>
): Record<DimensionKey, number> {
  const scores = {} as Record<DimensionKey, number>;

  for (const dim of dimensions) {
    const key = dim.id as DimensionKey;
    let total = 0;
    for (const q of dim.questions) {
      total += answers[q.id] ?? 0;
    }
    scores[key] = total;
  }

  return scores;
}

// ── 2. calculateTotalScore ─────────────────────────────────────────────

export function calculateTotalScore(
  dimensionScores: Record<DimensionKey, number>
): number {
  return Object.values(dimensionScores).reduce((sum, s) => sum + s, 0);
}

// ── 3. getMaturityLevel ────────────────────────────────────────────────

export function getMaturityLevel(totalScore: number): MaturityLevel {
  if (totalScore >= 130) return { level: 5, label: "Leading", color: "#10B981" };
  if (totalScore >= 110) return { level: 4, label: "Advancing", color: "#22C55E" };
  if (totalScore >= 90) return { level: 3, label: "Developing", color: "#EAB308" };
  if (totalScore >= 60) return { level: 2, label: "Emerging", color: "#F97316" };
  return { level: 1, label: "Foundation", color: "#EF4444" };
}

// ── 4. getDimensionRating ──────────────────────────────────────────────

export function getDimensionRating(score: number): DimensionRating {
  if (score >= 21) return { rating: "Strength", color: "#22C55E" };
  if (score >= 16) return { rating: "Solid Foundation", color: "#84CC16" };
  if (score >= 11) return { rating: "Needs Attention", color: "#F97316" };
  return { rating: "Critical Gap", color: "#EF4444" };
}

// ── 5. getPriorityOrder ────────────────────────────────────────────────

export function getPriorityOrder(
  dimensionScores: Record<DimensionKey, number>
): DimensionKey[] {
  const priority: DimensionKey[] = [];
  const remaining: DimensionKey[] = [];

  // Prerequisites: Data Foundation and Process Maturity if below 16
  const prerequisites: DimensionKey[] = ["data_foundation", "process_maturity"];
  for (const key of prerequisites) {
    if (dimensionScores[key] < 16) {
      priority.push(key);
    }
  }

  // Governance & Risk comes next if not already added
  const govKey: DimensionKey = "governance_risk";
  if (!priority.includes(govKey)) {
    if (dimensionScores[govKey] < 16) {
      priority.push(govKey);
    }
  }

  // Remaining dimensions sorted by score ascending
  const rest: DimensionKey[] = ["skills_culture", "tooling_infrastructure", "strategic_clarity"];
  // Also add any prerequisites/governance that scored >= 16 (they go into remaining pool)
  for (const key of [...prerequisites, govKey]) {
    if (!priority.includes(key)) {
      rest.push(key);
    }
  }

  rest.sort((a, b) => dimensionScores[a] - dimensionScores[b]);

  return [...priority, ...rest];
}

// ── Convenience: full scoring pipeline ─────────────────────────────────

export function calculateFullScoring(
  answers: Record<string, number>
): ScoringResult {
  const dimensionScores = calculateDimensionScores(answers);
  const totalScore = calculateTotalScore(dimensionScores);
  const maturityLevel = getMaturityLevel(totalScore);

  const dimensionRatings = {} as Record<DimensionKey, DimensionRating>;
  for (const key of DIMENSION_KEYS) {
    dimensionRatings[key] = getDimensionRating(dimensionScores[key]);
  }

  const priorityOrder = getPriorityOrder(dimensionScores);

  return {
    dimensionScores,
    totalScore,
    maturityLevel,
    dimensionRatings,
    priorityOrder,
  };
}
