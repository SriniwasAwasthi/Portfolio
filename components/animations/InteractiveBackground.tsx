'use client';

import * as React from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useReducedMotion } from 'framer-motion';
import * as THREE from 'three';

// 3D Scene Component
function ParticleMesh({ count = 800 }) {
  const pointsRef = React.useRef<THREE.Points>(null);
  const shouldReduceMotion = useReducedMotion();
  const { mouse } = useThree();

  // Create random position array on sphere surface
  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);
      const radius = THREE.MathUtils.randFloat(1.5, 3.5);

      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();

    if (!shouldReduceMotion) {
      // Slow rotation
      pointsRef.current.rotation.y = time * 0.03;
      pointsRef.current.rotation.x = time * 0.015;

      // Mouse influence
      pointsRef.current.position.x = THREE.MathUtils.lerp(
        pointsRef.current.position.x,
        mouse.x * 0.5,
        0.05,
      );
      pointsRef.current.position.y = THREE.MathUtils.lerp(
        pointsRef.current.position.y,
        mouse.y * 0.5,
        0.05,
      );
    }
  });

  return (
    <group>
      <Points ref={pointsRef} positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#39FF14"
          size={0.035}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
}

export function InteractiveBackground() {
  const [mounted, setMounted] = React.useState(false);
  const [webglSupported, setWebglSupported] = React.useState(true);

  React.useEffect(() => {
    setMounted(true);
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const support = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      setWebglSupported(support);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 bg-background -z-20" />;
  }

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden bg-background">
      {/* Glow shapes (CSS mesh gradients) */}
      <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] rounded-full bg-[#39FF14]/10 blur-[130px] dark:bg-[#39FF14]/8 pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-[20%] right-[10%] w-[30rem] h-[30rem] rounded-full bg-[#7CFF6B]/10 blur-[120px] dark:bg-[#7CFF6B]/8 pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.15] dark:opacity-[0.07]"
        style={{ color: 'var(--border)' }}
      />

      {/* Subtle Noise overlay */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025] bg-[radial-gradient(circle_at_1px_1px,var(--foreground)_1px,transparent_0)] bg-[size:16px_16px] pointer-events-none" />

      {/* React Three Fiber Scene */}
      {webglSupported && (
        <div className="absolute inset-0 pointer-events-none opacity-60 dark:opacity-80">
          <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ alpha: true, antialias: true }}>
            <ambientLight intensity={0.5} />
            <ParticleMesh count={500} />
          </Canvas>
        </div>
      )}
    </div>
  );
}
