import { Check, Clock, Minus } from 'lucide-react'
import { Reveal } from '../motion/Reveal'
import { getPersonaContent, type Persona } from '../content'
import type { CompareRow } from '../content/owners'

function Cell({ state }: { state: CompareRow['us'] | CompareRow['them'] }) {
  if (state === 'yes') {
    return (
      <>
        <Check className="mx-auto h-4 w-4 text-success" strokeWidth={2.5} />
        <span className="sr-only">Available</span>
      </>
    )
  }

  if (state === 'upcoming') {
    return (
      <span className="inline-flex flex-col items-center gap-1 text-[10px] leading-tight text-warning sm:flex-row sm:gap-1.5 sm:text-xs">
        <Clock className="h-3.5 w-3.5" />
        In build
      </span>
    )
  }

  if (state === 'partial') {
    return (
      <>
        <span className="text-xs text-muted-foreground">Partial</span>
      </>
    )
  }

  return (
    <>
      <Minus className="mx-auto h-4 w-4 text-muted-foreground/40" />
      <span className="sr-only">Not available</span>
    </>
  )
}

export function Compare({ persona }: { persona: Persona }) {
  const { COMPARE } = getPersonaContent(persona)
  if (!COMPARE || !COMPARE.rows) return null

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Straight comparison
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="font-display mt-5 max-w-2xl text-[clamp(2.25rem,5.5vw,4.25rem)] text-balance">
            {COMPARE.headline.split(' ').slice(0, -2).join(' ')}
            <br />
            <span className="text-secondary">{COMPARE.headline.split(' ').slice(-2).join(' ')}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            See exactly how we stack up against the alternatives.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="px-3 py-4 text-[11px] uppercase tracking-wider text-muted-foreground sm:px-6 sm:text-xs">
                    Capability
                  </th>
                  <th className="w-[68px] px-2 py-4 text-center text-[11px] uppercase tracking-wider text-foreground sm:w-36 sm:px-3 sm:text-xs">
                    {COMPARE.us}
                  </th>
                  <th className="w-[68px] px-2 py-4 text-center text-[11px] uppercase tracking-wider text-muted-foreground sm:w-36 sm:px-3 sm:text-xs">
                    {COMPARE.them}
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.rows.map((row) => (
                  <tr key={row.feature} className="border-b border-white/5 last:border-0">
                    <td className="px-3 py-4 text-[13px] leading-snug text-foreground/90 sm:px-6 sm:text-sm">
                      {row.feature}
                    </td>
                    <td className="px-2 py-4 text-center sm:px-3">
                      <Cell state={row.us} />
                    </td>
                    <td className="px-2 py-4 text-center sm:px-3">
                      <Cell state={row.them} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
