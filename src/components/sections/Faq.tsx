import { Reveal } from '../motion/Reveal'
import { getPersonaContent, type Persona } from '../content'

export function Faq({ persona }: { persona: Persona }) {
  const { FAQS } = getPersonaContent(persona)
  return (
    <section id="faq" className="relative scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)]">
          <div>
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Questions
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display mt-5 text-[clamp(2.25rem,5vw,3.5rem)] text-balance">
                The ones owners
                <br />
                actually ask
              </h2>
            </Reveal>
          </div>

          <div className="divide-y divide-white/10 border-t border-white/10">
            {FAQS.map((faq, index) => (
              <Reveal key={faq.q} delay={index * 0.04}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base text-foreground [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span
                      aria-hidden
                      className="mt-1 shrink-0 text-xl leading-none text-secondary transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl pr-10 text-sm leading-relaxed text-muted-foreground">
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
