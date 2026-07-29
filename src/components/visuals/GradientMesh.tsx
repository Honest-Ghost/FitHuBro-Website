import { cn } from '@/lib/utils/cn'

export function GradientMesh({ variant = 'default', className }: { variant?: 'default' | 'accent', className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <div className={cn(
        "absolute -top-1/2 left-1/2 h-[200%] w-[150%] -translate-x-1/2 rounded-[100%] opacity-30 blur-[120px]",
        variant === 'accent' ? "bg-secondary" : "bg-white/5"
      )} />
      <div className="grain absolute inset-0 opacity-40 mix-blend-overlay" />
    </div>
  )
}
