"use client";
import ExperienceCarousel from "./Experience/ExperienceCarousel";
import ProjectsCarousel from "./Projects/ProjectsCarousel";
import Title from "./Title";



function Old() {
  return(
    <div className="flex flex-col relative text-center h-screen w-full px-10 justify-evenly mx-auto items-center">
    <Title title="About me" />
    <img src="pic.jfif" className="mb-10 w-44 h-44 rounded-full object-cover xl:w-[350px] xl:h-[350px]"/>

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
      </div>
    </div>
  </div>
  )
}


function About() {
  return (
    <div className="flex flex-col relative h-screen max-w-[1700px] mx-auto justify-center items-center">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-end border-b-2 p-4 mx-16">
          <p className="text-4xl font-semibold">Olli-Pekka Nikka</p>{" "}
          <img src="pic.jfif" className={`rounded-lg object-cover w-[150px] h-[150px] md:w-[300px] md:h-[300px]`}/>
        </div>
        <div className="flex flex-col space-y-5 text-left mt-5">
        <p className="mx-16 text-sm lg:text-xl flex-wrap">
          Hello there! I'm a passionate problem solver with a deep-seated love
          for technology and its transformative potential. My approach to
          problem-solving is unique; I focus on understanding the problem
          first and then identify the most suitable technology to address it.
          This approach has allowed me to gain a broad knowledge base across
          various fields, including XR, 3D-modeling, Unreal Engine, Robotics,
          and Software Engineering.
        </p>
      </div>
    </div>
  </div>
  );
}

export default About;
