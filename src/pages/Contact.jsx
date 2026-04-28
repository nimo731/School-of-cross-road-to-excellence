import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import { User, Phone, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import 'react-phone-number-input/style.css';
import './Contact.css';

const Contact = () => {
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        data.phone = phone;

        try {
            const res = await fetch("https://formsubmit.co/ajax/borntowrite02@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: `New Contact Request from ${data.name}`,
                    Name: data.name,
                    Email: data.email,
                    Phone: data.phone,
                    Subject: data.subject,
                    Message: data.message
                })
            });

            if (res.ok) {
                setStatus("success");
                form.reset();
                setPhone("");
                setTimeout(() => setStatus(""), 8000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus(""), 8000);
            }
        } catch (error) {
            setStatus("error");
            setTimeout(() => setStatus(""), 8000);
        }
    };

    return (
        <div className="contact-page">
            {/* Page Header */}
            <section className="page-header bg-shiny">
                <div className="container text-center">
                    <h1 className="header-title">Contact Us</h1>
                    <p className="header-subtitle gold">We're here to guide you. Reach out today.</p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-content">
                <div className="container contact-split">
                    <div className="contact-info">
                        <h2 className="section-title">Get In Touch</h2>
                        <p className="contact-desc">
                            Have questions about our bootcamps or need guidance on which path to take? Madam Wanjiru and our team are ready to assist you.
                        </p>

                        <div className="contact-details">
                            <div className="detail-item">
                                <span className="detail-icon">
                                    <User size={24} />
                                </span>
                                <div>
                                    <h4>Contact Person</h4>
                                    <p>Madam Wanjiru</p>
                                </div>
                            </div>
                            <div className="detail-item">
                                <span className="detail-icon">
                                    <Mail size={24} />
                                </span>
                                <div>
                                    <h4>Email Address</h4>
                                    <a href="mailto:borntowrite02@gmail.com" className="contact-link">borntowrite02@gmail.com</a>
                                </div>
                            </div>
                            <div className="detail-item">
                                <span className="detail-icon">
                                    <Phone size={24} />
                                </span>
                                <div>
                                    <h4>Phone Number</h4>
                                    <a href="tel:0114915609" className="contact-link">0114915609</a>
                                </div>
                            </div>
                        </div>

                        <div className="privacy-note">
                            <p><strong>Note:</strong> By contacting us, you consent to receive communications regarding appointments, services, and marketing. We value your privacy and never sell contact information to third parties.</p>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={handleSubmit}>

                            {/* Alert Messages */}
                            {status === 'success' && (
                                <div style={{ color: '#155724', backgroundColor: '#d4edda', border: '1px solid #c3e6cb', padding: '15px', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem' }}>
                                    <CheckCircle2 color="#28a745" size={24} />
                                    <span>Message sent successfully! We will be in touch shortly.</span>
                                </div>
                            )}
                            {status === 'error' && (
                                <div style={{ color: '#721c24', backgroundColor: '#f8d7da', border: '1px solid #f5c6cb', padding: '15px', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem' }}>
                                    <AlertCircle color="#dc3545" size={24} />
                                    <span>Failed to send message. Please verify your connection or try again.</span>
                                </div>
                            )}

                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" name="email" placeholder="email@example.com" required />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <PhoneInput
                                    placeholder="Enter phone number"
                                    value={phone}
                                    onChange={setPhone}
                                    defaultCountry="KE"
                                    className="phone-input-contact"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <select name="subject" required>
                                    <option value="" disabled selected>-- Select Subject --</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Leadership Bootcamp">Leadership Bootcamp</option>
                                    <option value="AI Course">AI Course</option>
                                    <option value="Business Startup">Business Startup</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea name="message" rows="5" placeholder="How can we help you?" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-full" disabled={status === 'loading'}>
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
