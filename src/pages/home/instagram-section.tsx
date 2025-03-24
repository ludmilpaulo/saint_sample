import React from "react";
import { FaInstagram } from "react-icons/fa";

const InstagramSection = () => {
  return (
    <div className="flex flex-col items-center gap-4 my-10">
      <h1 className="flex gap-2 text-[var(--text)] items-center font-semibold text-3xl uppercase">
        <FaInstagram />
        Follow us on instagram
      </h1>
    </div>
  );
};

export default InstagramSection;
