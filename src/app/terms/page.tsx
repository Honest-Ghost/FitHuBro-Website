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
          <Nav persona="owners" />
        </div>
        <main className="pointer-events-auto min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h1 className="mb-8 text-4xl font-display font-light tracking-tight text-foreground">Terms & Conditions</h1>
        
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <p>
            Welcome to FitHuBro. These Terms of Service govern your use of our platform and services. By accessing or using FitHuBro, you agree to be bound by these Terms.
          </p>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">1. Use of Service</h2>
            <p>
              FitHuBro provides gym management software and mobile applications for gyms, trainers, and fitness members. You must not misuse our services or help anyone else do so. You are responsible for ensuring that your account credentials are secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">2. User Accounts</h2>
            <p>
              To use certain features of the service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">3. Subscription and Billing</h2>
            <p>
              By subscribing to our services, you agree to pay all applicable fees associated with the chosen plan. Fees are non-refundable except as required by law or as explicitly stated in our Refund Policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">4. Content Ownership</h2>
            <p>
              You retain your rights to any content you submit, post or display on or through the Services. By submitting content, you grant FitHuBro a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display and distribute such Content.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">5. Termination</h2>
            <p>
              We may suspend or terminate your access to the Services at any time for any reason, including if we reasonably believe you have violated these Terms.
            </p>
          </div>

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
