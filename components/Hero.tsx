"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";
import Model from "./ThreeJS/Model";
import Floor from "./ThreeJS/Floor";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, My Name is Olli-Pekka", "Developer", "Lifelong Learner"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen w-screen">
      <div className="absolute mx-20 left-0 top-1/2 z-0">
        <h2 className="text-md uppercase text-gray-500 tracking-[10px]">
          Software Engineer
        </h2>
        <h1 className="text-4xl lg:text-6xl font-semibold my-5 scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <Navigation />
      </div>
      <div className="absolute top-1/4 h-screen w-screen">
        <Model modelPath={"/models/avatar.glb"} />
      </div>
    </motion.div>
  );
}

export default Hero;
