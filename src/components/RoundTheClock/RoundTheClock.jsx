import React from 'react';
import './RoundTheClock.css';
import { FaHardHat, FaPhoneAlt, FaClock, FaCalendarAlt } from 'react-icons/fa';

const RoundTheClock = () => {
    return (
        <section className="round-the-clock-section">
            <div className="container">
                <div className="clock-header">
                    <h2>We Work <span className="highlight">24/7</span> For You</h2>
                    <p>Emergency services available anytime, day or night</p>
                </div>

                <div className="clock-content">
                    <div className="clock-visual">
                        <div className="clock-face">
                            <div className="clock-hands">
                                <div className="hour-hand"></div>
                                <div className="minute-hand"></div>
                                <div className="second-hand"></div>
                            </div>
                            <div className="clock-center"></div>
                            {[...Array(12)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`clock-number number-${i + 1}`}
                                >
                                    {i + 1}
                                </div>
                            ))}
                        </div>
                        <div className="pulse-effect"></div>
                    </div>

                    <div className="service-features">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <FaHardHat />
                            </div>
                            <h3>Emergency Repairs</h3>
                            <p>Immediate response to critical construction issues and structural emergencies</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <FaPhoneAlt />
                            </div>
                            <h3>24/7 Support Line</h3>
                            <p>Call <a href="tel:+1234567890">(123) 456-7890</a> anytime for urgent assistance</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <FaClock />
                            </div>
                            <h3>No Extra Charges</h3>
                            <p>Same competitive rates regardless of time or day</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">
                                <FaCalendarAlt />
                            </div>
                            <h3>Flexible Scheduling</h3>
                            <p>We work around your timeline, even on holidays</p>
                        </div>
                    </div>
                </div>

                <div className="emergency-cta">
                    <div className="cta-content">
                        <h3>Need Immediate Assistance?</h3>
                        <p>Our team is standing by to help with any construction emergency</p>
                    </div>
                    <div className="cta-buttons">
                        <a href="tel:+1234567890" className="cta-button phone">
                            <FaPhoneAlt /> Call Now
                        </a>
                        <a href="/contact" className="cta-button contact">
                            Emergency Contact Form
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoundTheClock;