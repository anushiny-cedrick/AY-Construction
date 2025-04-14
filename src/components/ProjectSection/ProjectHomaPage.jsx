// src/components/ProjectHomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ProjectHomePage.css";
import image1 from "../../assets/bg-house.jpg";
import image2 from "../../assets/bg-1.jpg"

// Sample project data (replace with your actual data)
const projects = [
    {
        id: 1,
        title: "Modern Family Home",
        image: image1,
        description: "A 3-bedroom contemporary home with a modern design.",
    },
    {
        id: 2,
        title: "Office Building",
        image: image2,
        description: "A state-of-the-art office space for a tech company.",
    },
    {
        id: 3,
        title: "Landscaping Project",
        image: image1,
        description: "Beautiful outdoor spaces designed for relaxation.",
    },
];

const ProjectHomePage = () => {
    return (
        <div className="project-homepage">
            <h3>Our Projects</h3>
            <div className="project-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} />
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
            <Link to="/projects" className="view-all-btn">
                View All Projects
            </Link>
        </div>
    );
};

export default ProjectHomePage;