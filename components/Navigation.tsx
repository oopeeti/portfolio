"use client";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

function Navigation() {
  return (
    <div className="flex flex-row text-white space-x-4 my-2 z-20">
      <a href="#about">
        <button className="heroButton">About</button>
      </a>

      <a href="#experience">
        <button className="heroButton">Experience</button>
      </a>

      <a href="/projects">
        <button className="heroButton">Projects</button>
      </a>

      <a aria-disabled>
        <div className="flex flex-row items-center justify-center space-x-2">
          <button className="heroButton line-through opacity-50">Skills</button>
          <WrenchScrewdriverIcon className="h-4 w-4 opacity-50 text-[#F7AB0A] " />
        </div>
      </a>
    </div>
  );
}

export default Navigation;
