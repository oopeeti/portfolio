"use client";

import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { random } from "maath";
import THREE from "three";

export default function Stars() {
  return (
    <Canvas>
      <GenerateStars />
    </Canvas>
  );
}

function GenerateStars(props: JSX.IntrinsicElements["group"]) {
  const [color, setColor] = useState("#F7AB0A");
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() =>
    Float32Array.from(random.inSphere(new Float32Array(25000), { radius: 6 }))
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, 0]} {...props}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={0.0075}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
