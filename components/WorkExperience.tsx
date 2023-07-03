"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type TechnologyPin = {
  logo: string;
  name?: string;
  level?: number;
};

const typescript: TechnologyPin = {
  logo: "typescript.png",
  name: "TypeScript",
  level: 3,
};

const python: TechnologyPin = {
  logo: "python.png",
  name: "Python",
  level: 3,
};

function WorkExperience() {
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
          role={"Software Engineer, XR Developer"}
          location={"Oulu, Finland"}
          workTime={"01.04.2021 - Current"}
          skills={[
            "Practical experience in Unreal Engine development, particularly in merging XR technologies with robotics",
            "Experience in building future interfaces for robots using XR technologies",
            "Demonstrated proficiency in building interfaces for robots and remote control of robots via XR",
            "Practical experience in building APIs for robots",
            "Strong expertise in backend development",
            "Work experience in computer vision applications, including some experience with neural networks in the context of computer vision applications",
          ]}
          technologies={[typescript, python]}
        />
        <ExperienceCard
          companyLogo={"nsc.png"}
          role={"Door-to-door sales"}
          location={"Oulu, Finland"}
          workTime={"01.04.2021 - Current"}
          skills={[]}
        />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
