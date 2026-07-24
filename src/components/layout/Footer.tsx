export function Footer() {
  return (
    <footer className="border-t border-rule py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl font-black text-ink">AI as Your Analyst</p>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">
              A prompt toolkit for you. Built and maintained by Neil Baksi. Copy anything, make it yours.
            </p>
          </div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
            © {new Date().getFullYear()} Neil Baksi
          </p>
        </div>
      </div>
    </footer>
  )
}
