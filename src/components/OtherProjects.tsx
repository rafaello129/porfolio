import React, { useState } from "react";
import { Carousel, Modal } from "react-bootstrap";
import "./OtherProjects.css"; // Asegúrate de incluir el archivo CSS
import logoambar from "../assets/ambar/logoambar.png"
import ambar1 from "../assets/ambar/ambar1.png"
import ambar2 from "../assets/ambar/ambar2.png"

interface OtherProjectsProps {
  darkMode: boolean;
}

const otherProjects = [
  {
    title: "Project Lead - Ámbar",
    description:
      "Led the development of a platform similar to Airbnb for managing properties, bookings, and maintenance tasks.",
    images: [
      logoambar,
      ambar1,
      ambar2
    ],
  },
  {
    title: "2D Space Shooter Game",
    description:
      "Developed a 2D game where players control a spaceship, shoot meteors, and score points while avoiding collisions.",
    images: [
      "https://via.placeholder.com/800x400?text=Space+Game+Image+1",
      "https://via.placeholder.com/800x400?text=Space+Game+Image+2",
      "https://via.placeholder.com/800x400?text=Space+Game+Image+3",
    ],
  },
];

const OtherProjects: React.FC<OtherProjectsProps> = ({ darkMode }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedProject(index);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section id="other-projects" className="mb-5">
      <h2 className={`text-3xl font-bold mb-5 ${darkMode ? "text-light" : "text-dark"}`}>
        Other Projects
      </h2>
      <div className="row">
        {otherProjects.map((project, index) => (
          <div
            key={index}
            className="col-md-4 mb-4"
            onClick={() => handleCardClick(index)}
            style={{ cursor: "pointer" }}
          >
            <div className={`card other-project-card ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject !== null && (
        <Modal
          show={showModal}
          onHide={handleClose}
          centered
          className={`custom-modal ${darkMode ? "modal-dark" : "modal-light"}`}
        >
          <Modal.Header closeButton className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
            <Modal.Title>{otherProjects[selectedProject].title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
            <Carousel>
              {otherProjects[selectedProject].images.map((image, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={`Slide ${idx + 1}`}
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                  <Carousel.Caption>
                    <h5>{`Image ${idx + 1}`}</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Modal.Body>
          <Modal.Footer className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
            <button className="btn btn-primary" onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
};

export default OtherProjects;
