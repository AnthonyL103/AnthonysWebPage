import DecryptedText from '../utils/decryptedtext'
import { Reveal } from './Reveal'

type Props = { index: string; file: string; title: string; className?: string }

/** `// 02 — about.tsx` style header used to open every section, IDE-comment style. */
export function SectionHeader({ index, file, title, className = '' }: Props) {
  return (
    <Reveal className={`mb-10 ${className}`}>
      <p className="font-mono text-xs text-muted">
        <span className="text-accent">{index}</span> <span className="text-muted/70">// {file}</span>
      </p>
      <h2 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">
        <DecryptedText
          text={title}
          speed={40}
          animateOn="view"
          animateOnce
          sequential
          revealDirection="start"
          className="text-ink"
          encryptedClassName="text-accent/50"
        />
      </h2>
    </Reveal>
  )
}
