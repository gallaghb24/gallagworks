import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  pdf,
  Svg,
  Polygon,
  Circle,
  Line,
  G,
} from "@react-pdf/renderer";
import logoSrc from "@/assets/gallag-wordmark.png";

import type { ScoringResult, DimensionKey } from "@/lib/scoring";
import { getRecommendation } from "@/data/recommendations";
import { dimensions } from "@/data/questions";

// ── Constants ──────────────────────────────────────────────────────────

const ORANGE = "#FF5F1F";
const DARK = "#121212";
const MID = "#2F3133";
const LIGHT_TEXT = "#F5F5F5";
const MUTED = "#999999";
const BORDER = "#333333";
const PAGE_BG = "#0F0F0F";

const DIMENSION_LABELS: Record<DimensionKey, string> = {
  data_foundation: "Data Foundation",
  process_maturity: "Process Maturity",
  governance_risk: "Governance & Risk",
  skills_culture: "Skills & Culture",
  tooling_infrastructure: "Tooling & Infrastructure",
  strategic_clarity: "Strategic Clarity",
};

const MATURITY_SUMMARIES: Record<number, string> = {
  1: "Your organisation has significant groundwork to do before AI can deliver reliable value. The priority is to address the data and process layers before investing in AI tooling.",
  2: "You have some of the building blocks in place, but critical gaps remain. Focus on closing the gaps in your weakest dimensions first.",
  3: "Your organisation is in a reasonable position to begin targeted AI adoption. Start with high-confidence use cases where the data is clean and the process is understood.",
  4: "You are well-positioned for AI adoption with strong foundations in most areas. Focus on scaling what works and building internal capability.",
  5: "Your organisation has the infrastructure, skills, and strategic clarity to drive AI at scale. The challenge now is sustaining momentum and ensuring continued innovation.",
};

// ── Styles ─────────────────────────────────────────────────────────────

