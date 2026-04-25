import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* Page Header */}
            <section className="page-header bg-green">
                <div className="container">
                    <h1 className="header-title">About Us</h1>
                    <p className="header-subtitle">Empowering individuals at life's pivotal moments.</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="container grid grid-2">
                    <div className="mission-content">
                        <h2 className="section-title">Our Mission</h2>
                        <p className="lead">
                            School of the Crossroads to Excellence is a transformative online learning institution dedicated to guiding individuals at pivotal moments in their lives (standing at a crossroads).
                        </p>
                        <p>
                            We believe that standing at a crossroads is not a point of confusion, but a point of opportunity. Our goal is to provide the practical instruction and structured programs necessary to turn that opportunity into achievement.
                        </p>
                        <div className="philosophy-box">
                            <h3>Our Philosophy</h3>
                            <p>We blend clarity with confidence, discipline with purpose, and knowledge with action.</p>
                        </div>
                    </div>
                    <div className="mission-image">
                        <img src="https://images.unsplash.com/photo-1524178232363-1fb28f74b573?auto=format&fit=crop&q=80&w=800" alt="Education" className="img-resp" />
                    </div>
                </div>
            </section>

            {/* Pillars Section */}
            <section className="pillars-section bg-cream">
                <div className="container">
                    <h2 className="section-title text-center">Our Four Pillars</h2>
                    <div className="grid grid-2 pillar-grid">
                        <div className="pillar-item">
                            <div className="pillar-num">01</div>
                            <div className="pillar-info">
                                <h3>Leadership</h3>
                                <p>Building the mindset, presence, and discipline of a strong leader. We focus on self-awareness and decision-making in real-life situations.</p>
                            </div>
                        </div>
                        <div className="pillar-item">
                            <div className="pillar-num">02</div>
                            <div className="pillar-info">
                                <h3>Communication</h3>
                                <p>Mastering persuasive writing, masterly interviewing, and clear expression to stand out in any professional or personal environment.</p>
                            </div>
                        </div>
                        <div className="pillar-item">
                            <div className="pillar-num">03</div>
                            <div className="pillar-info">
                                <h3>Technology</h3>
                                <p>Harnessing advanced tools like AI to master productivity, business efficiency, and creative communication.</p>
                            </div>
                        </div>
                        <div className="pillar-item">
                            <div className="pillar-num">04</div>
                            <div className="pillar-info">
                                <h3>Personal Development</h3>
                                <p>Fostering the discipline and clarity needed to align knowledge with action for long-term excellence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team/Contact Note */}
            <section className="contact-note section">
                <div className="container text-center">
                    <h2 className="section-title">Ready to Begin?</h2>
                    <p className="section-desc">Join a community of learners who are turning their crossroads into a path of excellence.</p>
                    <div className="contact-person">
                        <div className="person-avatar">MW</div>
                        <p className="person-name">Madam Wanjiru</p>
                        <p className="person-role">Head of Institution</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
