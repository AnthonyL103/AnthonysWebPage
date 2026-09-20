import { skills } from '../data'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'
import { TerminalWindow } from './TerminalWindow'

export function Skills() {
  const entries = Object.entries(skills)

  return (
    <section id="skills" className="border-t border-line px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeader index="05" file="skills.ts" title="Skills & Tools" />

        <Reveal>
          <TerminalWindow title="skills.ts">
            <pre className="overflow-x-auto text-[13px] leading-relaxed sm:text-sm">
              <code>
                <span className="text-pink">const</span> <span className="text-cyan">skills</span> <span className="text-muted">=</span> <span className="text-muted">{'{'}</span>
                {'\n'}
                {entries.map(([category, items], i) => (
                  <span key={category}>
                    {'  '}
                    <span className="text-cyan">{category}</span>
                    <span className="text-muted">: [</span>
                    {'\n'}
                    {items.map((item, j) => (
                      <span key={item}>
                        {'    '}
                        <span className="text-accent">"{item}"</span>
                        {j < items.length - 1 && <span className="text-muted">,</span>}
                        {'\n'}
                      </span>
                    ))}
                    {'  '}
                    <span className="text-muted">]{i < entries.length - 1 ? ',' : ''}</span>
                    {'\n'}
                  </span>
                ))}
                <span className="text-muted">{'}'}</span>
                <span className="text-muted">;</span>
              </code>
            </pre>
          </TerminalWindow>
        </Reveal>
      </div>
    </section>
  )
}
