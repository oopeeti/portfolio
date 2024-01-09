"use client";
import Title from "../Custom/Title";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { ProjectCard } from "./ProjectCard";
import { CustomBadge } from "@/types";

const MimicBadges: CustomBadge[] = [
  { title: "Unreal Engine", color: "#333333" },
  { title: "Teleoperation", color: "#000000" },
  { title: "XR", color: "#000000" },
];

const EdisonBadges: CustomBadge[] = [
  { title: "Unreal Engine", color: "#000000" },
  { title: "POC", color: "#000000" },
  { title: "XR", color: "#000000" },
];

const MagosUEIntegrationBadges: CustomBadge[] = [
  { title: "Unreal Engine", color: "#000000" },
  { title: "XR", color: "#000000" },
  { title: "Tools", color: "#000000" },
];

const WebInterfaceBadges: CustomBadge[] = [
  { title: "Full-stack", color: "#000000" },
  { title: "Client-Server", color: "#000000" },
  { title: "API", color: "#000000" },
  { title: "React", color: "#32a5cb" },
  { title: "Next.js", color: "#32a5cb" },
  { title: "Prisma", color: "#32a5cb" },
  { title: "SQLite", color: "#33333" },
];

type CarouselProps = {
  showNavigation: boolean
}

export default function ProjectsCarousel({ showNavigation }: CarouselProps) {
  return (
    <div className="flex flex-col items-center justify-center h-[600px] space-y-5">
      <h1 className="z-0 uppercase tracking-[10px] flex items-center justify-center w-full font-semibold text-[#F7AB0A]/75 text-2xl md:text-2xl lg:text-4xl">Projects</h1>
      <Carousel className="w-full max-w-5xl">
        <CarouselContent>
          <CarouselItem className="flex items-center justify-center">
            <ProjectCard
              title={"MIMIC"}
              imageSrc={"/projektit/mimic.png"}
              description={"Project explored the control and visualization of robots through virtual reality using Unreal Engine 5. The project was carried out in collaboration with the Greek company MAGOS, which develops haptic gloves, and the Biomimetics and Intelligent Systems Group (BISG) at the University of Oulu. The role of the project team was to develop an operating system for remote control of a robot through virtual reality. The robot performs tasks in factory environments that are typically dangerous for humans."}
              badges={MimicBadges}
              showReadMore={true}
              projectLink={"https://probot.fi/mimic-robotin-etaohjausta-virtuaalitodellisuuden-avulla"} />
          </CarouselItem>

          <CarouselItem className="flex items-center justify-center">
            <ProjectCard
              title={"EDISON"}
              imageSrc={"/projektit/edison.png"}
              description={"The EDISON project, a 6-month WeldGalaxy Open Innovation Pilot, was completed in collaboration with the Greek company Magos. The project aimed to develop new programming methods for welding paths using the MAGOS platform. The team created a virtual reality (VR) environment, programmed an interface between VR and physical robots, and enabled the use of Magos's haptic gloves in the VR environment. These gloves provide tactile feedback to the user in the VR environment, allowing for tasks such as selecting a welding piece, marking the welding path, and initiating welding."}
              badges={EdisonBadges}
              showReadMore={true}
              projectLink={"https://probot.fi/hitsaamista-etana-virtuaalitodellisuuden-ja-haptisten-hanskojen-avulla"}
            />
          </CarouselItem>

          <CarouselItem className="flex items-center justify-center">
            <ProjectCard title={"MAGOS Plugin for Unreal Engine"}
              imageSrc={"/projektit/ue-integration.png"}
              description={"This project involved the development of a unique plugin for Unreal Engine 5, designed to integrate with MAGOS haptic gloves. These gloves are a state-of-the-art Human Computer Interaction (HCI) device used in Extended Reality (XR) applications. The plugin enables users to experience tactile feedback in the virtual environment, enhancing the immersive experience and providing a more realistic interaction with virtual objects. This project showcases the potential of combining cutting-edge game engine technology with advanced haptic devices, opening up new possibilities in fields such as healthcare, engineering, education, telerobotics, and gaming."}
              badges={MagosUEIntegrationBadges}
              showReadMore={false}
              projectLink={"https://probot.fi/mimic-robotin-etaohjausta-virtuaalitodellisuuden-avulla"} />
          </CarouselItem>

          <CarouselItem className="flex items-center justify-center">
            <ProjectCard
              title={"Web Interface for Mobile Robot Navigation and Interaction"}
              imageSrc={"/projektit/web-interface-1.png"}
              description={"This project involved the development of a secure web interface for a mobile robot, incorporating several advanced features to enhance the robot's functionality and user interaction. The interface includes an editable map with Points of Interest (POIs), allowing users to customize the robot's navigation environment. The interface is integrated with the Oulubot Chatbot, providing a conversational interface for user-robot interaction. A MySQL database with Prisma was implemented to manage and store data effectively. The web interface communicates with an external computer running the robot's SLAMWARE, ensuring seamless navigation and operation. Importantly, the interface includes an authentication system, ensuring secure access to the robot's settings and safeguarding against unauthorized access. This project demonstrates the potential of integrating web technologies with robotics for enhanced navigation, user interaction, and security."}
              badges={WebInterfaceBadges}
              showReadMore={false}
              projectLink={"https://probot.fi/mimic-robotin-etaohjausta-virtuaalitodellisuuden-avulla"} />
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
  );
}
