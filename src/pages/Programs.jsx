import React, { useState } from 'react';
import ProgramCard from '../components/ProgramCard';
import { allPrograms } from '../data/programsData';
import './Programs.css';

const Programs = () => {
    const [activeRegion, setActiveRegion] = useState('africa');


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
