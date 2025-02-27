// src/components/ContactForm.jsx
import React, { useState } from "react";
import "./ContactForm.css"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.phone) newErrors.phone = "Phone is required";
        if (!formData.subject) newErrors.subject = "Subject is required";
        if (!formData.message) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            // Submit the form (e.g., send data to an API)
            console.log("Form submitted:", formData);
            alert("Thank you for contacting us! We'll get back to you soon.");
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
            setErrors({});
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <h3>Get in touch</h3>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter the subject"
                />
                {errors.subject && <span className="error">{errors.subject}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows="5"
                />
                {errors.message && <span className="error">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-btn">
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;