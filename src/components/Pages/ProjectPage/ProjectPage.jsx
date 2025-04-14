// src/components/ProjectPage.js
import React from "react";
import { useParams } from "react-router-dom";
import projects from '../../../Data/projects'

const ProjectPage = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return <div>Project not found.</div>;
    }

    return (
        <div className="project-page">
            <h1>{project.title}</h1>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            <div className="project-details">
                <h2>Project Details</h2>
                <p><strong>Location:</strong> {project.location}</p>
                <p><strong>Year:</strong> {project.year}</p>
                <p><strong>Size:</strong> {project.details.size}</p>
                <p><strong>Budget:</strong> {project.details.budget}</p>
                <p><strong>Client:</strong> {project.details.client}</p>
                <p><strong>Testimonial:</strong> {project.details.testimonial}</p>
            </div>
            <a href="/projects" className="btn">
                Back to Projects
            </a>
        </div>
    );
};

export default ProjectPage;