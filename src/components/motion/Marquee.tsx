'use client'

import { cn } from '@/lib/utils/cn'

interface MarqueeProps {
  children: React.ReactNode
  /** Seconds for one full pass. Longer = slower. */
  duration?: number
  className?: string
}

/**
 * CSS-only infinite marquee. Children are rendered twice and the track
 * translates -50%, so the seam lands exactly where the copy restarts.
 */
export function Marquee({ children, duration = 40, className }: MarqueeProps) {
  return (
    <div className={cn('mask-fade-x overflow-hidden', className)}>
      <div
        className="animate-marquee-x flex w-max items-center"
        style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-center" aria-hidden={false}>
          {children}
        </div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
}
