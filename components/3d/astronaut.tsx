"use client"

import { Canvas } from "@react-three/fiber"
import { useGLTF, Float, Environment, ContactShadows } from "@react-three/drei"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

function Model({ path }: { path: string }) {
  const { scene } = useGLTF(path)
  
  return (
    <primitive 
      object={scene} 
      scale={2}
      position={[0, -1, 0]}
      rotation={[0, 0, 0]}
    />
  )
}

export function Astronaut() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === 'dark' || resolvedTheme === 'dark'
  const modelPath = isDark ? "/models/buzz_lightyear.glb" : "/models/woody.glb"

  return (
    <div className="h-[600px] w-full flex items-center justify-center">
      <Canvas key={modelPath} camera={{ position: [0, 0, 9], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Float 
          speed={2} 
          rotationIntensity={0.5} 
          floatIntensity={1.5} 
          floatingRange={[-0.3, 0.3]} 
        >
          <Model path={modelPath} />
        </Float>
        
        <Environment preset="city" />
        <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2.5} far={4.5} />
      </Canvas>
    </div>
  )
}

// Preload the models to avoid pop-in
useGLTF.preload("/models/buzz_lightyear.glb")
useGLTF.preload("/models/woody.glb")
