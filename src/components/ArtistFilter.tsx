import React from 'react';

const ArtistFilter = () => {
  return (
    <div className="flex items-center">
      <label htmlFor="artist" className="mr-2">Artist:</label>
      <select id="artist" className="border p-2 rounded">
        <option value="all">All Artists</option>
        {/* Add artist options dynamically later */}
      </select>
    </div>
  );
};

export default ArtistFilter;