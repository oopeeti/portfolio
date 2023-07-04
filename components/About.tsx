"use client";

import { motion } from "framer-motion";
import Title from "./Title";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center w-full px-10 justify-evenly mx-auto items-center">
      <Title title="About me" />

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        src="profile.jpeg"
        className="mb-10 w-44 h-44 rounded-full object-cover xl:w-[350px] xl:h-[350px]"
      />

      <div className="flex flex-col items-center space-y-16 px-0 md:px-10 ">
        <h1 className="text-4xl font-semibold">
          <p className="">Olli-Pekka Nikka</p>{" "}
        </h1>
        <div className="prose lg:prose-xl font-semibold tracking-wide text-gray-200 text-left space-y-10 ">
          <p className="mb-5">
            Hello there! I'm a passionate problem solver with a deep-seated love
            for technology and its transformative potential. My approach to
            problem-solving is unique; I focus on understanding the problem
            first and then identify the most suitable technology to address it.
            This approach has allowed me to gain a broad knowledge base across
            various fields, including XR, 3D-modeling, Unreal Engine, Robotics,
            and Software Engineering.
          </p>

          <p className="mb-5">
            In the rapidly evolving digital landscape, I've developed a keen
            interest in XR, Web3 and the metaverse. I'm fascinated by the
            potential of these technologies to redefine our online experiences,
            democratize the digital space, and create new forms of interaction
            and engagement. I am always eager to explore new ways of
            incorporating these technologies into my work.
          </p>

          <p className="mb-5">
            I'm particularly drawn to the potential of combining the real world
            with the virtual world. I'm eager to learn and develop ways to bring
            real-world objects into virtual environments, create virtual worlds
            from real places, and layer virtual experiences on top of the real
            world. This interest drives me to push the boundaries of what's
            possible and create immersive experiences that blur the line between
            reality and virtuality.
          </p>

          <p className="mb-5">
            In addition to my passion for learning, I also love to teach. I find
            immense satisfaction in simplifying complex concepts and sharing my
            knowledge with others. This process of learning, simplifying, and
            teaching has been a cornerstone of my professional journey.
          </p>

          <p className="mb-5">
            With my passion for emerging technologies like Web3, the metaverse,
            and XR, I am excited about the future and the endless possibilities
            it holds.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
