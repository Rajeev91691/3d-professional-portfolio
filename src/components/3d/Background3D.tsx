"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, PerspectiveCamera, Environment } from "@react-three/drei";
import * as THREE from "three";

function FloatingGeometries() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef}>
        <mesh position={[4, 2, -5]} rotation={[0.5, 0.3, 0.2]}>
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.6}
          />
        </mesh>

        <mesh position={[-4, -1, -4]} rotation={[0.3, -0.5, 0.4]}>
          <icosahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.6}
          />
        </mesh>

        <mesh position={[3, -2, -6]} rotation={[-0.3, 0.5, -0.2]}>
          <tetrahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.6}
          />
        </mesh>

        <mesh position={[-3, 2, -5]} rotation={[0.4, -0.3, 0.1]}>
          <dodecahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.6}
          />
        </mesh>

        <mesh position={[0, 3, -7]} rotation={[0.2, 0.8, -0.3]}>
          <torusGeometry args={[0.5, 0.15, 8, 24]} />
          <meshStandardMaterial
            color="#ec4899"
            emissive="#ec4899"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.5}
          />
        </mesh>

        <mesh position={[5, -3, -5]} rotation={[-0.2, -0.6, 0.3]}>
          <torusKnotGeometry args={[0.3, 0.1, 64, 8]} />
          <meshStandardMaterial
            color="#f59e0b"
            emissive="#f59e0b"
            emissiveIntensity={0.2}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.5}
          />
        </mesh>
      </group>
    </Float>
  );
}

function ParticleField() {
  const count = 200;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 30;
    positions[i + 1] = (Math.random() - 0.5) * 30;
    positions[i + 2] = (Math.random() - 0.5) * 20 - 10;
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#8b5cf6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0f0f1a] via-[#111928] to-[#0a0a12]">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        className="pointer-events-none"
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={60} />
        <Environment preset="night" />

        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} color="#8b5cf6" />
        <directionalLight position={[-5, -5, 5]} intensity={0.3} color="#6366f1" />
        <pointLight position={[0, 0, 5]} intensity={0.5} color="#a855f7" />

        <FloatingGeometries />
        <ParticleField />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
      </Canvas>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a12]" />
    </div>
  );
}