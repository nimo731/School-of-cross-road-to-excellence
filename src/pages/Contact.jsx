import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './Contact.css';

const Contact = () => {
    const [phone, setPhone] = useState();

    return (
        <div className="contact-page">
            {/* Page Header */}
            <section className="page-header bg-green">
                <div className="container text-center">
                    <h1 className="header-title">Contact Us</h1>
                    <p className="header-subtitle">We're here to guide you. Reach out today.</p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-content">
                <div className="container grid grid-2">
                    <div className="contact-info">
                        <h2 className="section-title">Get In Touch</h2>
                        <p className="contact-desc">
                            Have questions about our bootcamps or need guidance on which path to take? Madam Wanjiru and our team are ready to assist you.
                        </p>

                        <div className="contact-details">
                            <div className="detail-item">
                                <span className="detail-icon">👤</span>
                                <div>
                                    <h4>Contact Person</h4>
                                    <p>Madam Wanjiru</p>
                                </div>
                            </div>
                            <div className="detail-item">
                                <span className="detail-icon">📧</span>
                                <div>
                                    <h4>Email Address</h4>
                                    <p>borntowrite02@gmail.com</p>
                                </div>
                            </div>
                            <div className="detail-item">
                                <span className="detail-icon">📞</span>
                                <div>
                                    <h4>Phone Number</h4>
                                    <p>0114915609</p>
                                </div>
                            </div>
                        </div>

                        <div className="privacy-note">
                            <p><strong>Note:</strong> By contacting us, you consent to receive communications regarding appointments, services, and marketing. We value your privacy and never sell contact information to third parties.</p>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="email@example.com" required />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <PhoneInput
                                    placeholder="Enter phone number"
                                    value={phone}
                                    onChange={setPhone}
                                    defaultCountry="KE"
                                    className="phone-input-contact"
                                />
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <select>
                                    <option>General Inquiry</option>
                                    <option>Leadership Bootcamp</option>
                                    <option>AI Course</option>
                                    <option>Business Startup</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="5" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-full">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
