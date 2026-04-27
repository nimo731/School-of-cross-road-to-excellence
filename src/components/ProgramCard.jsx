import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProgramCard.css';

const ProgramCard = ({ id, title, duration, price, image, activeRegion = 'africa' }) => {
    const navigate = useNavigate();
    const displayPrice = price ? price[activeRegion] : 'Check Details';

    return (
        <div className="program-card clever-style">
            <div className="card-image-wrapper" onClick={() => navigate(`/program/${id}`, { state: { region: activeRegion } })}>
                <img src={image || '/images/placeholder.svg'} alt={`${title} Flyer`} className="card-image" />
            </div>

            <div className="card-body">
                <h3 className="card-title" onClick={() => navigate(`/program/${id}`, { state: { region: activeRegion } })}>
                    {title}
                </h3>

                <div className="card-meta">
                    <span className="card-duration">
                        ⏱️ {duration}
                    </span>
                </div>

                <div className="card-footer">
                    <span className="card-price">{displayPrice}</span>
                    <button
                        className="btn btn-apply"
                        onClick={(e) => {
                            e.stopPropagation();
                            navigate('/enroll', { state: { programId: id, region: activeRegion, amount: displayPrice } });
                        }}
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProgramCard;
