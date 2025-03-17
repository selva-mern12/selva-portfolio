import React, { useState, useEffect, useMemo } from 'react';
import { FaBars, FaTimes, FaProjectDiagram, FaCode, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import { GiEarthAmerica } from "react-icons/gi";
import './index.css';

const Header = () => {
  const sections = useMemo(() => ["overview", "projects", "skills", "resume", "contact"], []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveTab(visibleSection.target.id);
        }
      },
      { threshold: 0.6 } 
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (id) => {
    setIsMenuOpen(false); 
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="header-container">
      <a href='#overview' onClick={(e) => {
                e.preventDefault();
                handleClick('overview');
              }}>
        <h1 className="header-title">Selva's Briefview</h1>
        </a>
      
      <div className="hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`hamburger-menu ${isMenuOpen ? "active" : ""}`}>
        {sections.map((id) => {
          const icons = {
            overview: <GiEarthAmerica />,
            projects: <FaProjectDiagram />,
            skills: <FaCode />,
            resume: <FaFileAlt />,
            contact: <FaEnvelope />,
          };
          return (
            <li key={id} className={`menu-item ${activeTab === id ? "active-tab" : ""}`}>
              <a href={`#${id}`} className="menu-link" onClick={(e) => {
                e.preventDefault();
                handleClick(id);
              }}>
                <div className="nav-icon">{icons[id]}</div>
                <span className="menu-text">{id.charAt(0).toUpperCase() + id.slice(1)}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
