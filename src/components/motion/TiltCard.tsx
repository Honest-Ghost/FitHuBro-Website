'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils/cn'
import { useReducedMotion } from './use-reduced-motion'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  /** Max rotation in degrees at the card's edge. */
  intensity?: number
}

/**
 * Pointer-tracked 3D tilt. Pure CSS transforms — no WebGL — which is the whole
 * reason this reads as "3D" on a mid-range Android without a GPU budget.
 */
export function TiltCard({ children, className, intensity = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 180, damping: 20 })
  const springY = useSpring(y, { stiffness: 180, damping: 20 })

  const rotateY = useTransform(springX, [-0.5, 0.5], [-intensity, intensity])
  const rotateX = useTransform(springY, [-0.5, 0.5], [intensity, -intensity])

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    x.set((event.clientX - rect.left) / rect.width - 0.5)
    y.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <div className="[perspective:1200px]">
      <motion.div
        ref={ref}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className={cn('will-change-transform', className)}
      >
        {children}
      </motion.div>
    </div>
  )
}
