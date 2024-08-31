// Filter.js

import React from "react";

function Filter({ search, onSearchChange, onCategoryChange }) {
  return (
    <div className="Filter">
      {/* Use the search prop to control the value of the input */}
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search} // Controlled input: value comes from the search prop
        onChange={(e) => onSearchChange(e.target.value)} // Update search state on change
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
