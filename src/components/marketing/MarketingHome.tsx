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

import { ScrollScene } from './visuals/ScrollScene'

export function MarketingHome() {
  return (
    <div className="marketing-scope min-h-screen relative bg-transparent">
      {/* 3D Scroll-Driven Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <ScrollScene />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 bg-transparent">
        <Cursor />
        <Nav />
        <main>
          <Hero />
          <Manifesto />
          <Personas />
          <Pillars />
          <ProductTour />
          <Stats />
          <RoiCalculator />
          <Compare />
          <Pricing />
          <Faq />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </div>
  )
}
