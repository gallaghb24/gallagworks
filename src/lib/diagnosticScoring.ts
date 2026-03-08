export const DIMENSIONS = [
  { key: "data_foundation", label: "Data Foundation" },
  { key: "process_maturity", label: "Process Maturity" },
  { key: "governance_risk", label: "Governance & Risk" },
  { key: "skills_culture", label: "Skills & Culture" },
  { key: "tooling_infrastructure", label: "Tooling & Infrastructure" },
  { key: "strategic_clarity", label: "Strategic Clarity" },
] as const;

export type DimensionKey = (typeof DIMENSIONS)[number]["key"];

export interface DimensionScore {
  key: DimensionKey;
  label: string;
  score: number;
  maxScore: number;
}

export interface ScoringResult {
  dimensionScores: DimensionScore[];
  totalScore: number;
  maxTotal: number;
  percentage: number;
  maturityLevel: string;
}

export function calculateScores(answers: Record<string, number>): ScoringResult {
  const dimensionScores: DimensionScore[] = DIMENSIONS.map((dim) => {
    let score = 0;
    for (let i = 1; i <= 5; i++) {
      score += answers[`${dim.key}_${i}`] ?? 0;
    }
    return { key: dim.key, label: dim.label, score, maxScore: 25 };
  });

  const totalScore = dimensionScores.reduce((sum, d) => sum + d.score, 0);
  const maxTotal = 150;
  const percentage = Math.round((totalScore / maxTotal) * 100);

  let maturityLevel: string;
  if (percentage <= 20) maturityLevel = "Unaware";
  else if (percentage <= 40) maturityLevel = "Exploring";
  else if (percentage <= 60) maturityLevel = "Developing";
  else if (percentage <= 80) maturityLevel = "Competent";
  else maturityLevel = "Leading";

  return { dimensionScores, totalScore, maxTotal, percentage, maturityLevel };
}
