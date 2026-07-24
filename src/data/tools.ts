import type { ToolPlatform, SupportingTool, CapabilityRow } from '../types'

/**
 * The four primary enterprise AI platforms, ordered by editorial position:
 * Claude → ChatGPT → Gemini → Copilot.
 *
 * All features and URLs verified against official sources, July 2026.
 * AU availability confirmed via Anthropic Economic Index (Feb 2026) and
 * vendor documentation.
 */
export const toolPlatforms: ToolPlatform[] = [
  {
    id: 'claude',
    name: 'Claude',
    vendor: 'Anthropic',
    strength: 'Autonomous multi-step task execution with native MCP connectors.',
    features: [
      'MCP (Model Context Protocol) connectors — integrates Slack, Figma, Salesforce, Box, and custom internal tools',
      'Projects — persistent context workspaces that retain files, instructions, and conversation history across sessions',
      'Cloud Routines — scheduled agentic tasks (deploy checks, nightly triage, doc-drift detection) running on Anthropic infrastructure',
      'Up to 200K-token context window; handles full codebases, board papers, or lengthy contracts in one pass',
    ],
    useCases: [
      'Automate weekly research digests: schedule a Routine to pull new filings, summarise, and draft a briefing note',
      'Run multi-document due-diligence across 50+ PDFs in a single Project, with instructions pinned so every follow-up stays on-brief',
      'Use MCP connectors to query a client\'s Salesforce CRM and draft account-review slides without copy-pasting data',
    ],
    watchOut: 'No native desktop app or Microsoft 365 integration — requires browser or API; web access is a toggle, not always on by default.',
    auNote: 'Available at claude.ai across all Australian states; API accessible via Anthropic directly, AWS Bedrock, Google Vertex AI, and Azure. Anthropic signed an MOU with the Australian Government on AI safety (2026).',
    docHref: 'https://platform.claude.ai/docs/en/home',
    docLabel: 'Anthropic developer docs',
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT Enterprise',
    vendor: 'OpenAI',
    strength: 'Broadest ecosystem of app connectors and the widest model choice for enterprise teams.',
    features: [
      'Agent Mode — describes and executes multi-step tasks (research, slideshow creation, expense submission) with real-time narration and human-in-the-loop interruption',
      'Deep Research — multi-source web research with MCP integration; can restrict searches to trusted domains and produce structured citation-backed reports',
      '60+ application connectors including Google Drive, Slack, GitHub, and Salesforce; company knowledge base indexes internal docs automatically',
      'Admin analytics dashboard: active-user trends, per-workspace agent inventory, and role-based agent-mode controls',
    ],
    useCases: [
      'Set Agent Mode to pull competitor press releases, cross-reference with internal strategy docs, and produce a two-page briefing — unattended',
      'Use Deep Research to synthesise analyst reports on a sector; restrict sources to Bloomberg, ASIC filings, and ASX announcements',
      'Connect the Salesforce and Google Drive connectors so an associate can ask "what is our current exposure to Client X?" without opening two tabs',
    ],
    watchOut: 'Agent Mode is disabled by default for Enterprise workspaces; admins must enable it per role — onboarding friction for new tenants.',
    auNote: 'ChatGPT Enterprise is available in Australia; data processing terms comply with the Australian Privacy Principles under the OpenAI Data Processing Agreement. No sovereign Australian data residency guarantee.',
    docHref: 'https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes',
    docLabel: 'OpenAI Enterprise release notes',
  },
  {
    id: 'gemini',
    name: 'Gemini for Google Workspace',
    vendor: 'Google',
    strength: 'Zero additional friction — AI is embedded in every app your team already has open.',
    features: [
      'Native in Gmail, Docs, Sheets, Slides, Drive, Meet, Chat, and Vids — no context-switching required',
      'Take Notes For Me in Google Meet — automated meeting summaries and action items; 110M+ attendees used it in the past month (Google Cloud Next 2026)',
      'Drive knowledge base — transforms shared Drive into a queryable knowledge layer; answer questions grounded in your organisation\'s own files',
      'Workspace Intelligence — unified semantic understanding across Docs, Slides, and Gmail; powers multi-step agentic workflows via Google Studio',
    ],
    useCases: [
      'Summarise a 30-email thread in Gmail before a client call, without leaving your inbox',
      'In Sheets, generate a full financial model from a prompt; Gemini populates formulas and chart types against your existing data',
      'After a client meeting in Meet, receive an AI-generated action-item list and draft follow-up email within five minutes',
    ],
    watchOut: 'Quality degrades on highly specialised or quantitative reasoning tasks; better for synthesis and drafting than for novel analysis.',
    auNote: 'Gemini is included in all Google Workspace Business and Enterprise plans sold in Australia from 2025 onward — no separate AI licence needed. Pricing is in USD; AUD billing varies by reseller.',
    docHref: 'https://workspace.google.com/solutions/ai/',
    docLabel: 'Google Workspace AI',
  },
  {
    id: 'copilot',
    name: 'Microsoft 365 Copilot',
    vendor: 'Microsoft',
    strength: 'The AU enterprise default — native in the apps most organisations already pay for, with the clearest compliance story.',
    features: [
      'Native in Word, Excel, PowerPoint, Outlook, Teams, OneNote, Loop, and Whiteboard — meets users where the work already lives',
      'Copilot Agents — scoped AI assistants that automate business processes (help-desk tickets, HR queries) using Microsoft Graph data',
      'Prompts and responses are not used to train Microsoft\'s foundation LLMs; data residency commitments apply from March 2024',
      'Copilot Search — universal semantic search across M365 and connected third-party sources; honors existing SharePoint permissions',
    ],
    useCases: [
      'Summarise a 30-day Teams channel thread and extract open action items before a project stand-up',
      'In Outlook, draft a client-ready response grounded in the last three email threads — one prompt, no copy-pasting',
      'Use a Copilot Agent to query SharePoint and surface the correct version of a compliance policy for an APRA audit',
    ],
    watchOut: 'Requires an add-on licence (~AUD $40–45 /user/month) on top of existing M365 subscriptions; cost is the most common barrier to full-org deployment.',
    auNote: 'The dominant enterprise AI platform across Australian government and large corporates. Aligns with the Privacy Act 1988 (Australian Privacy Principles) and supports Essential Eight controls via native M365 security tooling. Microsoft publishes Essential Eight mapping guidance.',
    docHref: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview',
    docLabel: 'Microsoft Learn — Copilot overview',
  },
]

/**
 * Supporting tools — not platforms themselves, but high-value companions
 * for research-heavy or document-heavy work.
 */
export const supportingTools: SupportingTool[] = [
  {
    name: 'Perplexity',
    vendor: 'Perplexity AI',
    blurb: 'Cited, source-linked answers to research questions; Enterprise Pro adds SOC 2 compliance, SSO, internal file search, and audit logs.',
    href: 'https://www.perplexity.ai/help-center/en/articles/10352973-what-is-enterprise-pro',
  },
  {
    name: 'NotebookLM',
    vendor: 'Google',
    blurb: 'Grounded synthesis over your own documents — upload PDFs, board papers, or transcripts and interrogate them with zero hallucination risk on content outside your sources.',
    href: 'https://docs.cloud.google.com/gemini/enterprise/notebooklm-enterprise/docs/set-up-notebooklm',
  },
]

/**
 * Cross-platform capability comparison.
 *
 * Cell text is 1–3 words. `best` marks the clearly strongest platform on
 * that dimension — left empty where the field is genuinely contested.
 * Gold highlight is rare by design.
 */
export const capabilityRows: CapabilityRow[] = [
  {
    dimension: 'Desktop autonomy',
    values: {
      claude:   'Strong (Routines)',
      chatgpt:  'Strong (Agent Mode)',
      gemini:   'Emerging',
      copilot:  'Via agents',
    },
    // Both Claude and ChatGPT are strong; omit `best` — genuinely contested
  },
  {
    dimension: 'Email / inbox',
    values: {
      claude:   '—',
      chatgpt:  'Via connector',
      gemini:   'Native (Gmail)',
      copilot:  'Native (Outlook)',
    },
    // Split between two native integrations; omit `best`
  },
  {
    dimension: 'Document search',
    values: {
      claude:   'Project context',
      chatgpt:  'Company knowledge',
      gemini:   'Drive knowledge base',
      copilot:  'Copilot Search',
    },
    best: 'copilot',
  },
  {
    dimension: 'Scheduling / Routines',
    values: {
      claude:   'Cloud Routines',
      chatgpt:  'Manual / API',
      gemini:   'Google Studio',
      copilot:  'Power Automate',
    },
    best: 'claude',
  },
  {
    dimension: 'Meeting notes',
    values: {
      claude:   '—',
      chatgpt:  'Via connector',
      gemini:   'Native (Meet)',
      copilot:  'Native (Teams)',
    },
    // Split between two strong native options; omit `best`
  },
  {
    dimension: 'Deep research',
    values: {
      claude:   'Strong',
      chatgpt:  'Native (Deep Research)',
      gemini:   'Moderate',
      copilot:  'Via Bing grounding',
    },
    best: 'chatgpt',
  },
  {
    dimension: 'Native app embedding',
    values: {
      claude:   'Browser / API',
      chatgpt:  'Browser / API',
      gemini:   'Full Workspace suite',
      copilot:  'Full M365 suite',
    },
    // Copilot and Gemini both have full native embedding; omit `best`
  },
  {
    dimension: 'AU enterprise compliance',
    values: {
      claude:   'API / Bedrock',
      chatgpt:  'DPA compliant',
      gemini:   'Workspace terms',
      copilot:  'Privacy Act aligned',
    },
    best: 'copilot',
  },
]
