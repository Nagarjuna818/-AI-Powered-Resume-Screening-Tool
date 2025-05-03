import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ai-powered-resume-screening-tool.onrender.com/api',
});


export const uploadResumeFile = (file) => {
    const formData = new FormData();
    formData.append('file', file);

    return api.post('/uploadResume', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}

export const analyzeResumeText = (text) => {
    return api.post('/analyzeResumeText', text, { 
        headers: {
            'Content-Type': 'application/json',
        },
     });
};

export const analyzeResumeAgainstJob = (resumeText, jobDescription) => {
    return api.post('/analyzeResume', {
        resumeText,
        jobDescription,
    }, 
    );
};