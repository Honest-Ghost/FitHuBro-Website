import Image from 'next/image'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/fithubro-horizontal-logo-transparent.png"
        alt="FitHuBro Logo"
        width={220}
        height={70}
        className="object-contain"
        priority
      />
    </div>
  )
}
