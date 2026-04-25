import React from 'react';
import { Link } from 'react-router-dom';
import './ProgramCard.css';

const ProgramCard = ({ title, duration, priceKES, priceUSD, description, sessions }) => {
    return (
        <div className="program-card">
            <div className="program-header">
                <span className="program-duration">{duration}</span>
                <h3 className="program-title">{title}</h3>
            </div>
            <div className="program-body">
                <p className="program-desc">{description}</p>

                {sessions && (
                    <div className="program-sessions">
                        <h4 className="sessions-title">Africa Sessions:</h4>
                        <ul>
                            {sessions.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                    </div>
                )}

                <div className="program-pricing">
                    <div className="price-item">
                        <span className="price-label">Africa</span>
                        <span className="price-value">{priceKES}</span>
                    </div>
                    <div className="price-item">
                        <span className="price-label">USA</span>
                        <span className="price-value">{priceUSD}</span>
                    </div>
                </div>
            </div>
            <div className="program-footer">
                <Link to="/enroll" className="btn btn-primary btn-full text-center">Enroll Now</Link>
            </div>
        </div>
    );
};

export default ProgramCard;
