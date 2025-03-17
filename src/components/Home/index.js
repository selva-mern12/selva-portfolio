import React from "react";
import profileImg from "../../assets/portfolio_profile.jpg";
import "./index.css";

const Overview = () => {
  return (
    <section id="overview" className="overview-section">
      <div className="overview-wrapper">
        <div className="overview-text-container">
          <h1 className="overview-title">Overview</h1>
          <p className="overview-text">
            Welcome to <strong>Selvagurunathan's Portfolio</strong>! I am a{" "}
            <strong>Full-Stack Developer</strong> specializing in the{" "}
            <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js).
            Passionate about <strong>building scalable web applications</strong>,
            I focus on delivering seamless user experiences and solving complex
            problems with <strong>efficient, optimized code</strong>.
          </p>
          <p className="overview-text">
            I have successfully completed the{' '}
            <strong>
            <a 
              href="https://media-content.ccbp.in/certificates/share/DL9DHKP0BO.png"
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                let screenWidth = window.innerWidth;
                let screenHeight = window.innerHeight;
                let popupWidth = screenWidth > 1024 ? 800 : screenWidth > 768 ? 500 : screenWidth * 0.9;
                let popupHeight = screenWidth > 1024 ? 600 : screenWidth > 768 ? 500 : screenHeight * 0.8;

                window.open(
                  "https://media-content.ccbp.in/certificates/share/DL9DHKP0BO.png",
                  "IRC_Certificate",
                  `width=${popupWidth},height=${popupHeight},left=50,top=50`
                );
              }}
              className="irc-certificate"
            >
              Industry-Ready Certification (IRC)
            </a>

            </strong> {' '} 
            at <strong>NxtWave</strong>, where I gained hands-on experience in full-stack development.  
            My portfolio features a selection of <strong>real-world projects</strong> that showcase  
            my expertise in <strong>front-end and back-end development, API integrations, and performance optimization</strong>.  
            Each project reflects my dedication to creating user-centric and high-performance applications.
          </p>
          <p className="overview-text">
            Beyond technical development, I am committed to <strong>continuous learning</strong>  
            and staying up-to-date with the latest industry trends, ensuring that I deliver  
            modern and cutting-edge solutions.
          </p>


          <p className="overview-text overview-highlight">
            🚀 Explore my work, and let's innovate together to build something extraordinary!
          </p>
        </div>

        <div className="overview-image-container">
            <div className="overview-thirukkural">
                <p className="kural-tamil">
                "செல்வத்துட் செல்வம் செவிச்செல்வம் அச்செல்வம் <br />
                செல்வத்துள் எல்லாம் தலை."
                </p>
                <p className="kural-english">
                "Among all riches, the wealth of knowledge is the highest."
                </p>
                <p className="kural-explanation">
                Knowledge and wisdom are the <strong>greatest treasures</strong> one can possess.  
                In any profession, skills and intellect matter more than material wealth,  
                as they guide a person towards <strong>success and growth.</strong>
                </p>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
            </div>
            <div className="portfolio-img-container">
                <img src={profileImg} alt="Selva" className="overview-image" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
