"use client";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

function Navigation() {
  return (
    <div className="flex flex-row items-center justify-center text-gray-100 space-x-5 lg:space-x-10 my-2 z-20">
      <a href="#about">
        <button className="heroButton">About</button>
      </a>

      <a href="#experience">
        <button className="heroButton">Experience</button>
      </a>

      <a href="/projects">
        <button className="heroButton">Projects</button>
      </a>

      <a
        aria-disabled
        className="flex flex-row items-center justify-center space-x-2">
        <button className="heroButton flex line-through opacity-50">
          Skills
        </button>
        <WrenchScrewdriverIcon className="w-4 h-4 text-[#F7AB0A]/50 translate-y-0" />
      </a>
    </div>
  );
}

export default Navigation;
