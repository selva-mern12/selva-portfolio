import React from "react";
import resumePDF from "../../assets/selva-resume.pdf";
import resumeImg from "../../assets/selva-resume.png";
import "./index.css";
import { FaDownload, FaShareAlt } from "react-icons/fa";

const Resume = () => {
  const handleShare = async () => {
    const shareData = {
      title: "Selvagurunathan's Resume",
      text: "Check out my resume!",
      url: window.location.origin + "/selva_resume.pdf",
    };

    // Check if the Web Share API is available
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      alert("Sharing not supported on your browser");
    }
  };

  return (
    <>
      <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">Selva Resume</h2>
        <div className="resume-preview">
          {window.innerWidth > 768 ? 
            <iframe 
              src={resumePDF} 
              title="Resume Preview"
              aria-label="Resume Preview"
            >
              <p>Your browser does not support PDFs. Please download the resume using the button below.</p>
            </iframe> : 
            <img src={resumeImg} alt="selva_resume" className="resume_img" />
          }
        </div>
        <a 
          href={resumePDF} 
          download="Selvagurunathan_Resume.pdf" 
          className="resume-download-btn"
          aria-label="Download Resume"
        >
          Download Pdf
          <FaDownload className="download-icon"/>
        </a>
        {window.innerWidth >= 768 && <button
            type="button"
            className="resume-download-btn resume-share-btn"
            onClick={handleShare}
            aria-label="Share Resume"
        >
          Share Resume
          <FaShareAlt className="download-icon" />
        </button> }
      </div>
    </section>
    <hr />
    </>
  );
};

export default Resume;