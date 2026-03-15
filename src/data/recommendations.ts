import type { DimensionKey } from "@/lib/scoring";

export type RatingLevel = "critical_gap" | "needs_attention" | "solid_foundation" | "strength";

export interface Recommendation {
  dimension: DimensionKey;
  ratingLevel: RatingLevel;
  headline: string;
  detail: string;
  whatGoodLooksLike: string;
  internalQuestion: string;
}

const RATING_MAP: Record<string, RatingLevel> = {
  "Critical Gap": "critical_gap",
  "Needs Attention": "needs_attention",
  "Solid Foundation": "solid_foundation",
  "Strength": "strength",
};

export const recommendations: Recommendation[] = [
  // ── Data Foundation ─────────────────────────────────────────────────
  {
    dimension: "data_foundation",
    ratingLevel: "critical_gap",
    headline: "Your data is held together by manual effort.",
    detail: "Your data infrastructure relies on what I call Human Middleware - manual re-keying, spreadsheet handoffs, and tacit knowledge about where things live. Before investing in AI tooling, you need a systematic audit of how data actually flows through your organisation, where it breaks down, and what it costs you. This is the highest-leverage investment you can make right now, because every AI initiative you attempt will inherit these data quality problems.",
    whatGoodLooksLike: "Organisations with strong data foundations can produce any operational report within an hour, onboard new team members without data-related delays, and have automated validation preventing bad data from entering their systems.",
    internalQuestion: "If your three most experienced people left tomorrow, how much operational data would become inaccessible?",
  },
  {
    dimension: "data_foundation",
    ratingLevel: "needs_attention",
    headline: "You have foundations but critical gaps remain.",
    detail: "Some data flows are working but you are still spending too much time cleaning, reformatting, and reconciling. The risk is that AI tools will amplify these inconsistencies rather than resolve them. Prioritise mapping your top five data-intensive workflows end to end, identifying where manual handoffs create errors or delays, and systematising those first.",
    whatGoodLooksLike: "Organisations at the next level have standardised input templates, automated validation rules, and documented data flows that do not depend on individual knowledge.",
    internalQuestion: "What percentage of your team's time is spent preparing data versus actually using it to make decisions?",
  },
  {
    dimension: "data_foundation",
    ratingLevel: "solid_foundation",
    headline: "Your data infrastructure can support AI adoption.",
    detail: "You have good foundations in place. The focus now should be on closing the remaining manual gaps and ensuring your data quality can sustain AI at scale. Consider implementing automated quality monitoring and alerting for your critical data pipelines - the kind that catches problems before they reach a client or a report.",
    whatGoodLooksLike: "Leading organisations have real-time data quality dashboards, automated error detection, and data contracts between teams that define format, schema, and delivery expectations.",
    internalQuestion: "Where are the last remaining manual data handoffs, and what would it take to automate them?",
  },
  {
    dimension: "data_foundation",
    ratingLevel: "strength",
    headline: "Data is a genuine competitive advantage for you.",
    detail: "Your data infrastructure is strong. The opportunity now is to leverage this as a foundation for advanced AI applications - predictive analytics, automated decision support, and intelligent process automation. Your clean data layer means AI initiatives will deliver value faster and more reliably than competitors who are still fighting data quality issues.",
    whatGoodLooksLike: "You are already there. Maintain your standards, invest in continuous improvement, and use your data advantage to move faster than competitors on AI adoption.",
    internalQuestion: "How can you use your data maturity as a competitive differentiator in your market?",
  },

  // ── Process Maturity ────────────────────────────────────────────────
  {
    dimension: "process_maturity",
    ratingLevel: "critical_gap",
    headline: "Your processes live in people's heads.",
    detail: "Undocumented, inconsistent processes are the single biggest barrier to AI adoption. If your team cannot explain how a workflow runs in a way that a new hire could follow, AI cannot automate it reliably. The first step is not technology - it is an Operational X-Ray: mapping your core workflows, identifying where they depend on individual judgement versus repeatable logic, and documenting the decision points.",
    whatGoodLooksLike: "Organisations with mature processes can onboard new team members in days, identify workflow failures in real time, and clearly distinguish between predictable work and genuine exceptions.",
    internalQuestion: "How long would it take to onboard someone into your most critical operational process?",
  },
  {
    dimension: "process_maturity",
    ratingLevel: "needs_attention",
    headline: "You have process awareness but not process discipline.",
    detail: "Some documentation exists but it is inconsistent, often outdated, and the real process lives in experienced people's heads. The gap between 'how we think it works' and 'how it actually works' is where AI projects fail. Invest in honest process mapping - not the idealised version, but the real one including the workarounds, the exceptions, and the things people do that are not in any document.",
    whatGoodLooksLike: "Organisations at the next level have version-controlled process documentation, defined exception handling paths, and regular process review cycles.",
    internalQuestion: "If you mapped how work actually flows versus how you think it flows, how different would those maps look?",
  },
  {
    dimension: "process_maturity",
    ratingLevel: "solid_foundation",
    headline: "Your processes are ready for targeted automation.",
    detail: "You have good documentation and reasonable consistency. The opportunity is to identify the 80/20 in your workflows - the predictable majority that can be automated versus the complex exceptions that need human judgement. This distinction is critical for AI implementation: automate the predictable, flag the exceptions, and build decision inboxes for the genuine judgement calls.",
    whatGoodLooksLike: "Leading organisations have automated triage separating routine from complex work, with clear escalation paths and measurable processing times for each category.",
    internalQuestion: "Which of your workflows has the highest volume of predictable, repeatable tasks?",
  },
  {
    dimension: "process_maturity",
    ratingLevel: "strength",
    headline: "Your operational discipline is a platform for AI.",
    detail: "Well-documented, consistently executed processes are the foundation that most organisations lack. You can move directly to automation and AI-augmentation of your workflows with confidence that the outputs will be reliable. Focus on the highest-volume, highest-value processes first and use early wins to build momentum.",
    whatGoodLooksLike: "You are well-positioned. Focus on continuous process improvement and ensure your documentation evolves alongside your workflows.",
    internalQuestion: "Where will process automation free up the most senior talent for higher-value work?",
  },

  // ── Governance & Risk ───────────────────────────────────────────────
  {
    dimension: "governance_risk",
    ratingLevel: "critical_gap",
    headline: "You have no guardrails around AI usage.",
    detail: "Without governance, you are exposed. Employees may already be entering sensitive data into AI tools you do not know about, generating client-facing content without review, or making commitments based on AI outputs without verification. The immediate priority is not a comprehensive policy - it is basic guardrails: which tools are approved, what data can be shared, and who reviews AI-generated outputs before they reach a client.",
    whatGoodLooksLike: "Organisations with effective AI governance have a clear policy, designated ownership, data classification rules, and review processes that enable adoption rather than blocking it.",
    internalQuestion: "Could you confidently tell a client today that their data has never been entered into an AI tool by your team?",
  },
  {
    dimension: "governance_risk",
    ratingLevel: "needs_attention",
    headline: "You have awareness but not enforcement.",
    detail: "Some guidance exists but compliance is on the honour system. The gap between policy and practice is where risk lives. Focus on three things: formalising your approved tool list with clear data handling boundaries, assigning governance ownership to a named individual or group, and implementing at least one review checkpoint for AI-assisted outputs in client-facing workflows.",
    whatGoodLooksLike: "Organisations at the next level have a cross-functional governance forum, defined risk tiers for different AI use cases, and regular auditing of compliance.",
    internalQuestion: "Who in your organisation would a team member go to if they were unsure whether a particular AI use case was appropriate?",
  },
  {
    dimension: "governance_risk",
    ratingLevel: "solid_foundation",
    headline: "Your governance can support scaling AI adoption.",
    detail: "You have practical guardrails in place. As you scale AI adoption, ensure your governance evolves alongside it. The risk at this stage is that governance becomes a bottleneck rather than an enabler. Build governance that is proportionate to risk - lightweight for low-risk internal use cases, rigorous for client-facing or data-sensitive applications.",
    whatGoodLooksLike: "Leading organisations have risk-tiered governance where low-risk use cases can proceed quickly while high-risk applications go through structured review.",
    internalQuestion: "Is your governance framework enabling or slowing down AI adoption?",
  },
  {
    dimension: "governance_risk",
    ratingLevel: "strength",
    headline: "Governance is an enabler, not a barrier.",
    detail: "Strong governance gives you a competitive advantage. While others are paralysed by uncertainty about what they can and cannot do with AI, your clear frameworks enable confident adoption. Use this as a selling point with clients and partners who need assurance about how AI is being used in their supply chain.",
    whatGoodLooksLike: "You are in a strong position. Keep iterating as regulations evolve and use your governance maturity as a differentiator.",
    internalQuestion: "How can you communicate your AI governance maturity to clients as a competitive advantage?",
  },

  // ── Skills & Culture ────────────────────────────────────────────────
  {
    dimension: "skills_culture",
    ratingLevel: "critical_gap",
    headline: "Your people are not ready for AI.",
    detail: "Fear, scepticism, or simple unawareness means AI initiatives will face resistance or indifference. The solution is not mandatory training - it is exposure. People need to see AI solving problems they recognise before they believe it is relevant to them. Start with small, visible wins in willing teams and let success spread organically. Top-down mandates without bottom-up experience create compliance without adoption.",
    whatGoodLooksLike: "Organisations with strong AI cultures have visible internal champions, regular showcases of what is working, and leaders who use AI themselves rather than just advocating for it.",
    internalQuestion: "Could your most sceptical team leader name one specific way AI would improve their daily work?",
  },
  {
    dimension: "skills_culture",
    ratingLevel: "needs_attention",
    headline: "You have pockets of enthusiasm but not widespread capability.",
    detail: "A few individuals are experimenting but their learnings are not being captured or scaled. The risk is that these early adopters either burn out or leave, taking their knowledge with them. Formalise what they are doing: create AI Champions programmes, internal showcases, or communities of practice that turn individual experiments into shared capability.",
    whatGoodLooksLike: "Organisations at the next level have structured champion programmes, regular internal AI showcases, and leadership that actively participates in AI adoption rather than just sponsoring it.",
    internalQuestion: "Who are the three people in your organisation who are furthest ahead with AI, and does anyone else know what they have learned?",
  },
  {
    dimension: "skills_culture",
    ratingLevel: "solid_foundation",
    headline: "Your culture can absorb AI adoption.",
    detail: "You have good engagement and some structure around learning. The focus now should be on deepening capability rather than broadening awareness. Move from general AI literacy to role-specific skill building - what does AI mean for your finance team versus your creative team versus your operations team? Generic training has diminishing returns; specific, applicable training compounds.",
    whatGoodLooksLike: "Leading organisations have role-specific AI skill paths, dedicated learning time, and internal communities that share practical examples regularly.",
    internalQuestion: "Is your training helping people understand AI in general, or helping them use AI in their specific role?",
  },
  {
    dimension: "skills_culture",
    ratingLevel: "strength",
    headline: "Your people are your biggest AI asset.",
    detail: "A culture that embraces continuous improvement and new ways of working is the hardest thing to build and the most valuable asset you have. Protect it. Ensure that AI adoption continues to be collaborative rather than imposed, and invest in keeping your early adopters engaged as you scale.",
    whatGoodLooksLike: "You are well ahead. Focus on retaining your AI-literate talent, maintaining psychological safety around experimentation, and ensuring your culture scales as AI adoption grows.",
    internalQuestion: "How are you retaining and rewarding the people who are driving AI adoption from within?",
  },

  // ── Tooling & Infrastructure ────────────────────────────────────────
  {
    dimension: "tooling_infrastructure",
    ratingLevel: "critical_gap",
    headline: "Your technology will fight AI adoption.",
    detail: "Fragmented, legacy systems with limited integration capabilities mean that even simple AI use cases will require significant custom development. The pragmatic approach is not to rebuild everything - it is to identify the specific integration points where AI would connect to your systems and address those first. Sometimes a simple API wrapper around a legacy system is enough to unlock AI capability.",
    whatGoodLooksLike: "Organisations with AI-ready infrastructure have cloud-based core systems with APIs, centralised data storage, and an IT team that can support integration projects.",
    internalQuestion: "If you wanted to connect an AI tool to your three most important systems, what would break?",
  },
  {
    dimension: "tooling_infrastructure",
    ratingLevel: "needs_attention",
    headline: "Your systems can work but will need help.",
    detail: "Your technology is functional but integration is challenging. The priority is not replacing everything but creating integration pathways for your highest-priority AI use cases. Consider middleware or integration platforms that can bridge the gap between your existing systems and AI tooling without requiring a full infrastructure rebuild.",
    whatGoodLooksLike: "Organisations at the next level have integration middleware, documented APIs for core systems, and an IT team with automation experience.",
    internalQuestion: "What is the fastest path to connecting your most important data source to an AI tool?",
  },
  {
    dimension: "tooling_infrastructure",
    ratingLevel: "solid_foundation",
    headline: "Your tech stack can support AI adoption.",
    detail: "You have modern systems with reasonable integration capabilities. Focus on ensuring your data layer is AI-ready: can AI tools access the data they need with appropriate security controls? Consider whether your current hosting and infrastructure can handle the additional processing requirements that AI workloads introduce.",
    whatGoodLooksLike: "Leading organisations have well-documented APIs, automated deployment pipelines, and infrastructure that scales elastically with AI workload demands.",
    internalQuestion: "Do you have the right data access policies to support AI tools without compromising security?",
  },
  {
    dimension: "tooling_infrastructure",
    ratingLevel: "strength",
    headline: "Your infrastructure is a platform for innovation.",
    detail: "Advanced technology infrastructure gives you the ability to adopt AI tools quickly and at scale. The opportunity is to use this advantage to move faster than competitors - experimenting with new AI capabilities, building custom solutions, and scaling what works. Ensure your infrastructure investment continues to keep pace with the rapid evolution of AI tooling.",
    whatGoodLooksLike: "You are well-positioned. Maintain your infrastructure investment and use your technical capability to pilot emerging AI technologies ahead of the market.",
    internalQuestion: "Are you using your technical advantage to move faster than competitors on AI adoption?",
  },

  // ── Strategic Clarity ───────────────────────────────────────────────
  {
    dimension: "strategic_clarity",
    ratingLevel: "critical_gap",
    headline: "You want AI but do not know what for.",
    detail: "This is more common than you might think, and more dangerous than it sounds. Without specific, measurable objectives, AI investment becomes a series of expensive experiments with no way to evaluate success. Before looking at any AI tooling, invest time in identifying three to five specific business problems where AI could deliver measurable value. Be ruthlessly specific: not 'improve efficiency' but 'reduce the time from client brief to first draft from 5 days to 1 day'.",
    whatGoodLooksLike: "Organisations with strategic clarity have a prioritised pipeline of specific AI opportunities, each with defined success metrics, executive sponsorship, and realistic investment estimates.",
    internalQuestion: "If someone gave you an unlimited AI budget tomorrow, what exactly would you spend it on and how would you measure success?",
  },
  {
    dimension: "strategic_clarity",
    ratingLevel: "needs_attention",
    headline: "You have ambition but not a plan.",
    detail: "General enthusiasm without specific objectives leads to pilot projects that never scale. The gap is between 'we should do something with AI' and 'here is exactly what we are doing, why, and how we will know if it works.' Invest in a structured discovery process: identify your highest-value, lowest-complexity AI opportunities and build detailed business cases for the top three.",
    whatGoodLooksLike: "Organisations at the next level have documented AI strategies with prioritised use cases, defined metrics, baselines, and allocated budget.",
    internalQuestion: "Could every member of your leadership team give the same answer about your top AI priority?",
  },
  {
    dimension: "strategic_clarity",
    ratingLevel: "solid_foundation",
    headline: "Your strategy can guide execution.",
    detail: "You have clarity on what AI should do and reasonable alignment on priorities. The focus now is on execution discipline: ensuring that your AI strategy translates into delivered outcomes, not just plans and pilots. Consider whether your current delivery model - internal team, external partners, or hybrid - can keep up with your ambition.",
    whatGoodLooksLike: "Leading organisations have AI strategies with quarterly reviews, clear portfolio management across initiatives, and the ability to kill projects that are not delivering.",
    internalQuestion: "Is your organisation better at starting AI initiatives or finishing them?",
  },
  {
    dimension: "strategic_clarity",
    ratingLevel: "strength",
    headline: "You have the clarity to move fast.",
    detail: "Strong strategic clarity means you can make AI investment decisions with confidence, prioritise effectively, and say no to distractions. The risk at this stage is overconfidence - ensure your strategy remains adaptive and that you are regularly re-evaluating priorities as the AI landscape evolves.",
    whatGoodLooksLike: "You are well-positioned. Maintain strategic discipline, invest in staying current with AI developments, and ensure your strategy evolves with the technology.",
    internalQuestion: "When did you last fundamentally reassess your AI strategy in light of new developments?",
  },
];

export function getRecommendation(
  dimensionId: DimensionKey,
  rating: string
): Recommendation | undefined {
  const ratingLevel = RATING_MAP[rating];
  if (!ratingLevel) return undefined;
  return recommendations.find(
    (r) => r.dimension === dimensionId && r.ratingLevel === ratingLevel
  );
}