const s = StyleSheet.create({
  page: {
    backgroundColor: PAGE_BG,
    padding: 48,
    fontFamily: "Helvetica",
    color: LIGHT_TEXT,
  },
  // Cover
  coverPage: {
    backgroundColor: PAGE_BG,
    padding: 48,
    fontFamily: "Helvetica",
    color: LIGHT_TEXT,
    justifyContent: "space-between",
  },
  coverBrand: {
    fontFamily: "Helvetica-Bold",
    fontSize: 14,
    color: ORANGE,
    letterSpacing: 2,
    marginBottom: 4,
  },
  coverBrandSub: {
    fontFamily: "Courier",
    fontSize: 8,
    color: MUTED,
    letterSpacing: 3,
    textTransform: "uppercase",
  },
  coverTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 32,
    color: LIGHT_TEXT,
    marginBottom: 8,
    lineHeight: 1.2,
  },
  coverOrg: {
    fontFamily: "Helvetica-Bold",
    fontSize: 18,
    color: ORANGE,
    marginBottom: 24,
  },
  coverMeta: {
    fontFamily: "Courier",
    fontSize: 9,
    color: MUTED,
  },
  // Section headers
  sectionLabel: {
    fontFamily: "Courier",
    fontSize: 8,
    color: ORANGE,
    letterSpacing: 3,
    textTransform: "uppercase",
    marginBottom: 12,
  },
  h2: {
    fontFamily: "Helvetica-Bold",
    fontSize: 18,
    color: LIGHT_TEXT,
    marginBottom: 8,
  },
  h3: {
    fontFamily: "Helvetica-Bold",
    fontSize: 13,
    color: LIGHT_TEXT,
    marginBottom: 6,
  },
  body: {
    fontSize: 10,
    color: "#CCCCCC",
    lineHeight: 1.6,
    marginBottom: 10,
  },
  bodySmall: {
    fontSize: 9,
    color: MUTED,
    lineHeight: 1.5,
  },
  // Score display
  scoreRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
    paddingVertical: 8,
  },
  scoreLabel: {
    fontFamily: "Helvetica",
    fontSize: 10,
    color: LIGHT_TEXT,
    width: "50%",
  },
  scoreValue: {
    fontFamily: "Courier",
    fontSize: 10,
    color: ORANGE,
    width: "15%",
    textAlign: "right",
  },
  scoreRating: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    width: "35%",
    textAlign: "right",
  },
  // Dimension detail
  dimCard: {
    borderWidth: 1,
    borderColor: BORDER,
    padding: 20,
    marginBottom: 16,
  },
  dimHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
    paddingBottom: 8,
  },
  dimName: {
    fontFamily: "Helvetica-Bold",
    fontSize: 13,
    color: LIGHT_TEXT,
  },
  dimScore: {
    fontFamily: "Courier",
    fontSize: 12,
    color: ORANGE,
  },
  calloutBox: {
    backgroundColor: MID,
    padding: 12,
    marginTop: 10,
  },
  calloutLabel: {
    fontFamily: "Courier",
    fontSize: 7,
    color: ORANGE,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  calloutText: {
    fontSize: 9,
    color: "#CCCCCC",
    fontStyle: "italic",
    lineHeight: 1.5,
  },
  // Action plan
  actionCategory: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
    color: ORANGE,
    marginBottom: 8,
    marginTop: 14,
  },
  actionItem: {
    flexDirection: "row",
    marginBottom: 6,
    paddingLeft: 4,
  },
  actionBullet: {
    fontFamily: "Courier",
    fontSize: 9,
    color: ORANGE,
    marginRight: 8,
    marginTop: 1,
  },
  actionText: {
    fontSize: 9,
    color: "#CCCCCC",
    lineHeight: 1.5,
    flex: 1,
  },
  actionDim: {
    fontFamily: "Courier",
    fontSize: 7,
    color: MUTED,
    marginTop: 2,
  },
  // Footer
  pageFooter: {
    position: "absolute",
    bottom: 24,
    left: 48,
    right: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: BORDER,
    paddingTop: 8,
  },
  footerText: {
    fontFamily: "Courier",
    fontSize: 7,
    color: MUTED,
  },
  // Divider
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
    marginVertical: 16,
  },
  // CTA page
  ctaTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 22,
    color: LIGHT_TEXT,
    marginBottom: 12,
  },
  ctaHighlight: {
    color: ORANGE,
  },
  ctaBody: {
    fontSize: 11,
    color: "#CCCCCC",
    lineHeight: 1.7,
    marginBottom: 20,
  },
  ctaBox: {
    borderWidth: 2,
    borderColor: ORANGE,
    padding: 20,
    marginTop: 16,
  },
  ctaBoxTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 13,
    color: ORANGE,
    marginBottom: 8,
  },
  ctaBoxBody: {
    fontSize: 10,
    color: "#CCCCCC",
    lineHeight: 1.6,
  },
  ctaUrl: {
    fontFamily: "Courier",
    fontSize: 9,
    color: ORANGE,
    marginTop: 12,
  },
  barContainer: {
    height: 6,
    backgroundColor: BORDER,
    marginTop: 4,
  },
  barFill: {
    height: 6,
    backgroundColor: ORANGE,
  },
});

// ── Helpers ────────────────────────────────────────────────────────────

function getRatingColor(rating: string): string {
  switch (rating) {
    case "Critical Gap": return "#EF4444";
    case "Needs Attention": return "#F59E0B";
    case "Solid Foundation": return "#22C55E";
    case "Strength": return ORANGE;
    default: return MUTED;
  }
}

