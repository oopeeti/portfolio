"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";
import Model from "./ThreeJS/Model";
import { Canvas } from "@react-three/fiber";

type HeroProps = {
  title: string;
};

function Hero({ title }: HeroProps) {
  const [text, count] = useTypewriter({
    words: ["Hi, My Name is Olli-Pekka", "Developer", "Lifelong Learner"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
      <SocialLinks />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex justify-center mx-5 lg:mx-10 xl:mx-20 items-center">
        <div className="relative h-screen w-screen">
          <div className="absolute left-0 top-1/2 translate-y-[-50px] z-0">
            <h2 className="text-md md:text-xl uppercase text-gray-500 tracking-[1px] lg:tracking-[5px]">
              {title}
            </h2>
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-semibold my-5 scroll-px-10">
              <span className="mr-3">{text}</span>
              <Cursor cursorColor="#F7AB0A" />
            </h1>
            <Navigation />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
