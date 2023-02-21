"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";
import Gen3 from "./ThreeJS/Model";
import Model from "./ThreeJS/Model";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, My Name is Olli-Pekka", "Developer", "Lifelong Learner"],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen w-screen flex flex-col space-y-8 justify-between items-start p-10">
      <div className="absolute left-0 top-1/2 px-10 z-20">
        <h2 className="text-md uppercase text-gray-500 pb-2 tracking-[10px]">
          Software Engineer
        </h2>
        <h1 className="text-4xl lg:text-7xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <Navigation />
      </div>
      <div className="absolute top-1/4 right-96 w-96 h-3/4">
        <Model modelPath={"/models/avatar.glb"} />
      </div>
    </motion.div>
  );
}

export default Hero;
