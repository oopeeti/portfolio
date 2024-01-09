"use client";
import { SocialIcon } from "react-social-icons";
import { HomeIcon } from "@radix-ui/react-icons";
import * as Typography from "../Typography/Typography"

const SocialLinks = () => {
  return (
    <div className="flex top-10 right-10 flex-row items-center justify-center gap-5 cursor-pointer">
      {/* Social Icons */}
      <SocialIcon
        url="https://www.linkedin.com/in/oopeeti"
        fgColor="white"
        bgColor="transparent"
        className="hover:opacity-75 z-10 transition-all duration-200"
      />
      <SocialIcon
        url="https://github.com/oopeeti"
        fgColor="white"
        bgColor="transparent"
        className="hover:opacity-75 z-10 transition-all duration-200"
      />
    </div>
  );
}

const Name = () => {
  return (
    <div className="cursor opacity-75 hover:opacity-100 transition-all duration-200 text-white">
      <Typography.H3>Olli-Pekka Nikka</Typography.H3>
    </div>
  );
}

const Home = () => {
  return (
    <div className=" flex top-10 left-10 flex-row items-center justify-center gap-5 cursor-pointer">
      <a href="#hero">
        <HomeIcon width={30} height={30} />
      </a>
    </div>
  );
}

const Overlay = () => {
  return (
    <div className="absolute top-0 w-full max-w-7xl py-5 select-none px-5">
      <div className="flex flex-row items-center justify-between">
        <Name />
        <SocialLinks />
      </div>
    </div>


  )
}

export default Overlay;
