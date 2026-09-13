import { Reveal } from '../motion/Reveal'
import { getPersonaContent, type Persona } from '../content'

export function Faq({ persona }: { persona?: Persona }) {
  const activePersona = persona || 'members'
  const { FAQS } = getPersonaContent(activePersona)

  const faqHeading =
    activePersona === 'trainers' ? (
      <>
        Questions
        <br />
        <span className="text-secondary">trainers ask</span>
      </>
    ) : activePersona === 'owners' ? (
      <>
        Questions
        <br />
        <span className="text-secondary">gym owners ask</span>
      </>
    ) : (
      <>
        Answers for
        <br />
        <span className="text-secondary">your journey</span>
      </>
    )

  return (
    <section id="faq" className="relative scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)]">
          <div>
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.22em] text-secondary font-semibold">
                Got Questions?
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display mt-5 text-[clamp(2.25rem,5vw,3.5rem)] text-balance text-white">
                {faqHeading}
              </h2>
            </Reveal>
          </div>

          <div className="surface-card rounded-3xl p-6 sm:p-8 divide-y divide-white/10 shadow-2xl">
            {FAQS.map((faq, index) => (
              <Reveal key={faq.q} delay={index * 0.04}>
                <details className="group py-5 first:pt-2 last:pb-2">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base sm:text-lg font-medium text-white transition-colors hover:text-secondary [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span
                      aria-hidden
                      className="mt-1 shrink-0 text-xl leading-none text-secondary transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl pr-8 text-sm sm:text-base leading-relaxed text-zinc-300 font-normal">
                    {faq.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
