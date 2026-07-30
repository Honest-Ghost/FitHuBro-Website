import Image from 'next/image'
import { cn } from '@/lib/utils/cn'

export function Logo({ className = '', imageClassName = '' }: { className?: string; imageClassName?: string }) {
  return (
    <div className={cn('flex items-center', className)}>
      <Image
        src="/fithubro-horizontal-logo-transparent.png"
        alt="FitHuBro Logo"
        width={180}
        height={43}
        style={{ height: 'auto' }}
        className={cn('object-contain h-5 sm:h-6 w-auto', imageClassName)}
        priority
      />
    </div>
  )
}
