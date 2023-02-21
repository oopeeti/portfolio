"use client";

import * as THREE from "three";
import {
  Canvas,
  useFrame,
  ThreeElements,
  useLoader,
  useThree,
} from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";

type ModelProps = ThreeElements["mesh"] & {
  path: string;
};

function Model({ path, ...props }: ModelProps) {
  const gltf = useLoader(GLTFLoader, path); // replace with your own model path
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.0; // rotate around the X axis
      mesh.current.rotation.y += 0.0025; // rotate around the Y axis
      mesh.current.rotation.z += 0.0; // rotate around the Z axis
    }
  });
  return (
    <mesh {...props} ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

function CameraControls() {
  const { camera } = useThree();
  camera.position.set(0, 0.5, 2); // set the camera position here
  return null;
}

type ThreeSceneProps = {
  modelPath: string;
};

export default function ThreeScene({ modelPath }: ThreeSceneProps) {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 50]} />
      <Model path={modelPath} />
      <CameraControls />
    </Canvas>
  );
}
