// src/components/ProjectFilter.js
import React, { useState } from "react";
import "./Project.css"

const ProjectFilter = ({ onFilter }) => {
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("All");
  const [year, setYear] = useState("All");

  const handleFilter = () => {
    onFilter({ category, location, year });
  };

  return (
    <div className="project-filter">
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All Categories</option>
        <option value="Residential">Residential</option>
        <option value="Commercial">Commercial</option>
        <option value="Renovation">Renovation</option>
        <option value="Landscaping">Landscaping</option>
      </select>
      <select value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="All">All Locations</option>
        <option value="New York">New York</option>
        <option value="Los Angeles">Los Angeles</option>
      </select>
      <select value={year} onChange={(e) => setYear(e.target.value)}>
        <option value="All">All Years</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
      </select>
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default ProjectFilter;