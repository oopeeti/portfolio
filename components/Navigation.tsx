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
    </div>
  );
}

export default Navigation;
