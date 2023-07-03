"use client";
import { SocialIcon } from "react-social-icons";

export default function SocialLinks() {
  return (
    <div className="flex flex-col cursor space-y-2">
      {/* Social Icons */}
      <SocialIcon
        url="https://www.linkedin.com/in/oopeeti"
        fgColor="white"
        bgColor="transparent"
        style={{ height: 100, width: 100 }}
        className="opacity-75 hover:opacity-100 w-36 h-36 transition-all duration-200"
      />
      <SocialIcon
        url="https://github.com/oopeeti"
        fgColor="white"
        bgColor="transparent"
        style={{ height: 100, width: 100 }}
        className="opacity-75 hover:opacity-100 transition-all duration-200"
      />
    </div>
  );
}
