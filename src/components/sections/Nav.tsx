'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { getPersonaContent, type Persona } from '../content'
import { Logo } from '../visuals/Logo'

export function Nav({ persona }: { persona: Persona }) {
  const pathname = usePathname()
  const { NAV_LINKS } = getPersonaContent(persona)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  
  const getBasePath = (p: Persona) => {
    if (p === 'members') return '/members'
    if (p === 'trainers') return '/trainers'
    return '/'
  }
  const basePath = getBasePath(persona)
  const isCorrectPage = pathname === basePath
  
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // A fixed nav plus an open panel would let the page scroll behind the menu.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open
          ? 'border-b border-white/10 bg-[#0A0A0B]/85 backdrop-blur-md'
          : 'border-b border-transparent'
      )}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-secondary"
        style={{ scaleX }}
      />
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:px-8">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const finalHref = isCorrectPage ? link.href : `${basePath}${link.href}`
            return (
              <Link
                key={link.href}
                href={finalHref}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            )
          })}
          <div className="h-4 w-px bg-white/10" />
          <Link href="/owners" className={cn("text-sm transition-colors hover:text-secondary", persona === 'owners' ? "text-secondary font-medium" : "text-muted-foreground")}>Gyms</Link>
          <Link href="/members" className={cn("text-sm transition-colors hover:text-secondary", persona === 'members' ? "text-secondary font-medium" : "text-muted-foreground")}>Members</Link>
          <Link href="/trainers" className={cn("text-sm transition-colors hover:text-secondary", persona === 'trainers' ? "text-secondary font-medium" : "text-muted-foreground")}>Trainers</Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Sign in
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-secondary px-5 py-2.5 text-sm text-secondary-foreground transition-transform hover:scale-[1.03]"
          >
            Start free
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="-mr-2 p-2 text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 md:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {NAV_LINKS.map((link) => {
              const finalHref = isCorrectPage ? link.href : `${basePath}${link.href}`
              return (
                <Link
                  key={link.href}
                  href={finalHref}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base text-muted-foreground"
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="my-2 h-px w-full bg-white/10" />
            <Link href="/owners" onClick={() => setOpen(false)} className={cn("py-3 text-base", persona === 'owners' ? "text-secondary font-medium" : "text-muted-foreground")}>Gyms</Link>
            <Link href="/members" onClick={() => setOpen(false)} className={cn("py-3 text-base", persona === 'members' ? "text-secondary font-medium" : "text-muted-foreground")}>Members</Link>
            <Link href="/trainers" onClick={() => setOpen(false)} className={cn("py-3 text-base", persona === 'trainers' ? "text-secondary font-medium" : "text-muted-foreground")}>Trainers</Link>
            <div className="my-2 h-px w-full bg-white/10" />
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="py-3 text-base text-muted-foreground"
            >
              Sign in
            </Link>
            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-secondary px-5 py-3.5 text-center text-base text-secondary-foreground"
            >
              Start free
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
