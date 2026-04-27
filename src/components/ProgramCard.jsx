import React from 'react';
import { Link } from 'react-router-dom';
import './ProgramCard.css';

const ProgramCard = ({ id, title, duration, price, description, sessions, activeRegion }) => {
    const displayPrice = price[activeRegion];
    const displaySessions = sessions[activeRegion];

    return (
        <div className="program-card">
            <div className="program-header">
                <span className="program-duration">{duration}</span>
                <h3 className="program-title">{title}</h3>
            </div>
            <div className="program-body">
                <p className="program-desc">{description}</p>

                {displaySessions && (
                    <div className="program-sessions">
                        <h4 className="sessions-title">{activeRegion === 'africa' ? 'Africa' : 'USA'} Sessions:</h4>
                        <ul>
                            {displaySessions.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                    </div>
                )}

                <div className="program-pricing">
                    <div className="price-item">
                        <span className="price-label">Admission Fee</span>
                        <span className="price-value">{displayPrice}</span>
                    </div>
                </div>
            </div>
            <div className="program-footer">
                <Link
                    to="/enroll"
                    state={{ programId: id, programTitle: title, region: activeRegion, amount: displayPrice }}
                    className="btn btn-primary btn-full text-center"
                >
                    Enroll Now
                </Link>
            </div>
        </div>
    );
};

export default ProgramCard;
