// src/components/ProjectCard.js
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`} className="btn">
                View Details
            </Link>
        </div>
    );
};

export default ProjectCard;