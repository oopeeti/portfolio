"use client";

import React, { Suspense } from "react";
import Title from "../../components/Title";
import Card from "../../components/Card";
import HomeButton from "../../components/HomeButton";
import { TagProps } from "../../types/types";
import { motion } from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function ProjectPage() {
  const MimicTags: TagProps[] = [
    { title: "Unreal Engine", color: "#F7AB0A" },
    { title: "Teleoperation", color: "#F7AB0A" },
    { title: "XR", color: "#F7AB0A" },
    // Add more tags as needed
  ];

  const EdisonTags: TagProps[] = [
    { title: "Unreal Engine", color: "#F7AB0A" },
    { title: "POC", color: "#F7AB0A" },
    { title: "XR", color: "#F7AB0A" },
    // Add more tags as needed
  ];

  const MagosUEIntegrationTags: TagProps[] = [
    { title: "Unreal Engine", color: "#F7AB0A" },
    { title: "XR", color: "#F7AB0A" },
    { title: "Tools", color: "#F7AB0A" },
    // Add more tags as needed
  ];

  const WebInterfaceTags: TagProps[] = [
    { title: "Full-stack", color: "#F7AB0A" },
    { title: "Client-Server", color: "#F7AB0A" },
    { title: "API", color: "#F7AB0A" },
    // Add more tags as needed
  ];

  const WebInterfaceExtra: TagProps[] = [
    { title: "React", color: "#32a5cb" },
    { title: "Next.js", color: "#32a5cb" },
    { title: "Prisma", color: "#32a5cb" },
    { title: "SQLite", color: "#33333" },
    // Add more tags as needed
  ];

  return (
    <Suspense fallback={null}>
      <div className="flex w-full h-full flex-col items-center justify-center">
        <HomeButton />
        <Title title={"Projects"} />
        <div className="flex flex-row flex-wrap justify-center items-center space-y-16 p-5 max-w-4xl">
          <Card
            title="MIMIC"
            tags={MimicTags}
            imageSrc="/projektit/mimic.png"
            description="Project explored the control and visualization of robots through virtual reality using Unreal Engine 5. The project was carried out in collaboration with the Greek company MAGOS, which develops haptic gloves, and the Biomimetics and Intelligent Systems Group (BISG) at the University of Oulu. The role of the project team was to develop an operating system for remote control of a robot through virtual reality. The robot performs tasks in factory environments that are typically dangerous for humans."
            projectLink="https://probot.fi/mimic-robotin-etaohjausta-virtuaalitodellisuuden-avulla"
          />
          <Card
            title="EDISON"
            tags={EdisonTags}
            imageSrc="/projektit/edison.png"
            description="The EDISON project, a 6-month WeldGalaxy Open Innovation Pilot, was completed in collaboration with the Greek company Magos. The project aimed to develop new programming methods for welding paths using the MAGOS platform. The team created a virtual reality (VR) environment, programmed an interface between VR and physical robots, and enabled the use of Magos's haptic gloves in the VR environment. These gloves provide tactile feedback to the user in the VR environment, allowing for tasks such as selecting a welding piece, marking the welding path, and initiating welding."
            projectLink="https://probot.fi/hitsaamista-etana-virtuaalitodellisuuden-ja-haptisten-hanskojen-avulla"
          />
          <Card
            title="MAGOS Plugin for Unreal Engine"
            tags={MagosUEIntegrationTags}
            imageSrc="/projektit/ue-integration.png"
            description="This project involved the development of a unique plugin for Unreal Engine 5, designed to integrate with MAGOS haptic gloves. These gloves are a state-of-the-art Human Computer Interaction (HCI) device used in Extended Reality (XR) applications. The plugin enables users to experience tactile feedback in the virtual environment, enhancing the immersive experience and providing a more realistic interaction with virtual objects. This project showcases the potential of combining cutting-edge game engine technology with advanced haptic devices, opening up new possibilities in fields such as healthcare, engineering, education, telerobotics, and gaming."
            projectLink=""
            showReadMore={false}
          />

          <Card
            title="Web Interface for Mobile Robot Navigation and Interaction"
            tags={WebInterfaceTags}
            extra={WebInterfaceExtra}
            imageSrc="/projektit/web-interface-1.png"
            description="This project involved the development of a secure web interface for a mobile robot, incorporating several advanced features to enhance the robot's functionality and user interaction. The interface includes an editable map with Points of Interest (POIs), allowing users to customize the robot's navigation environment. The interface is integrated with the Oulubot Chatbot, providing a conversational interface for user-robot interaction. A MySQL database with Prisma was implemented to manage and store data effectively. The web interface communicates with an external computer running the robot's SLAMWARE, ensuring seamless navigation and operation. Importantly, the interface includes an authentication system, ensuring secure access to the robot's settings and safeguarding against unauthorized access. This project demonstrates the potential of integrating web technologies with robotics for enhanced navigation, user interaction, and security."
            projectLink=""
            showReadMore={false}
          />
        </div>
      </div>
    </Suspense>
  );
}
