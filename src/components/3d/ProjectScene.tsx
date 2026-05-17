"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface ProjectSceneProps {
  color?: string;
}

function ProjectModel({ color = "#8b5cf6" }: ProjectSceneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <group ref={groupRef}>
        <mesh ref={meshRef}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.2}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.8}
          />
        </mesh>

        <mesh position={[0, 0, 0]} scale={[0.8, 0.8, 0.8]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.1}
            metalness={0.5}
            roughness={0.3}
            transparent
            opacity={0.3}
            wireframe
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function ProjectScene({ color = "#8b5cf6" }: ProjectSceneProps) {
  return (
    <div className="w-full h-full min-h-[300px]">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        className="pointer-events-auto"
      >
        <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={50} />
        <Environment preset="night" />

        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color={color} />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#6366f1" />
        <pointLight position={[0, 0, 5]} intensity={0.3} color="#a855f7" />

        <ProjectModel color={color} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI * 0.75}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}