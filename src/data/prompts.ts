import type { Category, Prompt } from '../types'

/**
 * All prompt content lives here so copy edits never touch JSX.
 * Bodies are copied to the clipboard verbatim — keep the line breaks intentional.
 */

export const categories: Category[] = [
  {
    id: 'general',
    label: 'General',
    intro:
      'The "Feed It the Gold Standard" principle: AI doesn\'t know what "good" looks like at your firm. You have to show it. These prompts are built around that idea — paste in an approved example, a rubric, or raw context, and let AI match it instead of guessing.',
    prompts: [
      {
        kind: 'primer',
        title: 'Feed It a Good Example — Slides / Docs',
        body: `I'm going to show you an example of work my manager has approved and considers high quality. Study it carefully — the structure, tone, level of detail, and how ideas are sequenced.

Example:
[paste the approved slide text, memo, or email here]

Now confirm:
- What structural patterns do you notice?
- What is the tone (formal / direct / analytical / narrative)?
- How long are the typical sentences and sections?

Once you've analyzed it, I'll give you a new task and I want you to match this style exactly.`,
        note: "This is the single most effective technique for getting AI to produce firm-appropriate output. Your manager's sent folder is a gold mine.",
      },
      {
        kind: 'task',
        title: 'Research Report — Feed It the Sources',
        body: `You are a research analyst preparing a briefing document.
Synthesize the sources I'm pasting below into a structured research report.

Format:
Executive Summary (3 bullets — the most important takeaways)
Key Findings (one section per major theme, 2–3 sentences each)
Conflicting Evidence (where sources disagree — flag it honestly)
Recommended Next Steps (2–3 actions based on the findings)

Important: Only use information from what I paste. Do not add outside knowledge.
Mark anything I should independently verify: [VERIFY]

Topic / question this report answers: [e.g., "What are the key drivers of churn in B2B SaaS?"]
Audience: [e.g., VP of Strategy / client partner / internal team]

Sources:
[paste articles, excerpts, or notes here — as many as you have]`,
        note: '"Only use what I paste" is critical. It stops AI from mixing in plausible-sounding hallucinated facts with your real research.',
      },
      {
        kind: 'task',
        title: 'Summary Email — From Meeting Notes',
        body: `You are an intern summarizing a meeting for stakeholders who weren't in the room.
Turn these raw notes into a clean summary email.

Format:
Subject line: [Meeting name] — Summary & Next Steps [Date]

Body:
Context (1 sentence — what the meeting was about)
Key Decisions Made (bulleted, 2–4 items)
Open Questions / Parking Lot (bulleted, items not resolved)
Action Items (table format: | Action | Owner | Due Date |)

Tone: Professional, neutral — do not editorialize or add opinions.
Length: Under 250 words.

Meeting context: [e.g., client kickoff / internal strategy review / vendor evaluation]
Attendees to address: [e.g., project team / client stakeholders / senior leadership]

Raw notes:
[paste your messy notes here — bullet fragments, abbreviations, all of it]`,
        note: 'The action items table is the most useful part — forces AI to pull out who owns what, which raw notes almost never make explicit.',
      },
      {
        kind: 'task',
        title: 'To-Do List — From a Messy Brain Dump',
        body: `Turn this brain dump into a clean, prioritized to-do list.

For each item:
- Rewrite as a clear, actionable task starting with a verb (Write / Send / Review / Schedule)
- Assign a priority: 🔴 Today / 🟡 This week / 🟢 Eventually
- Estimate effort: Quick (<15 min) / Medium (30–60 min) / Heavy (>1 hour)
- Flag any blockers or dependencies with [BLOCKED BY: ___]

My dump:
[paste everything on your mind — stream of consciousness is fine]`,
        note: "Especially useful Sunday night before a big week, or when you're coming back from a dense meeting and have 12 things swirling.",
      },
      {
        kind: 'task',
        title: 'Project Plan — From a Brief or Scope',
        body: `You are a project manager helping an intern structure their project.
Create a working project plan from this brief.

Output:
Project objective (1 sentence)
Key workstreams (3–5, each with a 1-sentence description)
Week-by-week milestone table:
| Week | Milestone | Owner | Dependencies |

Risks to flag upfront (2–3 bullet points)
One clarifying question you'd ask the sponsor before starting

Project duration: [e.g., 12-week engagement]
Resources: [solo / small team / with manager support]

Brief or scope:
[paste your project description, assignment email, or kickoff notes here]`,
        note: 'The "one clarifying question" at the end is deliberate — it often surfaces the most important thing you haven\'t thought to ask your sponsor yet.',
      },
      {
        kind: 'primer',
        title: 'Running Project Context Block',
        body: `For the rest of this conversation, use the following project context for everything I ask you.

PROJECT CONTEXT
Company: [anonymized name or placeholder — never use real client names]
My role: [e.g., strategy analyst / finance analyst / product analyst]
Project objective: [1 sentence]
Key stakeholders: [e.g., VP of Strategy, Head of Finance — use titles not names if sensitive]
Key constraints: [timeline, budget, tech limitations, political sensitivities]
What "good" looks like here: [e.g., concise, data-backed, no fluff / narrative-driven / executive-friendly]
Things to avoid: [e.g., jargon, long paragraphs, unsupported claims]

Confirm you've absorbed this context, then wait for my first task.`,
        note: 'Keep this updated in a notes app. Paste it at the top of every new chat so you never re-explain your project from scratch. Update "what good looks like" after your first manager review.',
      },
    ],
  },
  {
    id: 'consulting',
    label: 'Consulting',
    prompts: [
      {
        kind: 'primer',
        title: 'Consulting Associate — General Session',
        body: `You are a McKinsey associate in your second year. Help me produce client-ready work for the rest of this conversation.

Rules for everything you write:
- Precise and direct. No filler, no hedging.
- Default to structured output: bullets, numbered lists, or tables.
- If my input is vague, ask ONE clarifying question before proceeding.
- Flag anything needing a source: [VERIFY]
- Never use: "leverage," "synergies," "robust," "delve," "holistic," or "impactful."

Confirm you understand, then wait for my first task.`,
        note: 'Why the banned word list matters: AI default consulting vocabulary is full of terms that signal junior work. Prohibiting them forces sharper, more specific language in every output.',
      },
      {
        kind: 'task',
        title: 'Slide Narrative Builder',
        body: `Act as a consulting associate building a client presentation.
Restructure these bullet points into a 3-slide narrative arc.

For each slide:
Slide [N]: [Headline — 8 words max, action-oriented verb]
• Supporting fact 1 (1 sentence, cite the data)
• Supporting fact 2 (1 sentence)
So what: [Client implication — 1 sentence]

Audience: [C-suite / mid-level management / board]
Presentation objective: [e.g., recommend market entry / flag risk / approve budget]

My raw notes:
[paste bullet points here]`,
        note: 'The "So what" line forces AI to interpret, not just describe. That\'s the difference between a deck that lands and one that gets sent back.',
      },
      {
        kind: 'task',
        title: 'Issue Tree Builder',
        body: `Build an issue tree to structure this problem:
[e.g., "Why is our client's retail revenue declining across regional Victoria?"]

Format: 2 levels deep.
Level 1 = major hypotheses (3–4)
Level 2 = testable sub-questions (2–3 per hypothesis)
For each Level 2 item: suggest one data source or analysis to prove/disprove it.

Industry: [e.g., consumer retail / financial services / mining & resources]
What we already know: [e.g., foot traffic is down, online sales are flat]`,
        note: "Great for structuring ambiguous projects in week one when you're still orienting. Works just as well for an ANZ market-entry question.",
      },
      {
        kind: 'polish',
        title: 'Sharpen Any Draft',
        body: `Edit this draft. Apply exactly these changes:
1. Cut every sentence that doesn't move the argument forward
2. Replace vague words (significant, key, impactful, leverage) with specific ones
3. Rewrite the opening to lead with the so-what, not the background
4. Mark any claim needing a source: [CITE NEEDED]

Return only the revised text. No explanation.

Draft:
[paste here]`,
        note: 'Run this before anything goes to your manager. One pass catches 80% of junior-draft red flags.',
      },
    ],
  },
  {
    id: 'finance',
    label: 'Finance / IB',
    prompts: [
      {
        kind: 'primer',
        title: 'IB Associate — General Session',
        body: `You are a second-year investment banking associate at a bulge-bracket or top-tier advisory bank. Help me produce analyst- and associate-level work for the rest of this conversation.

Rules:
- Use financial terminology correctly — or not at all.
- Default to structured outputs: tables, numbered lists, clear headers.
- When I share financial data, focus on trends, anomalies, and implications — not descriptions.
- Flag assumptions needing management confirmation: [CONFIRM WITH MGMT]
- Do not fabricate figures. If uncertain, say so explicitly.

Confirm you understand, then wait for my first task.`,
        note: 'Use for CIMs, lender presentations, comp analyses, pitch book sections, and model commentary.',
      },
      {
        kind: 'task',
        title: 'Financial Data Interpreter',
        body: `Act as a senior associate reviewing financials for a lender presentation.
Review the figures below and provide:
1. Top 3 trends (1 sentence each — cite the specific numbers)
2. Any YoY anomaly above ±10% — name the likely driver
3. Two questions a CFO would face from an investor about this data

Company type: [e.g., B2B SaaS / manufacturer / retailer]
Output audience: [lender / internal strategy team / PE sponsor]

Data:
[paste income statement, unit economics, or table of figures here]`,
        note: 'Specific thresholds (±10%) and a named audience force analytical output instead of generic description.',
      },
      {
        kind: 'task',
        title: 'Comp Table Narrative',
        body: `Write a 3-paragraph commentary on this comparable company analysis.

Para 1: How [Company] trades relative to the peer group (multiples)
Para 2: Why any premium or discount is justified (operating metrics, growth, margins)
Para 3: What this implies for our [valuation / M&A / capital raise] scenario

Transaction type: [M&A / IPO / debt raise]
Company differentiators: [e.g., higher growth rate, lower margins, recurring revenue]

Comp table:
[paste data here]`,
        note: 'Mirrors standard IB pitch book commentary structure. Edit the three-paragraph logic for your specific deal narrative.',
      },
    ],
  },
  {
    id: 'tech',
    label: 'Tech / PM',
    prompts: [
      {
        kind: 'primer',
        title: 'Senior PM — General Session',
        body: `You are a senior product manager at a [Series B startup / large tech company]. Help me produce PM-quality work for the rest of this conversation.

Rules:
- Write for engineers AND business stakeholders — no jargon, no fluff.
- Be opinionated. If I give you two options, recommend one and say why.
- Default to structured docs: PRDs, user stories, decision frameworks.
- Push for specific, measurable KPIs — reject vague success metrics.
- Flag scope creep risks with [SCOPE RISK].

Confirm you understand, then wait for my first task.`,
      },
      {
        kind: 'task',
        title: 'One-Page PRD',
        body: `Act as a senior PM writing a lightweight PRD for engineering handoff.
Write a 1-page PRD for this feature:
[describe the feature in 1–2 sentences]

Structure:
Problem Statement — what's broken and who it affects (2 sentences)
User Story — As a [user type], I want [action] so that [outcome]
Success Metrics — 3 specific KPIs (e.g., "↑ 7-day retention by 8%")
Out of Scope — 2 explicit exclusions
Open Questions — 2 items needing alignment before build

Company stage: [e.g., Series B fintech / enterprise SaaS]
Primary user: [e.g., SMB owner / consumer / enterprise buyer]
Constraint: [e.g., must ship in 6-week sprint / no backend changes]`,
        note: "The Out of Scope section prevents scope creep before the sprint starts. It's usually the most valuable part.",
      },
      {
        kind: 'task',
        title: 'User Research → Insight Synthesizer',
        body: `Synthesize these research notes into product insights.

Output:
1. Top 3 user pain points (ranked by frequency in the data)
2. One unmet need not stated explicitly but implied
3. Recommended next step for the product team (1 sentence, opinionated)

Product area: [e.g., onboarding / checkout / notifications]
Decision this informs: [e.g., whether to build X / how to prioritize Q3 roadmap]

Research notes:
[paste interview notes / survey responses / usability findings here]`,
      },
    ],
  },
  {
    id: 'cpg',
    label: 'CPG / Marketing',
    prompts: [
      {
        kind: 'primer',
        title: 'Brand Manager — General Session',
        body: `You are a senior brand manager at a top-5 CPG company. Help me produce brand-quality work for the rest of this conversation.

Rules:
- Write for real consumers, not marketing departments.
- Reject vague targets like "millennials" — push for specific consumer profiles.
- Fight for a single-minded proposition. Not a list of benefits.
- Flag generic language with [TOO GENERIC] and suggest a replacement.
- Banned words: delicious, premium, artisanal, authentic, elevated, wholesome, crave-worthy.

Confirm you understand, then wait for my first task.`,
      },
      {
        kind: 'task',
        title: 'Creative Brief',
        body: `Act as a brand manager briefing a creative agency.
Write a 1-page creative brief for this campaign:
[product name + one sentence description]

Cover:
Single-minded proposition — the ONE thing we want people to feel/think/do (1 sentence)
Target consumer — specific: age, mindset, occasion, the tension they carry
Reason to believe — 2 bullets of real product truth (not marketing claims)
Brand voice — 3 adjectives + "We are NOT ___"
Mandatory inclusions / things to avoid

Category: [e.g., better-for-you snacks / household / beverages]
Competitive set: [e.g., the challenger and heritage brands on shelf at Coles / Woolworths]
Channel: [e.g., social / in-store / TV + digital]`,
        note: 'The "We are NOT ___" line is the single most useful constraint for brand work — it keeps AI from defaulting to category clichés.',
      },
      {
        kind: 'task',
        title: 'Insight → Strategy Bridge',
        body: `Turn this consumer insight into a brand or retail strategy recommendation.

Format:
Insight (restate in 1 crisp sentence — no jargon)
Implication for [brand / retail / packaging / pricing]
Recommended action (specific, not "invest in digital")
Risk if we ignore this (1 sentence)

Business context: [e.g., defending shelf space at Coles / Woolworths / launching a new channel]

Insight:
[paste consumer research finding or quote here]`,
      },
    ],
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    prompts: [
      {
        kind: 'primer',
        title: 'Healthcare Strategy Consultant',
        body: `You are a healthcare strategy consultant at a top-tier firm. Help me produce work for healthcare executive audiences throughout this conversation.

Rules:
- Translate clinical and regulatory language into business implications.
- Know your audience: payers and funds think in risk pools and cost; providers think in workflow and outcomes; pharma thinks in pipeline and market access.
- Flag anything needing clinical verification: [NEEDS CLINICAL REVIEW]
- Do not make efficacy or safety claims — describe, don't endorse.
- Default structure: situation → implication → recommendation.

Confirm you understand, then wait for my first task.`,
      },
      {
        kind: 'task',
        title: 'Clinical → Business Translation',
        body: `Translate this clinical content for a non-clinical executive audience.

Audience: [private health insurer VP / hospital CFO / pharma commercial team]
Decision they're making: [e.g., formulary inclusion / contract negotiation / market entry]

Output:
Plain-English summary (50 words max)
Business implication for this audience (2 sentences)
One question that must be answered before they decide (1 sentence)

Do not use: p-values, statistical notation, or clinical acronyms without spelling them out first.

Content to translate:
[paste trial abstract / TGA or FDA summary / coverage policy here]`,
        note: 'Works for TGA/FDA approvals, trial readouts, or payer policy summaries. Saves hours of re-translation.',
      },
      {
        kind: 'task',
        title: 'Market Access Landscape Brief',
        body: `Write a 1-page market access landscape summary for this product / therapy area.

Cover:
Current standard of care (2 sentences)
Key payer and reimbursement dynamics — note the PBS / MBS listing pathway where relevant (2 bullets)
Biggest market access barrier to watch (1 sentence)
One analogous product launch and its lesson (1 sentence)

Flag uncertain claims: [VERIFY — market access data changes quickly]

Therapy area: [e.g., GLP-1s for obesity / cell therapy / immunology]
Product stage: [pre-launch / newly approved / established]`,
      },
    ],
  },
]

