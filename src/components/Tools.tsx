import { ExternalLink, AlertTriangle, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react'
import { Section } from './layout/Section'
import { Reveal } from './layout/Reveal'
import { toolPlatforms, supportingTools, capabilityRows } from '../data/tools'
import { UseCaseAccordion } from './UseCaseAccordion'
import type { ToolId } from '../types'

/** Roman numeral labels for editorial texture — one per platform block. */
const ORDINALS = ['I', 'II', 'III', 'IV'] as const

/** Column order for the capability matrix. */
const PLATFORM_ORDER: ToolId[] = ['claude', 'chatgpt', 'gemini', 'copilot']

export function Tools() {
  return (
    <Section
      id="tools"
      index="04"
      title="The Tools"
      intro="Before you reach for a prompt, choose the right window — each platform has a distinct character, and in Australian enterprise, the default is rarely the best fit."
    >
      {/* ── (a) PRIMARY PLATFORMS ──────────────────────────────────────── */}
      <div>
        {toolPlatforms.map((platform, i) => (
          <Reveal key={platform.id} delay={i * 0.07}>
            {/* hairline divider between blocks (not before first) */}
            {i > 0 && <div className="border-t border-rule" aria-hidden />}

            <article className="py-10 sm:py-12">
              {/* Header row: ordinal (display texture) + name + vendor */}
              <div className="flex items-start gap-5 sm:gap-7">
                <span
                  aria-hidden
                  className="font-display text-[3.5rem] font-black leading-none text-rule sm:text-[4.5rem] lg:text-[5rem] select-none shrink-0"
                >
                  {ORDINALS[i]}
                </span>
                <div className="pt-1 sm:pt-2">
                  <h3 className="font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
                    {platform.name}
                  </h3>
                  <p className="kicker mt-1">{platform.vendor}</p>
                  <p className="mt-3 max-w-prose text-[0.97rem] leading-relaxed text-ink-soft">
                    {platform.strength}
                  </p>
                </div>
              </div>

              {/* Features + use cases: two-column on sm+ */}
              <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                {/* Features column */}
                <div>
                  <p className="kicker mb-3">Features</p>
                  <ul className="space-y-2.5">
                    {platform.features.map((feat, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-[0.92rem] leading-relaxed text-muted">
                        {/* subtle hairline bullet */}
                        <span aria-hidden className="mt-[0.45em] block h-px w-3 shrink-0 bg-rule" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use cases column — distinct visual treatment */}
                <div>
                  <p className="kicker mb-3">In practice</p>
                  <ol className="space-y-3">
                    {platform.useCases.map((uc, ui) => (
                      <li key={ui} className="flex items-start gap-3 text-[0.92rem] leading-relaxed text-muted">
                        <span
                          aria-hidden
                          className="mt-[0.1em] shrink-0 font-mono text-[0.72rem] font-medium text-muted"
                        >
                          {String(ui + 1).padStart(2, '0')}
                        </span>
                        <span>{uc}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Real use cases — copyable prompt templates in an accordion */}
              {platform.realUseCases.length > 0 && (
                <div className="mt-8">
                  <p className="kicker mb-1">Real use cases</p>
                  <p className="mb-2 text-[0.85rem] leading-relaxed text-muted">
                    Ready to use — replace the{' '}
                    <span className="font-mono text-[0.85em] text-gold-deep">[brackets]</span> with
                    your own context.
                  </p>
                  <UseCaseAccordion items={platform.realUseCases} idBase={platform.id} />
                </div>
              )}

              {/* Footer row: Watch out + AU note + doc link */}
              <div className="mt-6 space-y-3 border-t border-rule pt-5 sm:flex sm:items-start sm:gap-8 sm:space-y-0">
                {/* Watch out */}
                <p className="flex items-start gap-2 text-[0.88rem] leading-snug text-muted sm:max-w-[42ch]">
                  <AlertTriangle
                    size={14}
                    strokeWidth={1.75}
                    className="mt-[0.2em] shrink-0 text-muted"
                    aria-label="Watch out"
                  />
                  <span>
                    <span className="font-mono text-[0.72rem] font-semibold uppercase tracking-widest text-ink-soft">
                      Note{' '}
                    </span>
                    {platform.watchOut}
                  </span>
                </p>

                {/* AU note */}
                <p className="flex items-start gap-2 text-[0.88rem] leading-snug text-muted sm:max-w-[40ch]">
                  <MapPin
                    size={14}
                    strokeWidth={1.75}
                    className="mt-[0.2em] shrink-0 text-muted"
                    aria-label="Australian context"
                  />
                  {platform.auNote}
                </p>

                {/* Doc link */}
                <a
                  href={platform.docHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[0.78rem] font-medium uppercase tracking-wider text-ink-soft underline-offset-4 hover:text-gold-deep focus-visible:text-gold-deep sm:ml-auto sm:shrink-0"
                  style={{ minHeight: '44px', alignItems: 'center' }}
                >
                  {platform.docLabel}
                  <ExternalLink size={12} strokeWidth={1.75} aria-hidden />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* ── (b) CAPABILITY MATRIX ─────────────────────────────────────── */}
      <Reveal delay={0.05}>
        <div className="mt-10 border-t border-rule pt-10 sm:mt-14 sm:pt-14">
          <p className="kicker mb-5">Capability comparison</p>

          {/* ── Desktop table (sm+) ── */}
          <div className="hidden sm:block overflow-x-auto">
            <table
              className="w-full border-collapse text-left"
              aria-label="Cross-platform capability comparison"
            >
              <caption className="sr-only">
                Capability comparison across Claude, ChatGPT Enterprise, Gemini for Google Workspace, and Microsoft 365 Copilot. Gold highlight marks the strongest platform per dimension.
              </caption>
              <thead>
                <tr className="border-b border-rule">
                  <th
                    scope="col"
                    className="pb-3 pr-6 font-mono text-[0.72rem] font-medium uppercase tracking-widest text-muted"
                  >
                    Dimension
                  </th>
                  {toolPlatforms.map((p) => (
                    <th
                      key={p.id}
                      scope="col"
                      className="pb-3 pr-4 font-mono text-[0.72rem] font-medium uppercase tracking-widest text-ink-soft last:pr-0"
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {capabilityRows.map((row, ri) => (
                  <tr
                    key={row.dimension}
                    className={ri % 2 === 1 ? 'bg-paper-2/50' : ''}
                  >
                    <th
                      scope="row"
                      className="py-3 pr-6 text-left font-body text-[0.875rem] font-medium text-ink-soft"
                    >
                      {row.dimension}
                    </th>
                    {PLATFORM_ORDER.map((pid) => {
                      const isBest = row.best === pid
                      return (
                        <td
                          key={pid}
                          className={[
                            'py-3 pr-4 font-body text-[0.875rem] last:pr-0',
                            isBest
                              ? 'font-semibold text-gold-deep'
                              : 'text-muted',
                          ].join(' ')}
                        >
                          {isBest && (
                            <span
                              aria-label="Best in class"
                              className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gold align-middle"
                            />
                          )}
                          {row.values[pid]}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 font-mono text-[0.7rem] text-muted">
              Gold dot marks the strongest platform on that dimension. Contested rows carry no mark.
            </p>
          </div>

          {/* ── Mobile stacked panels (hidden sm+) ── */}
          <div className="space-y-6 sm:hidden">
            {toolPlatforms.map((platform) => (
              <div key={platform.id} className="rounded border border-rule bg-paper-2/40 p-4">
                <p className="font-display text-base font-bold text-ink">{platform.name}</p>
                <dl className="mt-3 space-y-2">
                  {capabilityRows.map((row) => {
                    const isBest = row.best === platform.id
                    return (
                      <div key={row.dimension} className="flex items-baseline gap-2">
                        <dt className="w-[45%] shrink-0 font-mono text-[0.68rem] text-muted">
                          {row.dimension}
                        </dt>
                        <dd
                          className={[
                            'font-body text-[0.82rem]',
                            isBest ? 'font-semibold text-gold-deep' : 'text-ink-soft',
                          ].join(' ')}
                        >
                          {isBest && (
                            <span
                              aria-label="Best in class"
                              className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-gold align-middle"
                            />
                          )}
                          {row.values[platform.id]}
                        </dd>
                      </div>
                    )
                  })}
                </dl>
              </div>
            ))}
            <p className="font-mono text-[0.7rem] text-muted">
              Gold dot marks the strongest platform on that dimension.
            </p>
          </div>
        </div>
      </Reveal>

      {/* ── (c) SUPPORTING TOOLS ─────────────────────────────────────── */}
      <Reveal delay={0.06}>
        <div className="mt-10 border-t border-rule pt-10 sm:mt-14 sm:pt-14">
          <p className="kicker mb-1">Also worth knowing</p>
          <p className="mb-6 text-[0.92rem] leading-relaxed text-muted">
            Not full platforms, but high-value companions for research-heavy or document-heavy work.
          </p>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-rule sm:grid-cols-2">
            {supportingTools.map((tool) => (
              <div key={tool.name} className="bg-paper p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-display text-lg font-bold text-ink">{tool.name}</h4>
                    <p className="kicker mt-0.5">{tool.vendor}</p>
                  </div>
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex shrink-0 items-center gap-1 font-mono text-[0.75rem] font-medium text-muted underline-offset-4 hover:text-gold-deep"
                    style={{ minHeight: '44px' }}
                    aria-label={`${tool.name} documentation (opens in new tab)`}
                  >
                    Docs
                    <ArrowUpRight size={12} strokeWidth={1.75} aria-hidden />
                  </a>
                </div>
                <p className="mt-3 max-w-prose text-[0.88rem] leading-relaxed text-muted">{tool.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ── (d) DATA SOVEREIGNTY CALLOUT ─────────────────────────────── */}
      <Reveal delay={0.07}>
        <aside
          aria-label="Australian data sovereignty note"
          className="mt-10 border-t-2 border-gold bg-paper-2 p-6 sm:mt-14 sm:p-8"
        >
          <div className="flex items-start gap-4">
            <ShieldCheck
              size={20}
              strokeWidth={1.5}
              className="mt-0.5 shrink-0 text-gold-deep"
              aria-hidden
            />
            <div>
              <p className="font-display text-lg font-bold text-ink sm:text-xl">
                Data sovereignty is not a checkbox.
              </p>
              <p className="mt-3 max-w-prose text-[0.92rem] leading-relaxed text-muted">
                In week one at any Australian employer, ask one question:{' '}
                <em className="not-italic font-medium text-ink-soft">
                  "Which AI tools are approved here, and where is my data processed?"
                </em>{' '}
                The answer shapes every other decision in this starter pack — because your prompt is
                processed on inference infrastructure that, in most cases, sits outside Australia.
              </p>
              <p className="mt-4 max-w-prose text-[0.92rem] leading-relaxed text-muted">
                Under the <span className="font-medium text-ink-soft">Privacy Act 1988</span> your
                organisation stays accountable for personal information even after it crosses a
                border, and the <span className="font-medium text-ink-soft">Essential Eight</span>{' '}
                reaches into AI tooling too. Of the four platforms above, Microsoft 365 Copilot
                carries the most detailed Australian compliance mapping — which is a large part of
                why it dominates local enterprise.
              </p>
            </div>
          </div>
        </aside>
      </Reveal>
    </Section>
  )
}
