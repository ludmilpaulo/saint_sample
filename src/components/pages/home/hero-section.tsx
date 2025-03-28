import React, { useState } from "react";
import { background_video } from "@/utils/data/constants";
// import { IconButton } from "@chakra-ui/react";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";
import IconButton from "@/components/icon-button";

const HeroSection = () => {
  const [mute, setMute] = useState<boolean>(true);
  return (
    <header className="h-[30vh] lg:h-[40vh] xl:h-[80vh] overflow-hidden flex items-center justify-center relative">
      <video src={background_video} autoPlay loop muted={mute} />
      <div className="absolute top-[2vh] md:top-[5vh] right-[5px] md:right-[20px] w-[10vh] h-[10vh]  lg:h-[15vh] lg:w-[15vh] p-4 bg-black opacity-70 rounded-full flex items-center justify-center uppercase text-white font-bold text-center text-xs lg:text-lg font-quicksand hover:rotate-12 hover:bg-[var(--primary)] transition-all duration-500 cursor-pointer">
        tickets & tables
      </div>
      <IconButton
        className="absolute bottom-2 right-[20px] opacity-70 hover:bg-[var(--primary)] transition-all duration-500"
        // rounded="full"
        onClick={() => setMute(!mute)}
      >
        {mute ? <MdVolumeOff /> : <MdVolumeUp />}
      </IconButton>
    </header>
  );
};

export default HeroSection;
