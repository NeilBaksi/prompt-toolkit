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

// ─── The Tools section ────────────────────────────────────────────────────────

/** Identifiers for the four primary enterprise AI platforms. */
export type ToolId = 'claude' | 'chatgpt' | 'gemini' | 'copilot'

/** A copyable, real-world prompt template for a platform. */
export interface ToolUseCase {
  /** Short workflow title, e.g. "Morning email triage" */
  title: string
  /** The copyable prompt body — copied verbatim; may carry [bracket] placeholders. */
  prompt: string
}

/** A primary enterprise AI platform with Australian-market context. */
export interface ToolPlatform {
  id: ToolId
  /** Display name, e.g. "Claude" */
  name: string
  /** Vendor / developer, e.g. "Anthropic" */
  vendor: string
  /** One-line headline of what this platform does better than the rest. */
  strength: string
  /** 3–4 concrete, current (2026) features. No marketing adjectives. */
  features: string[]
  /** 2–3 concrete analyst / intern use cases. */
  useCases: string[]
  /** Copyable, real-world prompt templates shown in the "Real use cases" accordion. */
  realUseCases: ToolUseCase[]
  /** One caution — what this platform does poorly or where it trips up. */
  watchOut: string
  /** Australian availability and/or enterprise relevance note. */
  auNote: string
  /** Verified official documentation URL. */
  docHref: string
  /** Short label for the link, e.g. "Anthropic docs" */
  docLabel: string
}

/** A complementary tool that pairs with the primary platforms. */
export interface SupportingTool {
  name: string
  vendor: string
  /** One line on what it does and why it belongs in the toolkit. */
  blurb: string
  /** Verified official URL. */
  href: string
}

/** One row in the cross-platform capability comparison table. */
export interface CapabilityRow {
  /** The dimension being compared, e.g. "Meeting notes" */
  dimension: string
  /** Short cell text (1–3 words) for each primary platform. */
  values: Record<ToolId, string>
  /**
   * The platform whose cell earns the rare gold highlight.
   * Omit if no platform is clearly strongest on this dimension.
   */
  best?: ToolId
}
