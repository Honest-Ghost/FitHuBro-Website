import { CountUp } from '../motion/CountUp'
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal'
import { getPersonaContent, type Persona } from '../content'

export function Stats({ persona }: { persona: Persona }) {
  const { STATS } = getPersonaContent(persona)

  const getStatsNote = () => {
    if (persona === 'trainers') {
      return 'Engineered for certified fitness professionals. Real credentials, direct client management, and structured workout delivery.'
    }
    if (persona === 'members') {
      return 'Your personal fitness journey, guided by an AI Coach and connected directly to your gym floor.'
    }
    return 'FitHuBro is built for independent gym owners and fitness studios. We focus on real operational software rather than quoting exaggerated claims.'
  }
  
  return (
    <section className="hairline-t relative py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <p className="font-display text-[clamp(3rem,6vw,4.5rem)] text-white">
                <CountUp to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-base font-semibold text-white">{stat.label}</p>
              <p className="mt-1 text-sm text-zinc-300">{stat.note}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-12 max-w-2xl text-sm text-zinc-400">
            {getStatsNote()}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
