import { PlateBadge } from '../visuals/PlateBadge'
import { LineArt } from '../visuals/LineArt'
import { GradientMesh } from '../visuals/GradientMesh'
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal'
import { TiltCard } from '../motion/TiltCard'
import { getPersonaContent, type Persona } from '../content'

export function Pillars({ persona }: { persona: Persona }) {
  const { PILLARS } = getPersonaContent(persona)

  const isMember = persona === 'members'

  return (
    <section id="coach" className="relative scroll-mt-16 py-24 sm:py-32">
      {/* Anchor fallback for legacy #pillars links */}
      <span id="pillars" className="absolute -top-16" aria-hidden />
      <GradientMesh />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] text-secondary font-semibold">
            {isMember ? '24/7 AI COACH' : 'Core Pillars'}
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="font-display mt-5 max-w-3xl text-[clamp(2.5rem,6.5vw,5rem)] text-balance text-white">
            {isMember ? (
              <>
                Intelligent coaching.
                <br />
                <span className="text-secondary">Always in your corner.</span>
              </>
            ) : (
              <>
                Three things a coach does.
                <br />
                <span className="text-secondary">All three.</span>
              </>
            )}
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 font-normal">
            {isMember
              ? 'Most apps give you a static template. FitHuBro gives you conversational guidance to adjust workouts for available gym equipment, estimate macros, and stay accountable.'
              : 'Structure your coaching delivery, set nutrition targets, and maintain member retention.'}
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <StaggerItem key={pillar.index}>
              <TiltCard className="h-full">
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl surface-card p-7 sm:p-8 transition-all hover:border-white/25 hover:shadow-2xl">
                  <div className="flex items-center justify-between">
                    <PlateBadge number={pillar.index} className="scale-75 origin-top-left" />
                    <LineArt
                      icon={pillar.index === '01' ? 'dumbbell' : pillar.index === '02' ? 'plate' : 'kettlebell'}
                      className="h-10 w-10 opacity-40 text-white"
                    />
                  </div>
                  <h3 className="font-display mt-5 text-3xl text-white tracking-wide">{pillar.title}</h3>
                  <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-zinc-300">
                    {pillar.body}
                  </p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
