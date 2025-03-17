import { useRef, useEffect} from "react";
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaGitAlt, FaGithub 
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiPython, SiPostman, SiVercel, SiNetlify } from "react-icons/si";
import "./index.css";

const skills = [
  { name: "React.js", icon: <FaReact className="react-icon" /> },
  { name: "HTML5", icon: <FaHtml5 className="html-icon" /> },
  { name: "CSS3", icon: <FaCss3Alt className="css-icon" /> },
  { name: "JavaScript", icon: <FaJs className="js-icon" /> },
  { name: "Node.js", icon: <FaNodeJs className="node-icon" /> },
  { name: "Express.js", icon: <SiExpress className="express-icon" /> },
  { name: "Python", icon: <SiPython className="python-icon" /> },
  { name: "MongoDB", icon: <SiMongodb className="mongodb-icon" /> },
  { name: "SQLite", icon: <FaDatabase className="sqlite-icon" /> },
  { name: "Git", icon: <FaGitAlt className="git-icon" /> },
  { name: "GitHub", icon: <FaGithub className="github-icon" /> },
  { name: "Postman", icon: <SiPostman className="postman-icon" /> },
  { name: "Netlify", icon: <SiNetlify className="netlify-icon" /> },
  { name: "Vercel", icon: <SiVercel className="vercel-icon" /> },
];

const Skills = () => {  
  const skillsSectionRef = useRef(null);

  useEffect(() => {
    const skillsSection = skillsSectionRef.current;
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-skills");
          } else {
            entry.target.classList.remove("animate-skills");
          }
        });
      },
      { threshold: 0.5 }
    );
  
    if (skillsSection) {
      observer.observe(skillsSection);
    }
  
    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);
  

  return (
    <section id="skills" className="skills-section" ref={skillsSectionRef}>
      <div className="skills-container">
        <h2 className="skills-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
