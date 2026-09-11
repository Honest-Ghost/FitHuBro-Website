import Link from 'next/link'
import React from 'react'
import { Logo } from '../visuals/Logo'
import { APP_ROUTES } from '@/lib/config'

export const Footer = React.memo(function Footer({ persona: _persona }: { persona?: string }) {
  return (
    <footer className="hairline-t relative pt-8 sm:pt-10 pb-6 bg-transparent">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand Info */}
          <div className="flex flex-col space-y-3">
            <Link href="/" className="inline-flex items-center">
              <Logo imageClassName="h-5 sm:h-6" />
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground pt-0.5">
              The modern gym management SaaS platform. Multi-tenant operations, QR kiosk attendance, payments, and AI workout delivery.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-[11px] font-medium text-white/70">
                EST. 2026
              </span>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-secondary transition-colors">Gym Management Software</Link></li>
              <li><Link href="/owners" className="text-muted-foreground hover:text-secondary transition-colors">For Gym Owners</Link></li>
              <li><Link href="/trainers" className="text-muted-foreground hover:text-secondary transition-colors">For Personal Trainers</Link></li>
              <li><Link href="/members" className="text-muted-foreground hover:text-secondary transition-colors">For Gym Members</Link></li>
            </ul>
          </div>

          {/* Portals & Legal */}
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">App Portals</h4>
            <ul className="space-y-2 text-sm">
              <li><a href={APP_ROUTES.ownerLogin} className="text-muted-foreground hover:text-secondary transition-colors">Gym Owner Portal</a></li>
              <li><a href={APP_ROUTES.trainerLogin} className="text-muted-foreground hover:text-secondary transition-colors">Trainer Portal</a></li>
              <li><a href={APP_ROUTES.memberCheckIn} className="text-muted-foreground hover:text-secondary transition-colors">Member Check-In & App</a></li>
              <li><a href={APP_ROUTES.signIn} className="text-muted-foreground hover:text-secondary transition-colors">Universal Sign-In</a></li>
            </ul>
          </div>

          {/* Legal & Contacts */}
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">Trust & Contacts</h4>
            <ul className="space-y-1.5 text-sm text-muted-foreground mb-3">
              <li><Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-secondary transition-colors">Disclaimer</Link></li>
            </ul>
            <div className="space-y-1.5 text-sm text-muted-foreground border-t border-white/10 pt-2">
              <a href="tel:+919911209589" className="hover:text-secondary transition-colors flex items-center gap-2">
                <svg className="w-3.5 h-3.5 shrink-0 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                + (91) 9911209589
              </a>
              <a href="mailto:arman.raza987@gmail.com" className="hover:text-secondary transition-colors flex items-center gap-2">
                <svg className="w-3.5 h-3.5 shrink-0 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                arman.raza987@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-white/10 pt-5 text-xs text-muted-foreground md:flex-row gap-4">
          <p>©FitHuBro {new Date().getFullYear()}. All rights reserved.</p>
          <p className="md:text-right">Powered by <span className="font-medium text-foreground">AR CodeHub</span></p>
        </div>
      </div>
    </footer>
  )
})
