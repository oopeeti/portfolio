"use client";
import Link from "next/link";

function Navigation() {
  return (
    <header className="absolute flex flex-row items-center justify-center z-20">
      <div className="flex pt-5 text-white">
        <a href="#about">
          <button className="heroButton">About</button>
        </a>

        <a href="#experience">
          <button className="heroButton">Experience</button>
        </a>

        <a href="#skills">
          <button className="heroButton">Skills</button>
        </a>

        <a href="#projects">
          <button className="heroButton">Projects</button>
        </a>
      </div>
    </header>
  );
}

export default Navigation;
