import { CountUp } from '../motion/CountUp'
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal'

/**
 * Product facts, not customer counts. We have one live gym — inventing
 * "500+ gyms trust us" would be the first lie on the page.
 */
const STATS = [
  { value: 0, prefix: '₹', suffix: '', label: 'Hardware to buy', note: 'No biometric machine' },
  { value: 3, prefix: '', suffix: '', label: 'Coaching pillars', note: 'Training, nutrition, recovery' },
  { value: 24, prefix: '', suffix: 'h', label: 'QR rotation', note: 'Screenshots expire nightly' },
  { value: 100, prefix: '', suffix: '%', label: 'Offline check-in', note: 'Syncs when WiFi returns' },
]

export function Stats() {
  return (
    <section className="hairline-t relative py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <p className="font-display text-[clamp(3rem,6vw,4.5rem)] text-foreground">
                <CountUp to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-foreground">{stat.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.note}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-12 max-w-2xl text-sm text-muted-foreground">
            FitHuBro is live at Iron House Fitness and open for new gyms. We’d rather
            show you the product than quote a customer count we haven’t earned yet.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
