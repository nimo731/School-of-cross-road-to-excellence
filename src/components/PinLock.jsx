import React, { useState, useEffect } from 'react';
import './PinLock.css';

const CORRECT_PIN = '4443';

export default function PinLock({ onUnlock }) {
    const [pin, setPin] = useState('');
    const [error, setError] = useState('');
    const [isShaking, setIsShaking] = useState(false);
    const [isUnlocking, setIsUnlocking] = useState(false);

    const handleKeyInput = (val) => {
        if (isUnlocking) return;
        setError('');
        
        if (val === 'clear') {
            setPin('');
        } else if (val === 'back') {
            setPin(prev => prev.slice(0, -1));
        } else if (/^\d$/.test(val)) {
            if (pin.length < 4) {
                const newPin = pin + val;
                setPin(newPin);
                
                if (newPin.length === 4) {
                    if (newPin === CORRECT_PIN) {
                        setIsUnlocking(true);
                        setTimeout(() => {
                            sessionStorage.setItem('ngoma_beats_unlocked', 'true');
                            onUnlock();
                        }, 800);
                    } else {
                        setTimeout(() => {
                            setError('Incorrect PIN. Access Denied.');
                            setIsShaking(true);
                            setPin('');
                            setTimeout(() => setIsShaking(false), 500);
                        }, 250);
                    }
                }
            }
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Backspace') {
                handleKeyInput('back');
            } else if (e.key === 'Escape') {
                handleKeyInput('clear');
            } else if (/^\d$/.test(e.key)) {
                handleKeyInput(e.key);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [pin, isUnlocking]);

    return (
        <div className={`pin-overlay ${isUnlocking ? 'unlocking' : ''}`}>
            <div className={`pin-container ${isShaking ? 'shake' : ''}`}>
                <div className="pin-logo">
                    <span className="logo-text">CROSSROAD<span className="accent-text"> EXCELLENCE</span></span>
                </div>
                <p className="pin-instruction">Please enter the access PIN</p>
                
                <div className="pin-dots">
                    {[0, 1, 2, 3].map((index) => (
                        <div 
                            key={index} 
                            className={`pin-dot ${index < pin.length ? 'filled' : ''}`}
                        />
                    ))}
                </div>

                <div className="pin-keypad">
                    {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
                        <button 
                            key={num} 
                            type="button"
                            className="pin-key" 
                            onClick={() => handleKeyInput(num)}
                        >
                            {num}
                        </button>
                    ))}
                    <button 
                        type="button"
                        className="pin-key pin-action-key" 
                        onClick={() => handleKeyInput('clear')}
                    >
                        Clear
                    </button>
                    <button 
                        type="button"
                        className="pin-key" 
                        onClick={() => handleKeyInput('0')}
                    >
                        0
                    </button>
                    <button 
                        type="button"
                        className="pin-key pin-action-key" 
                        onClick={() => handleKeyInput('back')}
                    >
                        ⌫
                    </button>
                </div>

                <div className={`pin-message ${error ? 'visible' : ''}`}>
                    {error}
                </div>
            </div>
        </div>
    );
}
