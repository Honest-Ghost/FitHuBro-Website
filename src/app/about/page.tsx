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
          <Nav persona="owners" />
        </div>
        <main className="pointer-events-auto min-h-screen pt-24 pb-16">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h1 className="mb-8 text-4xl font-display font-light tracking-tight text-foreground">About Us</h1>
            
            <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
              <p>
                We believe that happiness is vitally important to our healthy lives. While our happiness has many factors, fitness is one of the biggest factors that support a healthy mind and a healthy body.
                So we set out to create software and apps that will help billions of people live happier and healthier lives.
              </p>
              
              <p>
                Our platform caters to all major fitness segments like gyms, yoga studios, meditation centers, sports, and fitness academies, including trainers, dietitians, and food experts, so people around the world can engage and stay motivated. Over the years, we have become one of the smartest fitness platforms. Utilizing the most innovative technology and creative User Experience, we are making a difference in people's lives every day of the week.
              </p>

              <p>
                Our apps have been infused with workouts, exercise, meditation, meals, and much more, ranking as one of the best platforms in the health and fitness category. Today, we are constantly working on improving our technology and generating growth, so we can elevate the fitness experience for people all over the world.
              </p>

              <p className="font-medium text-foreground">
                Be part of our story, We're just getting started!
              </p>

              <div className="mt-12 rounded-2xl border border-white/10 bg-card p-8">
                <h2 className="mb-4 text-xl font-medium text-foreground">Contact Details</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-foreground min-w-[80px]">Phone:</span>
                    <span>+91-9911209589</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-foreground min-w-[80px]">Email:</span>
                    <span>arman.raza987@gmail.com</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-foreground min-w-[80px]">Address:</span>
                    <span>F-A-31, Shaheen Bagh, Okhla, South Delhi, Delhi - 110025</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <div className="pointer-events-auto">
          <Footer persona="owners" />
          <WhatsAppButton />
        </div>
      </div>
    </div>
  )
}
