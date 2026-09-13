'use client'

import { getPersonaContent, type Persona } from '../content'
import { PhoneFrame } from '../visuals/PhoneFrame'
import { WorkoutScreen } from '../visuals/WorkoutScreen'
import { PlanEditorScreen } from '../visuals/PlanEditorScreen'
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal'
import { TiltCard } from '../motion/TiltCard'
import { Magnetic } from '../motion/Magnetic'
import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'

export function Personas({ persona }: { persona: Persona }) {
  const { PERSONAS } = getPersonaContent(persona)
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-24 lg:gap-40">
          {PERSONAS.map((persona, index) => {
            const isMember = persona.id === 'members'
            
            return (
              <div 
                key={persona.id} 
                className={`grid items-center gap-16 lg:grid-cols-2 lg:gap-24 ${
                  index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`rounded-3xl surface-card p-7 sm:p-10 lg:p-12 shadow-2xl ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                  <Reveal>
                    <p className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-secondary font-semibold">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      {persona.label}
                    </p>
                    <h2 className="font-display mt-5 max-w-lg text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
                      {persona.title}
                    </h2>
                    <p className="mt-6 max-w-md text-base sm:text-lg leading-relaxed text-zinc-300 font-normal">
                      {persona.body}
                    </p>
                  </Reveal>

                  <Stagger className="mt-8 space-y-4">
                    {persona.points.map((point) => (
                      <StaggerItem key={point}>
                        <div className="flex items-start gap-3 text-sm sm:text-base text-zinc-200">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-secondary" strokeWidth={2.5} />
                          <span>{point}</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>

                  <Reveal delay={0.2} className="mt-10">
                    <Magnetic className="w-full sm:w-auto">
                      {persona.ctaHref.startsWith('http') ? (
                        <a
                          href={persona.ctaHref}
                          className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-secondary-foreground shadow-lg shadow-secondary/25 transition-transform hover:scale-[1.03]"
                        >
                          {persona.ctaLabel}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      ) : (
                        <Link
                          href={persona.ctaHref}
                          className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-secondary-foreground shadow-lg shadow-secondary/25 transition-transform hover:scale-[1.03]"
                        >
                          {persona.ctaLabel}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      )}
                    </Magnetic>
                  </Reveal>
                </div>
                
                <div className={index % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Reveal direction={index % 2 === 0 ? "right" : "left"} delay={0.1}>
                    <TiltCard className="mx-auto w-full max-w-[320px] lg:sticky lg:top-32 lg:max-w-md">
                      {isMember ? (
                        <PhoneFrame>
                          <WorkoutScreen />
                        </PhoneFrame>
                      ) : (
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] border border-white/10 bg-background shadow-2xl">
                          <PlanEditorScreen />
                        </div>
                      )}
                    </TiltCard>
                  </Reveal>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
