import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Compass, Stars, Crosshair, Flag, Zap, Award, Target } from 'lucide-react';
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
            {/* Grand Hero Section - About Us Alone */}
            <section className="relative-section grand-about-header text-center">
                <div className="container">
                    <motion.div
                        initial="hidden" animate="visible" variants={fadeUp}
                    >
                        <h1 className="super-heading">About Us</h1>
                        <p className="hero-body-text">
                            The School of the Crossroads to Excellence is a transformative online learning institution dedicated to guiding individuals at pivotal moments in their lives.
                        </p>
                        <p className="hero-body-text">
                            We serve those who stand at a crossroads—ready to grow, ready to change, and ready to lead. Through practical instruction, structured programs, and empowering guidance, the school equips students with real-world skills in leadership, communication, technology, and personal development.
                        </p>
                        <p className="hero-body-text" style={{ marginBottom: 0 }}>
                            Our approach blends clarity with confidence, discipline with purpose, and knowledge with action.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision Side by Side template */}
            <section className="relative-section bg-cream" style={{ zIndex: 2, padding: '7rem 0 3rem 0' }}>
                <div className="blob-container">
                    <div className="blob blob-green"></div>
                    <div className="blob blob-gold"></div>
                </div>

                <div className="container">
                    <motion.div
                        className="split-layout mission-vision-split"
                        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
                    >
                        {/* Mission Card */}
                        <motion.div className="modern-card box-mission" variants={fadeUp}>
                            <div className="icon-wrapper">
                                <Target size={32} strokeWidth={1.5} color="#d9534f" />
                            </div>
                            <h3>Our Mission</h3>
                            <p className="body-text">
                                We believe that standing at a crossroads is not a point of confusion, but a point of opportunity. Our goal is to provide the practical instruction and structured programs necessary to turn that opportunity into achievement.
                            </p>
                            <p className="body-text mt-3" style={{ color: "var(--color-green)", fontStyle: "italic", fontWeight: 600 }}>
                                At the heart of our mission is a simple truth:<br />
                                <span style={{ color: "var(--color-text)", fontSize: "1.2rem", fontStyle: "normal" }}>No longer dream it. Wake up and achieve it.</span>
                            </p>
                        </motion.div>

                        {/* Vision Card */}
                        <motion.div className="modern-card box-vision" variants={fadeUp}>
                            <div className="icon-wrapper">
                                <Eye size={32} strokeWidth={1.5} color="#1b4b6b" />
                            </div>
                            <h3>Our Vision</h3>
                            <p className="body-text">
                                To raise a generation of confident, purpose-driven individuals equipped to lead, grow, and create meaningful impact in every area of life.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Horizontal Core Values */}
            <section className="relative-section bg-cream" style={{ zIndex: 2, padding: '3rem 0 7rem 0' }}>
                <div className="container">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
                    >
                        <motion.div variants={fadeUp} className="values-header-wrapper">
                            <h2 className="heading-gradient text-center values-heading">Core Values</h2>
                            <p className="text-center body-text" style={{ maxWidth: '600px', margin: '0 auto' }}>The principles that guide our journey toward excellence.</p>
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

            {/* Founder's Inspiration - Match Template */}
            <section className="relative-section founder-template-section">
                {/* The full width colored band */}
                <div className="founder-green-band"></div>

                <div className="container">
                    <div className="founder-template-layout">
                        {/* Left Side: Overlapping Image */}
                        <motion.div className="founder-image-side" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <div className="founder-overlap-wrapper">
                                <img src="/images/founder.png" alt="Lavirnia Mordella Mayo - Founder" className="founder-overlap-image" />
                                <div className="founder-caption text-center">
                                    <span className="caption-role">Founder</span>
                                    <h4 className="caption-name">Lavirnia Mordella Mayo</h4>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side: Text Content */}
                        <motion.div className="founder-content-side" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className="template-heading">Founder's Inspiration</h2>
                            <p className="template-text">
                                The School of the Crossroads to Excellence was born from a deep understanding that many people reach moments in life where they feel uncertain, stuck, or unsure of their next step.
                            </p>
                            <p className="template-text">
                                Instead of seeing these moments as setbacks, the founder recognized them as powerful turning points—opportunities for growth, transformation, and leadership.
                            </p>
                            <p className="template-text">
                                Driven by a passion for guiding others, the vision was to create a platform that not only teaches but equips individuals with practical tools in leadership, communication, technology, and personal development.
                            </p>
                            <div className="template-quote">
                                "This institution exists to remind every individual of one simple truth:"<br />
                                <strong>No longer dream it. Wake up and achieve it.</strong>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
