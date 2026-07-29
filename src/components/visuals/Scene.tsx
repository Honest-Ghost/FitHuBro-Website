'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, Float, PresentationControls, ContactShadows } from '@react-three/drei'
import { WebGLDumbbell } from './WebGLDumbbell'

export function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <PresentationControls
        global
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <Float rotationIntensity={0.4} floatIntensity={2} speed={2}>
          <WebGLDumbbell scale={1.5} />
        </Float>
      </PresentationControls>

      <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={20} blur={1.5} far={4} />
    </Canvas>
  )
}
