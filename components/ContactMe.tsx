"use client";

import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./ThreeJS/Model";
import Title from "./Title";

function ContactMe() {
  return (
    <div className="h-screen relative flex flex-col text-center w-full justify-evenly items-center">
      <Title title="Contact" />
      <Suspense fallback={null}>
        <Canvas className="w-full h-full ">
          <PerspectiveCamera position={[0, -1, -0.7]} rotation={[0.2, 0, 0]}>
            <Model modelPath={"models/avatar.glb"} scale={4.1} />
          </PerspectiveCamera>
        </Canvas>
      </Suspense>

      <div className="flex flex-col space-y-16 max-w-7xl p-10 ">
        <h4 className="text-xl md:text-2xl font-semibold text-center text-gray-100">
          <span className="text-[#F7AB0A] ">Thank you </span>
          for taking the time to get to know me a little better. If you are
          looking for a dedicated, curious, and skilled software engineer who is
          always eager to learn and solve problems, I would be thrilled to
          discuss how I can contribute to your next project.
        </h4>
      </div>
      <div className="space-y-5 text-lg shadow-lg bg-[rgb(34,34,34)] text-gray-100 p-5 my-10 rounded-xl  flex-col items-left justify-center items-center">
        <div className="flex items-left space-x-5 justify-left">
          <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p>+358404115202</p>
        </div>

        <div className="flex items-left space-x-5 justify-left">
          <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p>ollipekkanikka@gmail.com</p>
        </div>

        <div className="flex items-left space-x-5 justify-left">
          <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p>Oulu, Finland</p>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
