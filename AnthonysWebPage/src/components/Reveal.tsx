import type { ReactNode, CSSProperties } from 'react'
import { useInView } from '../hooks/useInView'

type Props = {
  children: ReactNode
  delay?: number
  className?: string
}

/** Fades and slides its children in when scrolled into view. */
export function Reveal({ children, delay = 0, className = '' }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>()
  return (
    <div ref={ref} style={{ '--d': `${delay}ms` } as CSSProperties} className={`reveal ${inView ? 'in' : ''} ${className}`}>
      {children}
    </div>
  )
}
