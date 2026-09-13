'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { DashboardScreen } from '../visuals/DashboardScreen'
import { Reveal } from '../motion/Reveal'
import { Parallax } from '../motion/Parallax'
import { Marquee } from '../motion/Marquee'
import { WordFlip } from '../motion/WordFlip'
import { Magnetic } from '../motion/Magnetic'
import { getPersonaContent, type Persona } from '../content'
import { cn } from '@/lib/utils/cn'

const PERSONA_TABS: { id: Persona; label: string }[] = [
  { id: 'members', label: "I'm here to get fit" },
  { id: 'trainers', label: "I'm a fitness trainer" },
  { id: 'owners', label: "I run a gym" },
]

interface HeroProps {
  persona: Persona
  onPersonaChange?: (persona: Persona) => void
}

export function Hero({ persona, onPersonaChange }: HeroProps) {
  const { AUDIENCES, MARQUEE_WORDS } = getPersonaContent(persona)
  const audience = AUDIENCES[0]

  const isExternalCta = audience.ctaHref.startsWith('http')

  return (
    <section className="grain relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      {/* Ambient brand glow, sitting behind the rig. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-secondary/20 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal direction="none" duration={0.9}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Non-blocking Personalization Selector */}
            <div className="inline-flex flex-wrap items-center gap-1.5 rounded-full border border-white/15 bg-zinc-900/80 p-1.5 backdrop-blur-md shadow-lg">
              {PERSONA_TABS.map((tab) => {
                const isActive = persona === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => onPersonaChange?.(tab.id)}
                    className={cn(
                      "rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200",
                      isActive
                        ? "bg-secondary text-secondary-foreground shadow-sm shadow-secondary/30"
                        : "text-zinc-400 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>

            <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-zinc-400 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              {audience.eyebrow}
            </p>
          </div>
        </Reveal>

        <WordFlip
          key={audience.id}
          as="h1"
          text={audience.headline}
          accent={audience.accent}
          className="font-display mt-6 max-w-[18ch] text-[clamp(2.5rem,6.5vw,5.75rem)] leading-[1.02] text-balance text-white"
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.p
            key={`${audience.id}-body`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="max-w-xl text-base sm:text-lg leading-relaxed text-zinc-300 font-normal"
          >
            {audience.body}
          </motion.p>

          <Reveal delay={0.24} direction="left">
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Magnetic className="w-full sm:w-auto">
                {isExternalCta ? (
                  <a
                    href={audience.ctaHref}
                    className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-secondary px-7 py-4 text-base font-semibold text-secondary-foreground shadow-lg shadow-secondary/25 transition-transform hover:scale-[1.03]"
                  >
                    {audience.ctaLabel}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                ) : (
                  <Link
                    href={audience.ctaHref}
                    className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-secondary px-7 py-4 text-base font-semibold text-secondary-foreground shadow-lg shadow-secondary/25 transition-transform hover:scale-[1.03]"
                  >
                    {audience.ctaLabel}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </Magnetic>
              <Magnetic className="w-full sm:w-auto">
                <a
                  href={(audience as any).secondaryCtaHref || "#coach"}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-white/20 bg-white/[0.07] px-7 py-4 text-base font-medium text-white transition-all hover:bg-white/[0.14] hover:border-white/35 shadow-sm"
                >
                  {(audience as any).secondaryCtaLabel || "Meet Your AI Coach"}
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 sm:mt-20">
          <Parallax distance={30}>
            <div className="mx-auto aspect-video max-w-5xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <DashboardScreen persona={persona} />
            </div>
          </Parallax>
        </div>
      </div>

      <div className="hairline-t mt-20 py-5">
        <Marquee duration={45}>
          {MARQUEE_WORDS.map((word) => (
            <span
              key={word}
              className="font-display flex items-center gap-8 px-8 text-2xl text-muted-foreground/50 sm:text-3xl"
            >
              {word}
              <span className="h-1.5 w-1.5 rounded-full bg-secondary/60" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
