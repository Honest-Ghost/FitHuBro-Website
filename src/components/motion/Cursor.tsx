'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useReducedMotion } from './use-reduced-motion'

// Desktop only. Touch devices get nothing — a lagging dot under a finger is worse
// than no dot, and pointer: coarse never fires mousemove reliably anyway.
export function Cursor() {
  const reduced = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches) setEnabled(true)
  }, [])

  useEffect(() => {
    if (!enabled || reduced) return

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
      const target = event.target as HTMLElement | null
      setHovering(Boolean(target?.closest('a, button, input, summary, [role="button"]')))
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [enabled, reduced, x, y])

  if (!enabled || reduced) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden lg:block"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="rounded-full border border-secondary/70 bg-secondary/15"
        animate={{
          width: hovering ? 44 : 18,
          height: hovering ? 44 : 18,
          x: hovering ? -22 : -9,
          y: hovering ? -22 : -9,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      />
    </motion.div>
  )
}
