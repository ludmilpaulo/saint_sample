import React from "react";
import { background_video } from "@/utils/data/constants";

const HeroSection = () => {
  return (
    <header className="h-[80vh] overflow-hidden flex items-center justify-center">
      <video src={background_video} autoPlay loop muted />
      <div className="absolute top-[15vh] right-[20px] w-[15vh] h-[15vh] p-4 bg-black opacity-70 rounded-full flex items-center justify-center uppercase text-white font-bold text-center text-lg font-quicksand hover:rotate-12 hover:bg-[var(--primary)] transition-all duration-500 cursor-pointer">
        tickets & tables
      </div>
    </header>
  );
};

export default HeroSection;
