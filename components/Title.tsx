import React from "react";

type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  return (
    <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl my-16">
      {title}
    </h3>
  );
}
