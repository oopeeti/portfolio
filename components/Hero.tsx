"use client";

import Link from "next/link";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, My Name's Olli-Pekka", "Developer", "Lifelong Learner"],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center">
        <BackgroundCircles />
        <img className="relative rounded-full h-32 w-32 mx-auto object-cover" src="profile.jpeg" alt="hero"/>

        <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">Software Engineer</h2>
            <h1 className="text-4xl lg:text-5xl font-semibold scroll-px-10">
                <span className="mr-3">{text}</span>
                <Cursor cursorColor="#F7AB0A"/>
            </h1>

            <div className="pt-5">
                <Link href="#about">
                    <button className="heroButton">About</button>
                </Link>
                
                <Link href="#experience">
                    <button className="heroButton">Experience</button>
                </Link>

                <Link href="#skills">
                    <button className="heroButton">Skills</button>
                </Link>

                <Link href="#projects">
                    <button className="heroButton">Projects</button>
                </Link>
            </div>

        </div>
    </div>
  );
}

export default Hero;
