'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Reveal } from '../motion/Reveal'
import { getPersonaContent, type Persona } from '../content'
import { APP_ROUTES } from '@/lib/config'

export function RoiCalculator({ persona }: { persona: Persona }) {
  const router = useRouter()
  const { ROI } = getPersonaContent(persona)
  
  // Gym Owner ROI state
  const [members, setMembers] = useState(150)
  const [fee, setFee] = useState(1500)
  const [churnRate, setChurnRate] = useState(8)

  // Member / Trainer BMI State
  const [height, setHeight] = useState(175)
  const [weight, setWeight] = useState(70)
  const [bmiCalculated, setBmiCalculated] = useState(false)
  const [bmi, setBmi] = useState<number | null>(null)

  const monthlyLost = Math.round(members * (churnRate / 100))
  const savedRenewals = Math.max(1, Math.round(monthlyLost * 0.4))
  const monthlyRecovered = savedRenewals * fee

  const calculateBmi = (e: React.FormEvent) => {
    e.preventDefault()
    const heightInMeters = height / 100
    const calculatedBmi = Number((weight / (heightInMeters * heightInMeters)).toFixed(1))
    setBmi(calculatedBmi)
    setBmiCalculated(true)
  }

  if (persona === 'owners') {
    return (
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <Reveal>
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  The business case
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="font-display mt-5 text-[clamp(2.5rem,5.5vw,4.5rem)] leading-none text-balance">
                  Pays for itself
                  <br />
                  <span className="text-secondary">on renewals alone.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                  Move the sliders to match your floor. We assume FitHuBro saves four out of ten members who would otherwise slip away.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.16}>
              <div className="rounded-3xl surface-card p-7 sm:p-10 shadow-2xl">
                <div className="space-y-7">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-300 font-medium">Active members</span>
                      <span className="font-display text-lg text-white">{members}</span>
                    </div>
                    <input
                      type="range"
                      min={30}
                      max={600}
                      step={10}
                      value={members}
                      onChange={(e) => setMembers(Number(e.target.value))}
                      className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-secondary"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-300 font-medium">Monthly fee</span>
                      <span className="font-display text-lg text-white">₹{fee.toLocaleString('en-IN')}</span>
                    </div>
                    <input
                      type="range"
                      min={500}
                      max={5000}
                      step={100}
                      value={fee}
                      onChange={(e) => setFee(Number(e.target.value))}
                      className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-secondary"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Monthly drop-off</span>
                      <span className="font-display text-lg text-foreground">{churnRate}%</span>
                    </div>
                    <input
                      type="range"
                      min={3}
                      max={20}
                      value={churnRate}
                      onChange={(e) => setChurnRate(Number(e.target.value))}
                      className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-secondary"
                    />
                  </div>
                </div>
                <dl className="mt-9 space-y-6 border-t border-white/10 pt-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-sm text-muted-foreground">Renewals you could save each month</dt>
                    <dd className="font-display shrink-0 text-3xl text-foreground">{savedRenewals}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-sm text-muted-foreground">Revenue that stays with you</dt>
                    <dd className="font-display shrink-0 text-4xl text-secondary">
                      ₹{monthlyRecovered.toLocaleString('en-IN')}
                      <span className="text-lg text-muted-foreground">/mo</span>
                    </dd>
                  </div>
                </dl>
                <a
                  href={APP_ROUTES.ownerLogin}
                  className="mt-8 block rounded-full bg-secondary px-6 py-4 text-center text-base text-secondary-foreground transition-transform hover:scale-[1.02]"
                >
                  Get Started
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Health Check
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display mt-5 text-[clamp(2.5rem,5.5vw,4.5rem)] leading-none text-balance">
                {ROI?.headline || 'Free BMI Calculator.'}
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                {ROI?.description || 'Calculate your baseline and discover your personalized fitness targets.'}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div className="rounded-3xl surface-card p-7 sm:p-10 shadow-2xl">
              {!bmiCalculated ? (
                <form onSubmit={calculateBmi} className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-300 font-medium">Height</span>
                      <span className="font-display text-lg text-white">{height} cm</span>
                    </div>
                    <input
                      type="range"
                      min={120}
                      max={220}
                      value={height}
                      onChange={(event) => setHeight(Number(event.target.value))}
                      className="mt-5 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-secondary"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-300 font-medium">Weight</span>
                      <span className="font-display text-lg text-white">{weight} kg</span>
                    </div>
                    <input
                      type="range"
                      min={30}
                      max={150}
                      value={weight}
                      onChange={(event) => setWeight(Number(event.target.value))}
                      className="mt-5 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-secondary"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-secondary px-6 py-4 text-center text-base text-secondary-foreground transition-transform hover:scale-[1.02]"
                  >
                    Calculate BMI
                  </button>
                </form>
              ) : (
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Your Body Mass Index</p>
                  <p className="mt-2 font-display text-6xl text-secondary">{bmi}</p>
                  <p className="mt-6 leading-relaxed text-muted-foreground">
                    We&apos;ve determined your body type. To get your personalized {persona === 'trainers' ? 'trainer profile' : 'workout and diet plan'}, access the FitHuBro app now.
                  </p>
                  <a
                    href={persona === 'trainers' ? APP_ROUTES.trainerLogin : APP_ROUTES.memberCheckIn}
                    className="mt-8 block w-full rounded-full bg-secondary px-6 py-4 text-center text-base text-secondary-foreground transition-transform hover:scale-[1.02]"
                  >
                    Continue to App
                  </a>
                  <button
                    onClick={() => setBmiCalculated(false)}
                    className="mt-4 block w-full rounded-full border border-white/20 px-6 py-4 text-center text-base text-foreground transition-colors hover:bg-white/5"
                  >
                    Recalculate
                  </button>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
