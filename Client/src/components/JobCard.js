import React, { useState } from 'react';
import './JobCard.css';

function JobCard({onJobSubmit}) {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');

    const handleTitlechange = (e) => {
        setJobTitle(e.target.value);
        onJobSubmit({jobTitle: e.target.value, jobDescription});
    }
    const handleDescriptionChange = (e) => {
        setJobDescription(e.target.value);
        onJobSubmit({jobTitle, jobDescription: e.target.value});
    }


    return(
        <div className="card">
            <h3>Job Description:</h3>
                <div>
                    <input
                        type="text"
                        placeholder="Job Title"
                        value={jobTitle}
                        onChange={handleTitlechange}
                    />

                    <textarea
                        rows = "6"
                        value={jobDescription}
                        placeholder="Paste Job Description"
                        onChange={handleDescriptionChange}
                    />
                </div>
        </div>
    );
}

export default JobCard;
// JobCard.css