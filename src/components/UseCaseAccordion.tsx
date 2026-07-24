import { useState } from 'react'
import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Check, Copy } from 'lucide-react'
import clsx from 'clsx'
import type { ToolUseCase } from '../types'
import { useCopy } from '../hooks/useCopy'

/** Wrap [bracket] placeholders in the editorial token style; leave the rest plain. */
function renderPrompt(text: string): ReactNode[] {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith('[') && part.endsWith(']') ? (
      <span
        key={i}
        className="rounded bg-paper-2 px-1 py-0.5 font-mono text-[0.9em] text-ink"
      >
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

function UseCaseItem({ item, id }: { item: ToolUseCase; id: string }) {
  const [open, setOpen] = useState(false)
  const { copied, copy } = useCopy()
  const panelId = `${id}-panel`
  const btnId = `${id}-btn`

  return (
    <div className="border-b border-rule">
      <h4>
        <button
          type="button"
          id={btnId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex min-h-[44px] w-full items-center justify-between gap-4 py-1 text-left"
        >
          <span className="font-body text-[0.95rem] font-semibold text-ink">{item.title}</span>
          <ChevronDown
            size={17}
            strokeWidth={2}
            aria-hidden
            className={clsx(
              'shrink-0 text-muted transition-transform duration-300 ease-out-expo',
              open && 'rotate-180',
            )}
          />
        </button>
      </h4>

      {/* grid-template-rows 0fr→1fr — animates open/close without touching height */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className="grid transition-[grid-template-rows] duration-300 ease-out-expo"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="relative mb-4 mt-1 rounded-lg border border-rule bg-paper-2/40">
            <pre className="prompt-body px-4 py-4 pr-[4.75rem]">{renderPrompt(item.prompt)}</pre>
            <motion.button
              type="button"
              onClick={() => copy(item.prompt)}
              whileTap={{ scale: 0.97 }}
              tabIndex={open ? 0 : -1}
              aria-label={copied ? 'Copied' : `Copy the "${item.title}" prompt`}
              className={clsx(
                'absolute right-2.5 top-2.5 flex min-h-[44px] items-center rounded-full border px-3.5 py-2.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] transition-colors duration-200',
                copied
                  ? 'border-gold bg-gold/10 text-gold-deep'
                  : 'border-ink bg-ink text-paper hover:bg-transparent hover:text-ink',
              )}
            >
              <span className="flex items-center gap-1.5">
                {copied ? <Check size={12} strokeWidth={2.5} /> : <Copy size={12} strokeWidth={2} />}
                {copied ? 'Copied' : 'Copy'}
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Collapsible list of copyable, real-world prompt templates for one platform. */
export function UseCaseAccordion({ items, idBase }: { items: ToolUseCase[]; idBase: string }) {
  return (
    <div className="border-t border-rule">
      {items.map((item, i) => (
        <UseCaseItem key={item.title} item={item} id={`${idBase}-uc-${i}`} />
      ))}
    </div>
  )
}
