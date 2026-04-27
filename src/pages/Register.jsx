import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import './Register.css';

const allProgramsList = {
    'leadership': 'Confident Leadership (6 Weeks)',
    'resume': 'Professional Resume, Cover Letter & Interview Mastery (2 Weeks)',
    'ai': 'Senior AI Course (4-Week Advanced Program)',
    'business': 'How to Start a Business (2 Weeks)',
    'seniors': 'Boot Camp for Seniors (4 Weeks)'
};

const Register = () => {
    const location = useLocation();

    // We expect state from ProgramCard: { programId, programTitle, region, amount }
    const { programId, programTitle, region, amount } = location.state || {};

    const [selectedProgram, setSelectedProgram] = useState(programId || '');
    const [selectedRegion, setSelectedRegion] = useState(region || 'africa');
    const [displayAmount, setDisplayAmount] = useState(amount || '');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [optIn, setOptIn] = useState(false);

    // If the user lands here directly, they can choose a program and we should ideally fetch the amount
    // For simplicity, if they come from the card it's prefilled. Otherwise, they have to select from the site.
    // If we want dynamic amounts here, we'd replicate the price table.

    useEffect(() => {
        // Just a simple fallback for amount if they switch programs manually on this page.
        // In a real app, you'd lookup the price object.
        if (!location.state || location.state.programId !== selectedProgram) {
            setDisplayAmount('Select a program from the Programs page to see exact pricing.');
        } else {
            setDisplayAmount(location.state.amount);
        }
    }, [selectedProgram, location.state]);

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

                        {/* Course Selection Module */}
                        <div className="payment-module">
                            <h3 className="module-title">Selection Details</h3>
                            <div className="form-group full-width">
                                <label>Course</label>
                                <select
                                    required
                                    value={selectedProgram}
                                    onChange={(e) => setSelectedProgram(e.target.value)}
                                >
                                    <option value="">-- Choose a Program --</option>
                                    {Object.entries(allProgramsList).map(([id, title]) => (
                                        <option key={id} value={id}>{title}</option>
                                    ))}
                                </select>
                            </div>

                            {selectedProgram && (
                                <div className="amount-display">
                                    <strong>Admission Fee:</strong> {displayAmount}
                                </div>
                            )}
                        </div>

                        {/* Payment Method Module */}
                        {selectedProgram && (
                            <div className="payment-module">
                                <h3 className="module-title">Payment Method</h3>
                                <div className="form-group full-width">
                                    <select
                                        required
                                        value={paymentMethod}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    >
                                        <option value="">-- Select Payment Method --</option>
                                        <option value="mpesa">M-Pesa App Payment</option>
                                        <option value="other">Credit Card / PayPal (Coming Soon)</option>
                                    </select>
                                </div>

                                {paymentMethod === 'mpesa' && (
                                    <div className="payment-instructions">
                                        <h4>We accept M-Pesa App Payments</h4>
                                        <ol>
                                            <li>To make payment with M-pesa App, submit the form below.</li>
                                            <li>After your submission, follow the instructions to make payment for the total amount shown above.</li>
                                            <li>Reserving a seat is time sensitive, therefore to reserve your seat, full payment is required.</li>
                                        </ol>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Personal Credentials Module */}
                        <div className="payment-module">
                            <h3 className="module-title">Personal Credentials</h3>
                            <div className="form-grid">
                                <div className="form-group full-width">
                                    <label>Customer Full Name *</label>
                                    <input type="text" placeholder="Enter your full name" required />
                                </div>
                                <div className="form-group full-width">
                                    <label>Customer Email *</label>
                                    <input type="email" placeholder="Enter an email to receive a payment confirmation" required />
                                </div>
                                <div className="form-group full-width">
                                    <label>Customer Phone *</label>
                                    <input type="tel" placeholder="Enter phone number" required />
                                </div>
                            </div>
                        </div>

                        {/* Opt-in & Submit */}
                        <div className="form-footer">
                            <div className="opt-in-section">
                                <label className="opt-in-label">
                                    <input
                                        type="checkbox"
                                        required
                                        checked={optIn}
                                        onChange={(e) => setOptIn(e.target.checked)}
                                    />
                                    <strong>Opt-in consent *</strong>
                                </label>
                                <p className="privacy-declaration">
                                    By leaving your phone or email, you are consenting to receiving communications from us via text or email and that may include communications about your appointments, services, and marketing information related to our services. You may opt out of marketing information at any time. Your contact information will never be sold to any third party and will only be shared to the extent necessary to perform any services on your behalf.
                                </p>
                            </div>

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
