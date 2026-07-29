'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

export function LineArt({ 
  icon, 
  className 
}: { 
  icon: 'dumbbell' | 'kettlebell' | 'rack' | 'plate',
  className?: string 
}) {
  const getPath = () => {
    switch (icon) {
      case 'dumbbell':
        return <path d="M4 12h16M4 8v8M20 8v8M8 10v4M16 10v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      case 'kettlebell':
        return <path d="M12 4a4 4 0 0 0-4 4v2a6 6 0 1 0 8 0V8a4 4 0 0 0-4-4zM9 10h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      case 'rack':
        return <path d="M6 3v18M18 3v18M6 8h12M6 16h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      case 'plate':
        return (
          <>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </>
        )
    }
  }

  return (
    <svg 
      width="48" 
      height="48" 
      viewBox="0 0 24 24" 
      fill="none" 
      className={cn("text-secondary", className)}
    >
      <motion.g
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {getPath()}
      </motion.g>
    </svg>
  )
}
