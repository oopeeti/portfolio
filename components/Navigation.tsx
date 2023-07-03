"use client";

function Navigation() {
  return (
    <header className="flex flex-row z-20">
      <div className="text-white  space-x-4 my-2 z-20">
        <a href="#about">
          <button className="heroButton">About</button>
        </a>

        <a href="#experience">
          <button className="heroButton">Experience</button>
        </a>

        <a href="#skills">
          <button className="heroButton">Skills</button>
        </a>

        <a aria-disabled>
          <button className="heroButton line-through">Projects</button>
        </a>
      </div>
    </header>
  );
}

export default Navigation;
