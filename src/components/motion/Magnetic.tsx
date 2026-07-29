'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useReducedMotion } from './use-reduced-motion'

interface MagneticProps {
  children: React.ReactNode
  className?: string
  /** Max travel in px toward the pointer. */
  strength?: number
}

/**
 * Wraps a control so it leans toward the pointer while hovered. The child keeps
 * its own hit area — only the visual offset moves, so the click target stays put.
 */
export function Magnetic({ children, className, strength = 10 }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduced = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 18 })
  const springY = useSpring(y, { stiffness: 220, damping: 18 })

  function handleMove(event: React.PointerEvent<HTMLSpanElement>) {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    x.set(((event.clientX - rect.left) / rect.width - 0.5) * strength * 2)
    y.set(((event.clientY - rect.top) / rect.height - 0.5) * strength * 2)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  if (reduced) return <span className={className}>{children}</span>

  return (
    <motion.span
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={className}
      style={{ x: springX, y: springY, display: 'inline-flex' }}
    >
      {children}
    </motion.span>
  )
}
