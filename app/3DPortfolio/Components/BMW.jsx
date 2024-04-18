import { OrbitControls } from '@react-three/drei'
import React from 'react'
import { M4 } from './M4'

function BMW() {
  return (
    <>
    <directionalLight position={[0, 10, 5]} intensity={10} />
    <OrbitControls/>
    <M4 rotation={[1.7, 0, 0]} className="flex min-h-screen items-center justify-between p-26"/>
    </>
  )
}

export default BMW