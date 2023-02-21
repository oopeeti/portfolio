"use client";

import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { random } from "maath";

export default function Stars() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <GenerateStars />
    </Canvas>
  );
}

function GenerateStars(props: JSX.IntrinsicElements["group"]) {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() =>
    Float32Array.from(random.inSphere(new Float32Array(5000), { radius: 1.5 }))
  );
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
    }
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]} {...props}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.0015}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
