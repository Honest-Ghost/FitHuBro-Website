'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Building2, Dumbbell, UserCheck, ArrowRight } from 'lucide-react'
import { Logo } from './visuals/Logo'
import { APP_ROUTES } from '@/lib/config'

export function GatewayModal() {
  const [mounted, setMounted] = useState(false)
  const [dontAskAgain, setDontAskAgain] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Only show on first visit if not dismissed previously
    const dismissed = localStorage.getItem('fithubro_gateway_dismissed')
    if (!dismissed) {
      setShow(true)
    }
    setMounted(true)
  }, [])

  const handleDismiss = () => {
    if (dontAskAgain) {
      localStorage.setItem('fithubro_gateway_dismissed', 'true')
    }
    setShow(false)
  }

  const handleNavigate = (url: string) => {
    if (dontAskAgain) {
      localStorage.setItem('fithubro_gateway_dismissed', 'true')
    }
    setShow(false)
    window.location.href = url
  }

  if (!mounted) return null

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 sm:p-6 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0B]/95 p-6 sm:p-10 text-center shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={handleDismiss}
              aria-label="Close modal"
              className="absolute right-5 top-5 rounded-full p-2 text-white/50 hover:bg-white/10 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Ambient glow inside the modal */}
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/20 blur-[100px]" />

            <div className="mb-6 flex justify-center">
              <Logo className="h-9 w-auto" />
            </div>

            <h1 className="font-display text-2xl sm:text-4xl text-white text-balance">
              Welcome to FitHuBro.
              <br />
              <span className="text-secondary">Choose Your Portal</span>
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-zinc-300 max-w-lg mx-auto">
              Select your role to access the FitHuBro software platform, or close this window to explore our features.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 text-left">
              {/* Gym Owner */}
              <div className="flex flex-col justify-between rounded-2xl surface-card p-5 hover:border-secondary/50 hover:bg-secondary/[0.08] transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-3">
                    <Building2 className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-display text-lg text-white">Gym Owner</h3>
                  <p className="text-xs text-zinc-300 mt-1">
                    Manage memberships, QR attendance, payments, leads, and staff.
                  </p>
                </div>
                <button
                  onClick={() => handleNavigate(APP_ROUTES.ownerLogin)}
                  className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-secondary-foreground hover:scale-[1.02] transition-transform shadow-md shadow-secondary/20"
                >
                  Owner Portal <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Personal Trainer */}
              <div className="flex flex-col justify-between rounded-2xl surface-card p-5 hover:border-secondary/50 hover:bg-secondary/[0.08] transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-3">
                    <Dumbbell className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-display text-lg text-white">Personal Trainer</h3>
                  <p className="text-xs text-zinc-300 mt-1">
                    Build workout programs, manage client rosters, and verify status.
                  </p>
                </div>
                <button
                  onClick={() => handleNavigate(APP_ROUTES.trainerLogin)}
                  className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-secondary-foreground hover:scale-[1.02] transition-transform shadow-md shadow-secondary/20"
                >
                  Trainer Portal <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Gym Member */}
              <div className="flex flex-col justify-between rounded-2xl surface-card p-5 hover:border-secondary/50 hover:bg-secondary/[0.08] transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-3">
                    <UserCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-display text-lg text-white">Gym Member</h3>
                  <p className="text-xs text-zinc-300 mt-1">
                    Digital gym pass, door kiosk QR check-in, and workout logs.
                  </p>
                </div>
                <button
                  onClick={() => handleNavigate(APP_ROUTES.memberCheckIn)}
                  className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-secondary-foreground hover:scale-[1.02] transition-transform"
                >
                  Member Pass <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-5">
              <label className="flex cursor-pointer select-none items-center gap-2 text-xs text-white/50 hover:text-white transition-colors">
                <input
                  type="checkbox"
                  checked={dontAskAgain}
                  onChange={(e) => setDontAskAgain(e.target.checked)}
                  className="h-3.5 w-3.5 rounded border-white/20 bg-transparent text-secondary focus:ring-secondary/50"
                />
                Don&apos;t show again on this device
              </label>

              <div className="flex items-center gap-4 text-xs">
                <button
                  onClick={handleDismiss}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Explore Website
                </button>
                <span className="text-white/20">|</span>
                <a
                  href={APP_ROUTES.signIn}
                  className="text-secondary font-semibold hover:underline"
                >
                  Universal Web Sign-in →
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
