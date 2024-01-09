"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./Experience/ExperienceCard";
import Title from "./Title";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { JobCard } from "./Experience/ExperienceCard";
import ExperienceCarousel from "./Experience/ExperienceCarousel";

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
    <div
      className="flex flex-col w-full justify-center items-center h-screen">
      <Title title="Experience" />
      <ExperienceCarousel />
    </div>
  );
}




export default WorkExperience;
