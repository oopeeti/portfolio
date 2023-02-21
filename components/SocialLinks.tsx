"use client";
import { SocialIcon } from "react-social-icons";

export default function SocialLinks() {
  return (
    <div className="flex py-5 cursor space-x-2 justify-center items-center">
      {/* Social Icons */}
      <SocialIcon
        url="https://www.linkedin.com/in/oopeeti"
        fgColor="white"
        bgColor="transparent"
        className="opacity-75 hover:opacity-100 w-20 h-20 transition-all duration-100"
      />
      <SocialIcon
        url="https://github.com/oopeeti"
        fgColor="white"
        bgColor="transparent"
        className="opacity-75 hover:opacity-100 w-20 h-20 transition-all duration-100"
      />
    </div>
  );
}