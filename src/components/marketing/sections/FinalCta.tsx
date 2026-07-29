'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '../motion/Reveal'
import { Magnetic } from '../motion/Magnetic'
import { GradientMesh } from '../visuals/GradientMesh'
import { DustField } from '../visuals/DustField'

export function FinalCta() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden py-32 text-center">
      <GradientMesh variant="accent" />
      <DustField />

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(4rem,10vw,8rem)] font-bold tracking-tight text-white text-balance leading-none">
            Your gym. <br className="hidden sm:block" />
            <span className="text-secondary">One login.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Set it up this afternoon. Bring your members across from the register,
            and stop finding out about churn two months late.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Magnetic>
              <Link
                href="/register"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-5 text-lg font-semibold text-secondary-foreground transition-transform hover:scale-[1.03]"
              >
                Start free
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-5 text-lg font-semibold text-foreground transition-colors hover:bg-white/5"
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
