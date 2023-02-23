"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";
import Model from "./ThreeJS/Model";

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
            className="flex items-center mx-5">
            <div className="relative h-screen w-screen">
                <div className="absolute bottom-10 left-10 z-0">
                    <h2 className="text-lg uppercase text-gray-500 mb-3 tracking-[10px]">
                        Software Engineer
                    </h2>
                    <h1 className="text-4xl lg:text-7xl font-semibold mb-3 scroll-px-10">
                        <span className="mr-3">{text}</span>
                        <Cursor cursorColor="#F7AB0A" />
                    </h1>
                    <Navigation />
                </div>
            
                {/* 
      <div className="absolute top-1/4 h-screen w-screen">
        <Model modelPath={"/models/avatar.glb"} />
      </div>
      */}
            </div>
            <SocialLinks />
        </motion.div>
    );
}

export default Hero;
