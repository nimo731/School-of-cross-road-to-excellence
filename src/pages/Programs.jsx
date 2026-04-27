import React, { useState } from 'react';
import ProgramCard from '../components/ProgramCard';
import './Programs.css';

const Programs = () => {
    const [activeRegion, setActiveRegion] = useState('africa');

    const allPrograms = [
        {
            id: 'leadership',
            title: 'Confident Leadership',
            duration: '6 Weeks',
            price: {
                africa: 'KSh 40,000 KES',
                usa: '$397'
            },
            sessions: {
                africa: ['Morning Session (9 AM - 12 PM)', 'Evening Session (6 PM - 9 PM)'],
                usa: ['Morning Session (9 AM - 12 PM EST)', 'Evening Session (6 PM - 9 PM EST)']
            },
            description: 'Build the mindset, presence, and discipline of a strong leader. Focuses on self-awareness, communication, decision-making, and leading with confidence in real-life situations.'
        },
        {
            id: 'resume',
            title: 'Professional Resume, Cover Letter & Interview Mastery',
            duration: '2 Weeks',
            price: {
                africa: 'KSh 20,000 KES',
                usa: '$197'
            },
            sessions: {
                africa: ['Morning Session (9 AM - 12 PM)', 'Evening Session (6 PM - 9 PM)'],
                usa: ['Morning Session (9 AM - 12 PM EST)', 'Evening Session (6 PM - 9 PM EST)']
            },
            description: 'Learn how to present yourself professionally on paper and in person. Covers resume writing, persuasive cover letters, and interview techniques to stand out and secure opportunities.'
        },
        {
            id: 'ai',
            title: 'Senior AI Course',
            duration: '4-Week Advanced Program',
            price: {
                africa: 'KSh 28,000 KES',
                usa: '$225'
            },
            sessions: {
                africa: ['Afternoon Session (2 PM - 5 PM)'],
                usa: ['Afternoon Session (2 PM - 5 PM EST)']
            },
            description: 'Designed for experienced seniors ready to master advanced technology. It explores AI as a practical tool for everyday life, business, creativity, and communication.'
        },
        {
            id: 'business',
            title: 'How to Start a Business',
            duration: '2 Weeks',
            price: {
                africa: 'KSh 30,000 KES',
                usa: '$250'
            },
            sessions: {
                africa: ['Evening Session (6 PM - 9 PM)'],
                usa: ['Evening Session (6 PM - 9 PM EST)']
            },
            description: 'Foundational steps to legally and practically start a business. Covers business structure, registration, and basic operations to move from idea to action.'
        },
        {
            id: 'seniors',
            title: 'Boot Camp for Seniors',
            duration: '4 Weeks',
            price: {
                africa: 'N/A',
                usa: '$225'
            },
            sessions: {
                africa: ['Morning Session (10 AM - 1 PM)'],
                usa: ['Morning Session (10 AM - 1 PM EST)']
            },
            description: 'Bringing old stories to life through digital storytelling and AI, specifically for seniors aged 65+.'
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

            {/* Region Toggle */}
            <section className="region-toggle-section text-center">
                <div className="container">
                    <h3 className="region-title">Select your region to view specific sessions and pricing:</h3>
                    <div className="region-buttons">
                        <button
                            className={`btn ${activeRegion === 'africa' ? 'btn-primary' : 'btn-outline'}`}
                            onClick={() => setActiveRegion('africa')}
                        >
                            View Africa Sessions
                        </button>
                        <button
                            className={`btn ${activeRegion === 'usa' ? 'btn-primary' : 'btn-outline'}`}
                            onClick={() => setActiveRegion('usa')}
                        >
                            View America (USA) Sessions
                        </button>
                    </div>
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
                        {allPrograms.map((program) => (
                            <ProgramCard key={program.id} {...program} activeRegion={activeRegion} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Programs;
