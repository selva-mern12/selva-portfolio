import React, { useState, useContext, useEffect } from "react";
import PortfolioContext from "../../context/PortfolioContext";
import { FaHandPointRight } from "react-icons/fa";
import "./index.css";

const Projects = () => {
  const { projects } = useContext(PortfolioContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="projects-container" id="projects">
      <div style={{textAlign: 'center'}}>
        <h1 className="projects-title">Projects</h1>
        <p className="projects-intro">Here are some of my best real-world projects.</p>
      </div>
      <div className="projects-horizontal">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} isMobile={isMobile} isLast={index === projects.length - 1} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, isMobile, isLast }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`project-card ${isHovered ? "hovered" : ""} ${isLast ? "last-project" : ""}`}
      style={{backgroundImage: `url(${isHovered ? project.lgImage : project.smImage})`}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-preview">
        <h2 className="project-name">{project.name}</h2>
      </div>
      <div className="project-details">
        <p className="project-description">{project.description}</p>
        <p className="project-tech"><strong>Tech Used:</strong> {project.tech}</p>

        <ul className="project-features">
          {project.features.map((feature, i) => (
            <li key={i}><FaHandPointRight color="#fff"style={{marginRight: '10px'}} /> {feature}</li>
          ))}
        </ul>

        <p className="project-deployment"><strong>Deployment:</strong> {project.deployment}</p>
        <p className={`project-status ${project.status === "Active" ? "active-status" : "inactive-status"}`}>
          <strong>Status:</strong> {project.status}
        </p>

        {project.login && <p className="project-login">🔑 Login Required</p>}

        <div className="project-links">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">🔗 View Live</a>
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-repo">💻 GitHub Repo</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
