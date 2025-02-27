// src/components/AboutUs.jsx
import React from "react";
// import teamImage from "../assets/team.jpg";
import CEOImage from "../../assets/CEOImage.png";
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <section className="about-us">
            <div className="about-content">
                <h2>About AY Construction</h2>
                <p>
                    At AY Construction, we are dedicated to building dreams and crafting
                    excellence. With over a decade of experience in the construction
                    industry, we have earned a reputation for delivering high-quality
                    projects on time and within budget.
                </p>
                <p>
                    Our team of skilled professionals is passionate about turning your
                    vision into reality. Whether it's a residential home, a commercial
                    space, or a large-scale industrial project, we bring expertise,
                    innovation, and commitment to every job.
                </p>
                <h3>Our Mission</h3>
                <p>
                    Our mission is to provide exceptional construction services that exceed
                    client expectations. We strive to create spaces that inspire, endure,
                    and stand the test of time.
                </p>
                <h3>Our Values</h3>
                <ul>
                    <li> <span >Quality </span>: We never compromise on quality.</li>
                    <li> <span>Integrity</span>: We build trust through honesty and transparency.</li>
                    <li> <span>Innovation </span>: We embrace new technologies and methods.</li>
                    <li> <span>Sustainability </span>: We are committed to eco-friendly practices.</li>
                </ul>
            </div>
            <div className="team-section">
                <h3>TEAM</h3>
                <div className="about-image">
                    <div >
                        <img src={CEOImage} alt="CEO" />
                        <p>THE CEO OF AY CONTRUCTION</p>
                    </div>
                    <div >
                        <img src={CEOImage} alt="Team" />
                        <p>The Team of AY Contruction</p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutUs;