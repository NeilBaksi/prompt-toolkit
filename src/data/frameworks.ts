import type { RaceItem, Guardrail } from '../types'

/** The RACE framework — every prompt in the toolkit uses all four ingredients. */
export const raceItems: RaceItem[] = [
  {
    letter: 'R',
    title: 'Role',
    body: '"Act as a McKinsey associate" — sets tone, depth, and vocabulary in one line.',
  },
  {
    letter: 'A',
    title: 'Action',
    body: '"Write a 3-bullet summary" beats "summarize this." Specificity in the verb and format is everything.',
  },
  {
    letter: 'C',
    title: 'Context',
    body: 'Audience, constraints, what decision this informs. Less context = more hallucination.',
  },
  {
    letter: 'E',
    title: 'Example / Format',
    body: 'Show a template. One good example cuts revision cycles by 60–80%.',
  },
]

/** The Non-Negotiables — the guardrails that make AI fluency safe. */
export const guardrails: Guardrail[] = [
  {
    title: 'Never paste confidential data',
    body: 'Client names, deal terms, non-public financials — use placeholders like [Company A] or [Target Revenue]. Ask your manager in week one: "What AI tools are approved here?"',
  },
  {
    title: 'Verify every number',
    body: "AI sounds certain when it's wrong. Any statistic, citation, or named fact should hit a primary source before it goes in a deliverable. One wrong stat in a client deck can define your placement.",
  },
  {
    title: 'Your name, your work',
    body: 'Every output under your name is your responsibility. AI is a drafting tool, not an author. Read it, edit it, own it — reviewers will ask about it in real time.',
  },
  {
    title: 'First draft ≠ final draft',
    body: 'The best AI users iterate: "Make this more concise." "Rewrite for a skeptical CFO." Treat it like a smart junior analyst — guide it, don\'t just accept the first output.',
  },
]
