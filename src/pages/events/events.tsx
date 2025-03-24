"use client";
import React from 'react';
import EventList from '@/components/EventList';
import DateFilter from '@/components/DateFilter';
import ArtistFilter from '@/components/ArtistFilter';
import VenueFilter from '@/components/VenueFilter';
import Calendar from '@/components/Calendar';

const EventsPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>

      {/* Filter Components */}
      <div className="flex gap-4 mb-4">
        <DateFilter />
        <ArtistFilter />
        <VenueFilter />
      </div>

      {/* Calendar Component */}
      <Calendar />

      {/* Event List */}
      <EventList />
    </div>
  );
};

export default EventsPage;