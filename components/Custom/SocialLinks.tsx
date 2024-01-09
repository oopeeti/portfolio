"use client";
import { SocialIcon } from "react-social-icons";

const SocialLinks = () => {
  return (
    <div className="flex flex-row m-5 items-center space-x-5 justify-end cursor">
      {/* Social Icons */}
      <SocialIcon
        url="https://www.linkedin.com/in/oopeeti"
        fgColor="white"
        bgColor="transparent"
        className="opacity-75 hover:opacity-100 z-10 w-36 h-36 transition-all duration-200"
      />
      <SocialIcon
        url="https://github.com/oopeeti"
        fgColor="white"
        bgColor="transparent"
        className="opacity-75 hover:opacity-100 z-10 w-36 h-36 transition-all duration-200"
      />
    </div>
  );
}

export default SocialLinks;
