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
      className="flex flex-col w-full text-center items-center">
      <Title title="Experience" />

      <div className="w-full h-full z-0 flex flex-col space-y-5 items-center justify-center text-left px-3">
      <ExperienceCard
          companyLogo={"zoan_logo.jpg"}
          company={"ZOAN"}
          title={"XR Developer"}
          workTime={"August, 2023 - Current"}
          skills={[
            "Design and implementation of XR applications using Unreal Engine 4 & 5",
            "Pixel Streaming",
            "AR Development using Unity"
          ]}
          technologies={[typescript, python]}
          extra={"Unreal | Blender | Git"}
        />

        <ExperienceCard
          companyLogo={"probot.png"}
          company={"Probot Oy"}
          title={"Software Engineer, XR Developer"}
          workTime={"April, 2021 - August, 2023"}
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
          company={"Nordic Sales Crew"}
          title={"Direct Sales Representative"}
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
