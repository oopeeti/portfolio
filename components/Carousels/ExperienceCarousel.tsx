import JobCard from "./ExperienceCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import * as Typography from "../Typography/Typography"

type CarouselProps = {
  showNavigation: boolean
}

const ExperienceCarousel = ({ showNavigation }: CarouselProps) => {
  return (
    <div className="flex flex-col items-center gap-2 h-full justify-center">
      <Typography.H1 className=" py-2 px-4 self-center lg:self-start text-white border-l-0 lg:border-l-2 border-b-2">Experience</Typography.H1>
      <Carousel className="max-w-3xl"
        opts={{
          align: "start",
          loop: false,
        }}>
        <CarouselPrevious variant={"outline"} className="text-black bg-white hover:text-white hover:bg-black border-0" />
        <CarouselNext variant={"outline"} className="text-black bg-white hover:text-white hover:bg-black border-0" />
        <CarouselContent>
          <CarouselItem className="flex items-start justify-center">
            <JobCard companyLogo={"/images/companies/zoan.jpg"}
              company={"ZOAN"}
              title={"Software Engineer (Web, Unreal Engine)"}
              workTime={"August 2023 - Present"}
              description={"At Zoan, I meld web development with game creation, crafting engaging 3D experiences. My expertise lies in 3D web app development using TypeScript and Three.js, and creating immersive games with Unreal Engine 5. I specialize in integrating high-end 3D content into web browsers through Unreal Engine's Pixel Streaming. My role involves 3D modeling, project management, and pushing the boundaries of digital experiences. My focus is on innovation, aesthetics, and seamless user experiences."}
              badges={["Unreal", "Blender", "TypeScript", "React", "ThreeJS"]}
              companyLink={"https://zoan.com/"}
            />
          </CarouselItem>

          <CarouselItem className="flex items-start justify-center">
            <JobCard companyLogo={"/images/companies/probot.png"}
              company={"Probot Oy"}
              title={"Software Engineer, XR Developer"}
              workTime={"April, 2021 - August, 2023 (2,5 years)"}
              description={"As a Software and XR Developer at Probot Oy, I was involved in a wide array of tasks that span across software development, XR applications, and robotics. My role was a blend of design, development, and mentorship, where I got to apply my skills and passion for technology to create innovative solutions and share my knowledge with others."}
              badges={["Unreal", "Blender", "TypeScript", "React", "ThreeJS"]}
              companyLink={"https://probot.fi/"}
              showGuide={false}
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

    </div>
  )
}

export default ExperienceCarousel;