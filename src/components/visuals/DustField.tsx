import { cn } from '@/lib/utils/cn'

export function DustField({ className }: { className?: string }) {
  // Deterministic seeded positions (no Math.random at render)
  const particles = Array.from({ length: 40 }).map((_, i) => ({
    x: ((i * 137.5) % 100).toFixed(2),
    y: ((i * 93.1) % 100).toFixed(2),
    scale: ((i * 7.3) % 1 + 0.5).toFixed(2),
    opacity: ((i * 11.9) % 0.5 + 0.1).toFixed(2),
    duration: ((i * 2.3) % 4 + 4).toFixed(2),
    delay: ((i * 3.7) % 2).toFixed(2)
  }))

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden mix-blend-screen", className)} aria-hidden="true">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-white blur-[1.5px]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            transform: `scale(${p.scale})`,
            opacity: p.opacity,
            animation: `dust-float ${p.duration}s ease-in-out ${p.delay}s infinite alternate`
          }}
        />
      ))}
    </div>
  )
}
