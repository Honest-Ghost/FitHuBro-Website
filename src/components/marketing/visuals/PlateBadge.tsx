import { cn } from '@/lib/utils/cn'

export function PlateBadge({ number, className }: { number: string | number; className?: string }) {
  return (
    <div className={cn("relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#2A2D35] bg-[#17181b] shadow-inner", className)}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="46" fill="none" stroke="#3A3D45" strokeWidth="1" strokeDasharray="2 4" />
      </svg>
      <span className="font-display z-10 text-2xl font-bold tracking-tight text-white/90">
        {number}
      </span>
      <div className="absolute h-3 w-3 rounded-full bg-background ring-1 ring-[#2A2D35]" />
    </div>
  )
}
