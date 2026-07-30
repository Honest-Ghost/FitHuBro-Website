'use client'

import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import { WebGLDumbbell } from './WebGLDumbbell'
import { useReducedMotion } from '../motion/use-reduced-motion'

export function ScrollScene() {
  const reduced = useReducedMotion()
  const [scale, setScale] = useState(0.8)

  useEffect(() => {
    const updateScale = () => {
      if (window.innerWidth < 640) {
        setScale(0.42)
      } else if (window.innerWidth < 1024) {
        setScale(0.6)
      } else {
        setScale(0.8)
      }
    }

    updateScale()
    window.addEventListener('resize', updateScale, { passive: true })
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  if (reduced) return null

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 2]}
      performance={{ min: 0.5 }}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* City environment for realistic metal reflections */}
      <Environment preset="city" />

      {/* The animated barbell driven by scroll & responsive viewport size */}
      <WebGLDumbbell scale={scale} />

      <ContactShadows
        position={[0, -2.5, 0]}
        opacity={0.4}
        scale={20}
        blur={2}
        far={4.5}
      />
    </Canvas>
  )
}
