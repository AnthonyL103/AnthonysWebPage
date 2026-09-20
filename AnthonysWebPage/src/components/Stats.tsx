import { stats } from '../data'
import { CountUp } from './CountUp'
import { Reveal } from './Reveal'

export function Stats() {
  return (
    <section className="border-y border-line bg-panel/40 px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-8 text-xs text-muted">
          <span className="text-accent">➜</span> ~ node stats.js
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.key} delay={i * 90} className={i === stats.length - 1 && stats.length % 2 ? 'col-span-2 sm:col-span-1' : ''}>
              <div className="rounded-lg border border-line bg-panel px-5 py-6 text-center transition hover:border-accent/40">
                <div className="font-mono text-3xl font-bold text-accent sm:text-4xl">
                  <CountUp to={s.value} decimals={s.decimals ?? 0} />
                </div>
                <div className="mt-2 text-xs text-muted">// {s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
