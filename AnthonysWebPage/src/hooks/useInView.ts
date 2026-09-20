import { useEffect, useRef, useState } from 'react'

/**
 * Fires once when the element scrolls into view.
 * Note: never apply clip-path to the SAME element being observed — Chromium
 * reports zero intersection for a clip-path-hidden target, which permanently
 * deadlocks the reveal. Keep any clip-path on an inner child instead.
 */
export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return [ref, inView] as const
}
