export interface Question {
  id: string;
  text: string;
  options: { value: number; label: string }[];
}

export interface Dimension {
  id: string;
  name: string;
  tagline: string;
  intro: string;
  questions: Question[];
}

export const dimensions: Dimension[] = [
  {
    id: "data_foundation",
    name: "Data Foundation",
    tagline: "Can AI actually work with what you have?",
    intro: "This dimension assesses how your organisation's data actually flows - not in theory, but in practice. Most AI initiatives fail not because the technology does not work, but because the data feeding it is inconsistent, inaccessible, or held together by manual effort.",
    questions: [
      {
        id: "df_1",
        text: "How does critical operational data move between systems in your organisation?",
        options: [
          { value: 1, label: "Mostly manual re-keying, copy-paste between spreadsheets and emails" },
          { value: 2, label: "Some shared drives and templates, but lots of manual formatting and reconciliation" },
          { value: 3, label: "A mix - some automated feeds, but key processes still rely on someone knowing where things are" },
          { value: 4, label: "Most data flows are automated with defined schemas, with manual steps only for exceptions" },
          { value: 5, label: "Fully integrated data pipelines with validated schemas, error handling, and audit trails" },
        ],
      },
      {
        id: "df_2",
        text: "If a key team member was absent for two weeks, how much operational data would be inaccessible or delayed?",
        options: [
          { value: 1, label: "Significant disruption - they hold critical knowledge about where data lives and how to process it" },
          { value: 2, label: "Some disruption - others could find things but would take much longer and make mistakes" },
          { value: 3, label: "Moderate - most things are documented but certain processes depend on tacit knowledge" },
          { value: 4, label: "Minimal - processes are documented and data locations are well known across the team" },
          { value: 5, label: "No impact - all data processes are documented, automated, or systematised" },
        ],
      },
      {
        id: "df_3",
        text: "How consistent is the format and structure of data you receive from clients, partners, or internal teams?",
        options: [
          { value: 1, label: "Every source sends data differently - different formats, naming conventions, structures" },
          { value: 2, label: "Some standardisation exists but we spend significant time cleaning and reformatting" },
          { value: 3, label: "Most regular data sources follow a template but exceptions are common" },
          { value: 4, label: "Strong standardisation with defined templates and validation rules for most inputs" },
          { value: 5, label: "Fully standardised with automated validation and rejection of non-compliant inputs" },
        ],
      },
      {
        id: "df_4",
        text: "Could you produce an accurate report on last month's operational performance within one hour?",
        options: [
          { value: 1, label: "No - it would take days of pulling data from multiple sources and reconciling" },
          { value: 2, label: "Unlikely - we could get a rough view but it would need manual compilation" },
          { value: 3, label: "Possibly - if the right person is available, they know where to pull everything from" },
          { value: 4, label: "Yes - most metrics are in dashboards, with some manual additions needed" },
          { value: 5, label: "Yes - real-time dashboards with automated data feeds, available to anyone" },
        ],
      },
      {
        id: "df_5",
        text: "How much of your team's time is spent preparing, cleaning, or reformatting data rather than analysing or acting on it?",
        options: [
          { value: 1, label: "More than 50% - we spend more time preparing data than using it" },
          { value: 2, label: "30-50% - significant time lost to data wrangling" },
          { value: 3, label: "15-30% - noticeable but manageable" },
          { value: 4, label: "5-15% - occasional cleanup needed" },
          { value: 5, label: "Less than 5% - data arrives ready to use" },
        ],
      },
    ],
  },
  {
    id: "process_maturity",
    name: "Process Maturity",
    tagline: "Are your workflows ready to be automated, or will AI just automate your chaos?",
    intro: "AI applied to a broken process produces broken outputs faster. This dimension assesses whether your workflows are understood, documented, and consistent enough for automation to deliver reliable value.",
    questions: [
      {
        id: "pm_1",
        text: "How well documented are your core operational workflows?",
        options: [
          { value: 1, label: "Not documented - processes live in people's heads" },
          { value: 2, label: "Partially - some process docs exist but they are outdated or incomplete" },
          { value: 3, label: "Key processes are documented but documentation is inconsistent across teams" },
          { value: 4, label: "Well documented with clear steps, owners, and exception handling for most workflows" },
          { value: 5, label: "Fully documented, version-controlled, and regularly reviewed with defined owners" },
        ],
      },
      {
        id: "pm_2",
        text: "When something goes wrong in a workflow, how do you typically identify where and why it failed?",
        options: [
          { value: 1, label: "Someone notices downstream - a client complains, a deadline is missed" },
          { value: 2, label: "The person closest to the problem investigates and usually finds it, eventually" },
          { value: 3, label: "We have some checkpoints but root cause analysis is ad hoc" },
          { value: 4, label: "Defined quality gates with clear escalation paths for most critical workflows" },
          { value: 5, label: "Automated monitoring with real-time alerts, structured incident review, and feedback loops" },
        ],
      },
      {
        id: "pm_3",
        text: "What percentage of your team's recurring tasks follow a predictable, repeatable pattern?",
        options: [
          { value: 1, label: "Less than 20% - most work feels unique or requires significant judgement each time" },
          { value: 2, label: "20-40% - some recurring patterns but lots of variation" },
          { value: 3, label: "40-60% - a good proportion is repeatable but edge cases are common" },
          { value: 4, label: "60-80% - most recurring work follows clear patterns with defined exceptions" },
          { value: 5, label: "More than 80% - the vast majority is predictable, with true exceptions being rare" },
        ],
      },
      {
        id: "pm_4",
        text: "How do you handle the predictable majority versus the complex exceptions in your workflows?",
        options: [
          { value: 1, label: "Everything gets the same treatment - no distinction between routine and complex" },
          { value: 2, label: "Informally - experienced team members know what is routine and what needs attention" },
          { value: 3, label: "Some triage exists but it is person-dependent and not systematised" },
          { value: 4, label: "Clear criteria for routing routine versus complex work, with different handling paths" },
          { value: 5, label: "Automated triage with rules-based routing for the predictable majority and human escalation for genuine exceptions" },
        ],
      },
      {
        id: "pm_5",
        text: "If you needed to onboard a new team member to run a core process, how long would it take them to be fully autonomous?",
        options: [
          { value: 1, label: "Months - it requires sitting with someone experienced and learning by doing" },
          { value: 2, label: "6-8 weeks - there is some documentation but most knowledge transfers informally" },
          { value: 3, label: "3-4 weeks - decent documentation and training materials exist" },
          { value: 4, label: "1-2 weeks - well-structured onboarding with clear process guides" },
          { value: 5, label: "Days - processes are so well documented and systematised that onboarding is straightforward" },
        ],
      },
    ],
  },
  {
    id: "governance_risk",
    name: "Governance & Risk",
    tagline: "Can you adopt AI without exposing the business?",
    intro: "This is not about whether you have a 100-page policy document. It is about whether you have practical guardrails - the kind that protect the business without paralysing adoption.",
    questions: [
      {
        id: "gr_1",
        text: "Does your organisation have a formal position on which AI tools employees can and cannot use?",
        options: [
          { value: 1, label: "No - people use whatever they find, and leadership has not addressed it" },
          { value: 2, label: "Informal guidance exists but it is not enforced or widely known" },
          { value: 3, label: "There is a list of approved tools but no clear policy on usage boundaries" },
          { value: 4, label: "A formal AI usage policy exists covering approved tools, data handling, and prohibited uses" },
          { value: 5, label: "Comprehensive AI governance framework with clear policies, regular reviews, and designated ownership" },
        ],
      },
      {
        id: "gr_2",
        text: "How would you handle a situation where an employee used AI to generate client-facing content without review?",
        options: [
          { value: 1, label: "We would not know it happened unless someone noticed an error" },
          { value: 2, label: "It would be addressed reactively if a problem arose" },
          { value: 3, label: "We have general quality review processes but nothing AI-specific" },
          { value: 4, label: "Clear guidelines exist on AI-assisted content with defined review and approval steps" },
          { value: 5, label: "Embedded review workflows with AI-specific checkpoints, attribution standards, and audit trails" },
        ],
      },
      {
        id: "gr_3",
        text: "How confident are you that sensitive data is not being entered into AI tools by your team?",
        options: [
          { value: 1, label: "Not confident at all - we have no visibility or controls" },
          { value: 2, label: "Slightly concerned - we have mentioned it but have no enforcement mechanism" },
          { value: 3, label: "Somewhat confident - guidance exists but compliance is on the honour system" },
          { value: 4, label: "Confident - clear data classification with technical controls on what can be shared externally" },
          { value: 5, label: "Very confident - data loss prevention tools, approved AI environments, and regular auditing" },
        ],
      },
      {
        id: "gr_4",
        text: "Is there a named person or team responsible for AI governance in your organisation?",
        options: [
          { value: 1, label: "No - nobody owns this" },
          { value: 2, label: "It informally sits with IT or legal but is not their primary focus" },
          { value: 3, label: "Someone has been asked to look into it but it is not a defined role" },
          { value: 4, label: "A named individual or working group has been assigned AI governance responsibilities" },
          { value: 5, label: "A cross-functional AI governance forum with executive sponsorship, defined meeting cadence, and decision-making authority" },
        ],
      },
      {
        id: "gr_5",
        text: "How prepared are you for AI-related regulatory requirements?",
        options: [
          { value: 1, label: "Unaware of what is required" },
          { value: 2, label: "Aware that regulation exists but have not assessed its impact" },
          { value: 3, label: "Initial assessment done but no action plan in place" },
          { value: 4, label: "Impact assessment complete with a compliance roadmap being implemented" },
          { value: 5, label: "Fully compliant with ongoing monitoring of regulatory developments and proactive adaptation" },
        ],
      },
    ],
  },
  {
    id: "skills_culture",
    name: "Skills & Culture",
    tagline: "Will your people use it, resist it, or ignore it?",
    intro: "The hardest part of AI transformation is not the technology. It is getting people to change how they work. This dimension assesses whether your organisation's culture and capability can absorb AI adoption without it stalling at pilot stage.",
    questions: [
      {
        id: "sc_1",
        text: "How would you describe your organisation's general attitude toward AI?",
        options: [
          { value: 1, label: "Fear or active resistance - seen as a threat to jobs" },
          { value: 2, label: "Scepticism - seen as hype or irrelevant to what we do" },
          { value: 3, label: "Cautious curiosity - interested but unsure where to start" },
          { value: 4, label: "Engaged - leadership is supportive and some teams are actively experimenting" },
          { value: 5, label: "Embedded - AI is part of how people think about solving problems, not a separate initiative" },
        ],
      },
      {
        id: "sc_2",
        text: "How many people in your organisation could confidently explain what AI could do for their specific role?",
        options: [
          { value: 1, label: "Almost nobody - AI feels abstract and unrelated to daily work" },
          { value: 2, label: "A handful of enthusiasts, mostly self-taught" },
          { value: 3, label: "Some teams have good awareness, but it is patchy across the organisation" },
          { value: 4, label: "Most team leads and managers can articulate relevant AI use cases" },
          { value: 5, label: "The majority of employees understand how AI applies to their work and can identify opportunities" },
        ],
      },
      {
        id: "sc_3",
        text: "When a new tool or process is introduced, how does your organisation typically respond?",
        options: [
          { value: 1, label: "Poorly - adoption is slow, workarounds emerge, and people revert to old methods" },
          { value: 2, label: "Mixed - some teams adopt well, others ignore it" },
          { value: 3, label: "Reasonable - if supported with training and leadership backing, most people come around" },
          { value: 4, label: "Well - structured change management with champions, training, and feedback loops" },
          { value: 5, label: "Very well - culture of continuous improvement where new approaches are expected and embraced" },
        ],
      },
      {
        id: "sc_4",
        text: "Do you have people who are already experimenting with AI in their own workflows?",
        options: [
          { value: 1, label: "Not that we know of" },
          { value: 2, label: "A few individuals, but they keep it to themselves" },
          { value: 3, label: "Yes, and we are aware of it but have not formalised it" },
          { value: 4, label: "Yes, and we are actively encouraging and learning from their experiments" },
          { value: 5, label: "Yes, and we have structured programmes to scale their learnings across the business" },
        ],
      },
      {
        id: "sc_5",
        text: "How does your organisation typically invest in upskilling?",
        options: [
          { value: 1, label: "Minimal - learning happens on the job with no formal investment" },
          { value: 2, label: "Ad hoc - occasional courses or workshops when budget allows" },
          { value: 3, label: "Annual training budgets exist but are often the first thing cut" },
          { value: 4, label: "Structured learning and development programmes with dedicated time and budget" },
          { value: 5, label: "Continuous learning culture with dedicated innovation time, platforms, mentoring, and career-linked development" },
        ],
      },
    ],
  },
  {
    id: "tooling_infrastructure",
    name: "Tooling & Infrastructure",
    tagline: "Is your tech stack ready for AI, or will it fight you?",
    intro: "Practical assessment of whether the organisation's current technology can support AI adoption without a complete rebuild.",
    questions: [
      {
        id: "tooling_infrastructure_1",
        text: "How would you describe your current technology landscape?",
        options: [
          { value: 1, label: "Fragmented — lots of disconnected tools, many legacy systems, significant technical debt" },
          { value: 2, label: "Aging — core systems work but integration is limited and upgrades are overdue" },
          { value: 3, label: "Functional — a mix of modern and legacy with some integration between key systems" },
          { value: 4, label: "Modern — cloud-based core systems with APIs and integration capabilities" },
          { value: 5, label: "Advanced — cloud-native architecture with well-documented APIs, microservices, and a data platform" },
        ],
      },
      {
        id: "tooling_infrastructure_2",
        text: "How easy is it to connect a new tool or service to your existing systems?",
        options: [
          { value: 1, label: "Very difficult — most integrations require custom development and months of work" },
          { value: 2, label: "Challenging — possible but requires significant IT involvement and workarounds" },
          { value: 3, label: "Moderate — standard integrations are feasible, custom ones are slow" },
          { value: 4, label: "Relatively easy — APIs are available for most systems and the IT team supports integration" },
          { value: 5, label: "Straightforward — well-documented APIs, integration middleware, and self-serve capabilities" },
        ],
      },
      {
        id: "tooling_infrastructure_3",
        text: "Where does your organisation's data primarily live?",
        options: [
          { value: 1, label: "Scattered across local drives, email attachments, and individual spreadsheets" },
          { value: 2, label: "Shared drives and basic cloud storage with no central structure" },
          { value: 3, label: "A mix of cloud platforms and on-premise systems with some centralisation efforts" },
          { value: 4, label: "Centralised cloud platforms with defined data storage and access policies" },
          { value: 5, label: "A governed data platform with clear ownership, cataloguing, and quality monitoring" },
        ],
      },
      {
        id: "tooling_infrastructure_4",
        text: "Does your IT team have experience with AI, machine learning, or automation tooling?",
        options: [
          { value: 1, label: "No — AI is entirely outside current capabilities" },
          { value: 2, label: "Limited — awareness exists but no hands-on experience" },
          { value: 3, label: "Some — a few individuals have experimented or completed training" },
          { value: 4, label: "Moderate — the team has implemented automation and has some ML experience" },
          { value: 5, label: "Strong — dedicated data science or AI engineering capability within or alongside IT" },
        ],
      },
      {
        id: "tooling_infrastructure_5",
        text: "How does your organisation handle data security and access control?",
        options: [
          { value: 1, label: "Minimal controls — most people can access most things" },
          { value: 2, label: "Basic — role-based access exists for core systems but is inconsistently applied" },
          { value: 3, label: "Reasonable — defined access policies for sensitive systems but gaps remain" },
          { value: 4, label: "Strong — comprehensive role-based access, data classification, and regular access reviews" },
          { value: 5, label: "Mature — zero-trust principles, automated access management, DLP tools, and continuous monitoring" },
        ],
      },
    ],
  },
  {
    id: "strategic_clarity",
    name: "Strategic Clarity",
    tagline: "Do you know what you actually want AI to do?",
    intro: "The most overlooked dimension. Most organisations want \"AI\" without being able to articulate what problem it solves or how success would be measured.",
    questions: [
      {
        id: "strategic_clarity_1",
        text: "Can you articulate three specific business problems that AI could help solve in your organisation?",
        options: [
          { value: 1, label: "No — we know AI is important but have not identified specific problems" },
          { value: 2, label: "Vaguely — we have general ideas (\"improve efficiency\") but nothing specific" },
          { value: 3, label: "Partially — we have a few ideas but they are not well defined or prioritised" },
          { value: 4, label: "Yes — we have a shortlist of specific, well-understood problems with clear success criteria" },
          { value: 5, label: "Yes — a prioritised, validated pipeline of AI opportunities tied to business outcomes with sponsorship" },
        ],
      },
      {
        id: "strategic_clarity_2",
        text: "How would you measure whether an AI initiative was successful?",
        options: [
          { value: 1, label: "We have not thought about measurement" },
          { value: 2, label: "We would know if it \"felt\" like it was working" },
          { value: 3, label: "We have general KPIs (time saved, cost reduced) but nothing baselined" },
          { value: 4, label: "Defined metrics with current baselines for our priority use cases" },
          { value: 5, label: "Structured measurement framework with before/after baselines, control groups where appropriate, and regular review" },
        ],
      },
      {
        id: "strategic_clarity_3",
        text: "Who in your organisation is responsible for driving AI strategy?",
        options: [
          { value: 1, label: "Nobody — it has not been assigned" },
          { value: 2, label: "IT by default, but it is not a strategic priority for them" },
          { value: 3, label: "A senior leader has expressed interest but it sits alongside their day job" },
          { value: 4, label: "A named individual or team owns AI strategy with executive sponsorship and dedicated time" },
          { value: 5, label: "Cross-functional AI leadership with C-suite sponsorship, dedicated resource, budget, and board-level reporting" },
        ],
      },
      {
        id: "strategic_clarity_4",
        text: "How aligned is your leadership team on what AI should and should not be used for?",
        options: [
          { value: 1, label: "Not discussed — leadership has not addressed it collectively" },
          { value: 2, label: "Divided — different leaders have different views and there is no consensus" },
          { value: 3, label: "Generally aligned on the opportunity but not on priorities or boundaries" },
          { value: 4, label: "Aligned on priorities with a shared view of where AI adds value and where it does not" },
          { value: 5, label: "Fully aligned with a documented AI strategy, agreed priorities, ethical boundaries, and investment commitment" },
        ],
      },
      {
        id: "strategic_clarity_5",
        text: "What is your organisation's budget and investment appetite for AI initiatives?",
        options: [
          { value: 1, label: "No budget allocated and no appetite to invest" },
          { value: 2, label: "Would consider small experiments if they were low cost and low risk" },
          { value: 3, label: "Some budget could be found but it would need a strong business case" },
          { value: 4, label: "Dedicated AI/innovation budget with defined allocation for this year" },
          { value: 5, label: "Multi-year AI investment commitment with ringfenced budget and executive protection from short-term cuts" },
        ],
      },
    ],
  },
];
