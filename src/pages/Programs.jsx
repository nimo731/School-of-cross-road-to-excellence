import React from 'react';
import ProgramCard from '../components/ProgramCard';
import './Programs.css';

const Programs = () => {
    const allPrograms = [
        {
            title: 'Confident Leadership',
            duration: '6 Weeks',
            priceKES: 'KSh40,000',
            priceUSD: '$397',
            description: 'Build the mindset, presence, and discipline of a strong leader. Focuses on self-awareness, communication, decision-making, and leading with confidence in real-life situations. Students leave with a leadership identity and a practical action plan.'
        },
        {
            title: 'Professional Resume, Cover Letter & Interview Mastery',
            duration: '2 Weeks',
            priceKES: 'KSh20,000',
            priceUSD: '$197',
            description: 'Learn how to present yourself professionally on paper and in person. Covers resume writing, persuasive cover letters, and interview techniques to stand out and secure opportunities.'
        },
        {
            title: 'Senior AI Course',
            duration: '4-Week Advanced Program',
            priceKES: 'KSh28,000',
            priceUSD: '$225',
            description: 'Designed for experienced seniors ready to master advanced technology. Not a beginner’s class; it explores AI as a practical tool for everyday life, business, creativity, and communication in a collaborative environment.'
        },
        {
            title: 'How to Start a Business',
            duration: '2 Weeks',
            priceKES: 'KSh30,000',
            priceUSD: '$250',
            description: 'Foundational steps to legally and practically start a business. Covers business structure, registration, and basic operations to move from idea to action.'
        }
    ];

    return (
        <div className="programs-page">
            {/* Page Header */}
            <section className="page-header bg-cream">
                <div className="container text-center">
                    <h1 className="header-title">Our Programs</h1>
                    <p className="header-subtitle gold">Step into your potential with our immersive bootcamps.</p>
                </div>
            </section>

            {/* Programs Grid */}
            <section className="programs-list">
                <div className="container">
                    <div className="programs-intro text-center">
                        <p className="section-desc">
                            All our programs are designed to be practical, structured, and transformative. Whether you're looking to lead, communicate, or master new technology, we have a path for you.
                        </p>
                    </div>
                    <div className="grid grid-3 programs-cards">
                        {allPrograms.map((program, index) => (
                            <ProgramCard key={index} {...program} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Region Info */}
            <section className="region-info bg-green">
                <div className="container text-center">
                    <h2 className="cta-title">Global Learning Community</h2>
                    <p className="cta-desc">
                        We welcome students from Africa and the USA. Our pricing is structured to accommodate different regions while providing the same high-quality excellence.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Programs;
