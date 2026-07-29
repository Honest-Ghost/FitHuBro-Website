import { cn } from '@/lib/utils/cn'

export function DashboardScreen({ className }: { className?: string }) {
  return (
    <div className={cn("flex h-full flex-col bg-[#0A0A0B] p-6", className)}>
      <div className="mb-6 flex justify-between">
        <h3 className="font-display text-xl text-white">Dashboard</h3>
        <div className="h-8 w-24 rounded-full bg-white/5" />
      </div>
      
      <div className="mb-6 grid grid-cols-3 gap-4">
        {[
          { label: 'Revenue', val: '₹42K', spark: "M0 20 Q10 10 20 15 T40 5 T60 10 T80 0" },
          { label: 'Active', val: '142', spark: "M0 20 Q10 15 20 15 T40 10 T60 15 T80 5" },
          { label: 'Check-ins', val: '68', spark: "M0 10 Q10 15 20 5 T40 10 T60 0 T80 5" }
        ].map(kpi => (
          <div key={kpi.label} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <p className="text-xs text-muted-foreground">{kpi.label}</p>
            <p className="mt-1 font-display text-2xl font-bold">{kpi.val}</p>
            <svg className="mt-3 h-4 w-full overflow-visible stroke-secondary stroke-2" fill="none" viewBox="0 0 80 20" preserveAspectRatio="none">
              <path d={kpi.spark} />
            </svg>
          </div>
        ))}
      </div>
      
      <div className="flex-1 rounded-xl border border-white/5 bg-white/[0.02] p-4">
        <p className="text-sm text-muted-foreground">Monthly Revenue</p>
        <div className="mt-4 flex h-32 items-end justify-between gap-2">
          {[40, 60, 45, 80, 50, 90, 75].map((h, i) => (
            <div key={i} className="w-full rounded-t-sm bg-white/10" style={{ height: `${h}%` }}>
              {i === 6 && <div className="h-full w-full rounded-t-sm bg-secondary" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
