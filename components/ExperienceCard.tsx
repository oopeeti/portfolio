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
    <article className="flex flex-col rounded-lg w-full max-w-3xl items-center scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 space-y-7 flex-1 overflow-y-scroll snap-center bg-[#292929] p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-20 h-20 md:w-28 md:h-28 rounded-full flex-shrink-0 object-cover object-center"
        src={companyLogo}
        alt="probot-logo"
      />

      <div className="flex flex-col justify-center items-left w-full">
        <h4 className="text-lg md:text-2xl pb-2 font-light">{role}</h4>
        <p className="font-bold text-md md:text-xl py-1">{location}</p>
        <p className="uppercase py-2 text-gray-300 text-sm md:text-md">{workTime}</p>
        <div className="flex items-center space-x-5 py-7">
          {technologies?.map((tech, i) => (
            <img className="h-10 w-10 rounded-md" key={i} src={tech.logo} alt="" />
          ))}
          {extra && <h1 className="uppercase text-md md:text-xl">{extra}</h1>}
        </div>

        <ul className="list-disc space-y-5 ml-5 text-sm md:text-md lg:text-xl tracking-widest">
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
