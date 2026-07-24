import { useState } from 'react'
import type { KeyboardEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import { Section } from './layout/Section'
import { PromptCard } from './PromptCard'
import { categories } from '../data/prompts'

const EASE = [0.16, 1, 0.3, 1] as const

export function PromptExplorer() {
  const [active, setActive] = useState(categories[0].id)
  const current = categories.find((c) => c.id === active) ?? categories[0]

  const onTabKeyDown = (e: KeyboardEvent, index: number) => {
    let next = index
    if (e.key === 'ArrowRight') next = (index + 1) % categories.length
    else if (e.key === 'ArrowLeft') next = (index - 1 + categories.length) % categories.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = categories.length - 1
    else return
    e.preventDefault()
    setActive(categories[next].id)
    document.getElementById(`tab-${categories[next].id}`)?.focus()
  }

  return (
    <Section
      id="primers"
      index="02"
      title="Context Primers & Prompts"
      intro="Paste a primer as the first message in a new chat — AI stays in character for the whole session. Then follow up with any task. Pick your track:"
    >
      {/* Tab row — horizontal scroll-snap on small screens, no wrap/clipping */}
      <div
        role="tablist"
        aria-label="Prompt categories"
        className="-mx-5 flex gap-2 overflow-x-auto scroll-smooth px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((c, i) => {
          const selected = c.id === active
          return (
            <button
              key={c.id}
              id={`tab-${c.id}`}
              role="tab"
              aria-selected={selected}
              aria-controls={`panel-${c.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(c.id)}
              onKeyDown={(e) => onTabKeyDown(e, i)}
              className={clsx(
                'flex min-h-[44px] shrink-0 snap-start items-center whitespace-nowrap rounded-full border px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] transition-colors duration-200',
                selected
                  ? 'border-ink bg-ink text-paper'
                  : 'border-rule text-muted hover:border-ink hover:text-ink',
              )}
            >
              {c.label}
            </button>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          id={`panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${current.id}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="mt-8"
        >
          {current.intro && (
            <p className="mb-6 max-w-prose text-[0.95rem] leading-relaxed text-muted">
              {current.intro}
            </p>
          )}
          <div className="grid grid-cols-1 gap-5">
            {current.prompts.map((p) => (
              <PromptCard key={p.title} prompt={p} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}
