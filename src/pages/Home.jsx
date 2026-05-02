import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProgramCard from '../components/ProgramCard';
import { allPrograms } from '../data/programsData';
import './Home.css';

const Home = () => {
    const featuredPrograms = allPrograms.slice(0, 3);
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderImages = [
        '/images/hero-slide-1.jpeg',
        '/images/hero-slide-2.jpeg',
        '/images/hero-slide-3.jpeg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
        }, 10000);
        return () => clearInterval(interval);
    }, [sliderImages.length]);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">School of the Crossroads to Excellence</h1>
                        <p className="hero-tagline">No longer dream it, wake up and achieve it.</p>
                        <p className="hero-desc">
                            Standing at a crossroads? We provide the transformative guidance, practical instruction, and structured programs you need to move forward with clarity and confidence.
                        </p>
                        <div className="hero-btns">
                            <Link to="/programs" className="btn btn-primary">Our Bootcamps</Link>
                            <Link to="/about" className="btn btn-secondary">Learn More</Link>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="slider-container">
                            {sliderImages.map((img, index) => (
                                <div
                                    key={index}
                                    className={`slider-slide ${index === currentSlide ? 'active' : ''}`}
                                    style={{ backgroundImage: `url(${img})` }}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About Teaser */}
            <section className="about-teaser" style={{ padding: '6rem 0 3rem 0' }}>
                <div className="container text-center">
                    <h2 className="section-title">Why Crossroads?</h2>
                    <p className="section-desc" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-text)' }}>
                        We blend clarity with confidence, discipline with purpose, and knowledge with action.
                        Standing at a crossroads is not a point of confusion, but a point of opportunity.
                    </p>
                </div>
            </section>

            {/* Pillars */}
            <section className="pillars-section bg-elegant" style={{ padding: '4rem 0 6rem 0' }}>
                <div className="container text-center">
                    <div className="grid grid-3 teaser-grid">
                        <div className="teaser-item">
                            <div className="teaser-icon">⚖️</div>
                            <h3>Leadership</h3>
                            <p>Forge a leadership identity through self-discipline and vision.</p>
                        </div>
                        <div className="teaser-item">
                            <div className="teaser-icon">🗣️</div>
                            <h3>Communication</h3>
                            <p>Master the art of persuasive and clear expression.</p>
                        </div>
                        <div className="teaser-item">
                            <div className="teaser-icon">💻</div>
                            <h3>Technology</h3>
                            <p>Harness the power of AI and modern tools for growth.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Programs */}
            <section className="featured-programs">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Featured Bootcamps</h2>
                        <Link to="/programs" className="view-all">View All Programs &rarr;</Link>
                    </div>
                    <div className="grid grid-3 cards-grid">
                        {featuredPrograms.map((program) => (
                            <ProgramCard key={program.id} {...program} activeRegion="africa" />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section bg-elegant">
                <div className="container text-center">
                    <h2 className="cta-title">Ready to Transform Your Life?</h2>
                    <p className="cta-desc">Enroll in our upcoming cohort and start your journey towards excellence today.</p>
                    <Link to="/enroll" className="btn btn-gold">Enroll Now</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
