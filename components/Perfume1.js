import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/3d/p1.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, -3.91, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={58}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.b_glass1_0.geometry}
            material={materials.glass1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.c_cap2_0.geometry}
            material={materials.cap2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.liquide1_liquide2_0.geometry}
            material={materials.liquide2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.s_straw1_0.geometry}
            material={materials.straw1}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/p1.glb')