import { ToastProvider } from './components/Toast'
import { Nav } from './components/layout/Nav'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/Hero'
import { RaceFramework } from './components/RaceFramework'
import { PromptExplorer } from './components/PromptExplorer'
import { UniversalPrompts } from './components/UniversalPrompts'
import { NonNegotiables } from './components/NonNegotiables'

export default function App() {
  return (
    <ToastProvider>
      <a
        href="#main"
        className="sr-only rounded-full bg-ink px-4 py-2 font-mono text-sm text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <RaceFramework />
        <PromptExplorer />
        <UniversalPrompts />
        <NonNegotiables />
      </main>
      <Footer />
    </ToastProvider>
  )
}
