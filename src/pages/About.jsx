import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="about-page">
            {/* Page Header */}
            <section className="page-header bg-elegant">
                <div className="container text-center">
                    <motion.h1 className="header-title" initial="hidden" animate="visible" variants={fadeIn}>About Us</motion.h1>
                    <motion.p className="header-subtitle" initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }}>
                        Empowering individuals at life's pivotal moments.
                    </motion.p>
                </div>
            </section>

            {/* Our Story / Intro */}
            <section className="about-section bg-cream">
                <div className="container text-center">
                    <motion.div className="intro-text" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}>
                        <h2 className="section-title">Who We Are</h2>
                        <p className="lead-text">
                            The School of the Crossroads to Excellence is a transformative online learning institution dedicated to guiding individuals at pivotal moments in their lives. We serve those who stand at a crossroads—ready to grow, ready to change, and ready to lead.
                        </p>
                        <p>
                            Through practical instruction, structured programs, and empowering guidance, the school equips students with real-world skills in leadership, communication, technology, and personal development. Our approach blends clarity with confidence, discipline with purpose, and knowledge with action.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission */}
            <section className="about-section mission-section">
                <div className="container text-center">
                    <motion.div className="intro-text" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}>
                        <h2 className="section-title">Our Mission</h2>
                        <p className="lead-text">
                            School of the Crossroads to Excellence is a transformative online learning institution dedicated to guiding individuals at pivotal moments in their lives (standing at a crossroads).
                        </p>
                        <p>
                            We believe that standing at a crossroads is not a point of confusion, but a point of opportunity. Our goal is to provide the practical instruction and structured programs necessary to turn that opportunity into achievement.
                        </p>
                        <p className="mission-highlight">
                            At the heart of our mission is a simple truth:<br />
                            <strong>No longer dream it. Wake up and achieve it.</strong>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Vision & Core Values */}
            <section className="vision-values bg-cream">
                <div className="container grid grid-2">
                    <motion.div className="vision-box" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}>
                        <div className="box-icon">👁️</div>
                        <h3>Our Vision</h3>
                        <p>To raise a generation of confident, purpose-driven individuals equipped to lead, grow, and create meaningful impact in every area of life.</p>
                    </motion.div>

                    <motion.div className="values-box" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn} transition={{ delay: 0.2 }}>
                        <div className="box-icon">💎</div>
                        <h3>Core Values</h3>
                        <ul className="values-list">
                            <li><strong>Clarity</strong> – Helping individuals gain direction and understanding in their journey</li>
                            <li><strong>Confidence</strong> – Building self-belief to take bold and meaningful steps</li>
                            <li><strong>Discipline</strong> – Encouraging consistency and commitment to growth</li>
                            <li><strong>Purpose</strong> – Guiding actions that align with meaningful goals</li>
                            <li><strong>Action</strong> – Turning knowledge into real-life results</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Founder's Inspiration */}
            <section className="founder-inspiration">
                <div className="container grid grid-2 align-center">
                    <motion.div className="founder-text" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }} viewport={{ once: true, amount: 0.2 }}>
                        <h2 className="section-title">Founder's Inspiration</h2>
                        <p>The School of the Crossroads to Excellence was born from a deep understanding that many people reach moments in life where they feel uncertain, stuck, or unsure of their next step.</p>
                        <p>Instead of seeing these moments as setbacks, the founder recognized them as powerful turning points—opportunities for growth, transformation, and leadership.</p>
                        <p>Driven by a passion for guiding others, the vision was to create a platform that not only teaches but equips individuals with practical tools in leadership, communication, technology, and personal development.</p>
                        <p className="founder-quote">
                            This institution exists to remind every individual of one simple truth:<br />
                            <strong>No longer dream it. Wake up and achieve it.</strong>
                        </p>
                    </motion.div>

                    <motion.div className="founder-image-wrapper" initial={{ opacity: 0, x: 50, rotate: 5 }} whileInView={{ opacity: 1, x: 0, rotate: 0, transition: { duration: 0.8 } }} viewport={{ once: true, amount: 0.2 }}>
                        <img src="/images/founder.png" alt="Founder of School of the Crossroads to Excellence" className="founder-image" />
                        <div className="founder-frame"></div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
