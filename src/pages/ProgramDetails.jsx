import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { allPrograms } from '../data/programsData';
import './ProgramDetails.css';

const ProgramDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [program, setProgram] = useState(null);
    const [activeRegion, setActiveRegion] = useState('africa');

    useEffect(() => {
        const found = allPrograms.find(p => p.id === id);
        if (found) {
            setProgram(found);
        }
    }, [id]);

    if (!program) {
        return (
            <div className="program-details-page not-found">
                <div className="container text-center">
                    <h2>Program Not Found</h2>
                    <Link to="/programs" className="btn btn-primary">Back to Programs</Link>
                </div>
            </div>
        );
    }

    const displayPrice = program.price[activeRegion];
    const displaySessions = program.sessions[activeRegion];

    return (
        <div className="program-details-page">
            <section className="details-header bg-green">
                <div className="container text-center">
                    <h1 className="header-title">{program.title}</h1>
                    <p className="header-subtitle">Dive deeper into what this bootcamp offers.</p>
                </div>
            </section>

            <section className="details-content">
                <div className="container grid grid-2">
                    <div className="details-image-wrapper">
                        <img src={program.image} alt={`${program.title} Layout Flyer`} className="details-flyer" />
                    </div>

                    <div className="details-info">
                        <h2 className="info-title">Program Overview</h2>
                        <p className="info-desc">{program.description}</p>

                        <div className="info-meta">
                            <p><strong>Duration:</strong> {program.duration}</p>
                        </div>

                        <div className="region-selector">
                            <label><strong>Select Region for Details:</strong></label>
                            <select value={activeRegion} onChange={(e) => setActiveRegion(e.target.value)} className="region-select">
                                <option value="africa">Africa</option>
                                <option value="usa">America (USA)</option>
                            </select>
                        </div>

                        <div className="info-sessions">
                            <h4>{activeRegion === 'africa' ? 'Africa' : 'USA'} Sessions:</h4>
                            <ul>
                                {displaySessions && displaySessions.map((session, i) => (
                                    <li key={i}>{session}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="info-pricing">
                            <span className="price-label">Admission Fee: </span>
                            <span className="price-value">{displayPrice}</span>
                        </div>

                        <div className="info-actions">
                            <button
                                className="btn btn-primary btn-full"
                                onClick={() => navigate('/enroll', { state: { programId: program.id, region: activeRegion, amount: displayPrice } })}
                            >
                                Enroll Now
                            </button>
                            <button className="btn btn-outline btn-full" onClick={() => navigate(-1)}>
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProgramDetails;
