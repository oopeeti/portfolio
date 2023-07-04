import React from "react";

type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  return (
    <h1 className="z-0 uppercase tracking-[10px] flex items-center justify-center w-full font-semibold text-[#F7AB0A]/75 py-16 text-2xl md:text-2xl lg:text-4xl">
      {title}
    </h1>
  );
}
