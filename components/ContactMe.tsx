"use client";

import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Model from "./ThreeJS/Model";
import Title from "./Title";

function ContactMe() {
  return (
    <div className="h-screen relative flex flex-col text-center w-full justify-evenly items-center">
      <Title title="Contact" />
      <Suspense fallback={null}>
        <Canvas>
          <PerspectiveCamera position={[0, -1, -0.7]} rotation={[0.2, 0, 0]}>
            <Model modelPath={"models/avatar.glb"} scale={4.1} />
          </PerspectiveCamera>
        </Canvas>
      </Suspense>

      <div className="flex flex-col space-y-16 max-w-7xl p-10">
        <h4 className="text-xl md:text-4xl font-semibold text-center">
          <span className="text-[#F7AB0A]">Thank you </span>
          for taking the time to get to know me a little better. If you are
          looking for a dedicated, curious, and skilled software engineer who is
          always eager to learn and solve problems, I would be thrilled to
          discuss how I can contribute to your next project.
        </h4>

        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+358404115202</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">ollipekkanikka@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Oulu, Finland</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
