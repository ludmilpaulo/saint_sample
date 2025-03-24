import React from 'react';

const VenueFilter = () => {
  return (
    <div className="flex items-center">
      <label htmlFor="venue" className="mr-2">Venue:</label>
      <select id="venue" className="border p-2 rounded">
        <option value="all">All Venues</option>
        {/* Add venue options dynamically later */}
      </select>
    </div>
  );
};

export default VenueFilter;