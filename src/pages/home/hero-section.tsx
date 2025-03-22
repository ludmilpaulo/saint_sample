import React, { useState } from "react";
import { background_video } from "@/utils/data/constants";
import { IconButton } from "@chakra-ui/react";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";

const HeroSection = () => {
  const [mute, setMute] = useState<boolean>(true);
  return (
    <header className="h-auto md:h-[80vh] overflow-hidden flex items-center justify-center relative">
      <video src={background_video} autoPlay loop muted={mute} />
      <div className="absolute top-[10vh] md:top-[5vh] right-[20px] w-[15vh] h-[15vh] p-4 bg-black opacity-70 rounded-full flex items-center justify-center uppercase text-white font-bold text-center text-sm md:text-lg font-quicksand hover:rotate-12 hover:bg-[var(--primary)] transition-all duration-500 cursor-pointer">
        tickets & tables
      </div>
      <IconButton
        className="absolute bottom-2 right-[20px] text-white bg-black opacity-70 hover:bg-[var(--primary)] transition-all duration-500"
        rounded="full"
        onClick={() => setMute(!mute)}
      >
        {mute ? <MdVolumeOff /> : <MdVolumeUp />}
      </IconButton>
    </header>
  );
};

export default HeroSection;
