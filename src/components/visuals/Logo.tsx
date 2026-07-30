import Image from 'next/image'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="bg-white rounded-md p-1 flex items-center justify-center overflow-hidden drop-shadow-md">
        <Image
          src="/fithubro-logo.png"
          alt="FitHuBro Logo"
          width={120}
          height={120}
          className="object-contain"
          priority
        />
      </div>
    </div>
  )
}
