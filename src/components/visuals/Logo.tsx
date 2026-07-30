import Image from 'next/image'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/fithubro-logo.png"
        alt="FitHuBro Logo"
        width={140}
        height={140}
        className="object-contain filter invert hue-rotate-180 brightness-110"
        priority
      />
    </div>
  )
}
