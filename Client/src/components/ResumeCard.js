import React from 'react';
import './ResumeCard.css';

function ResumeCard({ file, onFileChange, onRemove, resumeText, setResumeText }) {
    return (
      <div className="card">
        <h3>Resume</h3>
        <textarea
          className="resume-textarea"
          placeholder="Paste your resume text here"
          rows="6"
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
        />


        {file ? (
          <div>
            <p>{file.name}</p>
            <button className="remove-btn" onClick={onRemove}>Remove file</button>
          </div>
        ) : (
          <input type="file" accept=".pdf,.docx" onChange={(e) => onFileChange(e.target.files[0])} />
        )}
      </div>
    );
  }
  
  export default ResumeCard;
  
// ResumeCard.css