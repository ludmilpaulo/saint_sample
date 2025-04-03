import React from "react";
import IconButton from "./icon-button";
import { footerLinks } from "@/utils/data/constants";
import { SiInstagram } from "react-icons/si";
import { LiaFacebookF } from "react-icons/lia";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  const socials = [
    {
      link: "",
      icon: <SiInstagram />,
    },
    {
      link: "",
      icon: <LiaFacebookF />,
    },
    {
      link: "",
      icon: <RiTwitterXFill />,
    },
  ];

  const bottomLinks = [
    {
      link: "",
      text: "privacy",
    },
    {
      link: "",
      text: "terms",
    },
    {
      link: "",
      text: "accessibility",
    },
  ];
  return (
    <footer className="flex flex-col min-h-[30vh] justify-between overflow-hidden border-t-4 border-[var(--secondary)] mt-6">
      <div className="pt-10 flex flex-col lg:flex-row lg:flex-wrap gap-4 lg:gap-24 justify-between px-12">
        <div className="flex gap-4 flex-col items-center lg:items-start">
          <h1 className="font-monoton text-4xl text-[var(--text)]">saints</h1>
          <span className="flex gap-4 items-start justify-center">
            {socials.map((social, index) => (
              <IconButton key={index}>{social.icon}</IconButton>
            ))}
          </span>
        </div>
        {footerLinks.map((links, index) => (
          <div key={index} className="text-[var(--text)]">
            <h1 className="uppercase font-semibold mb-4">{links.heading}</h1>
            <div className="flex flex-col gap-2">
              {links.links.map((link, index) => (
                <p key={index} className="uppercase text-sm">
                  {link.title}
                </p>
              ))}
            </div>
          </div>
        ))}
        <div className="text-[var(--text)]">
          <h1 className="uppercase font-semibold mb-4">subscribe</h1>
          <div className="flex flex-col gap-2">
            {/* {links.links.map((link, index) => (
              <p key={index} className="uppercase text-sm">
                {link.title}
              </p>
            ))} */}
            <p>
              Stay ahead of the nightlife curve – subscribe now for exclusive
              bottle service updates.
            </p>
            <button className="w-fit border-2 border-[var-(--primary)] text-[var(--text)] px-12 my-4 py-2 text-lg font-semibold font-poppins uppercase flex items-center justify-center hover:border-[var(--foreground)] hover:bg-[var(--primary)] hover:text-[var(--background)] transition-all duration-500">
              subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start py-8 px-12 justify-between">
        <p className="text-[var(--text)] text-xs">
          © 2025 Saints Nightclub - All Rights Reserved.
        </p>
        <ul className="flex gap-4">
          {bottomLinks.map((link, index) => (
            <li
              key={index}
              className="relative group text-[var(--text)] cursor-pointer transition-all duration-500 text-xs  uppercase w-fit"
            >
              <p>{link.text}</p>
              <span className="absolute bottom-0 w-0 h-[2px] bg-[var(--secondary)] group-hover:w-full transition-all duration-500" />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
