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
          <Nav persona="owners" />
        </div>
        <main className="pointer-events-auto min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h1 className="mb-8 text-4xl font-display font-light tracking-tight text-foreground">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <p>
            This privacy policy ("Policy") governs your personal data relationship with FitHuBro. We hold the sincere belief that you should always know what data we collect from you, the purposes for which such data is used, and that you should have the ability to make informed decisions about what data you want to share with us.
          </p>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">1. Information We Collect</h2>
            <p className="mb-2">We may collect the following types of data depending on your interaction with our platform:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Personal Data:</strong> Name, age, gender, phone number, email address.</li>
              <li><strong>Health & Fitness Data:</strong> Height, weight, lifestyle, food preferences, medical conditions (if provided voluntarily for personalized plans).</li>
              <li><strong>Technical Data:</strong> IP Address, location, device information, browser type, and usage behavior.</li>
              <li><strong>Payment Information:</strong> Handled securely by our payment processors; we do not store full credit card details.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">2. How We Use It</h2>
            <p className="mb-2">We use this data to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Help you register for and facilitate the provision of our Services.</li>
              <li>Prepare specific diet plans, training regimes, and recovery metrics.</li>
              <li>Process payments securely.</li>
              <li>Analyze usage behavior to improve the platform and provide personalized recommendations.</li>
              <li>Communicate with you regarding updates, offers, and administrative information.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">3. Security of Your Information</h2>
            <p>
              We implement industry-standard technical and organizational measures by using a variety of security technologies to help protect your data from unauthorized access, use, loss, or disclosure. All sensitive data is encrypted using industry-standard cryptographic techniques.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">4. Data Retention and Deletion</h2>
            <p>
              We store your data only as long as necessary to facilitate your use of the Services and for legitimate business purposes. You may request access, correction, or deletion of your data by contacting us at arman.raza987@gmail.com.
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
