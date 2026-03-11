"use client";

import {
  ContactShadows,
  Float,
  MeshTransmissionMaterial,
  OrbitControls,
  RoundedBox,
  Sparkles,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";

type HeroSceneProps = {
  className?: string;
  compact?: boolean;
};

function HolographicCore({ compact = false, reducedMotion = false }: { compact?: boolean; reducedMotion?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const speed = reducedMotion ? 0.08 : compact ? 0.2 : 0.35;
    groupRef.current.rotation.y += delta * speed;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      Math.sin(state.clock.elapsedTime * (reducedMotion ? 0.18 : compact ? 0.35 : 0.5)) * (reducedMotion ? 0.05 : compact ? 0.11 : 0.18),
      reducedMotion ? 0.02 : 0.04,
    );
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * (reducedMotion ? 0.4 : compact ? 0.85 : 1.35)) * (reducedMotion ? 0.03 : compact ? 0.08 : 0.12);
  });

  return (
    <Float
      speed={reducedMotion ? 0.45 : compact ? 1 : 1.7}
      rotationIntensity={reducedMotion ? 0.08 : compact ? 0.18 : 0.4}
      floatIntensity={reducedMotion ? 0.2 : compact ? 0.45 : 0.9}
    >
      <group ref={groupRef} scale={compact ? 0.92 : 1}>
        <RoundedBox args={[2.7, 2.7, 2.7]} radius={0.2} smoothness={6}>
          <MeshTransmissionMaterial
            transmission={1}
            thickness={compact ? 0.65 : 0.9}
            roughness={compact ? 0.14 : 0.08}
            ior={1.12}
            chromaticAberration={compact ? 0.07 : 0.12}
            anisotropy={0.2}
            backside
            backsideThickness={0.5}
            color="#f6c78d"
            attenuationColor="#b45309"
            attenuationDistance={compact ? 1.2 : 0.9}
          />
        </RoundedBox>

        <mesh scale={compact ? 0.98 : 1.05}>
          <icosahedronGeometry args={[0.95, 1]} />
          <meshStandardMaterial
            color="#fbbf24"
            emissive="#c2410c"
            emissiveIntensity={compact ? 0.45 : 0.9}
            metalness={0.45}
            roughness={compact ? 0.26 : 0.18}
            wireframe
          />
        </mesh>

        <mesh rotation={[Math.PI / 2, 0, 0]} scale={compact ? 1.2 : 1.35}>
          <torusGeometry args={[1.15, 0.035, 24, 120]} />
          <meshStandardMaterial color="#fde68a" emissive="#f59e0b" emissiveIntensity={compact ? 0.42 : 0.92} />
        </mesh>

        <mesh rotation={[0.7, 0.95, 0.3]} scale={compact ? 1.42 : 1.6}>
          <torusGeometry args={[0.9, 0.026, 16, 100]} />
          <meshStandardMaterial color="#fdba74" emissive="#ea580c" emissiveIntensity={compact ? 0.46 : 0.98} />
        </mesh>

        {Array.from({ length: compact ? 4 : 6 }).map((_, index) => (
          <mesh
            key={index}
            position={[index % 2 === 0 ? -0.55 : 0.55, 0.58 - index * 0.22, 0.48]}
          >
            <boxGeometry args={[0.72, 0.04, 0.04]} />
            <meshStandardMaterial color="#ffedd5" emissive="#f59e0b" emissiveIntensity={compact ? 0.36 : 0.74} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export default function HeroScene({ className = "", compact = false }: HeroSceneProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <div
      className={[
        "relative w-full overflow-hidden rounded-[2rem] border border-amber-200/14 bg-white/[0.04] shadow-[0_0_80px_rgba(251,146,60,0.14)] backdrop-blur-2xl",
        compact ? "h-[250px] sm:h-[320px] md:h-[360px]" : "h-[360px] sm:h-[420px] md:h-[480px]",
        className,
      ].join(" ")}
    >
      <div
        className={
          compact
            ? "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.12),transparent_34%),radial-gradient(circle_at_bottom,rgba(194,65,12,0.12),transparent_26%)]"
            : "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.14),transparent_35%),radial-gradient(circle_at_bottom,rgba(194,65,12,0.14),transparent_28%)]"
        }
      />

      <Canvas
        dpr={shouldReduceMotion ? [1, 1.1] : compact ? [1, 1.2] : [1, 1.35]}
        frameloop={shouldReduceMotion ? "demand" : "always"}
        camera={{ position: [0, 0.2, 5.8], fov: 40 }}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={compact ? 0.52 : 0.65} />
        <directionalLight position={[4, 5, 3]} intensity={compact ? 1.1 : 1.85} color="#fbbf24" />
        <pointLight position={[-4, -2, 2]} intensity={compact ? 0.65 : 1.05} color="#ea580c" />
        <spotLight position={[0, 5, 5]} intensity={compact ? 0.68 : 1.05} angle={0.35} penumbra={1} color="#fffbeb" />

        {!shouldReduceMotion && (
          <Sparkles count={compact ? 10 : 20} scale={compact ? 5.2 : 6} size={compact ? 2.4 : 3.2} speed={compact ? 0.18 : 0.28} color="#fbbf24" />
        )}
        <HolographicCore compact={compact} reducedMotion={shouldReduceMotion} />
        <ContactShadows position={[0, -1.95, 0]} opacity={compact ? 0.26 : 0.45} scale={8} blur={compact ? 3.2 : 2.4} far={4} />
        {!shouldReduceMotion && <OrbitControls enablePan={false} enableZoom={false} minDistance={5.8} maxDistance={5.8} />}
      </Canvas>

      {!compact && (
        <div className="pointer-events-none absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 backdrop-blur-xl">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-amber-200/70">Interactive 3D</p>
            <p className="mt-1 text-sm text-white/80">مشهد حيّ مبني بـ Three.js و React Three Fiber</p>
          </div>
          <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-amber-200/20 bg-amber-200/10 text-amber-100 sm:flex">
            3D
          </div>
        </div>
      )}
    </div>
  );
}