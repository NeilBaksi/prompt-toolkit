import { motion } from 'framer-motion'
import { Check, Copy } from 'lucide-react'
import clsx from 'clsx'
import type { Prompt } from '../types'
import { useCopy } from '../hooks/useCopy'

const KIND_LABEL: Record<Prompt['kind'], string> = {
  primer: 'Primer',
  task: 'Task',
  polish: 'Polish',
}

// Kind is signalled by label + a small dot (not colour alone — a11y).
const KIND_DOT: Record<Prompt['kind'], string> = {
  primer: 'bg-gold',
  task: 'bg-ink',
  polish: 'bg-gold-deep',
}

export function PromptCard({ prompt }: { prompt: Prompt }) {
  const { copied, copy } = useCopy()

  return (
    <article className="group rounded-lg border border-rule bg-paper transition-shadow duration-200 hover:shadow-[0_2px_24px_-8px_rgba(14,12,10,0.18)]">
      <header className="flex items-start justify-between gap-3 border-b border-rule px-5 py-4">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
            <span aria-hidden className={clsx('h-1.5 w-1.5 rounded-full', KIND_DOT[prompt.kind])} />
            {KIND_LABEL[prompt.kind]}
          </span>
          <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-ink">
            {prompt.title}
          </h3>
        </div>
        <motion.button
          type="button"
          onClick={() => copy(prompt.body)}
          whileTap={{ scale: 0.97 }}
          aria-label={copied ? 'Copied' : `Copy the "${prompt.title}" prompt`}
          className={clsx(
            'flex min-h-[40px] shrink-0 items-center rounded-full border px-3.5 py-2.5 font-mono text-[0.7rem] uppercase tracking-[0.1em] transition-colors duration-200',
            copied
              ? 'border-gold bg-gold/10 text-gold-deep'
              : 'border-ink bg-ink text-paper hover:bg-transparent hover:text-ink',
          )}
        >
          <span className="flex items-center gap-1.5">
            {copied ? <Check size={13} strokeWidth={2.5} /> : <Copy size={13} strokeWidth={2} />}
            {copied ? 'Copied' : 'Copy'}
          </span>
        </motion.button>
      </header>

      <pre className="prompt-body px-5 py-4">{prompt.body}</pre>

      {prompt.note && (
        <p className="border-t border-dashed border-rule px-5 py-3.5 text-sm leading-relaxed text-muted">
          {prompt.note}
        </p>
      )}
    </article>
  )
}
