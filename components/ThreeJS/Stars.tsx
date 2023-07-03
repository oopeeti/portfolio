"use client";

import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { random } from "maath";
import Model from "./Model";
import THREE from "three";

export default function Stars() {
  return (
    <Canvas>
      <GenerateStars />
    </Canvas>
  );
}

function GenerateStars(props: JSX.IntrinsicElements["group"]) {
  const [color, setColor] = useState("#ffa0e0");
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() =>
    Float32Array.from(random.inSphere(new Float32Array(10000), { radius: 5 }))
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
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
