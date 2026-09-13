'use client'

import React, { useState, useRef, useMemo } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { InteractivePlateShowcase } from '../visuals/InteractivePlateShowcase'
import { 
  Sparkles, 
  Upload, 
  Trash2, 
  Globe, 
  ShieldCheck,
  MessageCircle,
  Mail,
  Palette,
  ExternalLink,
  MapPin,
  Info,
  Check
} from 'lucide-react'
import { Reveal } from '../motion/Reveal'
import { TiltCard } from '../motion/TiltCard'
import { CONTACT_INFO, generateGymSlug } from '@/lib/config'
import { cn } from '@/lib/utils/cn'

const ACCENT_PRESETS = [
  { id: 'crimson', name: 'Crimson Red', color: '#E50914' },
  { id: 'amber', name: 'Olympic Gold', color: '#F59E0B' },
  { id: 'emerald', name: 'Electric Emerald', color: '#10B981' },
  { id: 'cyan', name: 'Cyber Cyan', color: '#06B6D4' },
]

export function CustomGymWebDemo() {
  const router = useRouter()
  const [gymName, setGymName] = useState('Fit Forensic Gym')
  const [tagline, setTagline] = useState('STRENGTH & PERFORMANCE STUDIO')
  const [address, setAddress] = useState('24 Fitness Avenue, New Delhi')
  const [city, setCity] = useState('New Delhi')
  const [logoUrl, setLogoUrl] = useState<string | null>(null)
  const [logoError, setLogoError] = useState<string | null>(null)
  const [activeAccent, setActiveAccent] = useState(ACCENT_PRESETS[0])
  const [copied, setCopied] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  // Safe deterministic slug
  const mockSlug = useMemo(() => {
    return generateGymSlug(gymName)
  }, [gymName])

  // Client-side logo upload validation with explicit requirements
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogoError(null)
    const file = e.target.files?.[0]
    if (!file) return

    // Type validation
    const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/svg+xml']
    if (!validTypes.includes(file.type)) {
      setLogoError('Unsupported format. Please upload PNG, JPG, WEBP, or SVG.')
      return
    }

    // Size validation: max 5MB
    if (file.size > 5 * 1024 * 1024) {
      setLogoError('File too large. Maximum file size is 5 MB.')
      return
    }

    // Local client-side preview via FileReader
    const reader = new FileReader()
    reader.onload = (event) => {
      if (typeof event.target?.result === 'string') {
        setLogoUrl(event.target.result)
      }
    }
    reader.readAsDataURL(file)
  }

  const handleClearLogo = () => {
    setLogoUrl(null)
    setLogoError(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  // Launch personalized demo page
  const handleLaunchDemo = () => {
    const slug = mockSlug
    if (typeof window !== 'undefined') {
      const demoData = {
        name: gymName.trim() || 'Custom Gym',
        slug,
        tagline: tagline.trim() || 'Fitness Studio',
        address: address.trim(),
        city: city.trim(),
        logoUrl: logoUrl,
        accentColor: activeAccent.color,
      }
      try {
        localStorage.setItem(`fithubro_demo_${slug}`, JSON.stringify(demoData))
      } catch {
        // quota fallback
      }
    }
    router.push(`/${slug}`)
  }

  // Copy demo link
  const handleCopyLink = () => {
    const fullUrl = `https://fithubro.vercel.app/${mockSlug}`
    if (navigator.clipboard) {
      navigator.clipboard.writeText(fullUrl).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    }
  }

  // Pre-composed sales CTAs using verified repository contact info
  const sanitizedGymName = gymName.trim() || 'My Gym'
  const addressClause = address.trim() ? ` located at ${address.trim()}` : ''
  const whatsappQuoteUrl = CONTACT_INFO.whatsappUrl(
    `Hi FitHuBro team! I would like a quotation for a custom 3D gym website for "${sanitizedGymName}"${addressClause}.`
  )
  const emailQuoteUrl = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
    `Custom 3D Website Inquiry - ${sanitizedGymName}`
  )}&body=${encodeURIComponent(
    `Hi FitHuBro Team,\n\nI am interested in a custom 3D website for my gym:\n\nGym Name: ${sanitizedGymName}\nTagline: ${tagline.trim() || 'Fitness Studio'}\nAddress: ${address.trim() || 'Not specified'}\n\nPlease share quotation details, delivery timeline, and onboarding information.\n\nBest regards.`
  )}`

  return (
    <section id="custom-website" className="relative scroll-mt-16 py-24 sm:py-32 overflow-hidden">
      {/* Background glow matching active accent color */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-15 blur-[160px] transition-colors duration-500"
        style={{ backgroundColor: activeAccent.color }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-secondary shadow-sm">
                <Image
                  src="/fithubro-horizontal-logo-transparent.png"
                  alt="FitHuBro"
                  width={68}
                  height={16}
                  className="h-3.5 w-auto object-contain"
                />
                <span className="text-white/30">|</span>
                <span>Custom 3D Gym Websites · Sales Demo</span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="font-display mt-5 text-[clamp(2.5rem,5.5vw,4.5rem)] text-balance leading-none">
                Your gym identity.
                <br />
                <span className="text-secondary">In cinematic 3D.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              Personalize and preview how your gym looks with a custom 3D website. FitHuBro designs bespoke 3D websites hosted on your custom domain, featuring your brand physically embossed on Olympic barbell plates.
            </p>
          </Reveal>
        </div>

        {/* Two-column interactive experience */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[400px_1fr] items-start">
          
          {/* Controls Panel */}
          <Reveal delay={0.15}>
            <div className="rounded-3xl surface-elevated p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="font-display text-xl tracking-wide text-white flex items-center gap-2">
                  <Palette className="h-4 w-4 text-secondary" />
                  Personalize Demo
                </h3>
                <span className="text-[10px] uppercase font-mono tracking-widest text-secondary font-bold bg-secondary/15 px-2.5 py-0.5 rounded-full border border-secondary/20">
                  Instant Demo
                </span>
              </div>

              <div className="mt-6 space-y-5">
                {/* Gym Name Input */}
                <div>
                  <label htmlFor="gym-name-input" className="block text-xs uppercase tracking-wider text-zinc-300 font-medium mb-2">
                    Gym Name
                  </label>
                  <input
                    id="gym-name-input"
                    type="text"
                    maxLength={36}
                    value={gymName}
                    onChange={(e) => setGymName(e.target.value)}
                    placeholder="e.g. Fit Forensic Gym"
                    className="w-full rounded-xl border border-white/20 bg-zinc-900/90 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-all"
                  />
                  <div className="mt-1.5 flex items-center justify-between text-[11px] text-zinc-400">
                    <span>Generated route: <span className="font-mono text-secondary font-semibold">/{mockSlug}</span></span>
                    <span>{gymName.length}/36</span>
                  </div>
                </div>

                {/* Optional Address Input */}
                <div>
                  <label htmlFor="gym-address-input" className="block text-xs uppercase tracking-wider text-zinc-300 font-medium mb-2">
                    Gym Address (Optional)
                  </label>
                  <input
                    id="gym-address-input"
                    type="text"
                    maxLength={60}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="e.g. 24 Fitness Avenue, New Delhi"
                    className="w-full rounded-xl border border-white/20 bg-zinc-900/90 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-all"
                  />
                  <p className="mt-1 text-[11px] text-zinc-400">
                    Omitted from display if left blank.
                  </p>
                </div>

                {/* Tagline Input */}
                <div>
                  <label htmlFor="gym-tagline-input" className="block text-xs uppercase tracking-wider text-zinc-300 font-medium mb-2">
                    Tagline or Discipline
                  </label>
                  <input
                    id="gym-tagline-input"
                    type="text"
                    maxLength={50}
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                    placeholder="e.g. Strength & Performance Studio"
                    className="w-full rounded-xl border border-white/20 bg-zinc-900/90 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-all"
                  />
                </div>

                {/* Logo Upload with Explicit Disclaimer */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs uppercase tracking-wider text-zinc-300 font-medium">
                      Gym Logo (Optional)
                    </label>
                    {logoUrl && (
                      <span className="text-[10px] text-secondary font-mono font-semibold">Loaded</span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/png,image/jpeg,image/webp,image/svg+xml"
                      onChange={handleLogoUpload}
                      className="hidden"
                      id="logo-file-input"
                    />
                    <label
                      htmlFor="logo-file-input"
                      className="flex-1 inline-flex items-center justify-center gap-2 cursor-pointer rounded-xl border border-dashed border-white/25 bg-zinc-900/80 px-4 py-2.5 text-xs text-zinc-200 hover:bg-zinc-800 hover:border-secondary/60 transition-colors"
                    >
                      <Upload className="h-3.5 w-3.5 text-secondary" />
                      <span>{logoUrl ? 'Change Logo' : 'Upload Logo'}</span>
                    </label>

                    {logoUrl && (
                      <button
                        type="button"
                        onClick={handleClearLogo}
                        aria-label="Remove uploaded logo"
                        className="rounded-xl border border-white/15 p-2.5 text-zinc-400 hover:text-secondary hover:border-secondary/40 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>

                  {/* Clear Logo Disclaimer and Requirements */}
                  <div className="mt-2 rounded-xl border border-white/12 bg-zinc-950/80 p-3 text-[11px] text-zinc-300 leading-relaxed">
                    <div className="flex items-start gap-1.5 font-medium text-white mb-1">
                      <Info className="h-3.5 w-3.5 text-secondary shrink-0 mt-0.5" />
                      <span>Logo requirements:</span>
                    </div>
                    <p>
                      PNG, JPG, WEBP or SVG · Max 5 MB · Transparent background recommended · Balanced aspect ratio works best.
                    </p>
                    <p className="text-[10px] text-zinc-400 mt-1">
                      Client-side preview only. Your logo is never uploaded to any backend database.
                    </p>
                  </div>

                  {logoError && (
                    <p className="mt-1.5 text-xs text-red-400">{logoError}</p>
                  )}
                </div>

                {/* Accent Color Palette */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-300 font-medium mb-2">
                    Signature Accent Color
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {ACCENT_PRESETS.map((preset) => (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => setActiveAccent(preset)}
                        className={cn(
                          'flex items-center justify-center gap-1.5 rounded-xl border p-2.5 text-xs font-medium transition-all',
                          activeAccent.id === preset.id
                            ? 'border-white/40 bg-white/15 text-white ring-1 ring-white/30'
                            : 'border-white/10 bg-zinc-900/60 text-zinc-400 hover:bg-zinc-800'
                        )}
                      >
                        <span
                          className="h-3 w-3 rounded-full shrink-0 shadow-sm"
                          style={{ backgroundColor: preset.color }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Launch Demo Route & Sales Inquiry */}
              <div className="mt-8 border-t border-white/10 pt-6 space-y-3">
                <button
                  type="button"
                  onClick={handleLaunchDemo}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-secondary-foreground transition-transform hover:scale-[1.02] shadow-lg shadow-secondary/25"
                >
                  <ExternalLink className="h-4 w-4" />
                  Launch Personalized Demo (/{mockSlug})
                </button>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={whatsappQuoteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-2.5 text-xs font-semibold text-white hover:bg-white/15 transition-colors"
                  >
                    <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
                    <span>WhatsApp Quote</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="flex items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-2.5 text-xs font-semibold text-white hover:bg-white/15 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Globe className="h-3.5 w-3.5 text-secondary" />
                        <span>Copy Demo URL</span>
                      </>
                    )}
                  </button>
                </div>

                <a
                  href={emailQuoteUrl}
                  className="block text-center text-[11px] text-zinc-400 hover:text-white transition-colors pt-1"
                >
                  Prefer email? Contact arman.raza987@gmail.com
                </a>
              </div>
            </div>
          </Reveal>

          {/* Branded 3D Website Mockup Preview Frame */}
          <Reveal delay={0.25} direction="right">
            <TiltCard className="w-full">
              <div className="overflow-hidden rounded-3xl border border-white/15 bg-[#0D0D10] shadow-2xl transition-all">
                
                {/* Mock Browser Title Bar */}
                <div className="flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-3 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-muted-foreground font-mono">
                    <Globe className="h-3 w-3 text-secondary" />
                    <span>https://fithubro.vercel.app/{mockSlug}</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleLaunchDemo}
                    className="inline-flex items-center gap-1 text-[10px] uppercase font-mono tracking-wider text-secondary hover:underline"
                  >
                    <span>Open Demo</span>
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>

                {/* Simulated Custom Website Body */}
                <div className="relative min-h-[500px] p-6 sm:p-10 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#121318] to-[#0A0A0C]">
                  
                  {/* Subtle 3D background grid inside mockup */}
                  <div 
                    className="pointer-events-none absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(${activeAccent.color} 1px, transparent 1px)`,
                      backgroundSize: '24px 24px'
                    }}
                  />

                  {/* Mock Navbar */}
                  <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      {logoUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={logoUrl}
                          alt="Gym Logo"
                          className="h-8 max-w-[120px] object-contain"
                        />
                      ) : (
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-lg font-display text-base font-bold text-white shadow"
                          style={{ backgroundColor: activeAccent.color }}
                        >
                          {(gymName.trim()[0] || 'T').toUpperCase()}
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="font-display tracking-wider text-base sm:text-lg text-foreground truncate max-w-[180px] sm:max-w-[280px]">
                          {sanitizedGymName.toUpperCase()}
                        </span>
                        <div className="flex items-center gap-1.5 pt-0.5">
                          <span className="text-[9px] text-muted-foreground/70 tracking-widest font-mono">
                            POWERED BY
                          </span>
                          <Image
                            src="/fithubro-horizontal-logo-transparent.png"
                            alt="FitHuBro"
                            width={64}
                            height={15}
                            className="h-3 w-auto object-contain opacity-85"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-5 text-xs text-muted-foreground">
                      <span>Facilities</span>
                      <span>Trainers</span>
                      <span>Plans</span>
                      <span
                        className="rounded-full px-3 py-1 text-[11px] font-semibold text-white transition-all shadow"
                        style={{ backgroundColor: activeAccent.color }}
                      >
                        Join Floor
                      </span>
                    </div>
                  </div>

                  {/* Mock Hero Content with 3D Plate */}
                  <div className="relative z-10 my-8 sm:my-10 grid gap-8 lg:grid-cols-[1fr_auto] items-center">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: activeAccent.color }} />
                        {tagline.trim() || 'STRENGTH & PERFORMANCE'}
                      </div>

                      <h4 className="font-display mt-4 text-3xl sm:text-5xl lg:text-6xl text-balance tracking-tight leading-none text-white break-words">
                        {sanitizedGymName.toUpperCase()}
                      </h4>

                      {/* Optional Address Display */}
                      {address.trim() && (
                        <p className="mt-2.5 flex items-center gap-1.5 text-xs text-secondary font-medium">
                          <MapPin className="h-3.5 w-3.5 shrink-0" />
                          <span>{address.trim()}</span>
                        </p>
                      )}

                      <p className="mt-4 max-w-md text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Experience world-class training in {city.trim() || 'your city'}. Powered by Olympic barbells, verified strength coaches, and frictionless digital membership passes.
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={handleLaunchDemo}
                          className="rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-transform hover:scale-[1.03]"
                          style={{ backgroundColor: activeAccent.color }}
                        >
                          View Full Demo Site
                        </button>
                        <a
                          href={whatsappQuoteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs text-foreground/90 hover:bg-white/10 transition-colors inline-flex items-center gap-1.5"
                        >
                          <span>Request Quote</span>
                        </a>
                      </div>
                    </div>

                    {/* Signature 3D Plate with Dynamic Gym Embossing & Real Physics */}
                    <div className="flex justify-center items-center py-2">
                      <InteractivePlateShowcase
                        gymName={gymName}
                        logoUrl={logoUrl}
                        accentColor={activeAccent.color}
                      />
                    </div>
                  </div>

                  {/* Mock Footer / Trust Badge */}
                  <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-4 text-[11px] text-muted-foreground gap-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/fithubro-horizontal-logo-transparent.png"
                        alt="FitHuBro"
                        width={70}
                        height={16}
                        className="h-3.5 w-auto object-contain opacity-90"
                      />
                      <span>Interactive 3D Engine · Plates Branded Front & Back</span>
                    </div>
                    <div className="font-mono text-[10px] text-white/40">
                      https://fithubro.vercel.app/{mockSlug}
                    </div>
                  </div>

                </div>
              </div>
            </TiltCard>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
