import { cn } from '@/lib/utils/cn'

export function WorkoutScreen({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-4 p-5", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-xl ">Legs & Core</h3>
        <span className="text-sm text-secondary">Week 3</span>
      </div>
      
      <div className="mt-4 flex flex-col gap-3 rounded-2xl bg-white/5 p-4">
        <div className="flex items-center justify-between">
          <span className="text-white/90">Barbell Squat</span>
          <span className="text-xs text-muted-foreground">4 sets</span>
        </div>
        <div className="flex gap-2">
          {['12', '10', '8', '8'].map((reps, i) => (
            <div key={i} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs text-white/60">
              {reps}
            </div>
          ))}
        </div>
        <div className="mt-2 h-1 w-full rounded-full bg-white/10">
          <div className="h-full w-[75%] rounded-full bg-secondary" />
        </div>
        <div className="mt-2 flex justify-end">
          <button className="rounded-full bg-secondary px-4 py-1.5 text-xs text-white">Log set</button>
        </div>
      </div>
      
      <div className="flex flex-col gap-3 rounded-2xl bg-white/5 p-4 opacity-50">
        <div className="flex items-center justify-between">
          <span className="text-white/90">Romanian Deadlift</span>
          <span className="text-xs text-muted-foreground">3 sets</span>
        </div>
      </div>
    </div>
  )
}
