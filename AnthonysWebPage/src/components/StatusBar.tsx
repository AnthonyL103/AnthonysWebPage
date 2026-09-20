/** VS-Code-style status bar footer — a small, on-brand closer. */
export function StatusBar() {
  return (
    <footer className="border-t border-line bg-panel-alt px-4 py-2 text-[11px] text-muted sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-1.5">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V7.06a2.25 2.25 0 01-1.5-2.122l.001-.058A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V4a2.25 2.25 0 011.5-2.122V1.75A2.25 2.25 0 018 0a2.25 2.25 0 01-.5 4.372v9.256A2.251 2.251 0 015 15.75a2.25 2.25 0 01-.5-4.472z" />
            </svg>
            main
          </span>
          <span>UTF-8</span>
          <span>TypeScript React</span>
        </div>
        <p>© {new Date().getFullYear()} Anthony Li · Built with React, TypeScript &amp; Tailwind</p>
      </div>
    </footer>
  )
}
