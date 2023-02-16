"use client";

import { motion } from "framer-motion";

type Props = {};

function Skills({}: Props) {
  return (
    <div className="h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Skills
        </h3>

        <h3>Hover over a skill for current profieciency</h3>
      </motion.div>
    </div>
  );
}

export default Skills;
