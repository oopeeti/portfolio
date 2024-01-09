"use client";

import * as THREE from "three";
import { useFrame, ThreeElements, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLayoutEffect, useRef, useState } from "react";

type ModelProps = ThreeElements["mesh"] & {
  path: string;
};

const Model = ({ path, ...props }: ModelProps) => {
  const gltf = useLoader(GLTFLoader, path); // replace with your own model path
  const mesh = useRef<THREE.Mesh>(null);
  const [mixer, setMixer] = useState<THREE.AnimationMixer | null>(null);

  useFrame((state, delta) => {
    if (mixer) mixer.update(delta);
  });

  const { scene, animations } = gltf;

  useLayoutEffect(() => {
    if (mesh.current && animations.length > 0) {
      const mixer = new THREE.AnimationMixer(mesh.current);
      const animation = animations[1];

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

const CameraControls = () => {
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
  scale: number;
};

const ThreeScene = ({ modelPath, scale }: ThreeSceneProps) => {
  return (
    <>
      <ambientLight />
      <pointLight position={[4, 10, 1]} />
      <Model path={modelPath} scale={new THREE.Vector3(scale, scale, scale)} />
    </>
  );
}

export default ThreeScene
