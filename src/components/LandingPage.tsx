'use client'

import { useState, useEffect } from 'react'
import { Cursor } from './motion/Cursor'
import { Nav } from './sections/Nav'
import { Hero } from './sections/Hero'
import { Manifesto } from './sections/Manifesto'
import { Pillars } from './sections/Pillars'
import { ProductTour } from './sections/ProductTour'
import { Personas } from './sections/Personas'
import { AudienceBridges } from './sections/AudienceBridges'
import { Stats } from './sections/Stats'
import { RoiCalculator } from './sections/RoiCalculator'
import { Compare } from './sections/Compare'
import { Pricing } from './sections/Pricing'
import { Faq } from './sections/Faq'
import { FinalCta } from './sections/FinalCta'
import { Footer } from './sections/Footer'

import { WhatsAppButton } from './ui-kit/WhatsAppButton'
import { ScrollScene } from './visuals/ScrollScene'
import type { Persona } from './content'

interface LandingPageProps {
  persona: Persona
}

export function LandingPage({ persona: initialPersona }: LandingPageProps) {
  const [persona, setPersona] = useState<Persona>(initialPersona)

  useEffect(() => {
    setPersona(initialPersona)
  }, [initialPersona])

  const isMember = persona === 'members'

  return (
    <div className="marketing-scope min-h-screen relative bg-transparent">
      {/* 3D Scroll-Driven Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <ScrollScene />
      </div>
      
      {/* 
        The z-10 wrapper ensures our DOM content sits on top of the fixed WebGL canvas.
        pointer-events-none on the wrapper ensures we can scroll, but we must set
        pointer-events-auto on interactive sections.
      */}
      <div className="relative z-10 w-full pointer-events-none">
        <div className="pointer-events-auto">
          <Cursor />
          <Nav persona={persona} />
        </div>
        
        <main className="pointer-events-auto">
          <Hero persona={persona} onPersonaChange={setPersona} />
          <Manifesto persona={persona} />
          <Pillars persona={persona} />
          <ProductTour persona={persona} />
          <Personas persona={persona} />
          
          {isMember ? (
            <AudienceBridges onSelectPersona={setPersona} />
          ) : (
            <>
              {persona === 'owners' && (
                <>
                  <Stats persona={persona} />
                  <RoiCalculator persona={persona} />
                  <Compare persona={persona} />
                  <Pricing persona={persona} />
                </>
              )}
              {persona === 'trainers' && (
                <>
                  <Stats persona={persona} />
                  <Compare persona={persona} />
                </>
              )}
            </>
          )}

          <Faq persona={persona} />
          <FinalCta persona={persona} />
        </main>
        
        <div className="pointer-events-auto">
          <Footer persona={persona} />
          <WhatsAppButton />
        </div>
      </div>
    </div>
  )
}
