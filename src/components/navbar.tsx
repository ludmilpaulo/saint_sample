"use client";
import React, { useContext, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
// import { IconButton } from "@chakra-ui/react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { ContextStore } from "@/utils/contexts/context-api";
import { ActionType } from "@/types/type.context";
import IconButton from "./icon-button";

const NavigationBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const menu = ["Events", "Venue", "Corporate", "Hotel", "Reserve", "FAQs"];

  const { state, dispatch } = useContext(ContextStore);
  const { darkMode } = state;

  const toggleDarkMode = () => {
    dispatch({ type: ActionType.toggle_darkMode });
  };
  return (
    <nav className="bg-[var(--background)] sticky top-0 z-10 w-full border-b-4 border-b-[var(--secondary)]">
      <section className="flex items-center justify-between px-4 md:px-12 h-[10vh]">
        <h1 className="text-[var(--text)] font-monoton text-2xl md:text-4xl">
          SAINTS
        </h1>
        <ul className="hidden lg:flex gap-8 ">
          {menu.map((item, index) => (
            <li
              key={index}
              className="relative group text-[var(--text)] cursor-pointer transition-all duration-500 font-bold uppercase w-fit"
            >
              <p>{item}</p>

              <span className="absolute bottom-0 w-0 h-[2px] bg-[var(--secondary)] group-hover:w-full transition-all duration-500" />
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-end gap-2">
          <IconButton
            aria-label="Toggle darkmode"
            // rounded="full"
            onClick={toggleDarkMode}
            className="hover:text-[var(--primary)] hover:bg-[var(--foreground)] transition-all duration-500 w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
          >
            {darkMode ? (
              <MdOutlineDarkMode className="text-[var(--text)]" />
            ) : (
              <MdOutlineLightMode className="text-[var(--text)]" />
            )}
          </IconButton>

          <span className="lg:hidden text-[var(--text)] z-50">
            <Hamburger size={24} onToggle={setOpen} />
          </span>
        </div>
      </section>
      {open && (
        <div className="h-[100vh] w-[100%] bg-[var(--background)] absolute top-0 z-20 flex flex-col items-center justify-center">
          <ul className="flex flex-col items-center gap-4">
            {menu.map((item, index) => (
              <li
                key={index}
                className="relative group text-[var(--text)] cursor-pointer transition-all duration-500 font-bold uppercase w-fit text-lg sm:text-2xl"
              >
                <p>{item}</p>

                <span className="absolute bottom-0 w-0 h-[2px] bg-[var(--secondary)] group-hover:w-full transition-all duration-500" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
