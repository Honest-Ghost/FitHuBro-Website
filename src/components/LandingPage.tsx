import { Cursor } from './motion/Cursor'
import { Nav } from './sections/Nav'
import { Hero } from './sections/Hero'
import { Manifesto } from './sections/Manifesto'
import { Personas } from './sections/Personas'
import { Pillars } from './sections/Pillars'
import { ProductTour } from './sections/ProductTour'
import { Stats } from './sections/Stats'
import { RoiCalculator } from './sections/RoiCalculator'
import { Compare } from './sections/Compare'
import { Pricing } from './sections/Pricing'
import { Faq } from './sections/Faq'
import { FinalCta } from './sections/FinalCta'
import { Footer } from './sections/Footer'

import { WhatsAppButton } from './ui-kit/WhatsAppButton'
import { ScrollScene } from './visuals/ScrollScene'

interface LandingPageProps {
  persona: 'owners' | 'members' | 'trainers'
}

export function LandingPage({ persona }: LandingPageProps) {
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
          <Hero persona={persona} />
          <Manifesto persona={persona} />
          <Personas persona={persona} />
          <Pillars persona={persona} />
          <ProductTour persona={persona} />
          <Stats persona={persona} />
          <RoiCalculator persona={persona} />
          <Compare persona={persona} />
          <Pricing persona={persona} />
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
