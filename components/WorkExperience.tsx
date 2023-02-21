"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <ExperienceCard
          companyLogo={"probot.png"}
          role={"Software Engineer"}
          location={"Oulu, Finland"}
          workTime={"01.04.2021 - Current"}
        />
        <ExperienceCard
          companyLogo={"probot.png"}
          role={"Software Engineer"}
          location={"Oulu, Finland"}
          workTime={"01.04.2021 - Current"}
        />
        <ExperienceCard
          companyLogo={"probot.png"}
          role={"Software Engineer"}
          location={"Oulu, Finland"}
          workTime={"01.04.2021 - Current"}
        />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
