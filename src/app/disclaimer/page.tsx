import { Metadata } from 'next'
import { Nav } from '@/components/sections/Nav'
import { Footer } from '@/components/sections/Footer'
import { ScrollScene } from '@/components/visuals/ScrollScene'
import { Cursor } from '@/components/motion/Cursor'

export const metadata: Metadata = {
  title: 'Disclaimer | FitHuBro',
  description: 'FitHuBro Disclaimer',
}

export default function DisclaimerPage() {
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
              <h1 className="mb-8 text-4xl sm:text-5xl font-display tracking-tight text-white">Disclaimer</h1>
              
              <div className="prose prose-invert max-w-none text-zinc-300 space-y-6 text-base sm:text-[17px] leading-relaxed">
                <p>
                  YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT YOU ARE USING THE FITHUBRO PLATFORM AT YOUR OWN RISK. THE PLATFORM, WORKOUT LOGGING UTILITIES, PLATE CALCULATORS, AND ESTIMATED MACRONUTRIENT INFORMATION ARE PROVIDED &quot;AS IS&quot;, &quot;WITH ALL FAULTS&quot; AND WITHOUT WARRANTIES OF ANY KIND.
                </p>

                <div>
                  <h2 className="text-xl font-display tracking-wide text-white mb-3">Health &amp; Exercise Notice</h2>
                  <p>
                    FitHuBro and its conversational AI assistant provide general fitness guidance and tracking tools. They do not constitute medical advice, physical therapy diagnosis, or certified healthcare treatment. Always consult a qualified physician before commencing any strenuous exercise program, especially if you have pre-existing cardiovascular, musculoskeletal, or metabolic conditions.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-display tracking-wide text-white mb-3">Limitation of Liability</h2>
                  <p>
                    UNDER NO CIRCUMSTANCE WILL FITHUBRO, ITS OPERATORS, AGENTS, LICENSORS, OR PARTNERED GYM AFFILIATES BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE OR MISUSE OF THE APPLICATION OR PHYSICAL GYM EQUIPMENT.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-display tracking-wide text-white mb-3">Indemnity</h2>
                  <p>
                    You agree to defend and hold FitHuBro harmless against any liabilities, claims, injuries, damages, costs, or expenses arising from improper or unauthorized use of the platform, exercise form failure, or violation of applicable facility rules.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-display tracking-wide text-white mb-3">Governing Law</h2>
                  <p>
                    The laws of the Republic of India govern this agreement. All disputes are subject to the jurisdiction of the competent courts in New Delhi.
                  </p>
                </div>

                <p className="mt-8 text-sm text-zinc-400 italic">
                  Last updated: September 2026
                </p>
              </div>
            </div>
          </div>
        </main>
        <div className="pointer-events-auto">
          <Footer persona="members" />
        </div>
      </div>
    </div>
  )
}
