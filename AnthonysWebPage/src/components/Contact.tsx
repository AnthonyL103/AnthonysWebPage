import DecryptedText from '../utils/decryptedtext'
import { profile } from '../data'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line px-4 py-24 sm:px-6">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(61,220,132,0.08),transparent_70%)]" />
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="font-mono text-xs text-muted">
            <span className="text-accent">06</span> <span className="text-muted/70">// contact.tsx</span>
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            <DecryptedText
              text="Let's Connect"
              speed={40}
              animateOn="view"
              animateOnce
              sequential
              revealDirection="center"
              className="text-ink"
              encryptedClassName="text-accent/50"
            />
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted">
            Feel free to reach out.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-8 max-w-md rounded-lg border border-line bg-panel p-5 text-left font-mono text-sm">
            <p className="text-muted">
              <span className="text-accent">➜</span> ~ ./contact --send
            </p>
            <p className="mt-2 text-ink/90">
              <span className="text-cyan">to:</span> {profile.email}
            </p>
            <p className="text-ink/90">
              <span className="text-cyan">location:</span> {profile.location}
            </p>
            <p className="text-ink/90">
              <span className="text-cyan">phone:</span> {profile.phone}
            </p>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md border border-accent/40 bg-accent/10 px-6 py-2.5 text-sm font-medium text-accent transition hover:-translate-y-0.5 hover:bg-accent/20"
            >
              Send Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-line px-6 py-2.5 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-cyan/50 hover:text-cyan"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-line px-6 py-2.5 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-cyan/50 hover:text-cyan"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
