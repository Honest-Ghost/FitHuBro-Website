import { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative mx-auto max-w-full overflow-hidden rounded-[40px] border-[6px] border-[#2A2D35] bg-black shadow-2xl ring-1 ring-white/10", className)} style={{ aspectRatio: '9 / 19.5' }}>
      {/* Screen Notch */}
      <div className="absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-3xl bg-[#2A2D35]" />
      
      {/* Content */}
      <div className="relative z-10 h-full w-full overflow-hidden rounded-[34px] bg-background">
        {children}
      </div>
    </div>
  )
}
