import { Metadata } from 'next'
import { Nav } from '@/components/sections/Nav'
import { Footer } from '@/components/sections/Footer'
import { ScrollScene } from '@/components/visuals/ScrollScene'
import { Cursor } from '@/components/motion/Cursor'

export const metadata: Metadata = {
  title: 'Privacy Policy | FitHuBro',
  description: 'FitHuBro Privacy Policy',
}

export default function PrivacyPage() {
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
              <h1 className="mb-8 text-4xl sm:text-5xl font-display tracking-tight text-white">Privacy Policy</h1>
              
              <div className="prose prose-invert max-w-none text-zinc-300 space-y-6 text-base sm:text-[17px] leading-relaxed">
                <p>
                  This privacy policy (&quot;Policy&quot;) governs your personal data relationship with FitHuBro. We hold the sincere belief that you should always know what data we collect from you, the purposes for which such data is used, and that you should have the ability to make informed decisions about what data you want to share with us.
                </p>

                <div>
                  <h2 className="text-xl font-display tracking-wide text-white mb-3">1. Information We Collect</h2>
                  <p className="mb-2">We may collect the following types of data depending on your interaction with our platform:</p>
                  <ul className="list-disc pl-5 space-y-1 text-zinc-300">
                    <li><strong className="text-white">Personal Data:</strong> Name, age, gender, phone number, email address.</li>
                    <li><strong className="text-white">Health &amp; Fitness Data:</strong> Height, weight, lifestyle, food preferences, voluntary fitness goals.</li>
                    <li><strong className="text-white">Technical Data:</strong> IP Address, location, device information, browser type, and usage behavior.</li>
                    <li><strong className="text-white">Payment Information:</strong> Handled securely by certified payment processors; we never store raw credit card details.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-display tracking-wide text-white mb-3">2. How We Use It</h2>
                  <p className="mb-2">We use this data to:</p>
                  <ul className="list-disc pl-5 space-y-1 text-zinc-300">
                    <li>Facilitate your account registration and provision of FitHuBro services.</li>
                    <li>Prepare customized workout plans, adaptive nutrition guidance, and streak tracking.</li>
                    <li>Process transactions and generate payment ledger receipts.</li>
                    <li>Provide 60-second rotating cryptographic QR check-in verification at partner gyms.</li>
                    <li>Communicate updates, customer support, and administrative notices.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-display tracking-wide text-white mb-3">3. Security of Your Information</h2>
                  <p>
                    We implement industry-standard technical and organizational measures to safeguard your information against unauthorized access, loss, or disclosure. All sensitive communication and cryptographic tokens are protected using standard encryption protocols.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-display tracking-wide text-white mb-3">4. Data Retention and Deletion</h2>
                  <p>
                    We store your data only as long as necessary to provide your requested services and maintain verified business records. You may request correction or deletion of your account data by contacting us at arman.raza987@gmail.com.
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
