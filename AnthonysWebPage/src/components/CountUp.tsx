import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

type Props = { to: number; decimals?: number; suffix?: string; prefix?: string; duration?: number }

/** Counts from 0 to `to` the first time it is visible. */
export function CountUp({ to, decimals = 0, suffix = '', prefix = '', duration = 1400 }: Props) {
  const [ref, inView] = useInView<HTMLSpanElement>(0.4)
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      setVal(to * (1 - Math.pow(1 - t, 3)))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])

  return (
    <span ref={ref}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  )
}
