"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import * as Typography from "../Typography/Typography";
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid'

const Hero = () => {
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
                className="flex justify-center items-center select-none">
                <div className="flex flex-col items-center gap-3 justify-center scale-100 text-white w-full rounded-lg">
                    <Typography.Italic>Software Engineer, XR Developer</Typography.Italic>
                    <Typography.H1 className="text-2xl lg:text-4xl">
                        <span className="mr-1">{text}</span>
                        <Cursor cursorColor="#F7AB0A" />
                    </Typography.H1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.75, duration: 1.5 }}
                        className="flex flex-col justify-center mx-5 lg:mx-10 xl:mx-20 items-center">
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
}

export default Hero;