function generateActionPlan(
  priorityOrder: DimensionKey[],
  dimensionRatings: Record<DimensionKey, { rating: string; color: string }>
) {
  const actionsByDimension: Record<string, Record<string, { quick: string; medium: string; strat: string }>> = {
    data_foundation: {
      "Critical Gap": { quick: "Audit your top 5 data-intensive workflows and map where manual handoffs occur", medium: "Implement standardised input templates and automated validation for critical data sources", strat: "Build automated data pipelines with real-time quality monitoring and alerting" },
      "Needs Attention": { quick: "Identify and document your three most error-prone data handoff points", medium: "Implement automated validation rules for your highest-volume data inputs", strat: "Create data contracts between teams defining format, schema, and delivery expectations" },
      "Solid Foundation": { quick: "Set up automated quality alerts for your most critical data pipeline", medium: "Implement real-time data quality dashboards accessible to all stakeholders", strat: "Establish data contracts and automated error detection across all data flows" },
      "Strength": { quick: "Identify one advanced AI use case your clean data layer can support immediately", medium: "Build predictive analytics models leveraging your strong data foundation", strat: "Use your data maturity as a competitive differentiator in client conversations" },
    },
    process_maturity: {
      "Critical Gap": { quick: "Map your three most critical operational workflows as they actually run today", medium: "Document decision points and exception handling for your core processes", strat: "Build an operational process library with version control and regular review cycles" },
      "Needs Attention": { quick: "Compare documented processes against how work actually flows — identify the gaps", medium: "Create exception handling paths and escalation criteria for your top workflows", strat: "Implement automated triage separating routine from complex work" },
      "Solid Foundation": { quick: "Identify the 80/20 split in your highest-volume workflow", medium: "Build automated routing for the predictable majority in your top process", strat: "Create decision inboxes for genuine judgement calls with measurable processing times" },
      "Strength": { quick: "Select your highest-volume process for AI augmentation", medium: "Implement AI-assisted automation for the selected process", strat: "Scale process automation across the business using early wins as the model" },
    },
    governance_risk: {
      "Critical Gap": { quick: "Create and communicate an approved AI tools list with basic data handling rules", medium: "Assign governance ownership and implement review checkpoints", strat: "Build a comprehensive AI governance framework with regular compliance auditing" },
      "Needs Attention": { quick: "Formalise your approved tool list with clear data handling boundaries", medium: "Assign a named individual to own AI governance and establish meeting cadence", strat: "Implement risk-tiered governance with different review processes by use case sensitivity" },
      "Solid Foundation": { quick: "Review your governance framework to ensure it enables low-risk use cases", medium: "Implement lightweight fast-track approval for low-risk internal AI use cases", strat: "Build proportionate governance that scales with your AI adoption ambitions" },
      "Strength": { quick: "Document your governance framework as a client-facing differentiator", medium: "Create client-facing materials demonstrating your AI governance maturity", strat: "Iterate governance as AI regulations evolve" },
    },
    skills_culture: {
      "Critical Gap": { quick: "Identify three willing team members and run a small AI pilot", medium: "Create an internal AI Champions programme to formalise early learnings", strat: "Build role-specific AI skill paths with dedicated learning time" },
      "Needs Attention": { quick: "Capture what your early AI adopters have learned and share it", medium: "Launch a structured AI Champions programme with regular showcases", strat: "Develop role-specific AI training that moves beyond general awareness" },
      "Solid Foundation": { quick: "Shift from general AI awareness training to role-specific skill building", medium: "Create role-specific AI learning paths for your three largest teams", strat: "Build a continuous learning culture with dedicated innovation time" },
      "Strength": { quick: "Identify how to retain and reward your AI-literate talent", medium: "Ensure AI adoption remains collaborative and psychologically safe", strat: "Build AI capability into your hiring and career development frameworks" },
    },
    tooling_infrastructure: {
      "Critical Gap": { quick: "Identify three integration points where AI would need to connect to your systems", medium: "Implement API wrappers for your most critical legacy system integrations", strat: "Develop a technology modernisation roadmap focused on AI-readiness" },
      "Needs Attention": { quick: "Assess middleware platforms that can bridge your existing systems to AI tooling", medium: "Implement integration pathways for your top two AI use cases", strat: "Build documented APIs for core systems" },
      "Solid Foundation": { quick: "Review data access policies for AI tools", medium: "Assess whether your infrastructure can handle AI workload requirements", strat: "Build elastic infrastructure that scales with AI workload demands" },
      "Strength": { quick: "Look for AI tools that can leverage your strong infrastructure directly", medium: "Build internal capability for rapid prototyping and deployment of AI solutions", strat: "Create reusable AI deployment patterns and templates" },
    },
    strategic_clarity: {
      "Critical Gap": { quick: "Define the three biggest operational pain points AI could address", medium: "Create a focused AI pilot targeting one high-impact, low-risk use case", strat: "Develop a 12-month AI strategy with clear success metrics" },
      "Needs Attention": { quick: "Assess whether current AI experiments have clear success metrics", medium: "Build a prioritised use-case pipeline ranked by impact and feasibility", strat: "Develop a board-level AI strategy with quarterly review cycles" },
      "Solid Foundation": { quick: "Identify the next three highest-value AI use cases from your pipeline", medium: "Build ROI measurement frameworks for your active AI initiatives", strat: "Create an AI centre of excellence to scale proven use cases" },
      "Strength": { quick: "Reassess your AI strategy against the latest technology developments", medium: "Ensure your strategy remains adaptive and regularly re-evaluated", strat: "Use your strategic clarity to focus on highest-value initiatives" },
    },
  };

  const quickWins: { action: string; dimension: DimensionKey }[] = [];
  const mediumTerm: { action: string; dimension: DimensionKey }[] = [];
  const strategic: { action: string; dimension: DimensionKey }[] = [];

  for (const key of priorityOrder) {
    const rating = dimensionRatings[key].rating;
    const actions = actionsByDimension[key]?.[rating];
    if (!actions) continue;
    quickWins.push({ action: actions.quick, dimension: key });
    mediumTerm.push({ action: actions.medium, dimension: key });
    strategic.push({ action: actions.strat, dimension: key });
  }

  return { quickWins, mediumTerm, strategic };
}

