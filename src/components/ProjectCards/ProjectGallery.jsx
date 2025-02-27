// src/components/ProjectGallery.js
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import projects from "../data/projects";

const ProjectGallery = () => {
    const [filteredProjects, setFilteredProjects] = useState(projects);

    const handleFilter = ({ category, location, year }) => {
        const filtered = projects.filter((project) => {
            return (
                (category === "All" || project.category === category) &&
                (location === "All" || project.location === location) &&
                (year === "All" || project.year.toString() === year)
            );
        });
        setFilteredProjects(filtered);
    };

    return (
        <div className="project-gallery">
            <h1>Our Projects</h1>
            <ProjectFilter onFilter={handleFilter} />
            <div className="project-grid">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectGallery;