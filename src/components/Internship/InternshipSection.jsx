import React, { useState } from 'react';
import './InternshipSection.css';

const InternshipSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        university: '',
        major: '',
        graduationYear: '',
        interests: '',
        photo: null,
        resume: null,
        schoolDocument: null
    });

    const [errors, setErrors] = useState({});
    const [fileErrors, setFileErrors] = useState({
        photo: '',
        resume: '',
        schoolDocument: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [filePreviews, setFilePreviews] = useState({
        photo: null,
        resume: null,
        schoolDocument: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const file = files[0];

        // Clear previous errors
        setFileErrors({ ...fileErrors, [name]: '' });

        // Validate file
        if (file) {
            let error = '';

            if (name === 'photo') {
                if (!file.type.match('image.(jpeg|jpg|png)')) {
                    error = 'Please upload a JPEG or PNG image';
                } else if (file.size > 2 * 1024 * 1024) {
                    error = 'Photo must be less than 2MB';
                } else {
                    // Create preview for photo
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        setFilePreviews({ ...filePreviews, photo: e.target.result });
                    };
                    reader.readAsDataURL(file);
                }
            }
            else if (name === 'resume' || name === 'schoolDocument') {
                if (!file.type.match('application.(pdf|msword|vnd.openxmlformats-officedocument.wordprocessingml.document)')) {
                    error = 'Please upload a PDF or Word document';
                } else if (file.size > 5 * 1024 * 1024) {
                    error = 'File must be less than 5MB';
                }
            }

            if (error) {
                setFileErrors({ ...fileErrors, [name]: error });
                return;
            }

            setFormData({ ...formData, [name]: file });
        }
    };

    const removeFile = (fieldName) => {
        setFormData({ ...formData, [fieldName]: null });
        setFilePreviews({ ...filePreviews, [fieldName]: null });
        setFileErrors({ ...fileErrors, [fieldName]: '' });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.major.trim()) newErrors.major = 'Major is required';
        if (!formData.resume) newErrors.resume = 'Resume is required';
        if (!formData.schoolDocument) newErrors.schoolDocument = 'School document is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0 &&
            !fileErrors.photo &&
            !fileErrors.resume &&
            !fileErrors.schoolDocument) {
            // Form is valid - proceed with submission
            const submissionData = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                if (value) submissionData.append(key, value);
            });

            // Here you would send to your backend API
            console.log('Form data:', Object.fromEntries(submissionData));
            setIsSubmitted(true);
        }
    };

    if (isSubmitted) {
        return (
            <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Application Submitted Successfully!</h3>
                <p>Thank you for applying to the AY Construction Internship Program. We've received your application and will review it shortly. Expect to hear back from us within some few days.</p>
                <button
                    className="success-btn"
                    onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            university: '',
                            major: '',
                            graduationYear: '',
                            interests: '',
                            photo: null,
                            resume: null,
                            schoolDocument: null
                        });
                        setFilePreviews({
                            photo: null,
                            resume: null,
                            schoolDocument: null
                        });
                    }}
                >
                    Submit Another Application
                </button>
            </div>
        );
    }

    return (
        <section className="internship-section">
            <div className="container">
                <div className="internship-header">
                    <h2>AY Internship Program</h2>
                    <p className="subtitle">Gain real-world experience with industry leaders</p>
                </div>

                <div className="internship-content">
                    <div className="benefits-section">
                        <h3>Why Join Our Program?</h3>

                        <div className="benefits-grid">
                            <div className="benefit-card">
                                <div className="benefit-icon">🏗️</div>
                                <h4>Hands-On Training</h4>
                                <p>Work on active construction sites with our expert team</p>
                            </div>

                            <div className="benefit-card">
                                <div className="benefit-icon">📚</div>
                                <h4>Academic Credit</h4>
                                <p>Eligible for university credit at most institutions</p>
                            </div>

                            <div className="benefit-card">
                                <div className="benefit-icon">💰</div>
                                <h4>Competitive Stipend</h4>
                                <p>Receive financial compensation for your work</p>
                            </div>

                            <div className="benefit-card">
                                <div className="benefit-icon">👔</div>
                                <h4>Career Launchpad</h4>
                                <p>Top performers receive full-time job offers</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">👨‍🏫</div>
                                <h4>Mentorship</h4>
                                <p>Learn directly from experienced construction professionals</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">💼</div>
                                <h4>Career Opportunities</h4>
                                <p>Top performers may receive full-time job offers after graduation</p>
                            </div>

                        </div>

                        <div className="program-details">
                            <h3>Program Requirements</h3>
                            <ul>
                                <li>Currently enrolled in construction-related degree program</li>
                                <li>Minimum 3.0 GPA (or equivalent)</li>
                                <li>Available for minimum 12 weeks</li>
                                <li>Valid school internship authorization</li>
                            </ul>
                        </div>
                    </div>

                    <div className="application-form">
                        <h3>Application Form</h3>
                        <p className="form-instructions">Fill out the form below and upload required documents</p>

                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            {/* Personal Information */}
                            <div className="form-section">
                                <h4>Personal Information</h4>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={errors.name ? 'error-input' : ''}
                                    />
                                    {errors.name && <span className="error-message">{errors.name}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={errors.email ? 'error-input' : ''}
                                    />
                                    {errors.email && <span className="error-message">{errors.email}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Academic Information */}
                            <div className="form-section">
                                <h4>Academic Information</h4>
                                <div className="form-group">
                                    <label htmlFor="university">University/Institution</label>
                                    <input
                                        type="text"
                                        id="university"
                                        name="university"
                                        value={formData.university}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="major">Major/Field of Study</label>
                                    <input
                                        type="text"
                                        id="major"
                                        name="major"
                                        value={formData.major}
                                        onChange={handleChange}
                                        className={errors.major ? 'error-input' : ''}
                                    />
                                    {errors.major && <span className="error-message">{errors.major}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="graduationYear">Expected Graduation Year</label>
                                    <select
                                        id="graduationYear"
                                        name="graduationYear"
                                        value={formData.graduationYear}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Year</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                    </select>
                                </div>
                            </div>

                            {/* Area of Interest */}
                            <div className="form-section">
                                <h4>Area of Interest</h4>
                                <div className="form-group">
                                    <label htmlFor="interests">
                                        What areas of construction interest you most? (Optional)
                                    </label>
                                    <textarea
                                        id="interests"
                                        name="interests"
                                        value={formData.interests}
                                        onChange={handleChange}
                                        rows="3"
                                    ></textarea>
                                </div>
                            </div>

                            {/* File Uploads */}
                            <div className="form-section">
                                <h4>Required Documents</h4>

                                {/* Photo Upload */}
                                <div className="form-group">
                                    <label htmlFor="photo">Your Photo</label>
                                    {filePreviews.photo ? (
                                        <div className="file-preview">
                                            <img src={filePreviews.photo} alt="Preview" className="photo-preview" />
                                            <button
                                                type="button"
                                                className="remove-file"
                                                onClick={() => removeFile('photo')}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <input
                                                type="file"
                                                id="photo"
                                                name="photo"
                                                onChange={handleFileChange}
                                                accept="image/jpeg, image/png"
                                            />
                                            <p className="file-hint">JPEG or PNG (max 2MB)</p>
                                        </>
                                    )}
                                    {fileErrors.photo && <span className="error-message">{fileErrors.photo}</span>}
                                </div>

                                {/* Resume Upload */}
                                <div className="form-group">
                                    <label htmlFor="resume">Resume/CV</label>
                                    {formData.resume ? (
                                        <div className="file-preview">
                                            <span className="file-name">{formData.resume.name}</span>
                                            <button
                                                type="button"
                                                className="remove-file"
                                                onClick={() => removeFile('resume')}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <input
                                                type="file"
                                                id="resume"
                                                name="resume"
                                                onChange={handleFileChange}
                                                accept=".pdf,.doc,.docx"
                                                className={errors.resume ? 'error-input' : ''}
                                            />
                                            <p className="file-hint">PDF or Word (max 5MB)</p>
                                        </>
                                    )}
                                    {errors.resume && <span className="error-message">{errors.resume}</span>}
                                    {fileErrors.resume && <span className="error-message">{fileErrors.resume}</span>}
                                </div>

                                {/* School Document Upload */}
                                <div className="form-group">
                                    <label htmlFor="schoolDocument">School Authorization</label>
                                    {formData.schoolDocument ? (
                                        <div className="file-preview">
                                            <span className="file-name">{formData.schoolDocument.name}</span>
                                            <button
                                                type="button"
                                                className="remove-file"
                                                onClick={() => removeFile('schoolDocument')}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <input
                                                type="file"
                                                id="schoolDocument"
                                                name="schoolDocument"
                                                onChange={handleFileChange}
                                                accept=".pdf,.doc,.docx"
                                                className={errors.schoolDocument ? 'error-input' : ''}
                                            />
                                            <p className="file-hint">Official internship authorization letter (max 5MB)</p>
                                        </>
                                    )}
                                    {errors.schoolDocument && <span className="error-message">{errors.schoolDocument}</span>}
                                    {fileErrors.schoolDocument && <span className="error-message">{fileErrors.schoolDocument}</span>}
                                </div>
                            </div>

                            <div className="form-footer">
                                <p className="required-note">Required fields</p>
                                <p className="privacy-note">
                                    By submitting this form, you agree to our <a href="/privacy">Privacy Policy</a> and
                                    consent to the processing of your personal data.
                                </p>
                                <button type="submit" className="submit-btn">
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InternshipSection;