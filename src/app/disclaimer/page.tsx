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
      <div className="fixed inset-0 pointer-events-none z-0">
        <ScrollScene />
      </div>
      <div className="relative z-10 w-full pointer-events-none">
        <div className="pointer-events-auto">
          <Cursor />
          <Nav persona="owners" />
        </div>
        <main className="pointer-events-auto min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h1 className="mb-8 text-4xl font-display font-light tracking-tight text-foreground">Disclaimer</h1>
        
        <div className="prose prose-invert max-w-none text-muted-foreground">
          <p className="mb-4">
            YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT YOU ARE USING THE PLATFORM AT YOUR OWN RISK. THE PLATFORM AND ALL DATA AND CONTENT PROVIDED IS PROVIDED "AS IS", "WITH ALL FAULTS" AND WITHOUT WARRANTY, TERMS OR CONDITIONS OF ANY KIND.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-medium text-foreground">Limitation of Liability</h2>
          <p className="mb-4">
            YOU UNDERSTAND AND AGREE THAT UNDER NO CIRCUMSTANCE WILL FITHUBRO, ITS AGENTS, LICENSORS OR SUPPLIERS BE LIABLE TO YOU ON ACCOUNT FOR DAMAGES OF ANY KIND, WHETHER BASED IN TORT, CONTRACT, STRICT LIABILITY OR OTHERWISE YOUR MISUSE OF THE SOFTWARE.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-medium text-foreground">Damages</h2>
          <p className="mb-4">
            You shall defend and hold FitHuBro harmless from and against any and all liabilities, damages, costs, expenses or losses arising out of your improper or unauthorized use of the App, your negligent or wrongful acts, your violation of any applicable laws or regulations, and/or your breach of any provision of this agreement.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-medium text-foreground">Governing Law</h2>
          <p className="mb-4">
            The laws of the republic of India govern this agreement. All disputes are subject to the jurisdiction of the courts in New Delhi and you submit to such jurisdiction.
          </p>

          <p className="mt-8 text-sm italic">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </div>
      </main>
      <div className="pointer-events-auto">
        <Footer persona="owners" />
      </div>
    </div>
  </div>
  )
}
