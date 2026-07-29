'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group, MathUtils, Shape, Path } from 'three'
import { useScroll } from 'framer-motion'

function PremiumPlate({ radius, thickness, holeRadius, material, position, groupRef }: any) {
  const edgeRadius = Math.min(0.04, thickness / 2)
  const innerRadius = radius - edgeRadius
  
  const extrudeSettings = useMemo(() => ({
    depth: thickness - edgeRadius * 2,
    bevelEnabled: true,
    bevelSegments: 8,
    steps: 1,
    bevelSize: edgeRadius,
    bevelThickness: edgeRadius,
    curveSegments: 64
  }), [thickness, edgeRadius])

  const shape = useMemo(() => {
    const s = new Shape()
    s.absarc(0, 0, innerRadius, 0, Math.PI * 2, false)
    const holePath = new Path()
    holePath.absarc(0, 0, holeRadius, 0, Math.PI * 2, true)
    s.holes.push(holePath)
    return s
  }, [innerRadius, holeRadius])

  return (
    <group ref={groupRef} position={position}>
      {/* Extrude builds along Z, so we rotate 90deg to face along X */}
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <extrudeGeometry 
          args={[shape, extrudeSettings]} 
          onUpdate={(self) => self.center()} 
        />
        <meshStandardMaterial {...material} />
      </mesh>
    </group>
  )
}

export function WebGLDumbbell(props: any) {
  const group = useRef<Group>(null)
  
  const l0 = useRef<Group>(null)
  const l1 = useRef<Group>(null)
  const l2 = useRef<Group>(null)
  const l3 = useRef<Group>(null)

  const r0 = useRef<Group>(null)
  const r1 = useRef<Group>(null)
  const r2 = useRef<Group>(null)
  const r3 = useRef<Group>(null)

  const { scrollYProgress } = useScroll()

  useFrame((state) => {
    if (!group.current || !l0.current) return
    const t = state.clock.getElapsedTime()
    const scroll = scrollYProgress.get()
    
    // Triangle wave: 0 (top) -> 1 (middle) -> 0 (bottom)
    let progress = scroll < 0.5 ? (scroll / 0.5) : (1 - (scroll - 0.5) / 0.5)
    
    const getOffset = (p: number, start: number, end: number) => {
      if (p <= start) return 0
      if (p >= end) return 1
      return (p - start) / (end - start)
    }

    // Outer moves first (0-0.25), then inner (0.75-1.0)
    const t3 = getOffset(progress, 0.00, 0.25)
    const t2 = getOffset(progress, 0.25, 0.50)
    const t1 = getOffset(progress, 0.50, 0.75)
    const t0 = getOffset(progress, 0.75, 1.00)

    const baseXs = [1.3, 1.7, 2.1, 2.4]
    const maxDist = 3 // Increased explosion distance

    const updateSide = (refs: React.RefObject<Group | null>[], sign: number) => {
      const targets = [
        { x: (baseXs[0] + t0 * maxDist * 1) * sign, rot: t0 * Math.PI * 0.5 },
        { x: (baseXs[1] + t1 * maxDist * 1.5) * sign, rot: t1 * Math.PI * 0.8 },
        { x: (baseXs[2] + t2 * maxDist * 2) * sign, rot: t2 * Math.PI * 1.2 },
        { x: (baseXs[3] + t3 * maxDist * 2.5) * sign, rot: t3 * Math.PI * 2.0 },
      ]
      
      refs.forEach((ref, i) => {
        if (!ref.current) return
        ref.current.position.x = MathUtils.lerp(ref.current.position.x, targets[i].x, 0.08)
        ref.current.rotation.x = MathUtils.lerp(ref.current.rotation.x, targets[i].rot, 0.08)
        ref.current.rotation.y = MathUtils.lerp(ref.current.rotation.y, targets[i].rot * sign, 0.08)
      })
    }

    updateSide([r0, r1, r2, r3], 1)
    updateSide([l0, l1, l2, l3], -1)

    // Cinematic Global Movement
    // Moves towards the camera, tilts up, and does a barrel roll as it explodes
    const targetZ = progress * 5 // Brings the exploded parts closer to the viewer
    const targetRotX = progress * (Math.PI / 6) // Cinematic tilt
    const targetRotZ = progress * (Math.PI / 4) // Dramatic barrel roll
    
    // Base idle rotation + 180 degree spin based on scroll
    const idleRotY = t * 0.2
    const targetRotY = idleRotY + progress * Math.PI

    group.current.position.z = MathUtils.lerp(group.current.position.z, targetZ, 0.05)
    group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, targetRotX, 0.05)
    group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, targetRotY, 0.05)
    group.current.rotation.z = MathUtils.lerp(group.current.rotation.z, targetRotZ, 0.05)
  })

  const steelMaterial = { color: '#888', metalness: 0.8, roughness: 0.2 }
  const rubberMaterial = { color: '#111', metalness: 0.2, roughness: 0.7 }
  const accentMaterial = { color: '#e50914', metalness: 0.4, roughness: 0.4 }

  const holeR = 0.21 // Slightly larger than the 0.2 radius sleeve

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Center handle */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.15, 0.15, 6, 64]} />
        <meshStandardMaterial {...steelMaterial} />
      </mesh>
      
      {/* Sleeves (where the plates mount) */}
      <mesh position={[-1.9, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.2, 0.2, 2, 64]} />
        <meshStandardMaterial {...steelMaterial} />
      </mesh>
      <mesh position={[1.9, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.2, 0.2, 2, 64]} />
        <meshStandardMaterial {...steelMaterial} />
      </mesh>

      {/* Left Plates */}
      <PremiumPlate groupRef={l0} radius={0.9} thickness={0.3} holeRadius={holeR} material={rubberMaterial} position={[-1.3, 0, 0]} />
      <PremiumPlate groupRef={l1} radius={0.9} thickness={0.3} holeRadius={holeR} material={rubberMaterial} position={[-1.7, 0, 0]} />
      <PremiumPlate groupRef={l2} radius={0.6} thickness={0.25} holeRadius={holeR} material={rubberMaterial} position={[-2.1, 0, 0]} />
      <PremiumPlate groupRef={l3} radius={0.25} thickness={0.15} holeRadius={holeR} material={accentMaterial} position={[-2.4, 0, 0]} />

      {/* Right Plates */}
      <PremiumPlate groupRef={r0} radius={0.9} thickness={0.3} holeRadius={holeR} material={rubberMaterial} position={[1.3, 0, 0]} />
      <PremiumPlate groupRef={r1} radius={0.9} thickness={0.3} holeRadius={holeR} material={rubberMaterial} position={[1.7, 0, 0]} />
      <PremiumPlate groupRef={r2} radius={0.6} thickness={0.25} holeRadius={holeR} material={rubberMaterial} position={[2.1, 0, 0]} />
      <PremiumPlate groupRef={r3} radius={0.25} thickness={0.15} holeRadius={holeR} material={accentMaterial} position={[2.4, 0, 0]} />
    </group>
  )
}
