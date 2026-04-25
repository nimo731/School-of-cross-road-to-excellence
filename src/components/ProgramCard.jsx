import React from 'react';
import './ProgramCard.css';

const ProgramCard = ({ title, duration, priceKES, priceUSD, description }) => {
    return (
        <div className="program-card">
            <div className="program-header">
                <span className="program-duration">{duration}</span>
                <h3 className="program-title">{title}</h3>
            </div>
            <div className="program-body">
                <p className="program-desc">{description}</p>
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
                <button className="btn btn-primary btn-full">Enroll Now</button>
            </div>
        </div>
    );
};

export default ProgramCard;
