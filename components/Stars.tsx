"use client";

import { useState, useRef } from "react";
import { GroupProps, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { random } from "maath";
import THREE from "three";
import React from "react";

const Stars = ({ ...props }: GroupProps) => {
    const ref = useRef<THREE.Points>(null);
    const [sphere] = useState(() =>
        Float32Array.from(random.inSphere(new Float32Array(2000), { radius: 10 }))
    );


    useFrame((state, delta) => {
        if (!ref.current) return
        ref.current.rotation.x += delta / 30
        ref.current.rotation.y -= delta / 30;
        // @ts-ignore
        ref.current.material.color.setRGB(0, 1, 1)
    });

    return (
        <group rotation={[0, 0, 0]} {...props}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color={"white"}
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export default Stars;
