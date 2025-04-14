// src/components/ProjectPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../Data/projects';
import './ProjectPage.css';

const ProjectPage1 = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) {
        return <div className="project-not-found">Project not found</div>;
    }

    return (
        <div className="project-page-container">
            {/* Header Section */}
            <div className="project-header">
                <div className="breadcrumb">
                    <a href="/projects">Projects</a> &gt; {project.category} &gt; {project.title}
                </div>
                <h1>{project.title}</h1>
                <div className="project-meta">
                    <span className="location">{project.location}</span>
                    <span className="year">{project.year}</span>
                    <span className={`status ${project.status}`}>
                        {project.status === 'ongoing' ? `In Progress (${project.progress}%)` : 'Completed'}
                    </span>
                </div>
            </div>

            {/* Main Content */}
            <div className="project-content">
                {/* Image Gallery */}
                <div className="project-gallery">
                    <div className="main-image-container">
                        <img src={project.images[0]} alt={project.title} className="main-image" />
                    </div>
                    <div className="thumbnail-grid">
                        {project.images.slice(1).map((image, index) => (
                            <img key={index} src={image} alt={`${project.title} ${index + 1}`} className="thumbnail" />
                        ))}
                    </div>
                </div>

                {/* Project Details */}
                <div className="project-details">
                    <section className="overview-section">
                        <h2>Project Overview</h2>
                        <p>{project.description}</p>
                    </section>

                    <div className="details-grid">
                        {/* Key Specifications */}
                        <section className="specs-section">
                            <h3>Specifications</h3>
                            <ul>
                                <li><strong>Category:</strong> {project.category}</li>
                                <li><strong>Size:</strong> {project.details.size}</li>
                                <li><strong>Budget:</strong> {project.details.budget}</li>
                                {project.details.timeline && <li><strong>Timeline:</strong> {project.details.timeline}</li>}
                                {project.details.architect && <li><strong>Architect:</strong> {project.details.architect}</li>}
                                {project.details.client && <li><strong>Client:</strong> {project.details.client}</li>}
                            </ul>
                        </section>

                        {/* Features */}
                        {project.details.features && (
                            <section className="features-section">
                                <h3>Key Features</h3>
                                <ul className="features-list">
                                    {project.details.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </div>

                    {/* Challenges & Solutions */}
                    {(project.details.challenges || project.details.solutions) && (
                        <section className="challenges-section">
                            <h3>Project Highlights</h3>
                            {project.details.challenges && (
                                <div className="highlight-box">
                                    <h4>Challenges</h4>
                                    <p>{project.details.challenges}</p>
                                </div>
                            )}
                            {project.details.solutions && (
                                <div className="highlight-box">
                                    <h4>Our Solutions</h4>
                                    <p>{project.details.solutions}</p>
                                </div>
                            )}
                        </section>
                    )}

                    {/* Testimonial */}
                    {project.details.testimonial && (
                        <section className="testimonial-section">
                            <h3>Client Feedback</h3>
                            <blockquote>
                                <p>"{project.details.testimonial}"</p>
                                {project.details.client && (
                                    <footer>- {project.details.client}</footer>
                                )}
                            </blockquote>
                        </section>
                    )}
                </div>
            </div>


            <a href="/projects" className="btn">
                Back to Projects
            </a>

            {/* Call to Action */}
            <div className="project-cta">
                <h3>Ready to Start Your Project?</h3>
                <div className="cta-buttons">
                    <button className="primary-cta">Get a Free Quote</button>
                    <a href="/contact" className="secondary-cta">Contact Our Team</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage1;