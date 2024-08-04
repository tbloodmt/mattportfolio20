import React from 'react'
import "./resume.css"
const Resume = () => { 
    const handleDownload = () => {
        // Replace 'path/to/your/resume.pdf' with the actual URL of your resume PDF
        window.location.href = 'path/to/your/resume.pdf';
      };
  return (
    <>
     <div className="resume-container">
      {/* Placeholder for resume content */}
      <h1>Your Name</h1>
      <p>Job Title</p>
      <p>Email: your.email@example.com</p>
      <p>Phone: +1234567890</p>
      <p>Address: Your Address</p>
      {/* Add more sections as needed */}

      {/* Download Button */}
      <button onClick={handleDownload} className="download-button">
        Download Resume (PDF)
      </button>
    </div>
    </>
  )
}

export default Resume