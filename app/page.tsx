"use client";

import About from "../components/About";
import Hero from "../components/Hero";
import Stars from "../components/ThreeJS/Stars";
import { motion } from "framer-motion";
import { Suspense } from "react";
import ContactMe from "@/components/ContactMe";
import Work from "@/components/Work";

function HomePage() {
  return (
    <div className="flex flex-col bg-[rgb(36,36,36)] text-white h-screen snap-y overflow-y-scroll scroll-smooth overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Suspense fallback={null}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute w-screen h-screen">
          <Stars />
        </motion.div>
      </Suspense>

      <section id="hero" className="snap-start">
        <Hero title="Software Engineer, UE Developer" />
      </section>

      <section id="about" className="snap-start h-screen">
        <About />
      </section>

      <section id="experience" className="snap-center my-10 h-screen">
        <Work />
      </section>

      <section id="contact" className="snap-start h-screen">
        <ContactMe />
      </section>
    </div>
  );
}

export default HomePage;
