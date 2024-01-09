"use client";

function About() {
  return (
    <div className="flex flex-col relative h-screen max-w-[1700px] mx-auto justify-center items-center">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-end border-b-2 p-4 mx-16">
          <p className="text-4xl font-semibold">Olli-Pekka Nikka</p>{" "}
          <img src="pic.jfif" className={`rounded-lg object-cover w-[150px] h-[150px] md:w-[300px] md:h-[300px]`} />
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