// ── PDF Document ───────────────────────────────────────────────────────

interface PDFProps {
  scoring: ScoringResult;
  organisation: string;
  assessmentDate: string;
}

const PageFooter = ({ pageNum }: { pageNum: number }) => (
  <View style={s.pageFooter} fixed>
    <Text style={s.footerText}>GALLAG WORKS — AI READINESS DIAGNOSTIC</Text>
    <Text style={s.footerText}>{String(pageNum).padStart(2, "0")}</Text>
  </View>
);

const DiagnosticPDFDocument = ({ scoring, organisation, assessmentDate }: PDFProps) => {
  const { dimensionScores, totalScore, maturityLevel, dimensionRatings, priorityOrder } = scoring;
  const actionPlan = generateActionPlan(priorityOrder, dimensionRatings);
  const dateStr = new Date(assessmentDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const dimKeys: DimensionKey[] = [
    "data_foundation", "process_maturity", "governance_risk",
    "skills_culture", "tooling_infrastructure", "strategic_clarity",
  ];

  return (
    <Document>
      {/* Page 1: Cover */}
      <Page size="A4" style={s.coverPage}>
        <View>
          <Image src={logoSrc} style={{ width: 160, marginBottom: 4 }} />
        </View>
        <View>
          <Text style={s.coverTitle}>AI Readiness{"\n"}Diagnostic Report</Text>
          <Text style={s.coverOrg}>{organisation}</Text>
          <View style={s.hr} />
          <Text style={s.coverMeta}>Date: {dateStr}</Text>
          <Text style={s.coverMeta}>Overall Score: {totalScore}/150</Text>
          <Text style={s.coverMeta}>Maturity Level: {maturityLevel.label}</Text>
        </View>
        <View>
          <Text style={s.bodySmall}>
            This report summarises the results of your AI Readiness Diagnostic, evaluating your organisation across six critical operational dimensions.
          </Text>
        </View>
      </Page>

      {/* Page 2: Executive Summary */}
      <Page size="A4" style={s.page}>
        <Text style={s.sectionLabel}>[EXECUTIVE SUMMARY]</Text>
        <Text style={s.h2}>Maturity Level {maturityLevel.level}: {maturityLevel.label}</Text>
        <Text style={s.body}>
          {MATURITY_SUMMARIES[maturityLevel.level]}
        </Text>

        <View style={s.hr} />

        <Text style={s.h3}>Dimension Scores</Text>
        {dimKeys.map((key) => {
          const score = dimensionScores[key];
          const rating = dimensionRatings[key];
          return (
            <View key={key} style={s.scoreRow}>
              <Text style={s.scoreLabel}>{DIMENSION_LABELS[key]}</Text>
              <Text style={s.scoreValue}>{score}/25</Text>
              <Text style={[s.scoreRating, { color: getRatingColor(rating.rating) }]}>
                {rating.rating}
              </Text>
            </View>
          );
        })}

        <View style={{ marginTop: 16 }}>
          <View style={s.scoreRow}>
            <Text style={[s.scoreLabel, { fontFamily: "Helvetica-Bold" }]}>Total Score</Text>
            <Text style={[s.scoreValue, { fontFamily: "Helvetica-Bold", fontSize: 12 }]}>{totalScore}/150</Text>
            <Text style={s.scoreRating} />
          </View>
        </View>

        {/* Dimension Map - Radar Chart */}
        <View style={{ marginTop: 24, alignItems: "center" }}>
          <Text style={[s.sectionLabel, { alignSelf: "flex-start" }]}>[DIMENSION MAP]</Text>
          <View style={{ width: 340, height: 300, marginTop: 8 }}>
            <RadarChartSVG dimKeys={dimKeys} dimensionScores={dimensionScores} />
          </View>
        </View>

        <PageFooter pageNum={2} />
      </Page>

      {/* Pages 3-8: Dimension Deep Dives */}
      {dimKeys.map((key, idx) => {
        const score = dimensionScores[key];
        const rating = dimensionRatings[key];
        const rec = getRecommendation(key, rating.rating);
        const dim = dimensions.find((d) => d.id === key);

        return (
          <Page key={key} size="A4" style={s.page}>
            <Text style={s.sectionLabel}>[DIMENSION {idx + 1} OF 6]</Text>
            <View style={s.dimCard}>
              <View style={s.dimHeader}>
                <Text style={s.dimName}>{DIMENSION_LABELS[key]}</Text>
                <Text style={s.dimScore}>{score}/25</Text>
              </View>
              <Text style={[s.h3, { color: getRatingColor(rating.rating), marginBottom: 12 }]}>
                {rating.rating}
              </Text>

              {/* Bar */}
              <View style={s.barContainer}>
                <View style={[s.barFill, { width: `${(score / 25) * 100}%` }]} />
              </View>

              {rec && (
                <View style={{ marginTop: 16 }}>
                  <Text style={[s.h3, { marginTop: 8 }]}>{rec.headline}</Text>
                  <Text style={s.body}>{rec.detail}</Text>

                  <Text style={[s.sectionLabel, { marginTop: 12 }]}>[WHAT GOOD LOOKS LIKE]</Text>
                  <Text style={s.body}>{rec.whatGoodLooksLike}</Text>

                  <View style={s.calloutBox}>
                    <Text style={s.calloutLabel}>[ASK YOUR TEAM]</Text>
                    <Text style={s.calloutText}>{rec.internalQuestion}</Text>
                  </View>
                </View>
              )}
            </View>
            <PageFooter pageNum={idx + 3} />
          </Page>
        );
      })}

      {/* Page 9: Priority Action Plan */}
      <Page size="A4" style={s.page}>
        <Text style={s.sectionLabel}>[PRIORITY ACTION PLAN]</Text>
        <Text style={s.h2}>Recommended Next Steps</Text>
        <Text style={s.body}>
          Based on your dimension scores, here are prioritised actions across three time horizons.
        </Text>

        <Text style={s.actionCategory}>Quick Wins (Next 2 Weeks)</Text>
        {actionPlan.quickWins.map((item, i) => (
          <View key={`q-${i}`} style={s.actionItem}>
            <Text style={s.actionBullet}>→</Text>
            <View style={{ flex: 1 }}>
              <Text style={s.actionText}>{item.action}</Text>
              <Text style={s.actionDim}>{DIMENSION_LABELS[item.dimension]}</Text>
            </View>
          </View>
        ))}

        <Text style={s.actionCategory}>Medium Term (1-3 Months)</Text>
        {actionPlan.mediumTerm.map((item, i) => (
          <View key={`m-${i}`} style={s.actionItem}>
            <Text style={s.actionBullet}>→</Text>
            <View style={{ flex: 1 }}>
              <Text style={s.actionText}>{item.action}</Text>
              <Text style={s.actionDim}>{DIMENSION_LABELS[item.dimension]}</Text>
            </View>
          </View>
        ))}

        <Text style={s.actionCategory}>Strategic (3-12 Months)</Text>
        {actionPlan.strategic.map((item, i) => (
          <View key={`s-${i}`} style={s.actionItem}>
            <Text style={s.actionBullet}>→</Text>
            <View style={{ flex: 1 }}>
              <Text style={s.actionText}>{item.action}</Text>
              <Text style={s.actionDim}>{DIMENSION_LABELS[item.dimension]}</Text>
            </View>
          </View>
        ))}

        <PageFooter pageNum={9} />
      </Page>

      {/* Page 10: About & CTA */}
      <Page size="A4" style={s.page}>
        <Text style={s.sectionLabel}>[NEXT STEPS]</Text>
        <Text style={s.ctaTitle}>
          Stop the leakage.{"\n"}
          <Text style={s.ctaHighlight}>Start the Engineering.</Text>
        </Text>
        <Text style={s.ctaBody}>
          This diagnostic is the starting point. The real value comes from translating these findings into a targeted action plan — one that addresses your specific operational context, team dynamics, and commercial pressures.
        </Text>

        <View style={s.ctaBox}>
          <Text style={s.ctaBoxTitle}>Request a Consultation</Text>
          <Text style={s.ctaBoxBody}>
            Walk through your results with Ben Gallagher, Principal at Gallag Works, and identify your highest-leverage next steps. No obligation, no sales pitch — just a direct conversation about what would actually move the needle for {organisation}.
          </Text>
          <Text style={s.ctaUrl}>hello@gallag.works</Text>
          <Text style={s.ctaUrl}>gallagworks.com/contact</Text>
        </View>

        <View style={[s.hr, { marginTop: 32 }]} />

        <Text style={s.sectionLabel}>[ABOUT GALLAG WORKS]</Text>
        <Text style={s.body}>
          Gallag Works is a principal-led operational engineering practice. We eradicate 'Data Glue' — the manual re-keying, spreadsheet handoffs, and tacit knowledge that silently consume capacity and margin. Our engagements are structured to deliver measurable outcomes: hours reclaimed, errors eliminated, throughput increased.
        </Text>
        <Text style={s.bodySmall}>
          © {new Date().getFullYear()} Gallag Works Ltd. Registered in England & Wales: 17033965.
        </Text>

        <PageFooter pageNum={10} />
      </Page>
    </Document>
  );
};

// ── Download function ──────────────────────────────────────────────────

export async function downloadDiagnosticPDF(props: PDFProps): Promise<void> {
  const blob = await pdf(<DiagnosticPDFDocument {...props} />).toBlob();
  const orgSlug = props.organisation.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const filename = `ai-readiness-diagnostic-${orgSlug}.pdf`;
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export default DiagnosticPDFDocument;
