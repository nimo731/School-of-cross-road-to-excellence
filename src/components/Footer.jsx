import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-info">
                    <Link to="/" className="footer-logo">
                        Crossroad<span className="gold">Excellence</span>
                    </Link>
                    <p className="footer-desc">
                        No longer dream it, wake up and achieve it. A transformative online learning institution dedicated to guiding you at life's pivotal moments.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/programs">Our Programs</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p style={{ marginBottom: '1rem' }}>Contact Person: Madam Wanjiru</p>
                    <div className="footer-contact-items">
                        <a href="mailto:borntowrite02@gmail.com" className="footer-contact-link">
                            <Mail size={18} />
                            borntowrite02@gmail.com
                        </a>
                        <a href="tel:0114915609" className="footer-contact-link">
                            <Phone size={18} />
                            0114915609
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} School of the Crossroads to Excellence. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