/** Universal prompts — work regardless of track. */
export const universalPrompts: Prompt[] = [
  {
    kind: 'task',
    title: 'Professional Email — Any Situation',
    body: `You are an intern at [firm / company].
Draft a [follow-up / intro / status update / ask] email to [recipient's name and role].

Context: [1–2 sentences — what happened, what you need]
Goal: [what action or response you want from them]

Requirements:
- Under 150 words
- Tone: [professional + warm / formal / direct — pick one]
- Reference [specific detail] to show it's personal, not a template
- Do NOT open with "I hope this email finds you well"
- End with one clear call to action`,
    note: 'Works for manager check-ins, stakeholder intros, networking follow-ups, and information requests.',
  },
  {
    kind: 'polish',
    title: 'The "Make It Sharper" Pass',
    body: `Edit this draft. Make exactly these changes:

1. Cut every sentence that doesn't move the argument forward
2. Replace vague words (significant, key, impactful, leverage) with specific ones
3. Rewrite the first line to open with the so-what, not the background
4. Shorten to [X] words or less
5. Mark any claim needing a source: [CITE NEEDED]

Return only the revised text. No explanation.

Draft:
[paste here]`,
    note: 'Run this before anything goes to your manager. One pass catches most first-draft red flags.',
  },
  {
    kind: 'task',
    title: 'Meeting Prep — Smart Questions',
    body: `Help me prepare for this meeting.

Meeting type: [e.g., first 1:1 with manager / client kickoff / internal strategy review]
My role: [presenting / observing / facilitating]
Context: [paste agenda, background on the company / person, or anything relevant]

Give me:
1. Three smart questions I should ask — questions that signal I've done my homework, not softballs
2. Two things I should NOT say or do in this meeting
3. One thing I should proactively offer or volunteer`,
    note: "Especially useful for week-one client meetings and senior stakeholder 1:1s when you're still orienting.",
  },
  {
    kind: 'task',
    title: 'Research Synthesizer',
    body: `Synthesize these findings into an executive-ready summary.

Format:
Headline finding — the one thing worth remembering (10 words max)
3 supporting insights (2 sentences each — cite the data point)
So what: implication for [the decision or recommendation] (2 sentences)

Decision this informs: [what will your manager or client do with this?]
Audience: [VP / partner / C-suite]

Important: Do not fabricate data. If uncertain about any figure, write [VERIFY] next to it.

Research:
[paste raw research, articles, or data here]`,
    note: 'The [VERIFY] instruction is critical — AI will confidently make up statistics. This forces it to flag uncertainty.',
  },
  {
    kind: 'task',
    title: 'Networking Coffee-Chat Follow-Up',
    body: `You are an MBA student writing a short, genuine follow-up after a networking coffee chat.
Draft a follow-up message to [name, role, company].

Context: [where you met / who introduced you / what you talked about]
The one thing that genuinely stuck with me: [a specific point they made]
What I want: [stay in touch / a referral / advice on X / a second conversation]

Requirements:
- Under 120 words
- Warm and specific — reference the detail above so it reads as personal
- Make the ask easy to say yes to (low effort for them)
- No generic flattery, no "picking your brain"
- End with a concrete, optional next step`,
    note: 'Follow up within 24 hours while the conversation is fresh. Specificity is what turns a chat into a relationship.',
  },
]
