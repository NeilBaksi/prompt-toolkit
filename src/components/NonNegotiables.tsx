import { ShieldAlert, Hash, PenLine, RefreshCw } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section } from './layout/Section'
import { Reveal } from './layout/Reveal'
import { guardrails } from '../data/frameworks'

const ICONS: LucideIcon[] = [ShieldAlert, Hash, PenLine, RefreshCw]

export function NonNegotiables() {
  return (
    <Section
      id="non-negotiables"
      index="04"
      title="The Non-Negotiables"
      intro="Fluency in AI also means knowing exactly where the lines are."
    >
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-rule sm:grid-cols-2">
        {guardrails.map((g, i) => {
          const Icon = ICONS[i % ICONS.length]
          return (
            <Reveal key={g.title} delay={i * 0.06} className="bg-paper">
              <div className="flex h-full flex-col gap-3 p-6 sm:p-7">
                <Icon size={22} strokeWidth={1.75} className="text-gold" aria-hidden />
                <h3 className="font-display text-lg font-bold text-ink">{g.title}</h3>
                <p className="text-[0.92rem] leading-relaxed text-muted">{g.body}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
