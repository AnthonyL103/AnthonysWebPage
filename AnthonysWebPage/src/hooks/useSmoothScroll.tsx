import { useEffect, useRef, type ReactNode } from 'react'
import Lenis from 'lenis'
import { SmoothScrollContext, type SmoothScrollCtx } from './smoothScrollContext'

/** Wires up Lenis smooth scrolling for the whole app and exposes a scrollTo helper. */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 3) })
    lenisRef.current = lenis

    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  const scrollTo: SmoothScrollCtx['scrollTo'] = (target, opts) => {
    const lenis = lenisRef.current
    if (lenis) lenis.scrollTo(target, { offset: opts?.offset ?? -72 })
    else {
      const el = typeof target === 'string' ? document.querySelector(target) : target
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return <SmoothScrollContext.Provider value={{ scrollTo }}>{children}</SmoothScrollContext.Provider>
}
