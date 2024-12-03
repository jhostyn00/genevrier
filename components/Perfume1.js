import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';

export function Perfume1(props) {
  const { nodes, materials } = useGLTF('/models/p11.glb');
  const groupRef = useRef();

  useEffect(() => {
    if (groupRef.current) {
      // Animación flotante con GSAP
      gsap.to(groupRef.current.position, {
        y: "+=0.4", // Movimiento hacia arriba
        duration: 2, // Duración del movimiento
        yoyo: true, // Reversa automáticamente
        repeat: -1, // Animación infinita
        ease: "sine.inOut", // Movimiento suave
      });

      // Animación de rotación con GSAP
      gsap.to(groupRef.current.rotation, {
        x: "+=0.1", // Inclinación en x
        z: "+=0.05", // Ligero balanceo en z
        duration: 2, // Duración
        yoyo: true, // Reversa automáticamente
        repeat: -1, // Animación infinita
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group
        position={[0, -3.91, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={58}
      >
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
  );
}

useGLTF.preload('/models/p11.glb');
