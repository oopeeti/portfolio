import React from "react";
import { TagProps } from "../types/types";

export default function Tag({ title, color }: TagProps) {
  return (
    <h2
      className={`tracking-wide md:tracking-widest bg-[${color}] text-xs title-font font-medium text-white px-2 py-1 rounded-md`}
    >
      {title}
    </h2>
  );
}
