import React from 'react';
import './Skills.css';
import { FaReact, FaAngular, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaJava, FaUnity } from 'react-icons/fa'; 
import { SiNestjs, SiMongodb, SiFlutter, SiCplusplus, SiCsharp } from 'react-icons/si';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Angular', icon: <FaAngular /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJs /> },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'NestJS', icon: <SiNestjs /> },
        { name: 'C#', icon: <SiCsharp /> },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MySQL', icon: <FaDatabase /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
      ],
    },
    {
      category: 'Other Languages',
      skills: [
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'Java', icon: <FaJava /> },
      ],
    },
    {
      category: 'Learning',
      skills: [
        { name: 'Flutter', icon: <SiFlutter /> },
        { name: 'Unity', icon: <FaUnity /> },
      ],
    },
  ];

  return (
    <section id="skills" className="mb-16">
      <div className="container">
        <h2 className={`text-center mb-4 ${darkMode ? 'text-light' : 'text-dark'}`}>Skills</h2>
        <div className="row">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className={`card skill-card ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} shadow h-100 d-flex flex-column justify-content-between`}>
                <div className="card-body d-flex flex-column align-items-center">
                  <h3 className="card-title text-center mb-4">{category.category}</h3>
                  <ul className="list-unstyled text-center mt-auto skill-list">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="skill-item">
                        <span className="skill-icon">{skill.icon}</span> {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
