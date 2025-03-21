"use client";
import React, { useContext } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { IconButton } from "@chakra-ui/react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { ContextStore } from "@/utils/contexts/context-api";
import { ActionType } from "@/types/type.context";

const NavigationBar = () => {
  const menu = ["Events", "Venue", "Corporate", "Hotel", "Reserve", "FAQs"];

  const { state, dispatch } = useContext(ContextStore);
  const { darkMode } = state;

  const toggleDarkMode = () => {
    dispatch({ type: ActionType.toggle_darkMode });
  };
  return (
    <nav className="bg-[var(--background)] sticky top-0 z-50 overflow-hidden">
      <section className="flex items-center justify-between px-4 md:px-12 h-[10vh]">
        <h1 className="text-[var(--text)] font-monoton text-4xl">SAINTS</h1>
        <ul className="hidden md:flex gap-8 ">
          {menu.map((item, index) => (
            <li
              key={index}
              className="text-[var(--text)] cursor-pointer hover:text-[var(--primary)] transition-all duration-500 font-bold uppercase"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-end gap-2">
          <IconButton
            aria-label="Toggle darkmode"
            rounded="full"
            onClick={toggleDarkMode}
            className="hover:text-[var(--primary)] hover:bg-[var(--foreground)] transition-all duration-500"
          >
            {darkMode ? (
              <MdOutlineDarkMode className="text-[var(--text)]" />
            ) : (
              <MdOutlineLightMode className="text-[var(--text)]" />
            )}
          </IconButton>

          <span className="md:hidden text-[var(--text)]">
            <Hamburger size={24} />
          </span>
        </div>
      </section>
    </nav>
  );
};

export default NavigationBar;
