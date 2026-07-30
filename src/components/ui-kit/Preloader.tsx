'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'

const waveVariants: Variants = {
  animate: (i: number) => ({
    scale: [1, 1.3, 1],
    transition: {
      delay: i * 0.15,
      duration: 1.2,
      repeat: Infinity,
      ease: 'easeInOut',
    }
  })
}

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Let the wave animation play a couple of times before hiding
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2200)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
        >
          <div className="flex items-center gap-2 scale-150">
            <motion.div custom={0} animate="animate" variants={waveVariants} style={{ originX: 0.5, originY: 0.5 }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-secondary"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M12 2V22"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M2 12H22"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
            
            <div className="font-display text-2xl tracking-tight text-foreground flex items-center gap-[1px]">
              <motion.span custom={1} animate="animate" variants={waveVariants} style={{ display: 'inline-block', originX: 0.5, originY: 0.5 }}>Fit</motion.span>
              <motion.span custom={2} animate="animate" variants={waveVariants} style={{ display: 'inline-block', originX: 0.5, originY: 0.5 }}>Hu</motion.span>
              <motion.span custom={3} animate="animate" variants={waveVariants} className="text-secondary" style={{ display: 'inline-block', originX: 0.5, originY: 0.5 }}>Bro</motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
