import DecryptedText from '../utils/decryptedtext'
import { experiences } from '../data'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function Experience() {
  return (
    <section id="experience" className="border-t border-line px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeader index="03" file="experience.tsx" title="Experience" />

        <div className="relative space-y-8 border-l border-line pl-6 sm:pl-8">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 90} className="relative">
              <span className={`absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full sm:-left-[calc(2rem+5px)] ${exp.current ? 'bg-accent shadow-[0_0_10px_rgba(61,220,132,0.8)]' : 'bg-muted/50'}`} />

              <div className="rounded-lg border border-line bg-panel p-5 transition hover:border-accent/30 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-ink sm:text-xl">
                      <DecryptedText
                        text={exp.company}
                        speed={35}
                        maxIterations={8}
                        animateOn="view"
                        animateOnce
                        className="text-ink"
                        encryptedClassName="text-cyan/50"
                      />
                      {exp.current && (
                        <span className="ml-2 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 align-middle text-[10px] font-normal text-accent">
                          current
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-amber">{exp.position}</p>
                  </div>
                  <div className="text-right text-xs text-muted">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-1.5">
                  {exp.points.map((p, idx) => (
                    <li key={idx} className="flex gap-2 text-sm leading-relaxed text-ink/80">
                      <span className="mt-0.5 shrink-0 text-accent">{'>'}</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
