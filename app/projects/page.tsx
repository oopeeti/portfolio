import React from "react";
import Title from "../../components/Title";
import Card from "../../components/Card";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="flex w-full h-full flex-col items-center justify-center">
      <Title title={"Projects"} />
      <div className="flex flex-wrap -m-4">
        <Card
          title="Project 1"
          imageSrc="/probot.png"
          description="This is a short description of Project 1."
          projectLink="/projects/project-1"
        />
      </div>
    </div>
  );
}
