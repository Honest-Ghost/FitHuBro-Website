'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '../motion/Reveal'
import { Magnetic } from '../motion/Magnetic'
import { GradientMesh } from '../visuals/GradientMesh'
import { DustField } from '../visuals/DustField'
import { getPersonaContent, type Persona } from '../content'

export function FinalCta({ persona }: { persona: Persona }) {
  const { FINAL_CTA } = getPersonaContent(persona)
  
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden py-32 text-center">
      <GradientMesh variant="accent" />
      <DustField />

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(4rem,10vw,8rem)] tracking-tight text-white text-balance leading-none">
            {FINAL_CTA?.headline.split('.')[0]} <br className="hidden sm:block" />
            <span className="text-secondary">{FINAL_CTA?.headline.split('.')[1] || ''}.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {FINAL_CTA?.body}
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Magnetic>
              <Link
                href={FINAL_CTA?.buttonHref || '/register'}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-5 text-lg text-secondary-foreground transition-transform hover:scale-[1.03]"
              >
                {FINAL_CTA?.buttonText || 'Start free'}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-5 text-lg text-foreground transition-colors hover:bg-white/5"
              >
                Sign in
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
