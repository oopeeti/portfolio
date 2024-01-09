"use client";

import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ContactForm from "./ContactForm";
import Model from "./ThreeJS/Model";
import Title from "./Title";

export default function ContactMe() {
  return (
    <div className="h-screen relative flex flex-col text-center w-full justify-evenly items-center">
      {/* <Suspense fallback={null}>
        <Canvas className="w-full h-full ">
          <PerspectiveCamera position={[0, -1, -0.7]} rotation={[0.2, 0, 0]}>
            <Model modelPath={"models/avatar.glb"} scale={3} />
          </PerspectiveCamera>
        </Canvas>
      </Suspense> */}

      <ContactForm />
    </div>
  )
}
