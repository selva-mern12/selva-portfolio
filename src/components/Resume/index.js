import React from "react";
import resumePDF from "../../assets/selva_resume.pdf";
import "./index.css";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>
        <p className="resume-text">
          Download my resume to learn more about my skills and experience.
        </p>
        <div className="resume-preview">
          <iframe 
            src={resumePDF} 
            title="Resume Preview"
            aria-label="Resume Preview"
          >
            <p>Your browser does not support PDFs. Please download the resume using the button below.</p>
          </iframe>
        </div>
        <a 
          href={resumePDF} 
          download="Selvagurunathan_Resume.pdf" 
          className="resume-download-btn"
          aria-label="Download Resume"
        >
          Download Resume
          <FaDownload className="download-icon"/>
        </a>
      </div>
    </section>
  );
};

export default Resume;