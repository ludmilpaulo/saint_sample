/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {
  image: string;
  date: string;
  title: string;
}
const EventCard = ({ image, title }: Props) => {
  return (
    <div className="flex flex-col">
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default EventCard;
