import React, { useState } from "react";
import "./Projects.css";
import logoPeesad from "../assets/peesad/logoPeesad.png";
import vistap from "../assets/peesad/vista.png";
import asitenciap from "../assets/peesad/asistencia.png";
import creacionp from "../assets/peesad/creacion.jpg.png";
import filtrarP from "../assets/peesad/filtrar.png";
import logorh from "../assets/rh/logorh.png";
import filtrarrh from "../assets/rh/filtrar (1).png";
import darkrh from "../assets/rh/dark.png";
import crearrh from "../assets/rh/crear.png";
import tablarh from "../assets/rh/tabla.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Para las flechas de navegación

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const toggleDetails = (index: number) => {
    setSelectedProject(index);
    setCurrentImageIndex(0); // Resetear el índice de la imagen cuando se abra un nuevo proyecto
  };

  const closeDetails = () => {
    setSelectedProject(null);
  };

  const nextImage = (project: any) => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (project: any) => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const projects = [
    {
      name: "Student Attendance Software for PEESaD",
      technologies: "NestJS, MySQL, React",
      description:
        "Backend development and part of the frontend for managing attendance.",
      additionalInfo:
        "I created the entire backend using NestJS and MySQL, handling services, endpoints, and data management. I also developed half of the frontend with React, implementing user management and attendance visualization interfaces.",
      responsibilities: [
        "Backend development using NestJS",
        "Database design and management with MySQL",
        "Frontend implementation for user and attendance management",
        "API development and integration with frontend",
      ],
      challenges: [
        "Building a scalable backend architecture",
        "Optimizing data retrieval for large datasets",
        "Ensuring real-time data updates",
      ],
      images: [logoPeesad, vistap, asitenciap, creacionp, filtrarP],
    },
    {
      name: "Platform for Coordination of Benito Juárez Scholarships",
      technologies: "NestJS, React",
      description:
        "Developed the backend architecture and built administrative interfaces.",
      additionalInfo:
        "This project facilitated online scholarship applications and management, allowing real-time data handling with a robust backend system. I worked on the database design and front-end admin interfaces.",
      responsibilities: [
        "Database structure and management",
        "Developing admin interface with React",
        "Real-time data management and retrieval",
      ],
      challenges: [
        "Ensuring data consistency across multiple users",
        "Handling a large number of concurrent users",
      ],
      images: [
        "https://via.placeholder.com/600x400?text=Scholarships+Image+1",
        "https://via.placeholder.com/600x400?text=Scholarships+Image+2",
      ],
    },
    {
      name: "HR System Incidence Module",
      technologies: "C#, React",
      description:
        "Restructured incidence calculation and created a dynamic interface.",
      additionalInfo:
        "This module optimized the management of employee incidences at TecNM, with flexible configuration for different incidence types. I implemented the backend in C# and the frontend with React for dynamic data display.",
      responsibilities: [
        "Redesigning incidence calculation algorithms",
        "Creating a dynamic and responsive user interface",
        "Backend development in C#",
      ],
      challenges: [
        "Handling complex business logic",
        "Ensuring scalability and flexibility",
      ],
      images: [logorh, filtrarrh, darkrh, crearrh, tablarh],
    },
  ];

  return (
    <section id="projects" className="projects-section mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div
              className={`card project-card ${
                darkMode ? "bg-dark text-light" : "bg-light text-dark"
              } shadow-sm`}
            >
              <img
                src={project.images[0]}
                alt={project.name}
                className="card-img-top project-image"
              />
              <div className="card-body text-center">
                <h3 className="card-title">{project.name}</h3>
                <p className="text-muted">{project.technologies}</p>
                <p className="card-text">{project.description}</p>
                <button
                  className="btn btn-outline-primary btn-sm mt-3"
                  onClick={() => toggleDetails(index)}
                >
                  Show More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject !== null && (
        <div className="custom-popup" onClick={closeDetails}>
          <div
            className={`popup-content ${
              darkMode ? "bg-dark text-light" : "bg-light text-dark"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={`close-btn ${
                darkMode ? "bg-dark text-light" : "bg-light text-dark"
              }`}
              onClick={closeDetails}
            >
              &times;
            </button>

            <div
              className={`popup-header ${
                darkMode ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              <h2>{projects[selectedProject].name}</h2>
            </div>

            <div className="popup-body">
              <div className="carousel-container">
                <button
                  className="carousel-control prev"
                  onClick={() => prevImage(projects[selectedProject])}
                >
                  <FaChevronLeft />
                </button>
                <img
                  src={projects[selectedProject].images[currentImageIndex]}
                  alt={`Project image ${currentImageIndex + 1}`}
                  className="carousel-image"
                />
                <button
                  className="carousel-control next"
                  onClick={() => nextImage(projects[selectedProject])}
                >
                  <FaChevronRight />
                </button>
              </div>

              <div
                className={`details-section ${
                  darkMode ? "bg-dark text-light" : "bg-light text-dark"
                }`}
              >
                <h3>Technologies Used</h3>
                <p>{projects[selectedProject].technologies}</p>

                <h3>Responsibilities</h3>
                <ul>
                  {projects[selectedProject].responsibilities.map(
                    (responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    )
                  )}
                </ul>

                <h3>Challenges</h3>
                <ul>
                  {projects[selectedProject].challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>

                <h3>Additional Information</h3>
                <p>{projects[selectedProject].additionalInfo}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
