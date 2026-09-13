'use client'

import React, { useEffect, useState, use } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  MessageCircle, 
  Mail, 
  ShieldCheck, 
  Dumbbell, 
  QrCode, 
  Check,
  ChevronLeft
} from 'lucide-react'
import { ScrollScene } from '@/components/visuals/ScrollScene'
import { Cursor } from '@/components/motion/Cursor'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { TiltCard } from '@/components/motion/TiltCard'
import { CONTACT_INFO, humanizeGymSlug } from '@/lib/config'

interface PageProps {
  params: Promise<{ slug: string }>
}

interface DemoGymState {
  name: string
  slug: string
  tagline: string
  address: string
  city: string
  logoUrl: string | null
  accentColor: string
}

export default function PersonalizedGymPage({ params }: PageProps) {
  const resolvedParams = use(params)
  const slug = resolvedParams.slug

  const [loading, setLoading] = useState(true)
  const [gym, setGym] = useState<DemoGymState>({
    name: humanizeGymSlug(slug),
    slug: slug,
    tagline: 'STRENGTH & PERFORMANCE STUDIO',
    address: '',
    city: 'India',
    logoUrl: null,
    accentColor: '#E50914',
  })

  useEffect(() => {
    // Read local demo configuration from storage or fallback to humanized slug
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(`fithubro_demo_${slug}`)
        if (stored) {
          const parsed = JSON.parse(stored)
          setGym({
            name: parsed.name || humanizeGymSlug(slug),
            slug: slug,
            tagline: parsed.tagline || 'STRENGTH & PERFORMANCE STUDIO',
            address: parsed.address || '',
            city: parsed.city || 'India',
            logoUrl: parsed.logoUrl || null,
            accentColor: parsed.accentColor || '#E50914',
          })
        } else {
          setGym((prev) => ({
            ...prev,
            name: humanizeGymSlug(slug),
          }))
        }
      } catch {
        // storage fallback
      }
    }

    // Purposeful short preloader while 3D WebGL scene initializes
    const timer = setTimeout(() => {
      setLoading(false)
    }, 450)

    return () => clearTimeout(timer)
  }, [slug])

  // Verified WhatsApp & Email Sales CTAs
  const whatsappUrl = CONTACT_INFO.whatsappUrl(
    `Hi FitHuBro team! I'm viewing the custom 3D demo for "${gym.name}" (https://fithubro.vercel.app/${slug}). I want a quotation for my gym website.`
  )
  const emailUrl = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
    `Custom 3D Website Quotation - ${gym.name}`
  )}&body=${encodeURIComponent(
    `Hi FitHuBro Team,\n\nI want to get a custom 3D website for my gym:\n\nGym Name: ${gym.name}\nDemo Route: https://fithubro.vercel.app/${slug}\nAddress: ${gym.address || 'Not specified'}\n\nPlease share quotation details, delivery schedule, and domain onboarding steps.\n\nBest regards.`
  )}`

  return (
    <div className="marketing-scope min-h-screen relative bg-transparent text-foreground">
      {/* Short purposeful preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0A0B] text-center p-6"
          >
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-secondary/30 bg-secondary/5 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-t-secondary border-r-transparent border-b-transparent border-l-transparent"
              />
              <Dumbbell className="h-8 w-8 text-secondary" />
            </div>

            <p className="font-mono text-xs uppercase tracking-[0.25em] text-secondary mb-2">
              INITIALIZING 3D ENGINE
            </p>
            <h2 className="font-display text-2xl sm:text-3xl text-white tracking-wide">
              BUILDING YOUR GYM EXPERIENCE
            </h2>
            <p className="mt-2 text-sm text-muted-foreground font-mono">
              {gym.name.toUpperCase()}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D WebGL Background with Physical Plate Branding on Both Sides */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <ScrollScene brandText={gym.name} logoUrl={gym.logoUrl} accentColor={gym.accentColor} />
      </div>

      <div className="relative z-10 w-full pointer-events-none">
        <div className="pointer-events-auto">
          <Cursor />

          {/* Personalized Demo Top Navigation Bar */}
          <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-background/85 backdrop-blur-md">
            <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:px-8">
              {/* Gym Brand Identity */}
              <div className="flex items-center gap-3">
                {gym.logoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={gym.logoUrl}
                    alt={`${gym.name} logo`}
                    className="h-8 max-w-[130px] object-contain"
                  />
                ) : (
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg font-display text-base font-bold text-white shadow"
                    style={{ backgroundColor: gym.accentColor }}
                  >
                    {(gym.name.trim()[0] || 'G').toUpperCase()}
                  </div>
                )}
                
                <div className="flex flex-col">
                  <span className="font-display tracking-wider text-base sm:text-lg text-foreground truncate max-w-[160px] sm:max-w-[280px]">
                    {gym.name.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-1.5 pt-0.5">
                    <span className="text-[8px] uppercase font-mono tracking-widest text-muted-foreground/70">
                      POWERED BY
                    </span>
                    <Image
                      src="/fithubro-horizontal-logo-transparent.png"
                      alt="FitHuBro"
                      width={60}
                      height={15}
                      className="h-3 w-auto object-contain opacity-85"
                    />
                  </div>
                </div>
              </div>

              {/* Demo Badge & Action Links */}
              <div className="flex items-center gap-3">
                <Link
                  href="/owners"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-white transition-colors"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                  <span>FitHuBro Platform</span>
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-secondary px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-secondary-foreground transition-transform hover:scale-[1.03] shadow-lg shadow-secondary/20 flex items-center gap-1.5"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>Get This Website</span>
                </a>
              </div>
            </nav>
          </header>
        </div>

        <main className="pointer-events-auto pt-28 sm:pt-36">
          {/* Personalized Hero Section */}
          <section className="relative px-5 sm:px-8 pb-20 sm:pb-32">
            <div className="mx-auto max-w-[1400px]">
              <Reveal>
                <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-secondary">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span className="font-mono uppercase tracking-wider">
                    PERSONALIZED DEMO · HTTPS://FITHUBRO.VERCEL.APP/{slug}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="mt-6 inline-block">
                  <span
                    className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] font-semibold"
                    style={{ color: gym.accentColor }}
                  >
                    {gym.tagline.toUpperCase()}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="font-display mt-3 text-[clamp(3rem,8vw,7.5rem)] text-balance tracking-tight leading-none text-white break-words max-w-5xl">
                  {gym.name.toUpperCase()}
                </h1>
              </Reveal>

              {/* Optional Address Display - Cleanly omitted if empty */}
              {gym.address.trim() && (
                <Reveal delay={0.14}>
                  <div className="mt-4 flex items-center gap-2 text-sm text-foreground/90 font-medium">
                    <MapPin className="h-4 w-4 text-secondary shrink-0" />
                    <span>{gym.address.trim()}</span>
                  </div>
                </Reveal>
              )}

              <Reveal delay={0.18}>
                <p className="mt-6 max-w-2xl text-base sm:text-xl text-muted-foreground leading-relaxed">
                  Experience elite strength training and high-performance fitness. Powered by custom 3D barbell visuals, equipment-aware coaching, and seamless mobile check-in.
                </p>
              </Reveal>

              {/* CTA Button Group */}
              <Reveal delay={0.24}>
                <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full bg-secondary px-8 py-4 text-base font-bold uppercase tracking-wider text-secondary-foreground transition-transform hover:scale-[1.03] shadow-xl shadow-secondary/30"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Get This Website For My Gym</span>
                  </a>

                  <a
                    href={emailUrl}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-sm text-foreground/90 hover:bg-white/10 transition-colors"
                  >
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>Email Sales (+91 9911209589)</span>
                  </a>
                </div>
              </Reveal>
            </div>
          </section>

          {/* 3D Plate Branding Showcase Callout */}
          <section className="relative px-5 sm:px-8 py-16 sm:py-24 border-t border-white/10 bg-white/[0.01]">
            <div className="mx-auto max-w-[1400px]">
              <div className="grid gap-10 lg:grid-cols-2 items-center">
                <Reveal>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-secondary font-mono">
                      SIGNATURE 3D EMBOSSING
                    </p>
                    <h2 className="font-display mt-3 text-3xl sm:text-5xl text-white text-balance">
                      Both sides branded.
                      <br />
                      <span className="text-secondary">Physically in the 3D model.</span>
                    </h2>
                    <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Look at the 3D barbell spinning in the background. Each visible 20.4 kg plate is physically embossed on <strong className="text-foreground">both the front (+X) and back (-X) faces</strong> with <span className="text-secondary font-bold font-mono">{gym.name.toUpperCase()}</span>.
                    </p>
                    <ul className="mt-6 space-y-3">
                      {[
                        'Front face embossed with gym name',
                        'Back face embossed with gym name on 3D rotation',
                        'Dynamically rendered in WebGL without performance degradation',
                        'Customized for your facility branding and custom domain',
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/85">
                          <Check className="h-4 w-4 text-secondary shrink-0" strokeWidth={2.5} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal delay={0.15} direction="right">
                  <TiltCard>
                    <div className="rounded-3xl border border-white/10 bg-[#0E0E12] p-8 text-center relative overflow-hidden shadow-2xl">
                      <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#2A2D35] bg-[#16171B] shadow-inner p-3">
                        {gym.logoUrl ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={gym.logoUrl}
                            alt="Gym Logo"
                            className="h-14 w-14 object-contain"
                          />
                        ) : (
                          <Image
                            src="/fithubro-horizontal-logo-transparent.png"
                            alt="FitHuBro"
                            width={80}
                            height={20}
                            className="h-7 w-auto object-contain"
                          />
                        )}
                      </div>
                      <h3 className="font-display text-2xl text-white">{gym.name.toUpperCase()}</h3>
                      {gym.address.trim() && (
                        <p className="mt-1 text-xs text-secondary font-medium">{gym.address.trim()}</p>
                      )}
                      <p className="mt-3 text-xs text-muted-foreground max-w-xs mx-auto">
                        Delivered on your bespoke domain (e.g. <span className="font-mono text-white/90">{slug}.in</span>) connected to FitHuBro gym management.
                      </p>
                      <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-center gap-2 text-[11px] font-mono text-muted-foreground">
                        <ShieldCheck className="h-4 w-4 text-secondary" />
                        <span>Client-Side Demo · No Tenant Created</span>
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Integrated Platform Value Section */}
          <section className="relative px-5 sm:px-8 py-20 sm:py-28 border-t border-white/10">
            <div className="mx-auto max-w-[1400px]">
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground font-mono">
                  THE COMPLETE PACKAGE
                </p>
                <h2 className="font-display mt-3 text-3xl sm:text-5xl text-balance text-white">
                  3D Website + Gym Operations
                </h2>
                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Your custom 3D website connects seamlessly with FitHuBro&apos;s all-in-one gym software.
                </p>
              </div>

              <Stagger className="mt-14 grid gap-6 sm:grid-cols-3">
                <StaggerItem>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 h-full flex flex-col justify-between">
                    <div>
                      <div className="h-10 w-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-5">
                        <QrCode className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-2xl text-white">60s QR Attendance</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        Fraud-proof rotating HMAC QR kiosk running on any tablet at your front desk.
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 h-full flex flex-col justify-between">
                    <div>
                      <div className="h-10 w-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-5">
                        <Dumbbell className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-2xl text-white">Trainer Program Builder</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        Verified coach KYC and structured multi-week progressive training routines.
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 h-full flex flex-col justify-between">
                    <div>
                      <div className="h-10 w-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-5">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-2xl text-white">AI Coach & Nutrition</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        Equipment-aware workout adjustments, plate calculations, and meal photo macro scanning.
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              </Stagger>
            </div>
          </section>

          {/* Final Call To Action */}
          <section className="relative px-5 sm:px-8 py-24 sm:py-32 text-center border-t border-white/10 bg-white/[0.02]">
            <div className="mx-auto max-w-3xl">
              <Reveal>
                <h2 className="font-display text-4xl sm:text-6xl text-white text-balance leading-none">
                  Ready to launch a 3D website for <span className="text-secondary">{gym.name}</span>?
                </h2>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
                  We design, build, and deploy your custom-branded 3D gym website on your own domain.
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 text-base font-bold uppercase tracking-wider text-secondary-foreground transition-transform hover:scale-[1.03] shadow-xl shadow-secondary/30"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Request Quotation on WhatsApp</span>
                  </a>

                  <Link
                    href="/owners#custom-website"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm text-foreground hover:bg-white/5 transition-colors"
                  >
                    <span>Modify Demo Settings</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>
        </main>

        {/* Personalized Footer */}
        <footer className="border-t border-white/10 py-8 px-5 sm:px-8 text-center text-xs text-muted-foreground pointer-events-auto">
          <div className="mx-auto max-w-[1400px] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-foreground font-medium">{gym.name.toUpperCase()}</p>
              {gym.address.trim() && <p className="text-muted-foreground mt-0.5">{gym.address.trim()}</p>}
            </div>
            
            <div className="flex items-center gap-1.5">
              <span>Custom 3D Demo powered by</span>
              <Link href="/" className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity">
                <Image
                  src="/fithubro-horizontal-logo-transparent.png"
                  alt="FitHuBro"
                  width={76}
                  height={18}
                  className="h-3.5 w-auto object-contain"
                />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
