import React from 'react';

const DateFilter = () => {
  return (
    <div className="flex items-center">
      <label htmlFor="date" className="mr-2">Date:</label>
      <input type="date" id="date" className="border p-2 rounded" />
    </div>
  );
};

export default DateFilter;