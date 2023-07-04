import { motion } from "framer-motion";

type Props = {
  companyLogo: string;
  role: string;
  location: string;
  workTime: string;
  skills: string[];
  technologies?: TechnologyPin[];
  extra?: string;
};

type TechnologyPin = {
  logo: string;
  name?: string;
  level?: number;
};

function ExperienceCard({
  role,
  companyLogo,
  location,
  workTime,
  skills,
  technologies,
  extra,
}: Props) {
  return (
    <article className="flex flex-col rounded-lg w-full max-w-4xl items-center space-y-7 flex-1 bg-[#292929] p-10 cursor-pointer transition-opacity duration-200 ">
      <div className="w-full flex flex-row justify-center items-center space-x-10">
        <div className="w-full h-full flex flex-col">
          <h4 className="text-xl md:text-2xl pb-2 font-light">{role}</h4>
          <p className="font-bold text-md md:text-xl py-1">{location}</p>
          <p className="uppercase py-2 text-gray-300 text-sm md:text-md">
            {workTime}
          </p>
        </div>
        <img
          className="w-20 h-20 md:w-28 md:h-28 rounded-full flex-shrink-0 object-cover object-center shadow-sm"
          src={companyLogo}
          alt="logo"
        />
      </div>

      <div className="flex flex-col text-left w-full">
        <div className="flex items-center space-x-5 pb-5">
          {technologies?.map((tech, i) => (
            <img
              className="h-7 w-7 rounded-md"
              key={i}
              src={tech.logo}
              alt=""
            />
          ))}
          {extra && <h1 className="uppercase text-md md:text-xl">{extra}</h1>}
        </div>

        <ul className="list-disc prose lg:prose-xl text-gray-100 font-semibold space-y-5 pl-5 text-sm md:text-md lg:text-lg tracking-widest">
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
