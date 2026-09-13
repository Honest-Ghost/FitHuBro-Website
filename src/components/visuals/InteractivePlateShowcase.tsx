'use client'

import React, { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import { Group, MathUtils } from 'three'
import { Rotate3D, RotateCcw } from 'lucide-react'
import { usePlateTexture, PremiumPlate } from './WebGLDumbbell'

interface InteractivePlateSceneProps {
  gymName: string
  logoUrl?: string | null
  accentColor?: string
  dragVelocity: React.MutableRefObject<{ x: number; y: number }>
  isDraggingRef: React.MutableRefObject<boolean>
  manualRotation: React.MutableRefObject<{ x: number; y: number }>
}

function InteractivePlateModel({
  gymName,
  logoUrl,
  accentColor,
  dragVelocity,
  isDraggingRef,
  manualRotation,
}: InteractivePlateSceneProps) {
  const plateRef = useRef<Group>(null)
  const { diffuse: plateTexture, bump: bumpTexture } = usePlateTexture(gymName, logoUrl, accentColor)

  const rubberMaterial = useMemo(
    () => ({
      color: '#16171B',
      metalness: 0.35,
      roughness: 0.55,
    }),
    []
  )

  useFrame((state) => {
    if (!plateRef.current) return
    const t = state.clock.getElapsedTime()
    const pointer = state.pointer

    // If user is not actively dragging, apply momentum decay & gentle floating levitation
    if (!isDraggingRef.current) {
      // Angular friction damping (air resistance)
      dragVelocity.current.x *= 0.94
      dragVelocity.current.y *= 0.94

      manualRotation.current.x += dragVelocity.current.x
      manualRotation.current.y += dragVelocity.current.y

      // When angular velocity is near zero, apply subtle harmonic floating wobble & mouse tilt
      if (Math.abs(dragVelocity.current.x) < 0.001 && Math.abs(dragVelocity.current.y) < 0.001) {
        const floatY = Math.sin(t * 1.6) * 0.03
        plateRef.current.position.y = MathUtils.lerp(plateRef.current.position.y, floatY, 0.05)

        // Mouse hover parallax torque
        const targetHoverX = -pointer.y * 0.2
        const targetHoverY = pointer.x * 0.25
        manualRotation.current.x = MathUtils.lerp(manualRotation.current.x, targetHoverX, 0.03)
      }
    } else {
      // While dragging, follow mouse/touch movement directly
      manualRotation.current.x += dragVelocity.current.x
      manualRotation.current.y += dragVelocity.current.y
      dragVelocity.current.x = 0
      dragVelocity.current.y = 0
    }

    // Clamp pitch so the plate can never roll upside down
    manualRotation.current.x = Math.max(-0.4, Math.min(0.4, manualRotation.current.x))

    // Apply rotation to the plate group
    plateRef.current.rotation.x = MathUtils.lerp(plateRef.current.rotation.x, manualRotation.current.x, 0.15)
    plateRef.current.rotation.y = MathUtils.lerp(plateRef.current.rotation.y, manualRotation.current.y, 0.15)
  })

  return (
    <group ref={plateRef} position={[0, 0, 0]} scale={1.45}>
      <PremiumPlate
        radius={0.95}
        thickness={0.28}
        holeRadius={0.21}
        material={rubberMaterial}
        position={[0, 0, 0]}
        plateTexture={plateTexture}
        bumpTexture={bumpTexture}
      />
    </group>
  )
}

interface InteractivePlateShowcaseProps {
  gymName: string
  logoUrl?: string | null
  accentColor?: string
  className?: string
}

export function InteractivePlateShowcase({
  gymName,
  logoUrl,
  accentColor = '#E50914',
  className = '',
}: InteractivePlateShowcaseProps) {
  const [hasInteracted, setHasInteracted] = useState(false)
  const isDraggingRef = useRef(false)
  const lastPointerPos = useRef({ x: 0, y: 0 })
  const dragVelocity = useRef({ x: 0, y: 0 })
  // Initial camera 3/4 beauty angle showing physical embossed branding (face normal ~13 deg to camera)
  const manualRotation = useRef({ x: 0.08, y: 1.35 })

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true
    setHasInteracted(true)
    lastPointerPos.current = { x: e.clientX, y: e.clientY }
    // Capture pointer on target element
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return
    const dx = e.clientX - lastPointerPos.current.x
    const dy = e.clientY - lastPointerPos.current.y

    // Calculate rotational impulse based on drag delta
    dragVelocity.current = {
      x: dy * 0.008,
      y: dx * 0.008,
    }

    lastPointerPos.current = { x: e.clientX, y: e.clientY }
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false
    try {
      ;(e.target as HTMLElement).releasePointerCapture?.(e.pointerId)
    } catch {
      // capture release fallback
    }
  }

  const handleResetView = () => {
    manualRotation.current = { x: 0.08, y: 1.35 }
    dragVelocity.current = { x: 0, y: 0 }
  }

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* 3D WebGL Canvas for the Olympic Plate */}
      <div
        className="relative h-48 w-48 sm:h-56 sm:w-56 cursor-grab active:cursor-grabbing touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <Canvas
          camera={{ position: [0, 0, 3.8], fov: 42 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[6, 8, 4]} intensity={1.4} castShadow />
          <directionalLight position={[-6, -4, -3]} intensity={0.4} />

          <Environment preset="city" />

          <InteractivePlateModel
            gymName={gymName}
            logoUrl={logoUrl}
            accentColor={accentColor}
            dragVelocity={dragVelocity}
            isDraggingRef={isDraggingRef}
            manualRotation={manualRotation}
          />

          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.45}
            scale={5}
            blur={2}
            far={3}
          />
        </Canvas>
      </div>

      {/* Floating Interactive Controls */}
      <div className="mt-2 flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground backdrop-blur-sm shadow-sm">
          <Rotate3D className="h-3 w-3 text-secondary animate-pulse" />
          <span>{hasInteracted ? 'Drag to rotate 3D' : 'Interactive · Drag to spin'}</span>
        </span>

        {hasInteracted && (
          <button
            type="button"
            onClick={handleResetView}
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-mono text-muted-foreground hover:text-white transition-colors"
            title="Reset to front angle"
          >
            <RotateCcw className="h-2.5 w-2.5" />
            <span>Reset</span>
          </button>
        )}
      </div>
    </div>
  )
}
