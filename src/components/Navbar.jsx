import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'About Us', path: '/about' },
        { title: 'Programs', path: '/programs' },
        { title: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="nav-logo">
                    Crossroad<span className="gold">Excellence</span>
                </Link>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.title}
                        </Link>
                    ))}
                    <Link to="/programs" className="btn btn-primary nav-cta" onClick={() => setIsOpen(false)}>
                        Enroll Now
                    </Link>
                </div>

                <div className="nav-toggle" onClick={toggleMenu}>
                    <span className={`bar ${isOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'active' : ''}`}></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
