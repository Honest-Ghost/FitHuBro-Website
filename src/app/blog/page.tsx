import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Nav } from '@/components/sections/Nav'
import { Footer } from '@/components/sections/Footer'
import { ScrollScene } from '@/components/visuals/ScrollScene'
import { Cursor } from '@/components/motion/Cursor'
export const metadata: Metadata = {
  title: 'Blog | FitHuBro',
  description: 'Insights, updates, and articles on modern gym management.',
}

const POSTS = [
  {
    id: 1,
    title: 'The AI Revolution in Indian Gyms',
    excerpt: 'How artificial intelligence is changing the way we train, track, and retain members in 2026.',
    date: 'July 15, 2026',
    category: 'Technology',
    slug: '#', // Placeholder for actual route
  },
  {
    id: 2,
    title: 'Why QR Check-ins Beat Biometrics',
    excerpt: 'The hidden costs of hardware and why your members prefer using the phone already in their pocket.',
    date: 'July 02, 2026',
    category: 'Operations',
    slug: '#',
  },
  {
    id: 3,
    title: 'Predicting Churn Before It Happens',
    excerpt: 'Stop relying on guesswork. Learn how to identify at-risk members days before they actually quit.',
    date: 'June 28, 2026',
    category: 'Growth',
    slug: '#',
  },
  {
    id: 4,
    title: 'The Perfect Diet Plan for Indian Members',
    excerpt: 'Why generic macro calculators fail in India, and how to build plans around roti, dal, and paneer.',
    date: 'June 10, 2026',
    category: 'Nutrition',
    slug: '#',
  }
]

export default function BlogPage() {
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
        <main className="pointer-events-auto min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-display font-light tracking-tight text-foreground sm:text-5xl">
            FitHuBro Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Insights, updates, and articles on modern gym management.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <article 
              key={post.id} 
              className="group relative flex flex-col items-start justify-between rounded-2xl border border-white/10 bg-[#0A0A0B] p-6 sm:p-8 transition-colors hover:border-white/20"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-muted-foreground">
                  {post.date}
                </time>
                <span className="relative z-10 rounded-full bg-secondary/10 px-3 py-1.5 font-medium text-secondary">
                  {post.category}
                </span>
              </div>
              <div className="group relative mt-6">
                <h3 className="text-xl font-semibold leading-tight text-foreground group-hover:text-foreground/80">
                  <Link href={post.slug}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-secondary">
                Read article <ArrowRight className="h-4 w-4" />
              </div>
            </article>
          ))}
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
