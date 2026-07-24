export type PromptKind = 'primer' | 'task' | 'polish'

export interface Prompt {
  /** PRIMER / TASK / POLISH badge */
  kind: PromptKind
  /** Card title, e.g. "Slide Narrative Builder" */
  title: string
  /** The copyable prompt body — copied verbatim to the clipboard */
  body: string
  /** Optional explanatory footnote shown under the prompt (not copied) */
  note?: string
}

export interface Category {
  id: string
  /** Tab label, e.g. "Consulting" */
  label: string
  /** Short intro shown above the category's prompts */
  intro?: string
  prompts: Prompt[]
}

export interface RaceItem {
  letter: string
  title: string
  body: string
}

export interface Guardrail {
  title: string
  body: string
}
