export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Aesthetic Barbell Plate Icon */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-secondary shrink-0"
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
      
      {/* Horizontal Text Lockup */}
      <div className="flex flex-col justify-center mt-1">
        <span className="font-display text-2xl tracking-tight text-foreground leading-none mb-[2px]">
          Fit<span className="text-secondary">Hu</span>Bro
        </span>
        <span className="text-[9px] uppercase tracking-[0.22em] text-muted-foreground font-semibold leading-none">
          I'm Fit. Are You?
        </span>
      </div>
    </div>
  )
}
