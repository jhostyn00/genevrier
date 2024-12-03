import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';

export function Perfume2(props) {
  const { nodes, materials } = useGLTF('/models/p2.glb');
  const groupRef = useRef();

  useEffect(() => {
    if (groupRef.current) {
      // Animación flotante con GSAP
      gsap.to(groupRef.current.position, {
        y: "+=0.2", // Movimiento vertical hacia arriba
        duration: 2, // Duración del movimiento
        yoyo: true, // Reversa automáticamente
        repeat: -1, // Animación infinita
        ease: "sine.inOut", // Movimiento suave
      });

      // Animación de rotación con GSAP
      gsap.to(groupRef.current.rotation, {
        x: "+=0.05", // Ligera inclinación en X
        z: "+=0.03", // Balanceo en Z
        duration: 2, // Duración
        yoyo: true, // Reversa automáticamente
        repeat: -1, // Animación infinita
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group position={[0, -1.08, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1.2}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cap_cap_0.geometry}
            material={materials.material}
            position={[0, 345.939, 0]}
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
  );
}

useGLTF.preload('/models/p2.glb');
