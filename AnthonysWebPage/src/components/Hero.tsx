import { useRef, type CSSProperties } from 'react'
import DecryptedText from '../utils/decryptedtext'
import TextType from '../utils/texttype'
import { profile } from '../data'
import { useSmoothScroll } from '../hooks/smoothScrollContext'
import { MatrixRain } from './MatrixRain'

const socials = [
  {
    label: 'GitHub',
    href: profile.github,
    path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
  },
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
]

export function Hero() {
  const stage = useRef<HTMLDivElement>(null)
  const { scrollTo } = useSmoothScroll()

  const onMove = (e: React.PointerEvent) => {
    const el = stage.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <section
      id="home"
      ref={stage}
      onPointerMove={onMove}
      style={{ '--mx': '50%', '--my': '40%' } as CSSProperties}
      className="relative isolate flex min-h-screen items-center overflow-hidden px-4 pt-20 pb-16 sm:px-6"
    >
      <MatrixRain className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.35]" />
      <div
        className="pointer-events-none absolute -z-10 h-full w-full opacity-70 transition-[background] duration-300"
        style={{ background: 'radial-gradient(420px circle at var(--mx) var(--my), rgba(61,220,132,0.12), transparent 65%)' }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-bg to-transparent" />

      <div className="mx-auto w-full max-w-3xl">
        <div className="overflow-hidden rounded-xl border border-line bg-panel/90 shadow-2xl shadow-black/60 backdrop-blur">
          <div className="flex items-center gap-3 border-b border-line bg-panel-alt px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
            </div>
            <span className="text-xs text-muted">anthony@dev: ~</span>
          </div>

          <div className="space-y-5 p-6 text-left sm:p-9">
            <div>
              <p className="text-sm text-muted">
                <span className="text-accent">➜</span> ~ <span className="text-cyan">whoami</span>
              </p>
              <DecryptedText
                text={profile.name}
                speed={55}
                animateOn="view"
                animateOnce
                revealDirection="start"
                sequential
                className="text-4xl font-bold text-ink sm:text-6xl"
                encryptedClassName="text-4xl font-bold text-accent/70 sm:text-6xl"
              />
            </div>

            <div>
              <p className="text-sm text-muted">
                <span className="text-accent">➜</span> ~ <span className="text-cyan">cat</span> role.txt
              </p>
              <p className="text-lg text-ink sm:text-xl">
                <span className="text-amber">{profile.role}</span> <span className="text-muted">@</span>{' '}
                <span className="text-cyan">{profile.company}</span>
              </p>
            </div>

            <div>
              <p className="text-sm text-muted">
                <span className="text-accent">➜</span> ~ <span className="text-cyan">cat</span> focus.txt
              </p>
              <TextType
                as="p"
                text={['Full-stack systems, cloud infra, and AI agents that ship.']}
                typingSpeed={28}
                loop={false}
                showCursor
                cursorCharacter="_"
                startOnVisible
                className="text-base text-muted sm:text-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <button
            onClick={() => scrollTo('#projects')}
            className="rounded-md border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent transition hover:-translate-y-0.5 hover:bg-accent/20"
          >
            ./view-projects.sh
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-cyan/50 hover:text-cyan"
          >
            $ open contact
          </button>
          <div className="ml-auto flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-muted transition hover:text-accent"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
            <a href={`mailto:${profile.email}`} aria-label="Email" className="text-muted transition hover:text-accent">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
