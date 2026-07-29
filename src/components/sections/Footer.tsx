import Link from 'next/link'
import React from 'react'
import { NAV_LINKS } from '../content'
import { Logo } from '../visuals/Logo'

const LEGAL_LINKS = [
  { label: 'Sign in', href: '/login' },
  { label: 'Start free', href: '/register' },
  { label: 'Check in', href: '/attendance' },
]

export const Footer = React.memo(function Footer() {
  return (
    <footer className="hairline-t relative py-14">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link href="/">
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The operating system for Indian gyms. Built for the front desk, the
              owner’s phone, and the member in between sessions.
            </p>
          </div>

          <div className="flex gap-14 sm:gap-20">
            <nav aria-label="Sections">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Product
              </p>
              <ul className="mt-4 space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Account">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Access
              </p>
              <ul className="mt-4 space-y-3">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FitHuBro. Made in India.</p>
          <p>Data hosted in Mumbai.</p>
        </div>
      </div>
      
      <div className="pointer-events-none mt-20 flex select-none overflow-hidden" aria-hidden="true">
        <p className="font-display -mb-[4%] w-full text-center text-[clamp(4rem,22vw,26rem)] leading-[0.75] tracking-tight text-white/5">
          FITHU<span className="text-secondary/20">BRO</span>
        </p>
      </div>
    </footer>
  )
})
