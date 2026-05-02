import React from 'react';
import { motion } from 'framer-motion';
import './Payment.css';

const Payment = () => {
    return (
        <div className="payment-page">
            <div className="container">
                <motion.div
                    className="payment-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="payment-header">
                        <h2>Secure Enrollment & Payment</h2>
                        <p>Please complete the form below to secure your spot in the upcoming bootcamp.</p>
                    </div>

                    <div className="iframe-container">
                        <iframe
                            src="https://go-luxurylinx.com/I/embed.php?id=100404"
                            width="100%"
                            height="1200"
                            frameBorder="0"
                            allowTransparency="true"
                            title="Enrollment Form"
                            className="payment-iframe"
                        >
                            Loading…
                        </iframe>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Payment;
