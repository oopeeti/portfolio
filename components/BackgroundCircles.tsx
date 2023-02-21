"use client";

import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.9, 1.0],
      }}
      transition={{
        duration: 2,
      }}
      className="flex justify-center items-center">
      <div className="rounded-full border border-[#F7AB0A] opacity-20 h-[200px] w-[200px] absolute mt-52 animate-pulse" />
      <div className="rounded-full border border-[#333333] h-[400px] w-[400px] absolute mt-52 animate-pulse" />
      <div className="rounded-full border border-[#F7AB0A] opacity-20 h-[500px] w-[500px] absolute mt-52 animate-pulse" />
    </motion.div>
  );
}

export default BackgroundCircles;
