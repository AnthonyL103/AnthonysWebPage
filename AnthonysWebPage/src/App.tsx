import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { StatusBar } from './components/StatusBar'
import { Stats } from './components/Stats'
import { SmoothScrollProvider } from './hooks/useSmoothScroll'

function App() {
  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-bg text-ink">
        <div className="hacker-grid" />
        <div className="hacker-vignette" />
        <Nav />
        <main className="relative z-10">
          <Hero />
          <Stats />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <div className="relative z-10">
          <StatusBar />
        </div>
      </div>
    </SmoothScrollProvider>
  )
}

export default App
