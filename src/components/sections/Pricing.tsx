import { Check } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal'
import { getPersonaContent, type Persona } from '../content'
import { APP_ROUTES } from '@/lib/config'

export function Pricing({ persona }: { persona: Persona }) {
  const { TIERS, PRICING_SUBTITLE } = getPersonaContent(persona)

  const getCtaLink = () => {
    if (persona === 'trainers') return APP_ROUTES.trainerLogin
    if (persona === 'members') return APP_ROUTES.memberCheckIn
    return APP_ROUTES.ownerLogin
  }

  const getCtaText = () => {
    if (persona === 'trainers') return 'Trainer Portal'
    if (persona === 'members') return 'Open Member App'
    return 'Get Started'
  }

  if (!TIERS || TIERS.length === 0) return null

  return (
    <section id="pricing" className="relative scroll-mt-16 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-secondary/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Feature Entitlements
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="font-display mt-5 max-w-2xl text-[clamp(2.25rem,5.5vw,4.25rem)] text-balance">
            Structured capability tiers.
            <br />
            <span className="text-secondary">Aligned to your gym scale.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300">
            {PRICING_SUBTITLE || 'Select the feature tier that matches your operations. Transparent capabilities with zero hardware lock-in.'}
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <StaggerItem key={tier.name}>
              <div
                className={cn(
                  'flex h-full flex-col rounded-3xl p-7 sm:p-8 transition-all',
                  tier.featured
                    ? 'border-2 border-secondary/70 bg-[#161318]/95 shadow-2xl shadow-secondary/15'
                    : 'surface-card'
                )}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-2xl tracking-wide text-white">{tier.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-wider text-zinc-400">{tier.entitlement}</p>
                  </div>
                  {tier.featured ? (
                    <span className="rounded-full bg-secondary px-3 py-1 text-[10px] uppercase tracking-wider text-secondary-foreground font-bold shadow-sm">
                      Most popular
                    </span>
                  ) : null}
                </div>

                <div className="mt-6 border-b border-white/10 pb-5">
                  <p className="font-display text-2xl text-secondary">
                    {tier.cap}
                  </p>
                  <p className="mt-1 text-xs text-zinc-400">
                    Feature Entitlement Tier
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-zinc-200">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" strokeWidth={2.5} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={getCtaLink()}
                  className={cn(
                    'mt-8 rounded-full px-6 py-3.5 text-center text-sm font-semibold transition-transform hover:scale-[1.02]',
                    tier.featured
                      ? 'bg-secondary text-secondary-foreground shadow-lg shadow-secondary/25'
                      : 'border border-white/20 bg-white/10 text-white hover:bg-white/15'
                  )}
                >
                  {getCtaText()}
                </a>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
