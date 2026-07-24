import headshot from '../../assets/headshot.jpg'

export function Footer() {
  return (
    <footer className="border-t border-rule py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl font-black text-ink">AI as Your Analyst</p>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">
              A prompt starter pack for you. Copy anything, make it yours.
            </p>

            {/* Byline: circular headshot beside the maker's name */}
            <div className="mt-5 flex items-center gap-3">
              <img
                src={headshot}
                alt="Neil Baksi"
                width={44}
                height={44}
                loading="lazy"
                decoding="async"
                className="h-11 w-11 rounded-full border border-rule object-cover"
              />
              <div className="leading-tight">
                <p className="font-display text-sm font-bold text-ink">Neil Baksi</p>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                  Built &amp; maintained
                </p>
              </div>
            </div>
          </div>

          <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
            © {new Date().getFullYear()} Prompt Starter Pack
          </p>
        </div>
      </div>
    </footer>
  )
}
