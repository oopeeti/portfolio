"use client";

import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Hero from "../components/Hero";
import ContactMe from "../components/ContactMe";
import Stars from "../components/ThreeJS/Stars";
import { motion } from "framer-motion";
import Model from "../components/ThreeJS/Model";

function HomePage() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute w-screen h-screen">
        <Stars />
      </motion.div>

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/*
        <section id="projects" className="snap-start">
        <Projects />
      </section>
      */}

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <a href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className=" flex items-center justify-center">
            <img
              src="profile.jpeg"
              className="w-10 h-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer transition-all duration-100"
            />
          </motion.div>
        </footer>
      </a>
    </div>
  );
}

export default HomePage;
