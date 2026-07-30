'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import Image from 'next/image'

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
    // Show the preloader for a clean 2 seconds to let the wave animation play
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    
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
          <div className="flex items-center gap-3 scale-[1.2] md:scale-150">
            {/* Cropped icon part of the brand logo */}
            <motion.div 
              custom={0} 
              animate="animate" 
              variants={waveVariants} 
              style={{ originX: 0.5, originY: 0.5 }}
              className="relative w-12 h-12 overflow-hidden rounded-full bg-white flex-shrink-0 shadow-sm flex items-start justify-center"
            >
              <div className="relative w-full h-[200%]">
                <Image
                  src="/fithubro-logo.png"
                  alt="FitHuBro Icon"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </motion.div>
            
            {/* Animated Text Wave */}
            <div className="font-display text-3xl tracking-tight text-foreground flex items-center gap-[2px]">
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
