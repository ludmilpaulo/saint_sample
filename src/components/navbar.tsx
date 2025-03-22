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
    <nav className="bg-[var(--background)]">
      <section className="flex items-center justify-between px-12  h-[10vh]">
        <h1 className="text-[var(--text)] font-monoton text-4xl">SAINTS</h1>
        <ul className="flex gap-2">
          {menu.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <IconButton
          aria-label="Toggle darkmode"
          rounded="full"
          onClick={toggleDarkMode}
        >
          {darkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
        </IconButton>
      </section>
      <span className="md:hidden">
        <Hamburger />
      </span>
    </nav>
  );
};

export default NavigationBar;
