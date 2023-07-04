import React from "react";
import { TagProps } from "../types/types";

export default function Tag({ title, color }: TagProps) {
  return (
    <h2
      className={` bg-[${color}] text-xs title-font text-gray-800 font-bold tracking-wide px-2 py-1 rounded-md`}>
      {title}
    </h2>
  );
}
