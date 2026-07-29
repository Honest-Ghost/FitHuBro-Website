import { Reveal } from '../motion/Reveal'

export function Manifesto() {
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
                A member who stops coming doesn’t cancel. They just stop coming —
                and you find out sixty days later, when the renewal never lands.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-10 grid gap-8 text-base leading-relaxed text-muted-foreground sm:grid-cols-2">
                <p>
                  Gym software has spent a decade getting good at the front desk and
                  ignoring everything after it. It records that someone walked in. It
                  has nothing to say about whether they’re making progress, and no
                  idea they were about to quit.
                </p>
                <p>
                  So we built both halves into one login. Your staff run the floor.
                  The AI coach handles the six days a week your trainers can’t. And
                  the moment a member goes quiet, you know — while there’s still
                  time to do something about it.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
