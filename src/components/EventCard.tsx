import React, { useState } from "react";
import { days } from "@/utils/data/constants";
import Image from "next/image";

interface Props {
  image: string;
  date: string;
  title: string;
  ticketLink: string;
}

const EventCard = ({ image, title, date, ticketLink }: Props) => {
  const dateObj = new Date(date);
  const day = days[dateObj.getDay()];
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const month = months[dateObj.getMonth()];
  const date_ = dateObj.getDate();
  const [imageLoaded, setImageLoaded] = useState(false);

  // Check if dateObj is a valid date
  const isValidDate = !isNaN(dateObj.getTime());

  return (
    <div className="flex flex-col overflow-hidden h-[60vh] w-[450px] mx-4 relative cursor-pointer group">
      <a href={ticketLink} aria-label={`${title} tickets`}>
        <div className="h-[50vh] overflow-hidden">
          {image ? ( // Check if image has a value
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              className={`group-hover:scale-110 transition-all duration-500 ${
                imageLoaded ? "" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded(true)}
            />
          ) : (
            <div className="w-full h-full bg-gray-200"> {/* Placeholder div */} </div>
          )}
        </div>
        <div className="h-[10vh] w-full flex items-center gap-4 py-4 text-[var(--text)] uppercase font-bold">
          <span className="flex flex-col justify-center">
            <p className="text-xs">{day}</p>
            <p className="text-xs">{month}</p>
            {isValidDate ? (<p className="text-2xl">{date_}</p>) : (<p className="text-2xl">Invalid Date</p>)}
          </span>
          <span className="w-[2px] h-full bg-[var(--text)]" />
          <p>{title}</p>
        </div>
        <span className="absolute bottom-0 w-full h-[2px] bg-[var(--secondary)] group-hover:w-0 transition-all duration-500 float-right" />
      </a>
    </div>
  );
};

export default EventCard;