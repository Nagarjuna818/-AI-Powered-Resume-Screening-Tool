import React from 'react';
import ResultScore from './ResultScore';

import './ResultCard.css';


function ResultCard({ score, matchedKeywords = [], missingKeywords = [], onAnalyze }) {
    return(
        <div className="card">
            <div className="score-block">
                <div className="score-container">
                    <ResultScore score={score} />
                </div>
                <button onClick={onAnalyze} className="analyze-button">Analyze Job</button>
            </div>

            <h4>Keywords</h4>
            <div> 
            <h4><span role="img" aria-label="check">✅</span> Matched Keywords</h4>
                    {matchedKeywords.length > 0 ? (
                    <ul>
                        {matchedKeywords.map((word, idx) => <li key={idx}>{word}</li>)}
                    </ul>
                ) : (
                    <p>No matches found yet</p>
                )}
            </div>
            <div>
            <h4><span role="img" aria-label="cross">❌</span> Missing Keywords</h4>
                {missingKeywords.length > 0 ? (
                    <ul>
                        {missingKeywords.map((word, idx) => <li key={idx}>{word}</li>)}
                    </ul>
                ) : (
                    <p>No missing keywords</p>
                )}
            </div>
        </div>
    );
}

export {ResultCard};

