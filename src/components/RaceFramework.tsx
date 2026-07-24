import { Section } from './layout/Section'
import { Reveal } from './layout/Reveal'
import { raceItems } from '../data/frameworks'

export function RaceFramework() {
  return (
    <Section
      id="frameworks"
      index="01"
      title="The RACE Framework"
      intro="Every prompt in this starter pack uses all four ingredients. Learn to spot them — then build your own."
    >
      <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-rule sm:grid-cols-2">
        {raceItems.map((it, i) => (
          <Reveal as="li" key={it.letter} delay={i * 0.06} className="bg-paper">
            <div className="flex h-full gap-5 p-6 sm:p-7">
              <span
                aria-hidden
                className="font-display text-5xl font-black leading-none text-gold sm:text-6xl"
              >
                {it.letter}
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-ink">{it.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{it.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
