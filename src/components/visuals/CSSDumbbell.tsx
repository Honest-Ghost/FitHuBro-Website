'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils/cn'
import { useReducedMotion } from '../motion/use-reduced-motion'

type Rgb = readonly [number, number, number]

const STEEL: Rgb = [176, 180, 188]
const IRON: Rgb = [58, 60, 66]

/** Light sits above and in front, so the top-front segments read brightest. */
const LIGHT_RAD = -Math.PI / 3

function shade(base: Rgb, k: number) {
  const [r, g, b] = base
  return `rgb(${Math.round(Math.min(255, r * k))},${Math.round(Math.min(255, g * k))},${Math.round(Math.min(255, b * k))})`
}

interface CylinderProps {
  /** Extent along the bar axis. */
  length: number
  radius: number
  segments: number
  /** Position along the bar axis from centre. */
  offset: number
  base: Rgb
  knurl?: boolean
}

/**
 * A cylinder around the X axis, built from `segments` flat panels each rotated
 * about that axis and pushed out by the radius, plus two end discs. Per-panel
 * brightness is baked from its angle to the light, which is what makes it read
 * as a solid lit object instead of a stack of rectangles.
 */
function Cylinder({ length, radius, segments, offset, base, knurl }: CylinderProps) {
  const segHeight = (2 * Math.PI * radius) / segments + 1
  const step = 360 / segments

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{ transform: `translateX(${offset}px)`, transformStyle: 'preserve-3d' }}
    >
      {Array.from({ length: segments }, (_, i) => {
        const deg = step * i
        const rad = (deg * Math.PI) / 180
        const lit = 0.32 + 0.78 * Math.max(0, Math.cos(rad - LIGHT_RAD))

        return (
          <div
            key={i}
            className="absolute left-0 top-0"
            style={{
              width: length,
              height: segHeight,
              marginLeft: -length / 2,
              marginTop: -segHeight / 2,
              transform: `rotateX(${deg}deg) translateZ(${radius}px)`,
              background: knurl
                ? `repeating-linear-gradient(90deg, ${shade(base, lit)} 0 2px, ${shade(base, lit * 0.72)} 2px 4px)`
                : shade(base, lit),
            }}
          />
        )
      })}

      {[-1, 1].map((side) => (
        <div
          key={side}
          className="absolute left-0 top-0 rounded-full"
          style={{
            width: radius * 2,
            height: radius * 2,
            marginLeft: -radius,
            marginTop: -radius,
            transform: `translateX(${(side * length) / 2}px) rotateY(90deg)`,
            background: `radial-gradient(circle at 38% 30%, ${shade(base, 1.28)}, ${shade(base, 0.82)} 52%, ${shade(base, 0.44)})`,
          }}
        />
      ))}
    </div>
  )
}

interface DumbbellProps {
  className?: string
  /** Overall scale; the rig is authored at roughly 400px wide. */
  scale?: number
}

/**
 * The page's signature object. Spins on its own axis, yaws toward the pointer
 * and tilts through a lift arc as the hero scrolls away.
 */
export function CSSDumbbell({ className, scale = 1 }: DumbbellProps) {
  const wrapper = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const yaw = useSpring(pointerX, { stiffness: 60, damping: 18 })
  const pitch = useSpring(pointerY, { stiffness: 60, damping: 18 })

  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ['start start', 'end start'],
  })
  const lift = useTransform(scrollYProgress, [0, 1], [0, -38])

  useEffect(() => {
    if (reduced) return

    function onMove(event: PointerEvent) {
      const half = window.innerWidth / 2
      pointerX.set(((event.clientX - half) / half) * 26)
      pointerY.set(((event.clientY - window.innerHeight / 2) / (window.innerHeight / 2)) * -12)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduced, pointerX, pointerY])

  const rig = (
    <>
      <Cylinder length={300} radius={9} segments={14} offset={0} base={STEEL} knurl />
      <Cylinder length={26} radius={68} segments={16} offset={-96} base={IRON} />
      <Cylinder length={26} radius={68} segments={16} offset={96} base={IRON} />
      <Cylinder length={20} radius={52} segments={14} offset={-127} base={IRON} />
      <Cylinder length={20} radius={52} segments={14} offset={127} base={IRON} />
    </>
  )

  return (
    <div
      ref={wrapper}
      aria-hidden
      className={cn('pointer-events-none select-none', className)}
      style={{ perspective: 1400 }}
    >
      <div
        className="relative h-[340px] w-full"
        style={{ transformStyle: 'preserve-3d', transform: `scale(${scale})` }}
      >
        {reduced ? (
          <div
            className="absolute inset-0"
            style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-24deg) rotateZ(-14deg) rotateX(18deg)' }}
          >
            {rig}
          </div>
        ) : (
          <motion.div
            className="absolute inset-0"
            style={{ transformStyle: 'preserve-3d', rotateY: yaw, rotateZ: lift, rotateX: pitch }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ rotateX: 360 }}
              transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
            >
              {rig}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
