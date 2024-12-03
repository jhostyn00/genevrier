import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Perfume3(props) {
  const { nodes, materials } = useGLTF('/models/p3.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, -1.32, 0]} rotation={[-Math.PI / 2, 0, -1.567]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 3.378, 0]}>
            <group position={[0, 1.552, 0]}>
              <group position={[-0.395, 0.225, 0]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials['Material.003']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_17.geometry}
                  material={materials['material_0.001']}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_13.geometry}
                material={materials['Material.008']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_14.geometry}
                material={materials['material_0.001']}
              />
            </group>
            <group position={[0, 1.649, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_8.geometry}
                material={materials['Material.010']}
                position={[0, -0.127, 0]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials['Material.011']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_19.geometry}
              material={materials['Material.009']}
              position={[0, -0.16, 0]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials['Material.012']}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/p3.glb')
