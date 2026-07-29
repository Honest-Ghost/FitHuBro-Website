'use client'

import { usePathname } from 'next/navigation'

export type Persona = 'owners' | 'members' | 'trainers'

export function usePersona(): Persona {
  const pathname = usePathname()
  
  if (pathname?.startsWith('/members')) return 'members'
  if (pathname?.startsWith('/trainers')) return 'trainers'
  
  return 'owners'
}
