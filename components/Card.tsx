import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  imageSrc: string;
  description: string;
  projectLink: string;
}

const Card: React.FC<CardProps> = ({
  title,
  imageSrc,
  description,
  projectLink,
}) => {
  return (
    <div className="p-4 md:w-1/2 md" style={{ maxWidth: "540px" }}>
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Image
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={imageSrc}
          alt={title}
          height={36}
          width={36}
          layout="responsive"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
            {title}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-3">{description}</p>
          <div className="flex items-center flex-wrap ">
            <a href={projectLink}>
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
