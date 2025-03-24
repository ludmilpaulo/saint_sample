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
        className="cursor-pointer items-center justify-between flex w-full py-2 border-b-2 text-[var(--text)] border-b-[var(--secondary)] pr-2 hover:border-b-[var(--primary)] transition-all duration-500"
      >
        <p>{title}</p>
        <div className="relative h-[50px] w-[50px]">
          <span
            className={`absolute h-[35px] w-[3px] bg-[var(--text)] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-500 ${
              open ? "rotate-90" : ""
            }`}
          />
          <span className="absolute h-[35px] w-[3px] rotate-90 bg-[var(--text)] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
        </div>
      </div>
      <div
        className={`${
          open ? "" : "h-0"
        } overflow-hidden transition-all duration-500 text-[var(--text)] pr-2`}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapsible;
