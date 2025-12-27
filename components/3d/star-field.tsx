"use client"

import { useRef, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import * as THREE from "three"
import { useTheme } from "next-themes"

function Rig() {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05
      ref.current.rotation.x = state.clock.elapsedTime * 0.02
    }
  })
  return (
    <group ref={ref}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  )
}

export function StarField() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (theme === 'dark' || resolvedTheme === 'dark') {
    return (
      <div className="fixed inset-0 z-[-1] bg-black pointer-events-none">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Rig />
        </Canvas>
      </div>
    )
  }

  return null
}
