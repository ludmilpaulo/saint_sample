"use client";
import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
  title: string;
}
const Collapsible = ({ children, title }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="h-[60px] cursor-pointer justify-between flex w-full border-b-2 text-[var(--text)] border-b-[var(--secondary)] pr-2 hover:border-b-[var(--primary)] transition-all duration-500"
      >
        <article className="uppercase font-bold text-xs md:text-md lg:text-lg py-0">
          {title}
        </article>
        <div className="relative h-[25px] w-[25px] my-auto">
          <span
            className={`absolute h-[18px] md:h-[25px] w-[3px] bg-[var(--text)] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-500 ${
              open ? "rotate-90" : ""
            }`}
          />
          <span className="absolute h-[18px] md:h-[25px] w-[3px] rotate-90 bg-[var(--text)] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
        </div>
      </div>
      <div
        className={`${
          open ? "max-h-[1000px]" : "max-h-0"
        } overflow-hidden transition-all duration-500 text-[var(--text)] pr-2`}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapsible;
