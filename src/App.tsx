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
      <Nav />
      <main>
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
