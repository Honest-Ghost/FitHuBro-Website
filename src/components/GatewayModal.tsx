'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from './visuals/Logo'
import { cn } from '@/lib/utils/cn'

export function GatewayModal() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [dontAskAgain, setDontAskAgain] = useState(false)
  const [show, setShow] = useState(true)

  useEffect(() => {
    const savedPersona = localStorage.getItem('fithubro_persona')
    if (savedPersona) {
      setShow(false)
      router.replace(`/${savedPersona}`)
    }
    setMounted(true)
  }, [router])

  const handleSelect = (persona: 'owners' | 'members' | 'trainers') => {
    if (dontAskAgain) {
      localStorage.setItem('fithubro_persona', persona)
    }
    setShow(false)
    if (persona !== 'owners') {
      router.push(`/${persona}`)
    }
  }

  if (!mounted) return null

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-5 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.1, type: 'spring', bounce: 0 }}
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0B] px-8 py-16 text-center shadow-2xl sm:px-12"
          >
            {/* Ambient glow inside the modal */}
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/20 blur-[100px]" />

            <div className="mb-10 flex justify-center">
              <Logo className="h-10 w-auto" />
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white text-balance">
              Welcome to FitHuBro.
              <br />
              <span className="text-secondary">Who are you?</span>
            </h1>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <button
                onClick={() => handleSelect('owners')}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-white transition-all hover:border-secondary/50 hover:bg-secondary/10"
              >
                <span className="font-display text-xl">I run a gym</span>
                <span className="text-xs text-white/50 group-hover:text-white/80">
                  Manage your gym, members, and revenue
                </span>
              </button>

              <button
                onClick={() => handleSelect('members')}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-white transition-all hover:border-secondary/50 hover:bg-secondary/10"
              >
                <span className="font-display text-xl">I'm a member</span>
                <span className="text-xs text-white/50 group-hover:text-white/80">
                  Get AI workouts, streaks, and community
                </span>
              </button>

              <button
                onClick={() => handleSelect('trainers')}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-white transition-all hover:border-secondary/50 hover:bg-secondary/10"
              >
                <span className="font-display text-xl">I'm a trainer</span>
                <span className="text-xs text-white/50 group-hover:text-white/80">
                  Get clients, boost visibility, and earn
                </span>
              </button>
            </div>

            <div className="mt-10 flex items-center justify-center gap-3">
              <label className="flex cursor-pointer select-none items-center gap-3 text-sm text-white/50 hover:text-white transition-colors">
                <input
                  type="checkbox"
                  checked={dontAskAgain}
                  onChange={(e) => setDontAskAgain(e.target.checked)}
                  className="h-4 w-4 rounded border-white/20 bg-transparent text-secondary focus:ring-secondary/50"
                />
                Don't ask me again
              </label>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
