import { useEffect, useState } from 'react'
import TextType from '../utils/texttype'
import ShinyText from '../utils/shinytext'
import { education, profile } from '../data'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'
import { TerminalWindow } from './TerminalWindow'

const photos = [
  { src: '/resturantphoto.JPG', position: 'center 40%' },
  { src: '/churchphoto.jpeg', position: 'center 70%' },
  { src: '/ravephoto.JPG', position: 'center 65%' },
]

export function About() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % photos.length), 4000)
    return () => clearInterval(id)
  }, [current])

  return (
    <section id="about" className="border-t border-line bg-panel/20 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader index="02" file="about.tsx" title="About Me" />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <TerminalWindow title="profile.png">
              <div className="group relative -m-5 -mt-5 overflow-hidden sm:-m-7 sm:-mt-7">
                <div className="relative aspect-[4/5] w-full">
                  {photos.map(({ src, position }, i) => (
                    <img
                      key={src}
                      src={src}
                      style={{ objectPosition: position }}
                      alt="Anthony Li"
                      className={`absolute inset-0 h-full w-full object-cover grayscale-[0.15] transition-opacity duration-700 group-hover:grayscale-0 ${i === current ? 'opacity-100' : 'opacity-0'}`}
                    />
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_1px,transparent_1px,transparent_3px)] opacity-40" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                  {photos.map(({ src }, i) => (
                    <button
                      key={src}
                      type="button"
                      aria-label={`Show photo ${i + 1}`}
                      onClick={() => setCurrent(i)}
                      className={`h-1.5 w-1.5 rounded-full transition ${i === current ? 'bg-accent' : 'bg-ink/40'}`}
                    />
                  ))}
                </div>
                <span className="absolute left-3 top-3 rounded bg-bg/70 px-2 py-0.5 font-mono text-[10px] text-accent">● REC</span>
              </div>
            </TerminalWindow>

            <div className="mt-6 space-y-2">
              <p className="font-mono text-xs text-muted">// honors_and_awards</p>
              {education.honors.map((h) => (
                <ShinyText key={h} text={`🏆 ${h}`} speed={4} className="block text-sm text-ink/90" />
              ))}
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={100}>
              <TerminalWindow title="about.md">
                <div className="min-h-[13rem] text-[15px] leading-relaxed text-ink/90 whitespace-pre-line">
                  <TextType
                    text={[profile.resumeBlurb]}
                    typingSpeed={8}
                    loop={false}
                    showCursor
                    cursorCharacter="▍"
                    startOnVisible
                  />
                </div>
              </TerminalWindow>
            </Reveal>

            <Reveal delay={200}>
              <TerminalWindow title="education.json">
                <pre className="overflow-x-auto text-[13px] leading-relaxed sm:text-sm">
                  <code>
                    <span className="text-muted">{'{'}</span>{'\n'}
                    {'  '}
                    <span className="text-cyan">"university"</span>
                    <span className="text-muted">: </span>
                    <span className="text-accent">"{education.school}"</span>
                    <span className="text-muted">,</span>{'\n'}
                    {'  '}
                    <span className="text-cyan">"degree"</span>
                    <span className="text-muted">: </span>
                    <span className="text-accent">"{education.degree}"</span>
                    <span className="text-muted">,</span>{'\n'}
                    {'  '}
                    <span className="text-cyan">"gpa"</span>
                    <span className="text-muted">: </span>
                    <span className="text-amber">{education.gpa}</span>
                    {'\n'}
                    <span className="text-muted">{'}'}</span>
                  </code>
                </pre>
              </TerminalWindow>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
