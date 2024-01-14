"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import ProjectCard from "./ProjectCard";
import { CustomBadge } from "@/types";
import * as Typography from "../Typography/Typography"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import CarouselSelector from "./CarouselSelector";


const MimicBadges: CustomBadge[] = [
  { title: "UE5", color: "#333333" },
  { title: "Teleoperation", color: "#000000" },
  { title: "XR", color: "#000000" },
  { title: "Blender", color: "#000000" },
];

const EdisonBadges: CustomBadge[] = [
  { title: "UE5", color: "#000000" },
  { title: "POC", color: "#000000" },
  { title: "XR", color: "#000000" },
  { title: "Blender", color: "#000000" },
];

const MagosUEIntegrationBadges: CustomBadge[] = [
  { title: "UE5", color: "#000000" },
  { title: "XR", color: "#000000" },
  { title: "Tools", color: "#000000" },
];

const WebInterfaceBadges: CustomBadge[] = [
  { title: "Fullstack", color: "#000000" },
  { title: "APIs", color: "#000000" },
  { title: "React", color: "#32a5cb" },
  { title: "Next.js", color: "#32a5cb" },
  { title: "SQLite", color: "#33333" },
];

const LuxuryMetaverseBadges: CustomBadge[] = [
  { title: "UE5", color: "#000000" },
  { title: "APIs", color: "#000000" },
  { title: "React", color: "#32a5cb" },
  { title: "Next.js", color: "#32a5cb" },
  { title: "NFTs", color: "#33333" },
];

const ComparisonToolBadges: CustomBadge[] = [
  { title: "ThreeJS", color: "#000000" },
  { title: "WebGL", color: "#000000" },
  { title: "React", color: "#32a5cb" },
  { title: "Next.js", color: "#32a5cb" },
  { title: "Blender", color: "#000000" },
];


const ProjectsCarousel = () => {
  const [api, setApi] = useState<any>()

  return (
    <div className="flex flex-col items-center justify-start gap-5 h-full">
      <Typography.H1 className="py-2 px-4 self-center lg:self-end  text-white border-l-0 lg:border-r-2 border-b-2">Projects</Typography.H1>
      <CarouselSelector amount={6} className="gap-3 flex flex-row" api={api} />
      <Carousel className="max-w-2xl"
        opts={{
          align: "start",
          loop: false,
        }}
        setApi={setApi}
      >
        <CarouselPrevious variant={"outline"} className="text-black bg-white hover:text-white hover:bg-black border-0 " />
        <CarouselNext variant={"outline"} className="text-black bg-white hover:text-white hover:bg-black border-0" />
        <CarouselContent>
          <CarouselItem className="flex items-start justify-center">
            <ProjectCard
              title={"MIMIC"}
              imageSrc={"/images/projects/mimic.png"}
              description={"Project explored the control and visualization of robots through virtual reality using Unreal Engine 5. The project was carried out in collaboration with the Greek company MAGOS, which develops haptic gloves, and the Biomimetics and Intelligent Systems Group (BISG) at the University of Oulu. The role of the project team was to develop an operating system for remote control of a robot through virtual reality. The robot performs tasks in factory environments that are typically dangerous for humans."}
              badges={MimicBadges}
              projectLink={"https://probot.fi/mimic-robotin-etaohjausta-virtuaalitodellisuuden-avulla"}
            />
          </CarouselItem>

          <CarouselItem className="flex items-start justify-center">
            <ProjectCard
              title={"Product Comparison Tool for a Leading Fashion Brand"}
              imageSrc={"/images/projects/project-fashion.png"}
              description={"Developed a cutting-edge 3D Web product comparison tool for a renowned fashion brand, revolutionizing internal tooling. This project involved a fusion of full-stack web development and 3D modeling, leveraging technologies like Three.js, React-three-fiber and Next.js. The system allowed users to interact with high-quality 3D models of the brand's latest collection, featuring dynamic product selection and video-textured materials for enhanced realism."}
              badges={ComparisonToolBadges}
            />
          </CarouselItem>

          <CarouselItem className="flex items-start justify-center">
            <ProjectCard
              title={"Web Interface for Mobile Robot Navigation and Interaction"}
              imageSrc={"/images/projects/web-interface-1.png"}
              description={"This project entailed creating a secure web interface for a mobile robot, enhancing its functionality and user interaction. Key features include an editable map for customized navigation and integration with the Oulubot Chatbot for conversational interaction. The system uses a MySQL database with Prisma for data management and communicates with an external computer for SLAMWARE-based navigation. A critical component is the robust authentication system, ensuring secure access and protection against unauthorized use. This work highlights the synergy between web technologies and robotics in improving navigation, interaction, and security."}
              badges={WebInterfaceBadges} />
          </CarouselItem>

          <CarouselItem className="flex items-start justify-center">
            <ProjectCard
              title={"Luxury Jewelry Brand Metaverse Experience"}
              imageSrc={"/images/projects/project-luxury.png"}
              description={"In this innovative project for a luxury European jewelry brand, I played a crucial role in creating an immersive metaverse experience using Unreal Engine 5. The project featured an internal competition with an NFT award and was accessible via Pixel Streaming technology for easy web integration. My responsibilities included developing the game logic and seamlessly integrating Unreal Engine 5 with the web interface, focusing on both technical efficiency and engaging gameplay. This project highlighted my skills in advanced game development and my ability to combine luxury branding with cutting-edge technology to produce a captivating virtual environment."}
              badges={LuxuryMetaverseBadges} />
          </CarouselItem>

          <CarouselItem className="flex items-start justify-center">
            <ProjectCard title={"MAGOS Plugin for Unreal Engine"}
              imageSrc={"/images/projects/ue-integration.png"}
              description={"This project involved the development of a unique plugin for Unreal Engine 5, designed to integrate with MAGOS haptic gloves. These gloves are a state-of-the-art Human Computer Interaction (HCI) device used in Extended Reality (XR) applications. The plugin enables users to experience tactile feedback in the virtual environment, enhancing the immersive experience and providing a more realistic interaction with virtual objects. This project showcases the potential of combining cutting-edge game engine technology with advanced haptic devices, opening up new possibilities in fields such as healthcare, engineering, education, telerobotics, and gaming."}
              badges={MagosUEIntegrationBadges}
            />
          </CarouselItem>

          <CarouselItem className="flex items-start justify-center">
            <ProjectCard
              title={"EDISON"}
              imageSrc={"/images/projects/edison.png"}
              description={"The EDISON project, a 6-month WeldGalaxy Open Innovation Pilot, was completed in collaboration with the Greek company Magos. The project aimed to develop new programming methods for welding paths using the MAGOS platform. The team created a virtual reality (VR) environment, programmed an interface between VR and physical robots, and enabled the use of Magos's haptic gloves in the VR environment. These gloves provide tactile feedback to the user in the VR environment, allowing for tasks such as selecting a welding piece, marking the welding path, and initiating welding."}
              badges={EdisonBadges}
              projectLink={"https://probot.fi/hitsaamista-etana-virtuaalitodellisuuden-ja-haptisten-hanskojen-avulla"}
            />
          </CarouselItem>


        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default ProjectsCarousel;
