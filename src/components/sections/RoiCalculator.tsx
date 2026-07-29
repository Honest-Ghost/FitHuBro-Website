'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Reveal } from '../motion/Reveal'
import { getPersonaContent, type Persona } from '../content'

// Ported from the previous landing page. 8% is the share of churn we assume a
// gym can recover once at-risk members surface before their expiry, not a
// measured result — the copy below says so.
const CHURN_RECOVERY_RATE = 0.08
const AVG_MONTHLY_FEE = 1500

export function RoiCalculator({ persona }: { persona: Persona }) {
  const { ROI } = getPersonaContent(persona)
  const [memberCount, setMemberCount] = useState(150)

  const savedRenewals = Math.round(memberCount * CHURN_RECOVERY_RATE)
  const monthlyRecovered = savedRenewals * AVG_MONTHLY_FEE

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                The maths
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="font-display mt-5 text-[clamp(2.5rem,5.5vw,4.5rem)] leading-none text-balance">
                {ROI?.headline || 'The ROI'}
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                {ROI?.description || 'Assuming a gym with 150 members and a ₹1,500 monthly fee, FitHuBro only needs to save a handful of at-risk members a year to pay for itself.'}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} direction="left">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-10">
              <label
                htmlFor="member-count"
                className="flex items-baseline justify-between"
              >
                <span className="text-sm text-muted-foreground">
                  Members at your gym
                </span>
                <span className="font-display text-3xl text-foreground">
                  {memberCount}
                </span>
              </label>

              <input
                id="member-count"
                type="range"
                min={30}
                max={1000}
                step={10}
                value={memberCount}
                onChange={(event) => setMemberCount(Number(event.target.value))}
                className="mt-5 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-secondary"
              />

              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>30</span>
                <span>1,000</span>
              </div>

              <dl className="mt-9 space-y-6 border-t border-white/10 pt-8">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-muted-foreground">
                    Renewals you could save each month
                  </dt>
                  <dd className="font-display shrink-0 text-3xl text-foreground">
                    {savedRenewals}
                  </dd>
                </div>

                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-muted-foreground">
                    Revenue that stays with you
                  </dt>
                  <dd className="font-display shrink-0 text-4xl text-secondary">
                    ₹{monthlyRecovered.toLocaleString('en-IN')}
                    <span className="text-lg text-muted-foreground">/mo</span>
                  </dd>
                </div>
              </dl>

              <Link
                href="/register"
                className="mt-8 block rounded-full bg-secondary px-6 py-4 text-center text-base text-secondary-foreground transition-transform hover:scale-[1.02]"
              >
                Start free
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
