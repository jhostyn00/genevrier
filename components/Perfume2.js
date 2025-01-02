import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/3d/p2.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, -1.08, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1.2}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cap_cap_0.geometry}
            material={materials.material}
            position={[0, 345.94, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[83.481, 83.481, 91.412]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_text_0.geometry}
            material={materials.text}
            position={[-0.44, 384.226, -31.167]}
            scale={[7.222, 7.222, 2.093]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.metal_1_metal_0.geometry}
            material={materials.metal}
            position={[0, 332.546, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={76.684}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.metal_2_metal_0.geometry}
            material={materials.metal}
            position={[0, 371.508, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={34.278}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sauvage_Sauvage_glass_0.geometry}
            material={materials.Sauvage_glass}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[159.717, 159.717, 255.862]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tube_tube_0.geometry}
            material={materials.tube}
            position={[3.474, 242.25, 4.788]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={9.013}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/p2.glb')