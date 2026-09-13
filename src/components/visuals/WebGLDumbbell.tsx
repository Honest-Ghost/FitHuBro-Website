'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { CanvasTexture, Group, MathUtils, Shape, Path, LinearFilter, LinearMipmapLinearFilter } from 'three'
import { useScroll } from 'framer-motion'

// Helper to draw radially aligned and tangentially rotated circular arc text
function drawCircularArcText(
  ctx: CanvasRenderingContext2D,
  bumpCtx: CanvasRenderingContext2D,
  text: string,
  cx: number,
  cy: number,
  arcR: number,
  centerAngle: number,
  isTop: boolean,
  maxSpanAngle: number = Math.PI * 0.72
) {
  const chars = Array.from(text)
  if (chars.length === 0) return

  // 1. Measure each character's width
  ctx.save()
  const charWidths = chars.map((c) => ctx.measureText(c).width)
  const totalCharWidth = charWidths.reduce((a, b) => a + b, 0)
  
  // Dynamic letter spacing based on length
  let spacing = isTop ? (chars.length > 22 ? 10 : chars.length > 14 ? 16 : 24) : 14
  let totalArcLength = totalCharWidth + spacing * (chars.length - 1)
  let totalAngle = totalArcLength / arcR

  // If too wide for the designated sector, compress spacing and scale angle
  let fontScale = 1.0
  if (totalAngle > maxSpanAngle) {
    fontScale = maxSpanAngle / totalAngle
    totalAngle = maxSpanAngle
  }
  ctx.restore()

  // Calculate starting angle so text is symmetrically centered
  let currentAngle = centerAngle - totalAngle / 2

  chars.forEach((char, i) => {
    const charAngle = ((charWidths[i] * fontScale + spacing * fontScale) / arcR)
    const midAngle = currentAngle + charAngle / 2

    const x = cx + Math.cos(midAngle) * arcR
    const y = cy + Math.sin(midAngle) * arcR

    // Tangential rotation angle:
    // For top arc (isTop = true): midAngle + Math.PI / 2
    // For bottom arc (isTop = false): midAngle - Math.PI / 2
    const rotAngle = isTop ? midAngle + Math.PI / 2 : midAngle - Math.PI / 2

    // 1. Diffuse canvas: Physical multi-pass chiseled bevel relief
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(rotAngle)

    // Deep directional undercut shadow (bottom-right)
    ctx.shadowColor = 'rgba(0, 0, 0, 0.95)'
    ctx.shadowBlur = 10
    ctx.shadowOffsetX = 3
    ctx.shadowOffsetY = 6
    ctx.fillStyle = '#050507'
    ctx.fillText(char, 2, 4)

    // Directional specular highlight edge (top-left)
    ctx.shadowColor = 'rgba(255, 255, 255, 0.45)'
    ctx.shadowBlur = 4
    ctx.shadowOffsetX = -2
    ctx.shadowOffsetY = -2
    ctx.fillStyle = '#FFFFFF'
    ctx.fillText(char, -1, -2)

    // Perimeter metallic bevel line
    ctx.shadowColor = 'transparent'
    ctx.lineWidth = 5
    ctx.strokeStyle = '#18181B'
    ctx.strokeText(char, 0, 0)

    // Bright face fill
    ctx.fillStyle = '#EDEDF0'
    ctx.fillText(char, 0, 0)
    ctx.restore()

    // 2. Bump canvas: Raised pure-white character relief for WebGL lighting shaders
    bumpCtx.save()
    bumpCtx.translate(x, y)
    bumpCtx.rotate(rotAngle)
    bumpCtx.fillStyle = '#FFFFFF'
    bumpCtx.fillText(char, 0, 0)
    bumpCtx.restore()

    currentAngle += charAngle
  })
}

