import { Metadata } from 'next'
import { Nav } from '@/components/sections/Nav'
import { Footer } from '@/components/sections/Footer'
import { ScrollScene } from '@/components/visuals/ScrollScene'
import { Cursor } from '@/components/motion/Cursor'
import { WhatsAppButton } from '@/components/ui-kit/WhatsAppButton'

export const metadata: Metadata = {
  title: 'About Us | FitHuBro',
  description: 'About FitHuBro',
}

export default function AboutPage() {
  return (
    <div className="marketing-scope min-h-screen bg-transparent relative">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <ScrollScene />
      </div>
      <div className="relative z-10 w-full pointer-events-none">
        <div className="pointer-events-auto">
          <Cursor />
          <Nav persona="members" />
        </div>
        <main className="pointer-events-auto min-h-screen pt-28 pb-20">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="rounded-3xl surface-panel p-8 sm:p-12 shadow-2xl">
              <h1 className="mb-4 text-4xl sm:text-5xl font-display tracking-tight text-white">About FitHuBro</h1>
              <p className="text-base sm:text-lg text-secondary font-medium mb-8">
                The connected platform uniting members, verified personal trainers, and modern gym facilities.
              </p>
              
              <div className="prose prose-invert max-w-none text-zinc-300 space-y-6 text-base sm:text-[17px] leading-relaxed">
                <p>
                  FitHuBro was created to bridge the gap between digital fitness tracking and the physical gym floor. Rather than separating workout logging, diet management, coaching, and facility access across disconnected apps, FitHuBro brings them together into one coherent ecosystem.
                </p>
                
                <div>
                  <h2 className="text-xl font-display text-white mb-3 tracking-wide">For Fitness Enthusiasts</h2>
                  <p>
                    FitHuBro delivers an adaptive fitness journey centered on progressive overload and awareness. Members get equipment-aware workout routines, Olympic barbell plate calculations, 7-day meal planning with multimodal AI meal photo scanning, streak and volume tracking, and a digital gym card with fraud-proof 60-second rotating QR check-in.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-display text-white mb-3 tracking-wide">For Personal Trainers</h2>
                  <p>
                    FitHuBro provides professional fitness coaches with gym-reviewed KYC verification, a public marketplace directory profile, structured multi-week workout program authoring, and organized client roster tracking.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-display text-white mb-3 tracking-wide">For Gym Facilities & Studios</h2>
                  <p>
                    FitHuBro eliminates operational clutter with automated rotating QR kiosk attendance, dynamic UPI payment logging with pre-composed WhatsApp receipts, member lifecycle management, leads tracking, and bespoke 3D club websites featuring custom embossed Olympic barbell plates.
                  </p>
                </div>

                <div className="mt-10 rounded-2xl border border-white/10 surface-card p-6 sm:p-8">
                  <h2 className="mb-4 text-xl font-display tracking-wide text-white">Contact & Support</h2>
                  <ul className="space-y-3.5 text-sm sm:text-base">
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-white min-w-[90px]">Phone:</span>
                      <a href="tel:+919911209589" className="text-zinc-300 hover:text-secondary transition-colors">+91-9911209589</a>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-white min-w-[90px]">Email:</span>
                      <a href="mailto:arman.raza987@gmail.com" className="text-zinc-300 hover:text-secondary transition-colors">arman.raza987@gmail.com</a>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-white min-w-[90px]">Address:</span>
                      <span className="text-zinc-300">F-A-31, Shaheen Bagh, Okhla, South Delhi, Delhi - 110025</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="pointer-events-auto">
          <Footer persona="members" />
          <WhatsAppButton />
        </div>
      </div>
    </div>
  )
}
