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
import { useLayoutEffect, useRef, useState } from "react";

type ModelProps = ThreeElements["mesh"] & {
  path: string;
};

function Model({ path, ...props }: ModelProps) {
  const gltf = useLoader(GLTFLoader, path); // replace with your own model path
  const mesh = useRef<THREE.Mesh>(null);
  const [mixer, setMixer] = useState<THREE.AnimationMixer | null>(null);
  const clock = useRef<THREE.Clock>(new THREE.Clock());

  useFrame((state, delta) => {
    if (mixer) mixer.update(delta);
  });

  const { scene, animations } = gltf;

  useLayoutEffect(() => {
    if (mesh.current && animations.length > 0) {
      const mixer = new THREE.AnimationMixer(mesh.current);
      const animation = animations[1];

      console.log(animations);

      const action = mixer.clipAction(animation);
      action.play();

      setMixer(mixer);
    }
  }, [animations, mesh]);

  return (
    <mesh {...props} ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

function CameraControls() {
  const { camera } = useThree();
  camera.position.set(0, 0.6, 2);
  camera.rotation.set(-0.4, 0, 0);
  camera.near = 0.1; // set the near clipping plane to 0.1
  camera.far = 1000; // set the far clipping plane to 1000
  camera.updateProjectionMatrix(); // set the camera position here// update the camera's projection matrix
  return null;
}

type ThreeSceneProps = {
  modelPath: string;
};

export default function ThreeScene({ modelPath }: ThreeSceneProps) {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[4, 10, 1]} />
      <Model path={modelPath} />
      <CameraControls />
    </Canvas>
  );
}
