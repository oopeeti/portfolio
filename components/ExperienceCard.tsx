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
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={companyLogo}
        alt="probot-logo"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{role}</h4>
        <p className="font-bold text-2xl py-1">{location}</p>
        <p className="uppercase py-4 text-gray-300">{workTime}</p>
        <div className="flex items-center space-x-5 py-10">
          {technologies?.map((tech) => (
            <img className="h-10 w-10 rounded-md" src={tech.logo} alt="" />
          ))}
          {extra && <h1 className="uppercase text-2xl">{extra}</h1>}
        </div>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          {skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
