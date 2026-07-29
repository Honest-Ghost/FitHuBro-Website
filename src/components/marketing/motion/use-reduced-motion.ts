'use client'

import { useEffect, useState } from 'react'

/**
 * Single source of truth for the motion opt-out. Starts `true` so the first
 * paint is the static one — a reveal that flashes in before the media query
 * resolves is worse than one that never animates.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(true)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(query.matches)

    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return reduced
}
