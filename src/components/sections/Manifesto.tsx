import { Reveal } from '../motion/Reveal'
import { getPersonaContent, type Persona } from '../content'

export function Manifesto({ persona }: { persona: Persona }) {
  const { MANIFESTO } = getPersonaContent(persona)
  
  return (
    <section className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)]">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Why we built it
            </p>
          </Reveal>

          <div className="rounded-3xl bg-background/60 p-5 shadow-2xl backdrop-blur-md border border-white/5 sm:border-transparent sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-none">
            <Reveal delay={0.06}>
              <p className="font-display text-[clamp(1.75rem,4.2vw,3.25rem)] !leading-[1.08] text-balance">
                {MANIFESTO?.headline || 'A member who stops coming doesn’t cancel. They just stop coming — and then they cancel.'}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground sm:mt-12">
                {(MANIFESTO?.body || [
                  'So we built both halves into one login. Your staff run the floor. The AI coach handles the six days a week your trainers can’t.',
                  'And the moment a member goes quiet, you know — while there’s still time to do something about it.'
                ]).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
