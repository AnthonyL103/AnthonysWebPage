import { useEffect, useState } from 'react'
import { nav, profile } from '../data'
import { useScrollY } from '../hooks/useScrollY'
import { useSmoothScroll } from '../hooks/smoothScrollContext'

/** Editor-tab-strip nav: scroll-progress caret, active-file highlight, live status pill. */
export function Nav() {
  const y = useScrollY()
  const { scrollTo } = useSmoothScroll()
  const [active, setActive] = useState('home')
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    setProgress(max > 0 ? y / max : 0)
    const probe = y + window.innerHeight * 0.35
    let current = 'home'
    for (const { id } of nav) {
      const el = document.getElementById(id)
      if (el && el.offsetTop <= probe) current = id
    }
    setActive(current)
  }, [y])

  const go = (id: string) => {
    scrollTo(`#${id}`)
    setMenuOpen(false)
  }

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 h-[2px] bg-line/40">
        <div className="h-full origin-left bg-accent shadow-[0_0_8px_rgba(61,220,132,0.7)]" style={{ transform: `scaleX(${progress})` }} />
      </div>

      <header className="fixed inset-x-0 top-[2px] z-40 border-b border-line bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 text-sm sm:px-6">
          <button onClick={() => go('home')} className="flex shrink-0 items-center gap-2 font-semibold text-ink">
            <span className="text-accent">~/</span>
            {profile.handle}
          </button>

          <nav className="hidden items-center gap-0.5 md:flex">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className={`group flex items-center gap-1.5 rounded-t-md border-b-2 px-3 py-3.5 text-xs transition-colors ${
                  active === n.id ? 'border-accent text-ink' : 'border-transparent text-muted hover:text-ink'
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${active === n.id ? 'bg-accent' : 'bg-muted/40 group-hover:bg-muted'}`} />
                {n.label}
              </button>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-2 text-xs text-muted lg:flex">
            <span className="h-1.5 w-1.5 shrink-0 animate-pulse-dot rounded-full bg-accent" />
            <span className="whitespace-nowrap">{profile.status}</span>
          </div>

          <button onClick={() => setMenuOpen((v) => !v)} className="text-muted md:hidden" aria-label="Toggle menu">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-line bg-bg/95 md:hidden">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className={`flex w-full items-center gap-2 px-5 py-3 text-left text-sm ${active === n.id ? 'text-accent' : 'text-muted'}`}
              >
                <span className="text-xs text-muted">$</span> {n.label}
              </button>
            ))}
          </nav>
        )}
      </header>
    </>
  )
}