export function usePlateTexture(brandText: string, logoUrl?: string | null, accentColor?: string) {
  const [textures, setTextures] = useState<{ diffuse: CanvasTexture | null; bump: CanvasTexture | null }>({
    diffuse: null,
    bump: null,
  })

  useEffect(() => {
    if (typeof document === 'undefined') return

    // 2048x2048 high-resolution canvases for razor-sharp physical rendering
    const canvas = document.createElement('canvas')
    canvas.width = 2048
    canvas.height = 2048
    const ctx = canvas.getContext('2d')

    const bumpCanvas = document.createElement('canvas')
    bumpCanvas.width = 2048
    bumpCanvas.height = 2048
    const bumpCtx = bumpCanvas.getContext('2d')

    if (!ctx || !bumpCtx) return

    let isMounted = true

    const renderPlate = (img: HTMLImageElement | null) => {
      const cx = 1024
      const cy = 1024

      ctx.clearRect(0, 0, 2048, 2048)
      bumpCtx.clearRect(0, 0, 2048, 2048)

      // ==========================================
      // 1. BASE PLATE & CONCENTRIC METALLIC GROOVES
      // ==========================================
      // Diffuse: Cast iron background with realistic radial lighting gradient
      const bgGrad = ctx.createRadialGradient(cx, cy, 240, cx, cy, 1020)
      bgGrad.addColorStop(0, '#26262B')
      bgGrad.addColorStop(0.5, '#18181C')
      bgGrad.addColorStop(0.85, '#121215')
      bgGrad.addColorStop(1, '#0A0A0D')
      ctx.fillStyle = bgGrad
      ctx.beginPath()
      ctx.arc(cx, cy, 1016, 0, Math.PI * 2)
      ctx.fill()

      // Bump: Base surface mid-gray (0.5 elevation)
      bumpCtx.fillStyle = '#808080'
      bumpCtx.fillRect(0, 0, 2048, 2048)

      // Outer raised bevel rim
      ctx.beginPath()
      ctx.arc(cx, cy, 964, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
      ctx.lineWidth = 18
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(cx, cy, 944, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.9)'
      ctx.lineWidth = 12
      ctx.stroke()

      bumpCtx.beginPath()
      bumpCtx.arc(cx, cy, 944, 0, Math.PI * 2)
      bumpCtx.strokeStyle = '#303030'
      bumpCtx.lineWidth = 14
      bumpCtx.stroke()

      // Concentric Olympic grip grooves
      ctx.beginPath()
      ctx.arc(cx, cy, 890, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)'
      ctx.lineWidth = 8
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(cx, cy, 650, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.7)'
      ctx.lineWidth = 6
      ctx.stroke()

      if (accentColor) {
        ctx.beginPath()
        ctx.arc(cx, cy, 650, 0, Math.PI * 2)
        ctx.strokeStyle = accentColor
        ctx.lineWidth = 5
        ctx.globalAlpha = 0.65
        ctx.stroke()
        ctx.globalAlpha = 1.0
      }

      bumpCtx.beginPath()
      bumpCtx.arc(cx, cy, 650, 0, Math.PI * 2)
      bumpCtx.strokeStyle = '#404040'
      bumpCtx.lineWidth = 8
      bumpCtx.stroke()

      // ==========================================
      // 2. CENTER SLEEVE COLLAR (MACHINED STEEL)
      // ==========================================
      ctx.beginPath()
      ctx.arc(cx, cy, 276, 0, Math.PI * 2)
      const collarGrad = ctx.createLinearGradient(cx - 280, cy - 280, cx + 280, cy + 280)
      collarGrad.addColorStop(0, '#E4E4E7')
      collarGrad.addColorStop(0.5, '#71717A')
      collarGrad.addColorStop(1, '#27272A')
      ctx.strokeStyle = collarGrad
      ctx.lineWidth = 28
      ctx.stroke()

      bumpCtx.beginPath()
      bumpCtx.arc(cx, cy, 276, 0, Math.PI * 2)
      bumpCtx.strokeStyle = '#A8A8A8'
      bumpCtx.lineWidth = 28
      bumpCtx.stroke()

      // Center sleeve hole cutout
      ctx.beginPath()
      ctx.arc(cx, cy, 252, 0, Math.PI * 2)
      ctx.fillStyle = '#09090B'
      ctx.fill()
      ctx.strokeStyle = '#3F3F46'
      ctx.lineWidth = 8
      ctx.stroke()

      bumpCtx.beginPath()
      bumpCtx.arc(cx, cy, 252, 0, Math.PI * 2)
      bumpCtx.fillStyle = '#101010'
      bumpCtx.fill()

      // ==========================================
      // 3. CIRCULAR ARC GYM NAME (TOP ARC)
      // ==========================================
      const cleanBrand = (brandText || 'FITHUBRO').toUpperCase().trim().slice(0, 36)
      
      // Dynamic typography scaling based on string length
      let fontSize = 86
      if (cleanBrand.length > 24) {
        fontSize = 54
      } else if (cleanBrand.length > 16) {
        fontSize = 70
      } else if (cleanBrand.length <= 8) {
        fontSize = 105
      }

      const brandFont = `900 ${fontSize}px "Montserrat", "Impact", "Arial Black", sans-serif`
      ctx.font = brandFont
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      bumpCtx.font = brandFont
      bumpCtx.textAlign = 'center'
      bumpCtx.textBaseline = 'middle'

      // Arched across the top circle at arcR = 760px
      drawCircularArcText(ctx, bumpCtx, cleanBrand, cx, cy, 760, -Math.PI / 2, true, Math.PI * 0.72)

      // ==========================================
      // 4. PHYSICAL LOGO MEDALLION (CENTER UPPER)
      // ==========================================
      const logoBoxW = 460
      const logoBoxH = 260
      const logoCenterY = 510

      if (img && img.complete && img.naturalWidth > 0) {
        const aspect = img.naturalWidth / img.naturalHeight
        let dw = logoBoxW
        let dh = logoBoxW / aspect
        if (dh > logoBoxH) {
          dh = logoBoxH
          dw = logoBoxH * aspect
        }

        const lx = cx - dw / 2
        const ly = logoCenterY - dh / 2

        // Diffuse: Inlaid depth shadow
        ctx.save()
        ctx.shadowColor = 'rgba(0, 0, 0, 0.95)'
        ctx.shadowBlur = 18
        ctx.shadowOffsetY = 8
        ctx.drawImage(img, lx, ly + 4, dw, dh)
        ctx.restore()

        // Diffuse: Specular edge highlight
        ctx.save()
        ctx.shadowColor = 'rgba(255, 255, 255, 0.35)'
        ctx.shadowBlur = 6
        ctx.shadowOffsetY = -3
        ctx.drawImage(img, lx, ly - 2, dw, dh)
        ctx.restore()

        // Diffuse: Full crisp resolution drawing
        ctx.save()
        ctx.imageSmoothingEnabled = true
        ctx.imageSmoothingQuality = 'high'
        ctx.drawImage(img, lx, ly, dw, dh)
        ctx.restore()

        // Bump: Extract logo silhouette as physical raised relief (#E0E0E0)
        try {
          const mask = document.createElement('canvas')
          mask.width = Math.round(dw)
          mask.height = Math.round(dh)
          const mCtx = mask.getContext('2d')
          if (mCtx) {
            mCtx.drawImage(img, 0, 0, dw, dh)
            mCtx.globalCompositeOperation = 'source-in'
            mCtx.fillStyle = '#E0E0E0'
            mCtx.fillRect(0, 0, dw, dh)
            bumpCtx.drawImage(mask, lx, ly)
          }
        } catch {
          // fallback
        }
      }

      // ==========================================
      // 5. BOTTOM WEIGHT SPECIFICATION (CIRCULAR ARC)
      // ==========================================
      const weightFont = '800 60px "Montserrat", "Arial Black", sans-serif'
      ctx.font = weightFont
      bumpCtx.font = weightFont
      
      // "20.4 KG · 45 LB" arched across bottom circle at arcR = 760px
      drawCircularArcText(ctx, bumpCtx, '20.4 KG · 45 LB', cx, cy, 760, Math.PI / 2, false, Math.PI * 0.45)

      // Outer sub-specification arc
      const subFont = '700 28px "Montserrat", monospace'
      ctx.font = subFont
      bumpCtx.font = subFont
      drawCircularArcText(ctx, bumpCtx, 'OLYMPIC GRADE STEEL', cx, cy, 850, Math.PI / 2, false, Math.PI * 0.55)

      // ==========================================
      // 6. THREE.JS TEXTURE INITIALIZATION
      // ==========================================
      const dTex = new CanvasTexture(canvas)
      dTex.generateMipmaps = true
      dTex.minFilter = LinearMipmapLinearFilter
      dTex.magFilter = LinearFilter
      dTex.anisotropy = 16
      dTex.needsUpdate = true

      const bTex = new CanvasTexture(bumpCanvas)
      bTex.generateMipmaps = true
      bTex.minFilter = LinearMipmapLinearFilter
      bTex.magFilter = LinearFilter
      bTex.anisotropy = 16
      bTex.needsUpdate = true

      setTextures({ diffuse: dTex, bump: bTex })
    }

    // Always default to official FitHuBro logo if none specified
    const targetLogo = logoUrl || '/fithubro-horizontal-logo-transparent.png'
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      if (!isMounted) return
      renderPlate(img)
    }
    img.onerror = () => {
      if (!isMounted) return
      // If custom logo fails to load, fallback to official FitHuBro logo
      if (targetLogo !== '/fithubro-horizontal-logo-transparent.png') {
        const fbImg = new Image()
        fbImg.crossOrigin = 'anonymous'
        fbImg.onload = () => {
          if (!isMounted) return
          renderPlate(fbImg)
        }
        fbImg.onerror = () => {
          if (!isMounted) return
          renderPlate(null)
        }
        fbImg.src = '/fithubro-horizontal-logo-transparent.png'
      } else {
        renderPlate(null)
      }
    }
    img.src = targetLogo

    return () => {
      isMounted = false
    }
  }, [brandText, logoUrl, accentColor])

  return textures
}

