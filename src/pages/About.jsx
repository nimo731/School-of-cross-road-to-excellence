import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Compass, Stars, Crosshair, Flag, Zap, Award } from 'lucide-react';
import './About.css';

const About = () => {
    // Smooth, premium animations
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    return (
        <div className="about-page">
            {/* Grand Hero Section for About Us & Mission */}
            <section className="relative-section grand-about-header">
                <div className="container">
                    <motion.div
                        className="glass-panel dark-glass"
                        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
                    >
                        <div className="split-layout">
                            {/* Combined About Content */}
                            <motion.div variants={fadeUp} className="text-content">
                                <h1 className="super-heading">About Us</h1>
                                <p className="lead-text">
                                    The School of the Crossroads to Excellence is a transformative online learning institution dedicated to guiding individuals at pivotal moments in their lives.
                                </p>
                                <p className="body-text">
                                    We serve those who stand at a crossroads—ready to grow, ready to change, and ready to lead. Through practical instruction, structured programs, and empowering guidance, the school equips students with real-world skills in leadership, communication, technology, and personal development.
                                </p>
                                <p className="body-text">
                                    Our approach blends clarity with confidence, discipline with purpose, and knowledge with action.
                                </p>
                            </motion.div>

                            {/* Mission */}
                            <motion.div variants={fadeUp} className="text-content mission-block">
                                <h2 className="super-subheading">Our Mission</h2>
                                <p className="body-text">
                                    We believe that standing at a crossroads is not a point of confusion, but a point of opportunity. Our goal is to provide the practical instruction and structured programs necessary to turn that opportunity into achievement.
                                </p>
                                <div className="mission-highlight">
                                    <p>At the heart of our mission is a simple truth:</p>
                                    <strong>No longer dream it. Wake up and achieve it.</strong>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Vision & Core Values - Centered + Horizontal Grid */}
            <section className="relative-section bg-cream" style={{ zIndex: 2 }}>
                <div className="blob-container">
                    <div className="blob blob-green"></div>
                    <div className="blob blob-gold"></div>
                </div>

                <div className="container">
                    <motion.div
                        className="vision-centered-container"
                        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
                    >
                        {/* Vision Card - Centered vertically and constrained */}
                        <motion.div className="modern-card vision-card-centered" variants={fadeUp}>
                            <div className="icon-wrapper">
                                <Eye size={36} strokeWidth={1.5} />
                            </div>
                            <h3>Our Vision</h3>
                            <p className="body-text text-center">
                                To raise a generation of confident, purpose-driven individuals equipped to lead, grow, and create meaningful impact in every area of life.
                            </p>
                        </motion.div>

                        {/* Horizontal Core Values */}
                        <motion.div variants={fadeUp} className="values-header-wrapper">
                            <h2 className="heading-gradient text-center values-heading">Core Values</h2>
                            <p className="text-center body-text">The principles that guide our journey toward excellence.</p>
                        </motion.div>

                        <motion.div className="values-grid-horizontal" variants={staggerContainer}>
                            <motion.div className="value-mini-card" variants={fadeUp}>
                                <Compass size={36} className="value-icon-large" />
                                <strong>Clarity</strong>
                                <p>Helping gain direction and understanding in the journey.</p>
                            </motion.div>
                            <motion.div className="value-mini-card" variants={fadeUp}>
                                <Stars size={36} className="value-icon-large" />
                                <strong>Confidence</strong>
                                <p>Building self-belief to take bold and meaningful steps.</p>
                            </motion.div>
                            <motion.div className="value-mini-card" variants={fadeUp}>
                                <Crosshair size={36} className="value-icon-large" />
                                <strong>Discipline</strong>
                                <p>Encouraging consistency and commitment to growth.</p>
                            </motion.div>
                            <motion.div className="value-mini-card" variants={fadeUp}>
                                <Flag size={36} className="value-icon-large" />
                                <strong>Purpose</strong>
                                <p>Guiding actions that align with meaningful goals.</p>
                            </motion.div>
                            <motion.div className="value-mini-card" variants={fadeUp}>
                                <Zap size={36} className="value-icon-large" />
                                <strong>Action</strong>
                                <p>Turning knowledge into real-life results.</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Founder's Inspiration */}
            <section className="relative-section founder-inspiration">
                <div className="container">
                    <motion.div
                        className="founder-card"
                        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
                    >
                        <div className="split-layout align-center">
                            <motion.div className="founder-text" variants={fadeUp}>
                                <h2 className="heading-gradient">Founder's Inspiration</h2>
                                <p className="body-text">
                                    The School of the Crossroads to Excellence was born from a deep understanding that many people reach moments in life where they feel uncertain, stuck, or unsure of their next step.
                                </p>
                                <p className="body-text">
                                    Instead of seeing these moments as setbacks, the founder recognized them as powerful turning points—opportunities for growth, transformation, and leadership.
                                </p>
                                <p className="body-text">
                                    Driven by a passion for guiding others, the vision was to create a platform that not only teaches but equips individuals with practical tools in leadership, communication, technology, and personal development.
                                </p>
                                <div className="founder-quote">
                                    "This institution exists to remind every individual of one simple truth:"<br />
                                    <strong>No longer dream it. Wake up and achieve it.</strong>
                                </div>
                            </motion.div>

                            <motion.div className="founder-image-wrapper" variants={fadeUp}>
                                <div className="founder-frame"></div>
                                <img src="/images/founder.png" alt="Founder of School of the Crossroads" className="founder-image" />

                                {/* Floating Premium Badge */}
                                <div className="founder-badge">
                                    <div className="badge-icon">
                                        <Award size={24} />
                                    </div>
                                    <div className="badge-text">
                                        <strong>Excellence</strong>
                                        <span>Guiding your journey</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
