import Image from 'next/image'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Cropped icon part of the logo */}
      <div className="relative w-10 h-10 overflow-hidden rounded-full bg-white flex-shrink-0 shadow-sm border border-white/10 flex items-start justify-center">
        <div className="relative w-full h-[200%]">
          <Image
            src="/fithubro-logo.png"
            alt="FitHuBro Icon"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
      
      {/* Restored text part */}
      <span className="font-display text-2xl tracking-tight text-foreground">
        FitHu<span className="text-secondary">Bro</span>
      </span>
    </div>
  )
}
