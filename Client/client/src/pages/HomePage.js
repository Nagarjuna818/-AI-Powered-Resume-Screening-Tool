import React, { useState } from 'react';
import ResumeCard from '../components/ResumeCard';
import JobCard from '../components/JobCard';
import {ResultCard} from '../components/ResultCard';


import './HomePage.css';
import '../components/ResumeCard.css';
import '../components/ResultCard.css';
import '../components/JobCard.css';

function HomePage() {
    const [resumeText, setResumeText] = useState('');
    const [resumeFile, setResumeFile] = useState(null);
    const [jobInfo, setJobInfo] = useState({ jobTitle: '', jobDescription: '' });
    const [score, setScore] = useState(0);
    const [matchedKeywords, setMatchedKeywords] = useState([]);
    const [missingKeywords, setMissingKeywords] = useState([]);

    const handleAnalyze = () => {
        // Check if resume and job details are provided
        if (!resumeText && !resumeFile) {
          alert("Please upload a resume first.");
          return;
        }
        if (!jobInfo.jobTitle || !jobInfo.jobDescription) {
          alert("Please upload a resume and enter job details first.");
          return;
        }
      
        // Simulated logic for now
        setScore(85);
        setMatchedKeywords(['Java', 'React']);
        setMissingKeywords(['Python']);
      };
      

      return (
        
        <div className="wrapper">
          <div className="home-container">
            <div className="left-stack">

            <ResumeCard
                file={resumeFile}
                onFileChange={setResumeFile}
                onRemove={() => setResumeFile(null)}
                resumeText={resumeText}
                setResumeText={setResumeText}
            />
                <JobCard onJobSubmit={setJobInfo} />
            </div>
      
            <div className="right-stack">
              <ResultCard
                score={score}
                matchedKeywords={matchedKeywords}
                missingKeywords={missingKeywords}
                onAnalyze={handleAnalyze}
              />
            </div>
          </div>
          </div>
      );
}

export default HomePage;