export function PremiumPlate({ radius, thickness, holeRadius, material, position, groupRef, plateTexture, bumpTexture }: any) {
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

  const faceRadius = innerRadius * 0.98

  return (
    <group ref={groupRef} position={position}>
      {/* Extrude builds along Z, so we rotate 90deg to face along X */}
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <extrudeGeometry 
          args={[shape, extrudeSettings] as any} 
          onUpdate={(self: any) => self.center()} 
        />
        <meshStandardMaterial {...material} />
      </mesh>

      {/* FRONT OF PLATE EMBOSSING (+X face) */}
      {plateTexture && (
        <mesh position={[thickness / 2 + 0.002, 0, 0]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1]}>
          <circleGeometry args={[faceRadius, 64]} />
          <meshStandardMaterial 
            map={plateTexture}
            bumpMap={bumpTexture}
            bumpScale={0.055}
            roughness={0.45} 
            metalness={0.25} 
            depthWrite={true}
          />
        </mesh>
      )}

      {/* BACK OF PLATE EMBOSSING (-X face) */}
      {plateTexture && (
        <mesh position={[-thickness / 2 - 0.002, 0, 0]} rotation={[0, -Math.PI / 2, 0]} scale={[1, 1, 1]}>
          <circleGeometry args={[faceRadius, 64]} />
          <meshStandardMaterial 
            map={plateTexture}
            bumpMap={bumpTexture}
            bumpScale={0.055}
            roughness={0.45} 
            metalness={0.25} 
            depthWrite={true}
          />
        </mesh>
      )}
    </group>
  )
}

