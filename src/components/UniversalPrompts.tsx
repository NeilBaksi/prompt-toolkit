import { Section } from './layout/Section'
import { Reveal } from './layout/Reveal'
import { PromptCard } from './PromptCard'
import { universalPrompts } from '../data/prompts'

export function UniversalPrompts() {
  return (
    <Section
      id="universal"
      index="03"
      title="Universal Prompts — Every Track"
      intro="These work regardless of industry. Reach for them daily."
    >
      <div className="grid grid-cols-1 gap-5">
        {universalPrompts.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <PromptCard prompt={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
