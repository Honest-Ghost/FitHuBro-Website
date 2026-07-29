'use client'

import { useState, useEffect, Suspense } from 'react'
import { Scene } from '../visuals/Scene'
import { CSSDumbbell } from '../visuals/CSSDumbbell'

export function HybridHero3D() {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null)

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      setHasWebGL(gl != null && gl instanceof WebGLRenderingContext)
    } catch (e) {
      setHasWebGL(false)
    }
  }, [])

  if (hasWebGL === null) {
    return <div className="h-[400px] w-full" />
  }

  if (!hasWebGL) {
    return (
      <div className="flex h-[400px] w-[520px] items-center justify-center">
        <CSSDumbbell />
      </div>
    )
  }

  return (
    <div className="h-[500px] w-[700px] cursor-grab active:cursor-grabbing">
      <Suspense fallback={<div className="h-full w-full" />}>
        <Scene />
      </Suspense>
    </div>
  )
}
