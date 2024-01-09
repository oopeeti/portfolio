import { JobCard } from "./ExperienceCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

type CarouselProps = {
  showNavigation: boolean
}

export default function ExperienceCarousel({ showNavigation }: CarouselProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <h1 className="z-0 uppercase tracking-[10px] flex items-center justify-center w-full font-semibold text-[#F7AB0A]/75 text-2xl md:text-2xl lg:text-4xl">Experience</h1>
      <Carousel className="max-w-4xl"
        opts={{
          align: "start",
          loop: false,
        }}>
        <CarouselContent className="flexitems-center">
          <CarouselItem>
            <JobCard companyLogo={"zoan_logo.jpg"}
              company={"ZOAN"}
              title={"Software Engineer (Web, Unreal Engine)"}
              workTime={"August 2023 - Present (6 months)"}
              description={"At Zoan, I meld web development with game creation, crafting engaging 3D experiences. My expertise lies in 3D web app development using TypeScript and Three.js, and creating immersive games with Unreal Engine 5. I specialize in integrating high-end 3D content into web browsers through Unreal Engine's Pixel Streaming. My role involves 3D modeling, project management, and pushing the boundaries of digital experiences. My focus is on innovation, aesthetics, and seamless user experiences."}
              badges={["Unreal", "Bleder", "TypeScript", "React", "ThreeJS"]}
              companyLink={"https://zoan.com/"}
            />
          </CarouselItem>

          <CarouselItem >
            <JobCard companyLogo={"probot.png"}
              company={"Probot Oy"}
              title={"Software Engineer, XR Developer"}
              workTime={"April, 2021 - August, 2023"}
              description={"As a Software and XR Developer at Probot Oy, I was involved in a wide array of tasks that span across software development, XR applications, and robotics. My role was a blend of design, development, and mentorship, where I got to apply my skills and passion for technology to create innovative solutions and share my knowledge with others."}
              badges={["Unreal", "Bleder", "TypeScript", "React", "ThreeJS"]}
              companyLink={"https://probot.fi/"}
            />
          </CarouselItem>
        </CarouselContent>
        {showNavigation &&
          <>
            <CarouselPrevious variant={"ghost"} />
            <CarouselNext variant={"ghost"} />
          </>
        }
      </Carousel>
    </div>
  )
}