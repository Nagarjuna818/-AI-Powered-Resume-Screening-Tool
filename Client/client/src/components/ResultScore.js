import React from 'react';
import './ResultScore.css';

function ResultScore({score}) {
    return (
        <div className="score-container">
            <div className = "score-circle">
                <span className = "score-number">{score}%</span>
                <p className = "score-label">Match</p>
            </div>
        </div>
    );
}

export default ResultScore;
