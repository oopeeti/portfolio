import React from "react";

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return (
    <h1 className="uppercase tracking-[7px] flex items-center justify-center font-semibold text-[#F7AB0A]/100 text-2xl md:text-2xl lg:text-4xl">
      {title}
    </h1>
  );
}

export default Title;