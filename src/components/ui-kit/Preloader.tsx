'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Show the preloader for 2 seconds
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
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="flex items-center justify-center"
          >
            <Image
              src="/fithubro-logo.png"
              alt="FitHuBro Logo"
              width={220}
              height={220}
              className="object-contain filter invert hue-rotate-180 brightness-110 drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
