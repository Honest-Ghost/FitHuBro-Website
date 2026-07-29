import Link from 'next/link'
import React from 'react'
import { getPersonaContent, type Persona } from '../content'
import { Logo } from '../visuals/Logo'

export const Footer = React.memo(function Footer({ persona }: { persona: Persona }) {
  const { NAV_LINKS } = getPersonaContent(persona)
  return (
    <footer className="hairline-t relative pt-14 pb-6 bg-[#0A0A0B]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Logo & Social */}
          <div className="flex flex-col">
            <Link href="/">
              <Logo />
            </Link>
            <div className="mt-6 flex gap-4 text-sm font-medium text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">FB</a>
              <a href="#" className="hover:text-foreground transition-colors">TW</a>
              <a href="#" className="hover:text-foreground transition-colors">IN</a>
              <a href="#" className="hover:text-foreground transition-colors">YT</a>
              <a href="#" className="hover:text-foreground transition-colors">IG</a>
            </div>
            <p className="mt-8 font-display text-4xl font-light tracking-tighter text-white/50">
              since 2026
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="mb-6 text-lg font-medium text-foreground">Contacts</h4>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                507 Highlight House, MR-5,<br />
                Mahalaxmi Nagar, Indore -<br />
                452001
              </p>
              <div className="flex flex-col space-y-2">
                <a href="tel:+919826356926" className="hover:text-secondary transition-colors">+ (91) 9826356926</a>
                <a href="tel:+917898956926" className="hover:text-secondary transition-colors">+ (91) 7898956926</a>
                <a href="tel:+919981113579" className="hover:text-secondary transition-colors">+ (91) 9981113579</a>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-6 text-lg font-medium text-foreground">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Partner Login</Link></li>
              <li><Link href="/register" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Become A Partner</Link></li>
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Gym Management App</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-6 text-lg font-medium text-foreground">Links</h4>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="/disclaimer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Disclaimer</Link></li>
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright Area */}
        <div className="mt-20 flex flex-col items-center justify-between border-t border-white/10 pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>©FitHuBro {new Date().getFullYear()}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Powered by <span className="font-medium text-foreground">AR CodeHub</span></p>
        </div>
      </div>
    </footer>
  )
})
