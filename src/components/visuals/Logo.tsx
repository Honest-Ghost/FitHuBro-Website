import { motion } from 'framer-motion'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Hand-crafted SVG replica of the FitHuBro FHB Logo */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-foreground"
      >
        {/* Top Arc */}
        <path d="M 25 10 A 45 45 0 0 1 95 40" stroke="var(--secondary)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        
        {/* Bottom Arc */}
        <path d="M 5 60 A 45 45 0 0 0 75 95" stroke="var(--secondary)" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Muscle Man Silhouette */}
        <g transform="translate(0, -5)">
          <circle cx="50" cy="20" r="7" fill="currentColor" />
          <path d="M 40 30 C 20 30 10 45 10 50 C 10 55 15 55 18 51 C 22 45 30 38 40 38 C 40 45 45 47 50 47 C 55 47 60 45 60 38 C 70 38 78 45 82 51 C 85 55 90 55 90 50 C 90 45 80 30 60 30 C 56 30 53 33 50 33 C 47 33 44 30 40 30 Z" fill="currentColor" />
          <path d="M 38 50 C 42 60 46 62 50 62 C 54 62 58 60 62 50 C 58 55 54 57 50 57 C 46 57 42 55 38 50 Z" fill="currentColor" />
        </g>

        {/* FHB Custom Text Paths */}
        <g transform="translate(15, 55) skewX(-10) scale(0.8)">
          {/* F */}
          <path d="M 0 0 h 22 v 8 h -14 v 6 h 12 v 8 h -12 v 18 h -8 z" fill="currentColor" />
          {/* H */}
          <path d="M 26 0 h 8 v 14 h 12 v -14 h 8 v 40 h -8 v -18 h -12 v 18 h -8 z" fill="var(--secondary)" />
          {/* B */}
          <path d="M 60 0 h 16 c 8 0 12 3 12 9 c 0 4 -2 7 -6 8 c 5 1 8 5 8 10 c 0 8 -5 13 -14 13 h -16 z M 68 8 v 8 h 7 c 3 0 5 -1 5 -4 c 0 -3 -2 -4 -5 -4 z M 68 23 v 10 h 8 c 3 0 6 -2 6 -5 c 0 -3 -3 -5 -6 -5 z" fill="currentColor" />
        </g>
      </svg>
      
      {/* Restored FitHuBro Text Next to Icon */}
      <span className="font-display text-xl tracking-tight text-foreground">
        FitHu<span className="text-secondary">Bro</span>
      </span>
    </div>
  )
}
