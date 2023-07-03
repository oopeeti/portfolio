import React from "react";

type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  return (
    <h3 className=" uppercase tracking-[10px] font-semibold text-[#F7AB0A]/75 my-20 text-xl lg:text-4xl">
      {title}
    </h3>
  );
}
