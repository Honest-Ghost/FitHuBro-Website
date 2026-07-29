import { cn } from '@/lib/utils/cn'
import type { Persona } from '../content'

export function DashboardScreen({ className, persona = 'owners' }: { className?: string, persona?: Persona }) {
  if (persona === 'members') {
    return (
      <div className={cn("flex h-full flex-col bg-[#0A0A0B] p-6", className)}>
        <div className="mb-6 flex justify-between">
          <h3 className="font-display text-xl text-white">Your Progress</h3>
          <div className="h-8 w-24 rounded-full bg-white/5" />
        </div>
        
        <div className="mb-6 grid grid-cols-3 gap-4">
          {[
            { label: 'Current Streak', val: '12 Days', spark: "M0 10 Q10 15 20 5 T40 10 T60 0 T80 5" },
            { label: 'Workouts', val: '48', spark: "M0 20 Q10 15 20 15 T40 10 T60 15 T80 5" },
            { label: 'Weight', val: '72kg', spark: "M0 5 Q10 5 20 10 T40 15 T60 10 T80 20" }
          ].map(kpi => (
            <div key={kpi.label} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <p className="text-xs text-muted-foreground">{kpi.label}</p>
              <p className="mt-1 font-display text-2xl ">{kpi.val}</p>
              <svg className="mt-3 h-4 w-full overflow-visible stroke-secondary stroke-2" fill="none" viewBox="0 0 80 20" preserveAspectRatio="none">
                <path d={kpi.spark} />
              </svg>
            </div>
          ))}
        </div>
        
        <div className="flex-1 rounded-xl border border-white/5 bg-white/[0.02] p-4">
          <p className="text-sm text-muted-foreground">Volume Load (kg)</p>
          <div className="mt-4 flex h-32 items-end justify-between gap-2">
            {[4500, 5200, 5800, 4900, 6100, 5500, 6800].map((h, i) => (
              <div key={i} className="w-full rounded-t-sm bg-white/10" style={{ height: `${(h/7000)*100}%` }}>
                {i === 6 && <div className="h-full w-full rounded-t-sm bg-secondary" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (persona === 'trainers') {
    return (
      <div className={cn("flex h-full flex-col bg-[#0A0A0B] p-6", className)}>
        <div className="mb-6 flex justify-between">
          <h3 className="font-display text-xl text-white">Trainer Hub</h3>
          <div className="h-8 w-24 rounded-full bg-white/5" />
        </div>
        
        <div className="mb-6 grid grid-cols-3 gap-4">
          {[
            { label: 'Clients', val: '24', spark: "M0 20 Q10 15 20 15 T40 10 T60 15 T80 5" },
            { label: 'Q&A Views', val: '1.2K', spark: "M0 10 Q10 15 20 5 T40 10 T60 0 T80 5" },
            { label: 'Rating', val: '4.9', spark: "M0 15 Q10 15 20 15 T40 15 T60 15 T80 15" }
          ].map(kpi => (
            <div key={kpi.label} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <p className="text-xs text-muted-foreground">{kpi.label}</p>
              <p className="mt-1 font-display text-2xl ">{kpi.val}</p>
              <svg className="mt-3 h-4 w-full overflow-visible stroke-secondary stroke-2" fill="none" viewBox="0 0 80 20" preserveAspectRatio="none">
                <path d={kpi.spark} />
              </svg>
            </div>
          ))}
        </div>
        
        <div className="flex-1 rounded-xl border border-white/5 bg-white/[0.02] p-4">
          <p className="text-sm text-muted-foreground">Organic Leads</p>
          <div className="mt-4 flex h-32 items-end justify-between gap-2">
            {[2, 4, 3, 7, 5, 8, 12].map((h, i) => (
              <div key={i} className="w-full rounded-t-sm bg-white/10" style={{ height: `${(h/12)*100}%` }}>
                {i === 6 && <div className="h-full w-full rounded-t-sm bg-secondary" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

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
            <p className="mt-1 font-display text-2xl ">{kpi.val}</p>
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
