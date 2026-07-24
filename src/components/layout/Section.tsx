import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionProps {
  id: string
  /** Editorial numeral, e.g. "01" */
  index: string
  title: string
  intro?: string
  children: ReactNode
}

/**
 * Editorial section shell: a big numeral + kicker rule, a display heading, an
 * optional intro, then content. Asymmetric on desktop (numeral column + body).
 */
export function Section({ id, index, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-rule py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-3">
              <div className="flex items-baseline gap-3 lg:flex-col lg:gap-1">
                <span className="font-display text-5xl font-black leading-none text-gold sm:text-6xl">
                  {index}
                </span>
                <span className="kicker lg:mt-3">Section</span>
              </div>
            </div>
            <div className="lg:col-span-9">
              <h2 className="text-display-lg font-black text-ink">{title}</h2>
              {intro && (
                <p className="mt-4 max-w-prose text-base leading-relaxed text-muted sm:text-lg">
                  {intro}
                </p>
              )}
            </div>
          </div>
        </Reveal>
        <div className="mt-10 sm:mt-12 lg:mt-14 lg:pl-[25%]">{children}</div>
      </div>
    </section>
  )
}
