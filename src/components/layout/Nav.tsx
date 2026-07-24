import { useEffect, useState } from 'react'
import clsx from 'clsx'

const LINKS = [
  { href: '#frameworks', label: 'Frameworks' },
  { href: '#primers', label: 'Primers' },
  { href: '#universal', label: 'Universal' },
  { href: '#tools', label: 'Tools' },
  { href: '#non-negotiables', label: 'Non-Negotiables' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'sticky top-0 z-40 border-b transition-colors duration-300',
        scrolled ? 'border-rule bg-paper/85 backdrop-blur-md' : 'border-transparent bg-transparent',
      )}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a
          href="#top"
          className="flex items-baseline gap-2 font-display text-lg font-black tracking-tight text-ink"
        >
          Neil Baksi
          <span className="font-mono text-[0.62rem] font-normal uppercase tracking-[0.2em] text-muted">
            Prompt Toolkit
          </span>
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile: scroll-snap chip row so every section is reachable, not just Prompts */}
      <ul
        aria-label="Sections"
        className="-mb-px flex snap-x snap-mandatory gap-2 overflow-x-auto border-t border-rule/60 px-5 py-2 [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden"
      >
        {LINKS.map((l) => (
          <li key={l.href} className="shrink-0 snap-start">
            <a
              href={l.href}
              className="flex min-h-[44px] items-center whitespace-nowrap rounded-full border border-rule px-4 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted transition-colors hover:border-ink hover:text-ink"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
