"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import Title from "./Title";

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
      className="flex flex-col relative h-screen text-center px-0 justify-evenly mx-auto items-center">
      <Title title="Work Experience" />

      <div className="w-full flex flex-col space-y-5 overflow-x-scroll items-center justify-center text-left p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <ExperienceCard
          companyLogo={"probot.png"}
          role={"Software Engineer, XR Developer"}
          location={"Oulu, Finland"}
          workTime={"April, 2021 - Current"}
          skills={[
            "Design and implementation of XR applications using Unreal Engine 4 & 5",
            "Full-stack application development, including design, architecture, and coding",
            "Building RESTful APIs and designing and implementing server-client architectures",
            "Creating visually stunning experiences for customers using Unreal Engine",
            "3D modeling with Blender, including optimizing CAD models for game engines and rigging",
            "Development of teleoperated systems for robotics using XR technologies",
            "R&D work in EU-projects related to XR technologies",
            "Internal development of software developer ecosystem and DevOps, including version control and best practices",
          ]}
          technologies={[typescript, python]}
          extra={"Unreal | Blender | Git"}
        />
        <ExperienceCard
          companyLogo={"nsc.png"}
          role={"Direct Sales Representatives"}
          location={"Oulu, Finland"}
          workTime={"March, 2019 - November, 2019"}
          skills={[
            "Running door-to-door sales concept with small group",
            "Face-to-face sales",
            "Customer service",
          ]}
        />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