export function WebGLDumbbell({ brandText = 'FITHUBRO', logoUrl = null, accentColor, ...props }: any) {
  const group = useRef<Group>(null)
  const { diffuse: plateTexture, bump: bumpTexture } = usePlateTexture(brandText, logoUrl, accentColor)
  
  const l0 = useRef<Group>(null)
  const l1 = useRef<Group>(null)
  const l2 = useRef<Group>(null)
  const l3 = useRef<Group>(null)

  const r0 = useRef<Group>(null)
  const r1 = useRef<Group>(null)
  const r2 = useRef<Group>(null)
  const r3 = useRef<Group>(null)

  const { scrollYProgress } = useScroll()

  useFrame((state: any) => {
    if (!group.current || !l0.current) return
    const t = state.clock.getElapsedTime()
    const scroll = scrollYProgress.get()

    // Triangle wave: 0 (top) -> 1 (middle 50%) -> 0 (bottom 100%)
    let progress = scroll < 0.5 ? (scroll / 0.5) : (1 - (scroll - 0.5) / 0.5)
    
    const getOffset = (p: number, start: number, end: number) => {
      if (p <= start) return 0
      if (p >= end) return 1
      return (p - start) / (end - start)
    }

    // Outer moves first (0-0.25), then inner (0.75-1.0) - sequential disassembly
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

  const holeR = 0.21

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

      {/* Left Plates - Both front & back branded with logo & gym name */}
      <PremiumPlate groupRef={l0} radius={0.9} thickness={0.3} holeRadius={holeR} material={rubberMaterial} position={[-1.3, 0, 0]} plateTexture={plateTexture} bumpTexture={bumpTexture} />
      <PremiumPlate groupRef={l1} radius={0.9} thickness={0.3} holeRadius={holeR} material={rubberMaterial} position={[-1.7, 0, 0]} plateTexture={plateTexture} bumpTexture={bumpTexture} />
      <PremiumPlate groupRef={l2} radius={0.6} thickness={0.25} holeRadius={holeR} material={rubberMaterial} position={[-2.1, 0, 0]} plateTexture={plateTexture} bumpTexture={bumpTexture} />
      <PremiumPlate groupRef={l3} radius={0.25} thickness={0.15} holeRadius={holeR} material={accentMaterial} position={[-2.4, 0, 0]} />

      {/* Right Plates - Both front & back branded with logo & gym name */}
      <PremiumPlate groupRef={r0} radius={0.9} thickness={0.3} holeRadius={holeR} material={rubberMaterial} position={[1.3, 0, 0]} plateTexture={plateTexture} bumpTexture={bumpTexture} />
      <PremiumPlate groupRef={r1} radius={0.9} thickness={0.3} holeRadius={holeR} material={rubberMaterial} position={[1.7, 0, 0]} plateTexture={plateTexture} bumpTexture={bumpTexture} />
      <PremiumPlate groupRef={r2} radius={0.6} thickness={0.25} holeRadius={holeR} material={rubberMaterial} position={[2.1, 0, 0]} plateTexture={plateTexture} bumpTexture={bumpTexture} />
      <PremiumPlate groupRef={r3} radius={0.25} thickness={0.15} holeRadius={holeR} material={accentMaterial} position={[2.4, 0, 0]} />
    </group>
  )
}
