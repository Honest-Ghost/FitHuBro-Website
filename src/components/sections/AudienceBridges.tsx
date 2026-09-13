'use client'

import Link from 'next/link'
import { ArrowRight, Check, Dumbbell, Building2 } from 'lucide-react'
import { Reveal } from '../motion/Reveal'
import { TiltCard } from '../motion/TiltCard'
import type { Persona } from '../content'

interface AudienceBridgesProps {
  onSelectPersona?: (persona: Persona) => void
}

export function AudienceBridges({ onSelectPersona }: AudienceBridgesProps) {
  return (
    <section id="trainers" className="relative scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.22em] text-secondary font-semibold">
              The Connected Fitness Ecosystem
            </p>
            <h2 className="font-display mt-4 text-[clamp(2.25rem,5vw,3.75rem)] text-balance text-white">
              More than an app.
              <br />
              <span className="text-secondary">A connected platform.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-300">
              FitHuBro connects members with verified personal trainers and gym facilities. Explore how the platform serves fitness professionals and gym operators.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Trainer Bridge Card */}
          <Reveal delay={0.08} direction="left">
            <TiltCard className="h-full">
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl surface-card p-7 sm:p-10 transition-all hover:border-white/25 hover:shadow-2xl">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                      <Dumbbell className="h-5 w-5" />
                    </span>
                    <p className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
                      For Personal Trainers
                    </p>
                  </div>

                  <h3 className="font-display mt-6 text-3xl sm:text-4xl text-white">
                    Build your brand. Coach with clarity.
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                    Get verified with owner-reviewed credentials, showcase your portfolio on the gym marketplace directory, and assign structured multi-week training programs directly to clients.
                  </p>

                  <ul className="mt-7 space-y-3">
                    {[
                      'Gym-verified credentials & KYC badge',
                      'Structured multi-week workout program authoring',
                      'Assigned client roster and compliance tracking',
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-zinc-200">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" strokeWidth={2.5} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 pt-6 border-t border-white/10">
                  <Link
                    href="/trainers"
                    onClick={() => onSelectPersona?.('trainers')}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-white transition-colors"
                  >
                    <span>Explore Trainer Tools</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* Gym Owner Bridge Card */}
          <Reveal delay={0.16} direction="right">
            <TiltCard className="h-full">
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl surface-card p-7 sm:p-10 transition-all hover:border-white/25 hover:shadow-2xl">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                      <Building2 className="h-5 w-5" />
                    </span>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-semibold">
                      For Gym Owners & Studios
                    </p>
                  </div>

                  <h3 className="font-display mt-6 text-3xl sm:text-4xl text-white">
                    Modern facility management. Zero bloat.
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                    Replace manual registers and messy spreadsheets with fraud-proof rotating QR attendance, instant UPI payment logging with WhatsApp receipts, and full member lifecycle management.
                  </p>

                  <ul className="mt-7 space-y-3">
                    {[
                      '60-second rotating cryptographic HMAC QR attendance kiosk',
                      'Fast payment ledger with dynamic UPI QR & WhatsApp receipts',
                      'Member management, memberships, leads CRM, and reports',
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-zinc-200">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" strokeWidth={2.5} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 pt-6 border-t border-white/10">
                  <Link
                    href="/owners"
                    onClick={() => onSelectPersona?.('owners')}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-200 hover:text-secondary transition-colors"
                  >
                    <span>Explore Gym Management</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
