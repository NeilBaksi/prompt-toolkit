import { motion } from 'framer-motion'
import { ArrowDown, Clipboard } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:pt-28">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="kicker">
            A Prompt Toolkit · by Neil Baksi
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 text-display-xl font-black text-ink"
          >
            AI as Your
            <span className="block italic text-gold-deep">Analyst</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-prose text-lg leading-relaxed text-ink-soft sm:text-xl"
          >
            A live prompt toolkit. Hit <span className="font-mono text-ink">Copy</span> on any
            prompt, paste it into Claude, ChatGPT or Gemini, and swap the{' '}
            <span className="rounded bg-paper-2 px-1.5 py-0.5 font-mono text-[0.85em] text-gold-deep">
              [brackets]
            </span>{' '}
            for your real context.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#primers"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-mono text-sm uppercase tracking-[0.12em] text-paper transition-transform duration-200 ease-out-expo hover:-translate-y-0.5"
            >
              <Clipboard size={16} strokeWidth={2} />
              Browse the prompts
            </a>
            <a
              href="#frameworks"
              className="inline-flex items-center gap-2 rounded-full border border-rule px-5 py-3 font-mono text-sm uppercase tracking-[0.12em] text-muted transition-colors hover:border-ink hover:text-ink"
            >
              Start with the framework
              <ArrowDown size={15} strokeWidth={2} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
