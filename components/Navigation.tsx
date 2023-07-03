"use client";
import Link from "next/link";

function Navigation() {
  return (
    <header className="flex flex-row z-20">
      <div className="text-white space-x-10 my-2 z-20">
        <a href="#about">
          <button className="heroButton">About</button>
        </a>

        <a href="#experience">
          <button className="heroButton">Experience</button>
        </a>

        <a href="#skills">
          <button className="heroButton">Skills</button>
        </a>

        <a href="/projects">
          <button className="heroButton">Projects</button>
        </a>
      </div>
    </header>
  );
}

export default Navigation;
