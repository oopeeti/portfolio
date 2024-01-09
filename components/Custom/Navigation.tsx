"use client";
import { Button } from "@/components/ui/button"

const Navigation = () => {
  return (
    <div className="flex flex-row items-center justify-center text-gray-100 space-x-5 lg:space-x-10 my-2 z-20">
      <a href="#about">
        <Button variant={"outline"} className="bg-transparent uppercase">About</Button>
      </a>

      <a href="#experience">
        <Button variant={"outline"} className="bg-transparent uppercase">Experience</Button>
      </a>

      <a href="#projects">
        <Button variant={"outline"} className="bg-transparent uppercase">Projects</Button>
      </a>
    </div>
  );
}

export default Navigation;
