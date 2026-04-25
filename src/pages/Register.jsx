import React from 'react';
import { motion } from 'framer-motion';
import './Register.css';

const Register = () => {
    return (
        <div className="register-page">
            <div className="container">
                <motion.div
                    className="enrollment-container"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="enrollment-header">
                        <h2>Bootcamp Enrollment</h2>
                        <p>Start your journey towards excellence. Please fill in your details below.</p>
                    </div>

                    <form className="enrollment-form">
                        <div className="form-grid">
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" placeholder="Jane" required />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" placeholder="Doe" required />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="jane@example.com" required />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="+254..." required />
                            </div>
                            <div className="form-group full-width">
                                <label>Select Your Bootcamp</label>
                                <select required>
                                    <option value="">-- Choose a Program --</option>
                                    <option value="leadership">Confident Leadership (6 Weeks)</option>
                                    <option value="resume">Resume & Interview Mastery (2 Weeks)</option>
                                    <option value="ai">Senior AI Course (4 Weeks)</option>
                                    <option value="business">How to Start a Business (2 Weeks)</option>
                                    <option value="seniors">Boot Camp for Seniors (4 Weeks)</option>
                                </select>
                            </div>
                            <div className="form-group full-width">
                                <label>Preferred Session (Africa)</label>
                                <select required>
                                    <option value="">-- Select Region & Session --</option>
                                    <option value="africa_morning">Africa - Morning Session (9 AM - 12 PM)</option>
                                    <option value="africa_evening">Africa - Evening Session (6 PM - 9 PM)</option>
                                    <option value="usa_morning">USA - Morning Session (EST)</option>
                                    <option value="usa_evening">USA - Evening Session (EST)</option>
                                </select>
                            </div>
                            <div className="form-group full-width">
                                <label>Additional Message / Goals</label>
                                <textarea rows="4" placeholder="What do you hope to achieve?"></textarea>
                            </div>
                        </div>

                        <div className="form-footer">
                            <p className="privacy-declaration">
                                By submitting, you agree to our privacy policy and consent to be contacted regarding this enrollment.
                            </p>
                            <motion.button
                                type="submit"
                                className="btn btn-primary btn-enroll"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Submit Application
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Register;
