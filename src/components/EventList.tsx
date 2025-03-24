import React from "react";
import EventCard from "./EventCard";
import { events } from "@/utils/data/constants";

const EventList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {events.map((event) => (
        <EventCard
          key={event.id}
          image={event.image}
          date={event.date}
          title={event.title}
          ticketLink={`/tickets/${event.id}`}
        />
      ))}
    </div>
  );
};

export default EventList;