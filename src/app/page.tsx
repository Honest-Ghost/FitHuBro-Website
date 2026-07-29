'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Logo } from '@/components/visuals/Logo'

export default function GatewayPage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [dontAskAgain, setDontAskAgain] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedPersona = localStorage.getItem('fithubro_persona')
    if (savedPersona) {
      router.replace(`/${savedPersona}`)
    }
  }, [router])

  const handleSelect = (persona: 'owners' | 'members' | 'trainers') => {
    if (dontAskAgain) {
      localStorage.setItem('fithubro_persona', persona)
    }
    router.push(`/${persona}`)
  }

  if (!mounted) return null

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="h-[80vh] w-[80vw] rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-5 text-center">
        <div className="mb-16 flex justify-center">
          <Logo className="h-12 w-auto" />
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground text-balance">
          Welcome to FitHuBro.
          <br />
          <span className="text-secondary">Who are you?</span>
        </h1>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <button
            onClick={() => handleSelect('owners')}
            className="group flex flex-col items-center justify-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-10 text-foreground transition-all hover:border-secondary/50 hover:bg-secondary/10"
          >
            <span className="font-display text-2xl">I run a gym</span>
            <span className="text-sm text-muted-foreground group-hover:text-foreground/80">
              Manage your gym, members, and revenue
            </span>
          </button>

          <button
            onClick={() => handleSelect('members')}
            className="group flex flex-col items-center justify-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-10 text-foreground transition-all hover:border-secondary/50 hover:bg-secondary/10"
          >
            <span className="font-display text-2xl">I'm a member</span>
            <span className="text-sm text-muted-foreground group-hover:text-foreground/80">
              Get AI workouts, streaks, and community
            </span>
          </button>

          <button
            onClick={() => handleSelect('trainers')}
            className="group flex flex-col items-center justify-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-10 text-foreground transition-all hover:border-secondary/50 hover:bg-secondary/10"
          >
            <span className="font-display text-2xl">I'm a trainer</span>
            <span className="text-sm text-muted-foreground group-hover:text-foreground/80">
              Get clients, boost visibility, and earn
            </span>
          </button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3">
          <input
            type="checkbox"
            id="dontAsk"
            checked={dontAskAgain}
            onChange={(e) => setDontAskAgain(e.target.checked)}
            className="h-4 w-4 rounded border-white/20 bg-transparent text-secondary focus:ring-secondary/50"
          />
          <label htmlFor="dontAsk" className="text-sm text-muted-foreground cursor-pointer select-none">
            Don't ask me again
          </label>
        </div>
      </div>
    </div>
  )
}
