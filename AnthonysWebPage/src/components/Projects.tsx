import type { Project } from '../data'
import { projects } from '../data'
import { techColor } from '../lib/techColor'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

const GITHUB_PATH =
  'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
const EXTERNAL_PATH =
  'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'

function LinkIcon({ href, path, label }: { href: string; path: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      className="text-muted transition hover:text-accent"
    >
      <svg className="h-5 w-5" fill={path === GITHUB_PATH ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
      </svg>
    </a>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 2) * 90} className="h-full">
      <div className="flex h-full flex-col rounded-lg border border-line bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-muted">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 12.5v-10zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
            </svg>
            <span className="text-xs">repository</span>
          </div>
          {project.award && (
            <span className="rounded-full border border-amber/40 bg-amber/10 px-2.5 py-0.5 text-[10px] font-medium text-amber">
              🏆 {project.award}
            </span>
          )}
        </div>

        <h3 className="mt-3 text-xl font-semibold text-ink">{project.title}</h3>

        <ul className="mt-3 flex-1 space-y-1.5">
          {project.description.map((d, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink/75">
              <span className="mt-0.5 shrink-0 text-cyan">//</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="inline-flex items-center gap-1.5 text-xs text-muted">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: techColor(tech) }} />
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 border-t border-line pt-4">
          {project.github && <LinkIcon href={project.github} path={GITHUB_PATH} label="Source" />}
          {project.link && <LinkIcon href={project.link} path={EXTERNAL_PATH} label="Live / Demo" />}
          {project.devpost && <LinkIcon href={project.devpost} path={EXTERNAL_PATH} label="Devpost" />}
        </div>
      </div>
    </Reveal>
  )
}

export function Projects() {
  return (
    <section id="projects" className="border-t border-line bg-panel/20 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="04" file="projects.tsx" title="Projects" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
