'use client'

import { ArrowRight } from 'lucide-react'
import { Reveal } from '../motion/Reveal'
import { Magnetic } from '../motion/Magnetic'
import { GradientMesh } from '../visuals/GradientMesh'
import { DustField } from '../visuals/DustField'
import { getPersonaContent, type Persona } from '../content'
import { APP_ROUTES } from '@/lib/config'

export function FinalCta({ persona }: { persona: Persona }) {
  const { FINAL_CTA } = getPersonaContent(persona)
  
  const parts = FINAL_CTA?.headline ? FINAL_CTA.headline.split('.').map(s => s.trim()).filter(Boolean) : ['FitHuBro']
  const firstPart = parts[0]
  const secondPart = parts.slice(1).join('. ')

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden py-32 text-center">
      <GradientMesh variant="accent" />
      <DustField />

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(4rem,10vw,8rem)] tracking-tight text-white text-balance leading-none">
            {firstPart}
            {secondPart ? (
              <>
                .<br className="hidden sm:block" />{' '}
                <span className="text-secondary">{secondPart}.</span>
              </>
            ) : '.'}
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-zinc-300 font-normal">
            {FINAL_CTA?.body}
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Magnetic>
              <a
                href={FINAL_CTA?.buttonHref || APP_ROUTES.ownerLogin}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-5 text-lg font-bold text-secondary-foreground shadow-xl shadow-secondary/25 transition-transform hover:scale-[1.03]"
              >
                {FINAL_CTA?.buttonText || 'Get Started'}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={APP_ROUTES.signIn}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-5 text-lg font-medium text-white shadow-sm transition-all hover:bg-white/15 hover:border-white/35"
              >
                Sign in
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
