/* eslint-disable @next/next/no-img-element */
import React from "react";
import { days } from "@/utils/data/constants";

interface Props {
  image: string;
  date: string;
  title: string;
}
const EventCard = ({ image, title, date }: Props) => {
  const dateObj = new Date(date);
  const day = days[dateObj.getDay()];
  const month = dateObj.toLocaleString("default", { month: "short" });
  const date_ = dateObj.getDate();
  return (
    <div className="flex flex-col overflow-hidden h-[60vh] w-[450px] mx-4 relative cursor-pointer group">
      <div className="h-[50vh] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-auto group-hover:scale-110 transition-all duration-500"
        />
      </div>
      <div className="h-[10vh] w-full flex items-center gap-4 py-4 text-[var(--text)] uppercase font-bold">
        <span className="flex flex-col justify-center">
          <p className="text-xs">{day}</p>
          <p className="text-xs">{month}</p>
          <p className="text-2xl">{date_}</p>
        </span>
        <span className="w-[2px] h-full bg-[var(--text)]" />
        <p>{title}</p>
      </div>
      <span className="absolute bottom-0 w-full h-[2px] bg-[var(--secondary)] group-hover:w-0 transition-all duration-500 float-right" />
    </div>
  );
};

export default EventCard;
