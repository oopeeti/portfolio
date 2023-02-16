"use client";

import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        src="profile-2.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover xl:w-[400px] xl:h-[400px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          <p className="mb-5">
            Hello and welcome! My name is Olli-Pekka Nikka, and I am a self-taught
            software engineer from Finland who is passionate about constantly
            learning new things and problem-solving.
          </p>

          <p className="mb-5">
            My journey into software engineering began with a curiosity for
            technology and a desire to create something unique. I taught myself
            the ins and outs of programming, and since then, I have been
            continually expanding my skills and knowledge.
          </p>

          <p className="mb-5">
            What I love most about software engineering is the endless potential
            for learning and growth. Every project presents new challenges that
            allow me to push the boundaries of what I know and explore new
            solutions to problems. I thrive on the process of problem-solving
            and pride myself on my ability to come up with innovative solutions.
          </p>

          <p className="mb-5">
            One area that I am particularly drawn to is XR technology. I believe
            it has the power to revolutionize the way we interact with the world
            around us, and I am always eager to explore new ways of
            incorporating it into my work.
          </p>

          <p className="mb-5">
            On my portfolio site, you can see some of the projects I have worked
            on that showcase my passion for learning and problem-solving. I am
            skilled in full stack development, with expertise in building
            complex systems and ensuring their smooth operation.
          </p>

          <p className="mb-5">
            Thank you for taking the time to get to know me a little better. If
            you are looking for a dedicated, curious, and skilled software
            engineer who is always eager to learn and solve problems, I would be
            thrilled to discuss how I can contribute to your next project.
          </p>
        </p>
      </div>
    </motion.div>
  );
}

export default About;
