import { useEffect, useRef } from 'react'

const CHARS = '01アイウエオカキクケコサシスセソ<>{}[]/;=+*'

/**
 * Faint falling-code backdrop for the hero. Self-contained canvas loop,
 * skipped entirely under prefers-reduced-motion.
 */
export function MatrixRain({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const fontSize = 15
    let width = 0
    let height = 0
    let columns = 0
    let drops: number[] = []
    let raf = 0

    const resize = () => {
      const parent = canvas.parentElement
      width = canvas.width = parent?.clientWidth ?? window.innerWidth
      height = canvas.height = parent?.clientHeight ?? window.innerHeight
      columns = Math.floor(width / fontSize)
      drops = Array.from({ length: columns }, () => Math.random() * -50)
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 7, 10, 0.14)'
      ctx.fillRect(0, 0, width, height)
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`

      for (let i = 0; i < columns; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        const y = drops[i] * fontSize
        ctx.fillStyle = y < fontSize * 2 ? 'rgba(200, 255, 225, 0.6)' : 'rgba(61, 220, 132, 0.35)'
        ctx.fillText(char, i * fontSize, y)
        if (y > height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden />
}
