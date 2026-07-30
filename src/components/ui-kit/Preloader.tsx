'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: "easeIn"
    }
  }
}

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.2, type: "spring", duration: 1.5, bounce: 0 },
      opacity: { delay: i * 0.2, duration: 0.1 }
    }
  })
}

const pulse: Variants = {
  animate: {
    boxShadow: ["0px 0px 0px rgba(225, 29, 72, 0)", "0px 0px 40px rgba(225, 29, 72, 0.4)", "0px 0px 0px rgba(225, 29, 72, 0)"],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Show the preloader for a clean 2 seconds to let the drawing animation finish
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
        >
          {/* Aesthetic glow behind the logo */}
          <motion.div
            variants={pulse}
            animate="animate"
            className="absolute rounded-full w-32 h-32"
          />
          
          <motion.div
            variants={iconVariants}
            className="relative flex flex-col items-center gap-4"
          >
            {/* The brand's SVG icon (no text), drawn dynamically */}
            <motion.svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-secondary drop-shadow-[0_0_15px_rgba(225,29,72,0.5)]"
            >
              <motion.circle 
                cx="12" cy="12" r="10" 
                stroke="currentColor" 
                strokeWidth="2" 
                custom={0} variants={draw} 
              />
              <motion.circle 
                cx="12" cy="12" r="4" 
                stroke="currentColor" 
                strokeWidth="2" 
                custom={1} variants={draw} 
              />
              <motion.path
                d="M12 2V22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                custom={2} variants={draw}
              />
              <motion.path
                d="M2 12H22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                custom={3} variants={draw}
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
