import React from 'react'
import {Sphere, MeshDistortMaterial } from '@react-three/drei'

function AnimatedSphere() {
  return (
    <Sphere  visible args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial 
            color='#9F7AEA'
            attach='material'
            distort={.5}
            speed={2}
            roughness={6}
        />
    </Sphere>
  )
}

export default AnimatedSphere