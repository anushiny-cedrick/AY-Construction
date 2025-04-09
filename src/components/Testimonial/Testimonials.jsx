// src/components/Testimonials.jsx
import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Homeowner',
      content: 'AY Construction transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professionalism exceeded our expectations!',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Business Owner',
      content: 'Our commercial space was completed ahead of schedule and under budget. The team communicates clearly and delivers exceptional quality.',
      rating: 5
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Property Developer',
      content: 'I\'ve worked with many contractors, but AY Construction stands out for their reliability and craftsmanship. Highly recommended for large-scale projects.',
      rating: 4
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        <button className="nav-btn prev-btn" onClick={prevTestimonial}>&lt;</button>

        <div className="testimonial-card">
          <div className="rating">{renderStars(testimonials[currentIndex].rating)}</div>
          <p className="content">"{testimonials[currentIndex].content}"</p>
          <div className="client-info">
            <h4>{testimonials[currentIndex].name}</h4>
            <p>{testimonials[currentIndex].role}</p>
          </div>
        </div>

        <button className="nav-btn next-btn" onClick={nextTestimonial}>&gt;</button>
      </div>
      <div className="dots-container">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials