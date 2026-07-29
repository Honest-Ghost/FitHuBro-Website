import { cn } from '@/lib/utils/cn'

export function PlanEditorScreen({ className }: { className?: string }) {
  return (
    <div className={cn("flex h-full flex-col bg-[#0A0A0B]", className)}>
      {/* Client Rail */}
      <div className="flex items-center gap-3 border-b border-white/10 px-6 py-4">
        <div className="flex -space-x-2">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-8 w-8 rounded-full border-2 border-[#0A0A0B] bg-white/20" />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">Arjun&apos;s Plan</span>
      </div>
      
      {/* Week Grid */}
      <div className="flex-1 p-6">
        <div className="mb-4 flex gap-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
            <div key={day} className={cn("flex-1 rounded-xl p-3", i === 1 ? "bg-white/10 ring-1 ring-secondary" : "bg-white/5")}>
              <p className="text-xs font-medium text-muted-foreground">{day}</p>
              {i === 1 && (
                <div className="mt-3 flex flex-col gap-2">
                  <div className="h-10 rounded bg-white/10" />
                  <div className="h-10 rounded bg-white/10" />
                  <div className="mt-2 h-6 w-full rounded border border-dashed border-white/20" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
