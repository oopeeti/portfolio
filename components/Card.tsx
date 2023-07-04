import React from "react";
import Image from "next/image";
import Tag from "./Tag";
import { TagProps } from "../types/types";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

interface CardProps {
  title: string;
  imageSrc: string;
  description: string;
  projectLink: string;
  tags: TagProps[];
  extra?: TagProps[];
  showReadMore?: boolean;
}

export default function Card({
  title,
  imageSrc,
  description,
  tags,
  projectLink,
  extra,
  showReadMore = true,
}: CardProps) {
  return (
    <div className="flex flex-col h-full  bg-gray-900 shadow-2xl rounded-lg overflow-hidden">
      <div className="w-full h-full">
        <Image src={imageSrc} alt={title} height={600} width={500} layout="responsive" />
        <div className="flex flex-col space-y-1">
          <div className="pt-7 px-7 flex flex-row space-x-2 uppercase">
            {tags?.map((tag, i) => (
              <Tag title={tag.title} color={tag.color} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col p-7 space-y-5">
        <h1 className="title-font text-3xl font-medium text-white">{title}</h1>
        <p className="mb-6 text-white">{description}</p>
        <div className="flex flex-row items-center flex-wrap">
          {showReadMore && (
            <a href={projectLink} target="_blank">
              <button
                type="button"
                className="text-white duration-200 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more (In Finnish)
                <ArrowRightCircleIcon className="h-7 w-7 pl-2" />
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
