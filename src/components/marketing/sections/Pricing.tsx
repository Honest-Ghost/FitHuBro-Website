import Link from 'next/link'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal'
import { TIERS } from '../content'

export function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-16 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-secondary/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Pricing
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="font-display mt-5 max-w-2xl text-[clamp(2.25rem,5.5vw,4.25rem)] text-balance">
            On the page.
            <br />
            <span className="text-secondary">Not behind a form.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            One price per gym, not per member. No setup fee, no hardware, no annual
            lock-in. Cancel whenever.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <StaggerItem key={tier.name}>
              <div
                className={cn(
                  'flex h-full flex-col rounded-3xl border p-7 sm:p-8',
                  tier.featured
                    ? 'border-secondary/50 bg-secondary/[0.06]'
                    : 'border-white/10 bg-white/[0.03]'
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl">{tier.name}</h3>
                  {tier.featured ? (
                    <span className="rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary-foreground">
                      Most popular
                    </span>
                  ) : null}
                </div>

                <p className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl">
                    ₹{tier.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </p>

                <p className="mt-2 text-sm text-muted-foreground">{tier.cap}</p>

                <ul className="mt-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-foreground/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" strokeWidth={2.5} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/register"
                  className={cn(
                    'mt-8 rounded-full px-6 py-3.5 text-center text-sm font-semibold transition-transform hover:scale-[1.02]',
                    tier.featured
                      ? 'bg-secondary text-secondary-foreground'
                      : 'border border-white/20 text-foreground hover:bg-white/5'
                  )}
                >
                  Start free
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
