"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import Overlay from "./Overlay";
import * as Typography from "../Typography/Typography";

type HeroProps = {
  title: string;
};

const Hero = ({ title }: HeroProps) => {
  const [text, count] = useTypewriter({
    words: ["Hi, My Name is Olli-Pekka", "Developer", "Lifelong Learner"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="flex justify-center items-center w-screen h-screen select-none">
        <div className="flex flex-col items-center gap-7 justify-center">
          <Typography.H4>{title}</Typography.H4>
          <Typography.H1>
            <span className="mr-1">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </Typography.H1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.75, duration: 1.5 }}
            className="flex flex-col justify-center mx-5 lg:mx-10 xl:mx-20 items-center">
            <Navigation />
          </motion.div>
        </div>
        <Overlay />
      </motion.div>
    </>
  );
}

export default Hero;
