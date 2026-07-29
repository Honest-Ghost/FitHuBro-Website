import { Check } from 'lucide-react'
import { DashboardScreen } from '../visuals/DashboardScreen'
import { PlanEditorScreen } from '../visuals/PlanEditorScreen'
import { WorkoutScreen } from '../visuals/WorkoutScreen'
import { PhoneFrame } from '../visuals/PhoneFrame'
import { Reveal } from '../motion/Reveal'
import { TOUR_STEPS } from '../content'

/**
 * Sticky stacked scroll. Each step sticks to the top and the next one slides
 * over it — CSS `position: sticky` only, no scroll listener, so it stays smooth
 * on a mid-range phone.
 */
export function ProductTour() {
  return (
    <section id="product" className="relative scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            The product
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="font-display mt-5 max-w-3xl text-[clamp(2.5rem,6.5vw,5rem)] text-balance">
            Four screens your gym lives in
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 max-w-[1400px] px-5 sm:px-8">
        {TOUR_STEPS.map((step, index) => (
          <div
            key={step.eyebrow}
            className="sticky top-20 pb-6"
            style={{ zIndex: index + 1 }}
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#101012] p-6 sm:p-10">
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                <div className={index % 2 === 1 ? 'lg:order-2' : undefined}>
                  <p className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.2em] text-secondary">
                    <span className="font-mono">0{index + 1}</span>
                    {step.eyebrow}
                  </p>

                  <h3 className="font-display mt-4 text-[clamp(1.75rem,3.6vw,2.75rem)] text-balance">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>

                  <ul className="mt-7 space-y-3">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm text-foreground/85">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" strokeWidth={2.5} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : undefined}>
                  <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[20px] border border-white/10 bg-[#0A0A0B] shadow-2xl lg:max-w-none lg:aspect-[16/10]">
                    {index === 0 && <DashboardScreen />}
                    {index === 1 && <PlanEditorScreen />}
                    {index === 2 && (
                      <div className="flex h-full items-center justify-center pt-8">
                        <PhoneFrame className="scale-90 transform lg:scale-100">
                          <WorkoutScreen />
                        </PhoneFrame>
                      </div>
                    )}
                    {index === 3 && <DashboardScreen />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
