import { createContext, useContext } from 'react'

export type SmoothScrollCtx = { scrollTo: (target: string | HTMLElement, opts?: { offset?: number }) => void }

export const SmoothScrollContext = createContext<SmoothScrollCtx>({
  scrollTo: (target) => document.querySelector(String(target))?.scrollIntoView({ behavior: 'smooth' }),
})

export function useSmoothScroll() {
  return useContext(SmoothScrollContext)
}
