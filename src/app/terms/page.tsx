import { Metadata } from 'next'
import { Nav } from '@/components/sections/Nav'
import { Footer } from '@/components/sections/Footer'
import { ScrollScene } from '@/components/visuals/ScrollScene'
import { Cursor } from '@/components/motion/Cursor'

export const metadata: Metadata = {
  title: 'Terms & Conditions | FitHuBro',
  description: 'FitHuBro Terms & Conditions',
}

export default function TermsPage() {
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
              <h1 className="mb-8 text-4xl sm:text-5xl font-display tracking-tight text-white">Terms &amp; Conditions</h1>
              
              <div className="prose prose-invert max-w-none text-zinc-300 space-y-6 text-base sm:text-[17px] leading-relaxed">
                <p>
                  Welcome to FitHuBro. These Terms of Service govern your use of our platform, mobile web experiences, and connected fitness services. By accessing or using FitHuBro, you agree to be bound by these Terms.
                </p>

                <div>
                  <h2 className="text-xl font-display tracking-wide text-white mb-3">1. Use of Service</h2>
                  <p>
                    FitHuBro provides an integrated fitness platform connecting individuals, certified personal trainers, and gym operators. You agree not to misuse our services or bypass security mechanisms, including our rotating check-in QR codes and proprietary 3D rendering systems. You are responsible for safeguarding your account credentials.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-display tracking-wide text-white mb-3">2. User Accounts &amp; Integrity</h2>
                  <p>
                    To access core features, you must register an account. You agree to provide accurate, current, and complete information during registration and keep your account details updated. Impersonation of trainers, gym facilities, or other members is strictly prohibited.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-display tracking-wide text-white mb-3">3. Subscription, Ledgers &amp; Payments</h2>
                  <p>
                    Access to certain facility memberships, trainer programs, and platform tiers may require applicable fees. Payments logged through our UPI ledger and processed via certified gateways are governed by the specific terms agreed upon with your partnered facility or coach.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-display tracking-wide text-white mb-3">4. Intellectual Property &amp; Content</h2>
                  <p>
                    All brand assets, 3D barbell geometries, software code, and interface designs belong to FitHuBro. You retain rights to any personal workout logs, meal photos, or brand logos you upload for custom demo previews.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-display tracking-wide text-white mb-3">5. Termination</h2>
                  <p>
                    We reserve the right to suspend or terminate access to the platform for violations of these terms, fraudulent check-in attempts, or abusive behavior toward trainers, staff, or community members.
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
