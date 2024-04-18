'use client'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import BMW from './Components/BMW'

function page() {
    alert("Still work under progress")
  return (
    <div className="flex min-h-screen items-center justify-between p-26">
    <Canvas className="flex min-h-screen items-center justify-between p-26">
        <BMW className="flex min-h-screen items-center justify-between p-26"/>
    </Canvas>
    </div>
  )
}

export default page