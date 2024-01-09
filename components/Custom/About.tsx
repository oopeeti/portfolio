"use client";

import Image from "next/image";
import ExperienceCard from "../Experience/ExperienceCard";
import ExperienceCarousel from "../Experience/ExperienceCarousel";
import ProjectsCarousel from "../Projects/ProjectsCarousel";
import * as Typography from "../Typography/Typography";

const About = () => {
  return (
    <div className="flex flex-row w-screen h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10">
        <Typography.H1>About Me</Typography.H1>
        <div className="flex flex-col gap-5 max-w-sm lg:max-w-lg bg-black/20 p-10 rounded-md shadow-xl">
          <div className="items-end border-b-4">
            <div className="flex flex-col justify-center items-center mb-5 gap-10">
              <Image src="/pic.jfif" alt={""} height={0} width={0} layout={"responsive"} className="rounded-md shadow-xl" />
              <div className="flex items-center justify-center">
                <Typography.H1>Olli-Pekka Nikka</Typography.H1>
              </div>
            </div>
          </div>
          <div className="flex items-center justify justify-center">
            <Typography.P>
              Hello there! I'm a passionate problem solver with a deep-seated love
              for technology and its transformative potential. My approach to
              problem-solving is unique; I focus on understanding the problem
              first and then identify the most suitable technology to address it.
              This approach has allowed me to gain a broad knowledge base across
              various fields, including XR, 3D-modeling, Unreal Engine, Robotics,
              and Software Engineering.
            </Typography.P>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
