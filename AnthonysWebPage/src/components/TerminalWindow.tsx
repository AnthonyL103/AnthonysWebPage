import type { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
  className?: string
  badge?: ReactNode
}

/** Reusable terminal/editor chrome — traffic lights + titlebar — wrapping any panel content. */
export function TerminalWindow({ title, children, className = '', badge }: Props) {
  return (
    <div className={`overflow-hidden rounded-xl border border-line bg-panel shadow-2xl shadow-black/40 ${className}`}>
      <div className="flex items-center justify-between gap-3 border-b border-line bg-panel-alt px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
          </div>
          <span className="text-xs text-muted">{title}</span>
        </div>
        {badge}
      </div>
      <div className="p-5 sm:p-7">{children}</div>
    </div>
  )
}
