import { useEffect, useState, useCallback, useRef } from "react";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import { format } from "date-fns";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import { Link as LinkIcon, Linkedin, Loader2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { dimensions } from "@/data/questions";
import { getRecommendation } from "@/data/recommendations";
import type { ScoringResult, DimensionKey } from "@/lib/scoring";
import { getMaturityLevel, getDimensionRating, getPriorityOrder } from "@/lib/scoring";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { trackEvent } from "@/lib/analytics";
import { downloadDiagnosticPDF } from "@/components/DiagnosticPDFReport";

// ── Maturity summaries ─────────────────────────────────────────────────

const MATURITY_SUMMARIES: Record<number, string> = {
  1: "Your organisation has significant groundwork to do before AI can deliver reliable value. The risk is not that AI will not work — it is that it will be applied to broken foundations and produce unreliable results. The priority is to address the data and process layers before investing in AI tooling. Without these foundations, AI adoption will be expensive, frustrating, and unlikely to stick.",
  2: "You have some of the building blocks in place, but critical gaps remain. The biggest risk at this stage is jumping to AI tooling before addressing the underlying operational readiness. Focus on closing the gaps in your weakest dimensions first. Targeted investment now will prevent costly rework later.",
  3: "Your organisation is in a reasonable position to begin targeted AI adoption. The key is to start with high-confidence use cases where the data is clean, the process is understood, and the team is receptive. Avoid the temptation to go broad before going deep. Prove value in one area, then scale.",
  4: "You are well-positioned for AI adoption with strong foundations in most areas. Focus on scaling what works, building internal capability, and ensuring governance keeps pace with adoption. The risk at this stage is fragmentation — too many experiments without a cohesive strategy.",
  5: "Your organisation has the infrastructure, skills, and strategic clarity to drive AI at scale. The challenge now is sustaining momentum, avoiding complacency, and ensuring continued innovation. Consider whether your operating model can absorb the pace of change AI enables.",
};

// ── Dimension name lookup ──────────────────────────────────────────────

const DIMENSION_NAMES: Record<DimensionKey, string> = {} as Record<DimensionKey, string>;
for (const dim of dimensions) {
  DIMENSION_NAMES[dim.id as DimensionKey] = dim.name;
}

const SHORT_NAMES: Record<DimensionKey, string> = {
  data_foundation: "Data",
  process_maturity: "Process",
  governance_risk: "Governance",
  skills_culture: "Skills",
  tooling_infrastructure: "Tooling",
  strategic_clarity: "Strategy",
};

const DIMENSION_KEYS: DimensionKey[] = [
  "data_foundation",
  "process_maturity",
  "governance_risk",
  "skills_culture",
  "tooling_infrastructure",
  "strategic_clarity",
];

// ── Action plan generation ─────────────────────────────────────────────

interface ActionItem {
  action: string;
  dimension: DimensionKey;
}

function generateActionPlan(
  priorityOrder: DimensionKey[],
  dimensionRatings: Record<DimensionKey, { rating: string; color: string }>
): { quickWins: ActionItem[]; mediumTerm: ActionItem[]; strategic: ActionItem[] } {
  const quickWins: ActionItem[] = [];
  const mediumTerm: ActionItem[] = [];
  const strategic: ActionItem[] = [];

  const actionsByDimension: Record<DimensionKey, Record<string, { quick: string; medium: string; strat: string }>> = {
    data_foundation: {
      "Critical Gap": {
        quick: "Audit your top 5 data-intensive workflows and map where manual handoffs occur",
        medium: "Implement standardised input templates and automated validation for critical data sources",
        strat: "Build automated data pipelines with real-time quality monitoring and alerting",
      },
      "Needs Attention": {
        quick: "Identify and document your three most error-prone data handoff points",
        medium: "Implement automated validation rules for your highest-volume data inputs",
        strat: "Create data contracts between teams defining format, schema, and delivery expectations",
      },
      "Solid Foundation": {
        quick: "Set up automated quality alerts for your most critical data pipeline",
        medium: "Implement real-time data quality dashboards accessible to all stakeholders",
        strat: "Establish data contracts and automated error detection across all data flows",
      },
      "Strength": {
        quick: "Identify one advanced AI use case your clean data layer can support immediately",
        medium: "Build predictive analytics models leveraging your strong data foundation",
        strat: "Use your data maturity as a competitive differentiator in client conversations",
      },
    },
    process_maturity: {
      "Critical Gap": {
        quick: "Map your three most critical operational workflows as they actually run today",
        medium: "Document decision points and exception handling for your core processes",
        strat: "Build an operational process library with version control and regular review cycles",
      },
      "Needs Attention": {
        quick: "Compare documented processes against how work actually flows — identify the gaps",
        medium: "Create exception handling paths and escalation criteria for your top workflows",
        strat: "Implement automated triage separating routine from complex work in your highest-volume process",
      },
      "Solid Foundation": {
        quick: "Identify the 80/20 split in your highest-volume workflow — what is predictable vs. exceptional",
        medium: "Build automated routing for the predictable majority in your top process",
        strat: "Create exception routing for genuine judgement calls with measurable processing times",
      },
      "Strength": {
        quick: "Select your highest-volume, highest-value process for AI augmentation",
        medium: "Implement AI-assisted automation for the selected process and measure impact",
        strat: "Scale process automation across the business using early wins as the model",
      },
    },
    governance_risk: {
      "Critical Gap": {
        quick: "Create and communicate an approved AI tools list with basic data handling rules",
        medium: "Assign governance ownership and implement review checkpoints for AI-generated client outputs",
        strat: "Build a comprehensive AI governance framework with regular compliance auditing",
      },
      "Needs Attention": {
        quick: "Formalise your approved tool list with clear data handling boundaries",
        medium: "Assign a named individual or group to own AI governance and establish meeting cadence",
        strat: "Implement risk-tiered governance with different review processes by use case sensitivity",
      },
      "Solid Foundation": {
        quick: "Review your governance framework to ensure it enables rather than blocks low-risk use cases",
        medium: "Implement lightweight fast-track approval for low-risk internal AI use cases",
        strat: "Build proportionate governance that scales with your AI adoption ambitions",
      },
      "Strength": {
        quick: "Document your governance framework as a client-facing differentiator",
        medium: "Create client-facing materials demonstrating your AI governance maturity",
        strat: "Iterate governance as AI regulations evolve — stay ahead of compliance requirements",
      },
    },
    skills_culture: {
      "Critical Gap": {
        quick: "Identify three willing team members and run a small AI pilot solving a problem they recognise",
        medium: "Create an internal AI Champions programme to formalise and share early learnings",
        strat: "Build role-specific AI skill paths with dedicated learning time and internal communities",
      },
      "Needs Attention": {
        quick: "Capture what your early AI adopters have learned and share it in an internal showcase",
        medium: "Launch a structured AI Champions programme with regular showcases and knowledge sharing",
        strat: "Develop role-specific AI training that moves beyond general awareness to practical application",
      },
      "Solid Foundation": {
        quick: "Shift from general AI awareness training to role-specific skill building for one team",
        medium: "Create role-specific AI learning paths for your three largest functional teams",
        strat: "Build a continuous learning culture with dedicated innovation time and mentoring programmes",
      },
      "Strength": {
        quick: "Identify how to retain and reward your AI-literate talent to protect this advantage",
        medium: "Ensure AI adoption remains collaborative and psychologically safe as you scale",
        strat: "Build AI capability into your hiring and career development frameworks",
      },
    },
    tooling_infrastructure: {
      "Critical Gap": {
        quick: "Identify the three specific integration points where AI would need to connect to your systems",
        medium: "Implement API wrappers or middleware for your most critical legacy system integrations",
        strat: "Develop a technology modernisation roadmap focused on AI-readiness, not wholesale replacement",
      },
      "Needs Attention": {
        quick: "Assess middleware or integration platforms that can bridge your existing systems to AI tooling",
        medium: "Implement integration pathways for your top two AI use cases",
        strat: "Build documented APIs for core systems and develop internal automation capability",
      },
      "Solid Foundation": {
        quick: "Review data access policies to ensure AI tools can access what they need securely",
        medium: "Assess whether your infrastructure can handle AI workload processing requirements",
        strat: "Build elastic infrastructure that scales with AI workload demands",
      },
      "Strength": {
        quick: "Pilot one emerging AI technology ahead of the market using your infrastructure advantage",
        medium: "Build custom AI solutions that leverage your advanced technical capabilities",
        strat: "Maintain infrastructure investment pace with AI tooling evolution",
      },
    },
    strategic_clarity: {
      "Critical Gap": {
        quick: "Identify three specific business problems where AI could deliver measurable, quantified value",
        medium: "Build detailed business cases with defined success metrics for your top three AI opportunities",
        strat: "Create a prioritised AI strategy with quarterly reviews and portfolio management",
      },
      "Needs Attention": {
        quick: "Align your leadership team on a single top AI priority with a defined success metric",
        medium: "Document your AI strategy with prioritised use cases, metrics, baselines, and allocated budget",
        strat: "Implement quarterly AI strategy reviews with the ability to pivot or kill underperforming initiatives",
      },
      "Solid Foundation": {
        quick: "Review whether your delivery model can keep up with your strategic AI ambitions",
        medium: "Implement portfolio management across your AI initiatives with clear go/no-go gates",
        strat: "Build the discipline to kill AI projects that are not delivering and reallocate resources",
      },
      "Strength": {
        quick: "Reassess your AI strategy against the latest technology developments",
        medium: "Ensure your strategy remains adaptive and regularly re-evaluated as AI evolves",
        strat: "Use your strategic clarity to say no to AI distractions and focus on highest-value initiatives",
      },
    },
  };

  for (const key of priorityOrder) {
    const rating = dimensionRatings[key].rating;
    const actions = actionsByDimension[key]?.[rating];
    if (!actions) continue;

    if (rating === "Critical Gap") {
      quickWins.push({ action: actions.quick, dimension: key });
      mediumTerm.push({ action: actions.medium, dimension: key });
      strategic.push({ action: actions.strat, dimension: key });
    } else if (rating === "Needs Attention") {
      quickWins.push({ action: actions.quick, dimension: key });
      mediumTerm.push({ action: actions.medium, dimension: key });
      strategic.push({ action: actions.strat, dimension: key });
    } else if (rating === "Solid Foundation") {
      quickWins.push({ action: actions.quick, dimension: key });
      mediumTerm.push({ action: actions.medium, dimension: key });
      strategic.push({ action: actions.strat, dimension: key });
    } else {
      quickWins.push({ action: actions.quick, dimension: key });
      mediumTerm.push({ action: actions.medium, dimension: key });
      strategic.push({ action: actions.strat, dimension: key });
    }
  }

  return { quickWins, mediumTerm, strategic };
}

// ── Component ──────────────────────────────────────────────────────────

interface ResultsState {
  scoring: ScoringResult;
  assessmentId: string;
  organisation: string;
}

// ── Animated Dimension Card ───────────────────────────────────────────

interface DimensionCardProps {
  dimKey: DimensionKey;
  score: number;
  pct: number;
  rating: { rating: string; color: string };
  name: string;
  isHovered: boolean;
  sectionVisible: boolean;
  cardDelay: number;
  onHover: (key: DimensionKey | null) => void;
}

const DimensionCard = ({ dimKey, score, pct, rating, name, isHovered, sectionVisible, cardDelay, onHover }: DimensionCardProps) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  const [barWidth, setBarWidth] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger appearance after stagger delay once section is visible
  useEffect(() => {
    if (!sectionVisible || hasAnimated) return;
    // First: fade in the card after stagger delay
    const appearTimer = setTimeout(() => {
      setIsVisible(true);
    }, cardDelay);
    // Then: start count-up 500ms after the card has appeared
    const countTimer = setTimeout(() => {
      setHasAnimated(true);
      const duration = 1800;
      const startTime = performance.now();
      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setAnimatedScore(Math.round(eased * score));
        setBarWidth(eased * pct);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, cardDelay + 500);
    return () => { clearTimeout(appearTimer); clearTimeout(countTimer); };
  }, [sectionVisible, hasAnimated, cardDelay, score, pct]);

  return (
    <div
      className={`border border-white/[0.08] rounded-xl p-5 cursor-pointer transition-all duration-300 ${
        isHovered
          ? "border-primary/60 shadow-lg shadow-primary/10 -translate-y-1"
          : "hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5"
      }`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? isHovered ? "translateY(-4px)" : "translateY(0)"
          : "translateY(20px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out, border-color 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={() => onHover(dimKey)}
      onMouseLeave={() => onHover(null)}
    >
      <p className="font-display text-sm font-bold text-foreground mb-3">
        {name}
      </p>
      <p className="font-mono text-2xl font-bold text-foreground mb-1">
        {animatedScore}{" "}
        <span className="text-muted-foreground text-sm font-normal">/ 25</span>
      </p>
      <p
        className="text-xs font-semibold uppercase tracking-wider mb-3"
        style={{ color: rating.color }}
      >
        {rating.rating}
      </p>
      <div
        className="w-full h-1.5 bg-secondary overflow-hidden rounded-full"
        role="meter"
        aria-label={`${name} score`}
        aria-valuenow={score}
        aria-valuemin={0}
        aria-valuemax={25}
      >
        <div
          className={`h-full rounded-full ${isHovered ? "brightness-125" : ""}`}
          style={{
            width: `${barWidth}%`,
            backgroundColor: rating.color,
            transition: isHovered ? "filter 0.3s" : "filter 0.3s",
          }}
        />
      </div>
      <span className="sr-only">{name}: {score} out of 25, rated {rating.rating}</span>
    </div>
  );
};

const DiagnosticResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { assessmentId: paramAssessmentId } = useParams<{ assessmentId: string }>();
  const state = location.state as ResultsState | null;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [consultationLoading, setConsultationLoading] = useState(false);
  const [consultationRequested, setConsultationRequested] = useState(false);
  const [hoveredDimension, setHoveredDimension] = useState<DimensionKey | null>(null);
  const [animatedTotalScore, setAnimatedTotalScore] = useState(0);
  const totalScoreAnimatedRef = useRef(false);
  const [resolvedData, setResolvedData] = useState<{
    scoring: ScoringResult;
    organisation: string;
    assessmentId: string;
    assessmentDate: string;
  } | null>(null);

  // Scroll animation refs
  const scoreSection = useScrollAnimation({ threshold: 0.2 });
  const dimensionSection = useScrollAnimation({ threshold: 0.1 });
  const recommendationsSection = useScrollAnimation({ threshold: 0.1 });
  const actionPlanSection = useScrollAnimation({ threshold: 0.1 });
  const shareSection = useScrollAnimation({ threshold: 0.2 });
  const ctaSection = useScrollAnimation({ threshold: 0.2 });

  // Whether this page was loaded via a shared URL (not from completing the assessment)
  const isSharedView = !!paramAssessmentId && !state?.scoring;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load from Supabase if we have a URL param
  useEffect(() => {
    if (paramAssessmentId && !state?.scoring) {
      setLoading(true);
      setError(null);

      const fetchAssessment = async () => {
        const { data: assessment, error: fetchError } = await supabase
          .from("assessments")
          .select("*, leads(*)")
          .eq("id", paramAssessmentId)
          .single();

        if (fetchError || !assessment) {
          setError("Assessment not found.");
          setLoading(false);
          return;
        }

        const lead = assessment.leads as any;
        const dimScores = assessment.dimension_scores as Record<DimensionKey, number>;
        const totalScore = assessment.total_score ?? 0;
        const maturityLevel = getMaturityLevel(totalScore);

        const dimensionRatings = {} as Record<DimensionKey, { rating: string; color: string }>;
        for (const key of DIMENSION_KEYS) {
          dimensionRatings[key] = getDimensionRating(dimScores[key] ?? 0);
        }

        const priorityOrder = getPriorityOrder(dimScores);

        setResolvedData({
          scoring: { dimensionScores: dimScores, totalScore, maturityLevel, dimensionRatings, priorityOrder },
          organisation: lead?.organisation ?? "Unknown Organisation",
          assessmentId: assessment.id,
          assessmentDate: assessment.completed_at ?? assessment.started_at,
        });
        setLoading(false);
      };

      fetchAssessment();
    }
  }, [paramAssessmentId, state]);

  // Redirect only if no param AND no state
  useEffect(() => {
    if (!paramAssessmentId && !state?.scoring) {
      navigate("/diagnostic", { replace: true });
    }
  }, [paramAssessmentId, state, navigate]);

  // Resolve final data
  const finalData = resolvedData ?? (state?.scoring ? {
    scoring: state.scoring,
    organisation: state.organisation,
    assessmentId: state.assessmentId,
    assessmentDate: new Date().toISOString(),
  } : null);

  // Track results_viewed when data is ready
  useEffect(() => {
    if (finalData) {
      trackEvent("results_viewed", {
        assessment_id: finalData.assessmentId,
        total_score: finalData.scoring.totalScore,
        maturity_level: finalData.scoring.maturityLevel.label,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finalData?.assessmentId]);

  // Auto-trigger consultation request if arriving from email with ?request=consultation
  const consultationAutoTriggered = useRef(false);
  useEffect(() => {
    if (!finalData || consultationAutoTriggered.current) return;
    const params = new URLSearchParams(location.search);
    if (params.get("request") !== "consultation") return;
    consultationAutoTriggered.current = true;

    const autoRequest = async () => {
      setConsultationLoading(true);
      try {
        const { data: assessment, error: fetchErr } = await supabase
          .from("assessments")
          .select("*, leads(*)")
          .eq("id", finalData.assessmentId)
          .single();

        if (fetchErr || !assessment) throw new Error("Could not fetch assessment data");

        const lead = assessment.leads as any;
        await supabase.functions.invoke("send-consultation-request", {
          body: {
            assessment_id: finalData.assessmentId,
            name: lead?.name ?? "Unknown",
            email: lead?.email ?? "",
            organisation: finalData.organisation,
            total_score: finalData.scoring.totalScore,
            maturity_level: finalData.scoring.maturityLevel.label,
          },
        });

        setConsultationRequested(true);
        trackEvent("consultation_requested", { assessment_id: finalData.assessmentId });
        navigate("/consultation/confirmed", { state: { name: lead?.name } });
      } catch (err) {
        console.error("Auto consultation request failed:", err);
        toast({ title: "Something went wrong", description: "Please try again or email hello@gallag.works directly.", variant: "destructive" });
      } finally {
        setConsultationLoading(false);
      }
    };

    const timer = setTimeout(autoRequest, 500);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finalData]);



  // Last card: stagger 5*120=600ms + 500ms delay + 1800ms count = 2900ms total
  // Overall score: 500ms delay + 2400ms duration = 2900ms total (matches)
  const targetTotalScore = finalData?.scoring.totalScore ?? 0;
  useEffect(() => {
    if (!scoreSection.isVisible || totalScoreAnimatedRef.current || !targetTotalScore) return;
    totalScoreAnimatedRef.current = true;
    const delay = 500;
    const duration = 2400;
    let rafId: number;
    const timer = setTimeout(() => {
      const startTime = performance.now();
      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setAnimatedTotalScore(Math.round(eased * targetTotalScore));
        if (progress < 1) { rafId = requestAnimationFrame(step); }
      };
      rafId = requestAnimationFrame(step);
    }, delay);
    return () => { clearTimeout(timer); if (rafId) cancelAnimationFrame(rafId); };
  }, [scoreSection.isVisible, targetTotalScore]);

  // Custom radar chart tick renderer
  const renderCustomTick = useCallback(({ payload, x, y, textAnchor, ...rest }: any) => {
    const dimKey = DIMENSION_KEYS.find((k) => SHORT_NAMES[k] === payload.value);
    const isHovered = dimKey === hoveredDimension;
    return (
      <text
        {...rest}
        x={x}
        y={y}
        textAnchor={textAnchor}
        fill={isHovered ? "#FF5F1F" : "hsl(var(--foreground))"}
        fontSize={isHovered ? 13 : 12}
        fontFamily="DM Sans"
        fontWeight={isHovered ? 700 : 400}
        style={{ cursor: "pointer", transition: "all 0.2s ease" }}
        onMouseEnter={() => dimKey && setHoveredDimension(dimKey)}
        onMouseLeave={() => setHoveredDimension(null)}
      >
        {payload.value}
      </text>
    );
  }, [hoveredDimension]);

  // Custom radar dot renderer
  const renderCustomDot = useCallback((props: any) => {
    const { cx, cy, index } = props;
    const dimKey = DIMENSION_KEYS[index];
    const isHovered = dimKey === hoveredDimension;
    return (
      <circle
        key={index}
        cx={cx}
        cy={cy}
        r={isHovered ? 8 : 4}
        fill="#FF5F1F"
        stroke={isHovered ? "#FF5F1F" : "#FF5F1F"}
        strokeWidth={isHovered ? 3 : 1}
        opacity={isHovered ? 1 : 0.9}
        style={{ transition: "all 0.2s ease", filter: isHovered ? "drop-shadow(0 0 8px rgba(255,95,31,0.6))" : "none" }}
        onMouseEnter={() => setHoveredDimension(dimKey)}
        onMouseLeave={() => setHoveredDimension(null)}
      />
    );
  }, [hoveredDimension]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 lg:px-12 pt-32">
          <div className="max-w-3xl">
            <div className="h-4 w-32 bg-secondary rounded mb-4 animate-pulse" />
            <div className="h-10 w-80 bg-secondary rounded mb-3 animate-pulse" />
            <div className="h-5 w-48 bg-secondary rounded mb-12 animate-pulse" />
          </div>
          <div className="w-full max-w-[600px] mx-auto border border-white/[0.08] rounded-xl p-8">
            <div className="h-8 w-40 bg-secondary rounded mb-4 animate-pulse" />
            <div className="h-14 w-32 bg-secondary rounded mb-6 animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-secondary rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-secondary rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-secondary rounded animate-pulse" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border border-white/[0.08] rounded-xl p-5">
                <div className="h-4 w-24 bg-secondary rounded mb-3 animate-pulse" />
                <div className="h-7 w-16 bg-secondary rounded mb-2 animate-pulse" />
                <div className="h-1.5 w-full bg-secondary rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 pt-32 text-center">
          <p className="text-xl text-foreground font-bold mb-4">Assessment not found</p>
          <p className="text-muted-foreground mb-8">This link may be invalid or the assessment may no longer exist.</p>
          <div className="flex gap-3 justify-center">
            {paramAssessmentId && (
              <Button
                variant="outline"
                className=""
                onClick={() => {
                  setError(null);
                  setLoading(true);
                  setResolvedData(null);
                }}
              >
                Try Again
              </Button>
            )}
            <Button asChild>
              <Link to="/diagnostic">Take the Assessment</Link>
            </Button>
          </div>
        </div>
        <Footer hideCTA />
      </div>
    );
  }

  if (!finalData) return null;

  const { scoring, organisation, assessmentId: currentAssessmentId, assessmentDate } = finalData;
  const { maturityLevel, totalScore, dimensionScores, dimensionRatings, priorityOrder } = scoring;
  const actionPlan = generateActionPlan(priorityOrder, dimensionRatings);

  const shareUrl = `${window.location.origin}/diagnostic/results/${currentAssessmentId}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    trackEvent("results_link_copied", { assessment_id: currentAssessmentId });
    toast({ title: "Link copied", description: "Share URL copied to clipboard." });
  };

  const handleLinkedInShare = () => {
    trackEvent("linkedin_share_clicked", { assessment_id: currentAssessmentId });
    const text = encodeURIComponent(
      `I just completed the AI Readiness Diagnostic from Gallag Works. Our organisation scored ${totalScore}/150 — ${maturityLevel.label}. Interesting framework for thinking about where you actually stand on AI readiness. Take the assessment:`
    );
    const url = encodeURIComponent(`${window.location.origin}/diagnostic`);
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}&summary=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleConsultationRequest = async () => {
    setConsultationLoading(true);
    try {
      const { data: assessment, error: fetchErr } = await supabase
        .from("assessments")
        .select("*, leads(*)")
        .eq("id", currentAssessmentId)
        .single();

      if (fetchErr || !assessment) {
        throw new Error("Could not fetch assessment data");
      }

      const lead = assessment.leads as any;

      const { error: fnErr } = await supabase.functions.invoke("send-consultation-request", {
        body: {
          assessment_id: currentAssessmentId,
          name: lead?.name ?? "Unknown",
          email: lead?.email ?? "",
          organisation: organisation,
          total_score: totalScore,
          maturity_level: maturityLevel.label,
        },
      });

      if (fnErr) throw fnErr;

      setConsultationRequested(true);
      trackEvent("consultation_requested", { assessment_id: currentAssessmentId });

      // Get lead name for confirmation page
      const leadObj = (assessment.leads as any);
      navigate("/consultation/confirmed", { state: { name: leadObj?.name } });
    } catch (err: any) {
      console.error("Consultation request failed:", err);
      toast({ title: "Something went wrong", description: "Please try again or email hello@gallag.works directly.", variant: "destructive" });
    } finally {
      setConsultationLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${organisation} AI Readiness Assessment`}
        description={`Scored ${totalScore}/150 — ${maturityLevel.label}. Take the assessment for your organisation.`}
        path={`/diagnostic/results/${currentAssessmentId}`}
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
                {format(new Date(assessmentDate), "d MMMM yyyy")}
              </p>
            </div>
          </div>
        </section>

        {/* ── Score Card + Dimension Map ─────────────────────────── */}
        <section
          ref={scoreSection.ref}
          className={`bg-warm-stone pt-16 md:pt-24 pb-16 md:pb-24 transition-all duration-700 ${scoreSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Overall Score Card */}
              <div className="bg-off-white border border-black/[0.08] rounded-xl p-8 md:p-10 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                <p
                  className="text-3xl md:text-4xl font-extrabold mb-4"
                  style={{ color: maturityLevel.color }}
                >
                  {maturityLevel.label}
                </p>
                <p className="font-mono text-5xl md:text-6xl font-bold text-on-light mb-1">
                  {animatedTotalScore}{" "}
                  <span className="text-[#777] text-2xl md:text-3xl font-normal">/ 150</span>
                </p>
                <p className="font-mono text-lg text-primary font-semibold mb-6">
                  Level {maturityLevel.level}
                </p>
                <p className="text-[#555] leading-relaxed text-sm md:text-base">
                  {MATURITY_SUMMARIES[maturityLevel.level]}
                </p>
              </div>

              {/* Radar Chart */}
              <div className="bg-off-white border border-black/[0.08] rounded-xl p-6 flex flex-col transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                <span className="font-mono text-xs text-primary uppercase tracking-widest mb-6 block">
                  [DIMENSION MAP]
                </span>
                <div className="flex-1 min-h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                      data={DIMENSION_KEYS.map((key) => ({
                        dimension: SHORT_NAMES[key],
                        score: dimensionScores[key],
                        fullMark: 25,
                      }))}
                      cx="50%"
                      cy="50%"
                      outerRadius="75%"
                    >
                      <PolarGrid stroke="#D4D2CC" />
                      <PolarAngleAxis
                        dataKey="dimension"
                        tick={renderCustomTick}
                      />
                      <PolarRadiusAxis
                        domain={[0, 25]}
                        tick={false}
                        axisLine={false}
                      />
                      <Radar
                        dataKey="score"
                        stroke="#FF5F1F"
                        strokeWidth={2}
                        fill="#FF5F1F"
                        fillOpacity={hoveredDimension ? 0.15 : 0.3}
                        dot={renderCustomDot}
                        animationDuration={800}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Dimension Breakdown Grid ─────────────────────────────── */}
        <section
          ref={dimensionSection.ref}
          className={`pb-12 md:pb-16 transition-all duration-700 ${dimensionSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              Dimension Breakdown
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {priorityOrder.map((key, idx) => (
                <DimensionCard
                  key={key}
                  dimKey={key}
                  score={dimensionScores[key]}
                  pct={(dimensionScores[key] / 25) * 100}
                  rating={dimensionRatings[key]}
                  name={DIMENSION_NAMES[key]}
                  isHovered={hoveredDimension === key}
                  sectionVisible={dimensionSection.isVisible}
                  cardDelay={idx * 120}
                  onHover={setHoveredDimension}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Detailed Recommendations ─────────────────────────────── */}
        <section
          ref={recommendationsSection.ref}
          className={`bg-warm-stone pt-16 md:pt-24 pb-16 md:pb-24 transition-all duration-700 ${recommendationsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-on-light mb-2">
              Detailed Recommendations
            </h2>
            <p className="text-[#555] text-sm mb-10 max-w-2xl">
              Ordered by priority. Address the top items first for maximum impact.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {priorityOrder.map((key, i) => {
                const score = dimensionScores[key];
                const rating = dimensionRatings[key];
                const name = DIMENSION_NAMES[key];
                const rec = getRecommendation(key, rating.rating);

                if (!rec) return null;

                return (
                  <div
                    key={key}
                    className={`bg-off-white border border-black/[0.08] rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 ${
                      recommendationsSection.isVisible ? "opacity-100 animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{
                      animationDelay: recommendationsSection.isVisible ? `${i * 120}ms` : "0ms",
                      animationFillMode: "forwards",
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-primary shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-lg font-bold text-on-light">
                          {name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="font-mono text-sm font-bold text-on-light">
                          {score}/25
                        </span>
                        <span
                          className="text-xs font-semibold uppercase tracking-wider"
                          style={{ color: rating.color }}
                        >
                          {rating.rating}
                        </span>
                      </div>
                    </div>

                    {/* Headline */}
                    <p className="text-xl font-bold text-on-light mb-4">
                      {rec.headline}
                    </p>

                    {/* Detail */}
                    <p className="text-[#555] leading-relaxed mb-6">
                      {rec.detail}
                    </p>

                    {/* What good looks like */}
                    <div
                      className="pl-5 mb-6"
                      style={{ borderLeft: `3px solid ${rating.color}` }}
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#777] mb-2">
                        What good looks like
                      </p>
                      <p className="text-sm text-on-light leading-relaxed">
                        {rec.whatGoodLooksLike}
                      </p>
                    </div>

                    {/* Ask your team callout */}
                    <div className="bg-warm-stone border border-black/[0.08] rounded-lg p-5 transition-colors duration-300 hover:border-primary/30">
                      <span className="font-mono text-xs text-primary uppercase tracking-widest mb-2 block">
                        [ASK YOUR TEAM]
                      </span>
                      <p className="text-on-light text-sm leading-relaxed italic">
                        {rec.internalQuestion}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Priority Action Plan ─────────────────────────────────── */}
        <section
          ref={actionPlanSection.ref}
          className={`pb-16 md:pb-24 transition-all duration-700 ${actionPlanSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <span className="font-mono text-xs text-primary uppercase tracking-widest mb-3 block">
              [NEXT STEPS]
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10">
              Your Prioritised Action Plan.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Quick Wins */}
              <div
                className={`border border-white/[0.08] rounded-xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 ${
                  actionPlanSection.isVisible ? "opacity-100 animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: actionPlanSection.isVisible ? "0ms" : "0ms", animationFillMode: "forwards" }}
              >
                <h3 className="font-display text-base font-bold text-foreground mb-1">
                  Quick Wins
                </h3>
                <p className="text-xs text-muted-foreground font-mono mb-5">0–3 months</p>
                <div className="space-y-4">
                  {actionPlan.quickWins.map((item, i) => (
                    <div key={i} className="transition-all duration-200 hover:translate-x-1">
                      <span
                        className="inline-block text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 mb-1.5 border rounded transition-colors duration-200"
                        style={{
                          color: dimensionRatings[item.dimension].color,
                          borderColor: dimensionRatings[item.dimension].color,
                        }}
                      >
                        {SHORT_NAMES[item.dimension]}
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.action}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Medium-term */}
              <div
                className={`border border-white/[0.08] rounded-xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 ${
                  actionPlanSection.isVisible ? "opacity-100 animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: actionPlanSection.isVisible ? "150ms" : "0ms", animationFillMode: "forwards" }}
              >
                <h3 className="font-display text-base font-bold text-foreground mb-1">
                  Medium-term
                </h3>
                <p className="text-xs text-muted-foreground font-mono mb-5">3–6 months</p>
                <div className="space-y-4">
                  {actionPlan.mediumTerm.map((item, i) => (
                    <div key={i} className="transition-all duration-200 hover:translate-x-1">
                      <span
                        className="inline-block text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 mb-1.5 border rounded transition-colors duration-200"
                        style={{
                          color: dimensionRatings[item.dimension].color,
                          borderColor: dimensionRatings[item.dimension].color,
                        }}
                      >
                        {SHORT_NAMES[item.dimension]}
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.action}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic */}
              <div
                className={`border border-white/[0.08] rounded-xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 ${
                  actionPlanSection.isVisible ? "opacity-100 animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: actionPlanSection.isVisible ? "300ms" : "0ms", animationFillMode: "forwards" }}
              >
                <h3 className="font-display text-base font-bold text-foreground mb-1">
                  Strategic
                </h3>
                <p className="text-xs text-muted-foreground font-mono mb-5">6–12 months</p>
                <div className="space-y-4">
                  {actionPlan.strategic.map((item, i) => (
                    <div key={i} className="transition-all duration-200 hover:translate-x-1">
                      <span
                        className="inline-block text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 mb-1.5 border rounded transition-colors duration-200"
                        style={{
                          color: dimensionRatings[item.dimension].color,
                          borderColor: dimensionRatings[item.dimension].color,
                        }}
                      >
                        {SHORT_NAMES[item.dimension]}
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.action}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Share Buttons ────────────────────────────────────────── */}
        <section
          ref={shareSection.ref}
          className={`pb-10 transition-all duration-700 ${shareSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto h-10 px-5 text-sm font-semibold border-border text-foreground hover:bg-secondary gap-2"
                  onClick={handleCopyLink}
                >
                  <LinkIcon className="h-4 w-4" />
                  Share Your Results
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto h-10 px-5 text-sm font-semibold border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2]/10 gap-2"
                  onClick={handleLinkedInShare}
                >
                  <Linkedin className="h-4 w-4" />
                  Share on LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTAs ─────────────────────────────────────────────────── */}
        <section
          ref={ctaSection.ref}
          className={`pb-20 md:pb-32 transition-all duration-700 ${ctaSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                <Button
                  className="w-full sm:w-auto h-12 px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={async () => {
                    trackEvent("pdf_downloaded", { assessment_id: currentAssessmentId });
                    try {
                      await downloadDiagnosticPDF({
                        scoring,
                        organisation,
                        assessmentDate: finalData!.assessmentDate,
                      });
                    } catch (err) {
                      console.error("PDF generation failed:", err);
                      toast({ title: "PDF generation failed", description: "Please try again.", variant: "destructive" });
                    }
                  }}
                >
                  Download PDF Report
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto h-12 px-8 text-base font-semibold border-border text-foreground hover:bg-secondary"
                  disabled={consultationRequested || consultationLoading}
                  onClick={handleConsultationRequest}
                >
                  {consultationLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                  {consultationRequested ? "Consultation Requested ✓" : "Request Consultation"}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
                Walk through your results with Ben Gallagher and identify your highest-leverage next steps. No obligation.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <Link to="/insights/eradicating-enterprise-data-glue" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
                  Explore the methodology →
                </Link>
                <Link to="/services" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
                  See how I work →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer hideCTA />
    </div>
  );
};

export default DiagnosticResults;
