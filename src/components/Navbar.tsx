import React, { useState } from "react";
import { Github, Linkedin, Mail, Sun, Moon, Clipboard } from "lucide-react";
import "./Navbar.css"; // Asegúrate de tener este archivo para el CSS personalizado

interface NavbarProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, darkMode }) => {
  const [copied, setCopied] = useState(false);
  const email = "rafael.ramos.jimenez04@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Resetear el estado después de 2 segundos
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg fixed-top ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} shadow`}
      >
        <div className="container-fluid">
          {/* Logo / Name */}
          <a className="navbar-brand fw-bold text-primary fs-3" href="#">
            Rafael Ramos
          </a>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="btn btn-outline-secondary rounded-circle ms-3 btn-dark-mode"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <Sun className="icon text-warning" />
              ) : (
                <Moon className="icon text-dark" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Sección de presentación */}
      <div className="pt-5 mt-5 presentation-container">
        <div className="loading-frame">
          <header className="container text-center py-5">
            <h2
              className={`display-4 animate-text-change ${darkMode ? "text-light" : "text-dark"} mb-4`}
            >
              Hello, I'm Rafael Ramos
            </h2>
            <p
              className={`lead animate-text-fade ${darkMode ? "text-light" : "text-dark"} mb-4`}
            >
              Full Stack Developer specializing in creating efficient, scalable
              solutions using modern technologies.
            </p>

            {/* Grouping the download button, email, and icons */}
            <div className="d-flex justify-content-center align-items-center flex-column gap-3">
              {/* Download Resume Button */}
              <a
                href={process.env.PUBLIC_URL + "/assets/curriculum.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg px-4 animate-button"
              >
                Open CV
              </a>

              {/* Email and Copy to Clipboard */}
              <div className="email-section mt-3">
                <p
                  className={`mb-1 ${darkMode ? "text-light" : "text-dark"} d-flex justify-content-center align-items-center`}
                >
                  <span>{email}</span>
                  <button
                    className="btn btn-outline-secondary btn-sm ms-2 btn-clipboard"
                    onClick={handleCopyEmail}
                  >
                    <Clipboard className="icon-sm" />{" "}
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </p>
              </div>

              {/* Social Links Section */}
              <div className="d-flex justify-content-center mt-3">
                <ul className="list-inline mb-0 animate-social-icons">
                  <li className="list-inline-item mx-3">
                    <a
                      href="https://github.com/rafaello129"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none social-link"
                    >
                      <Github className="icon text-primary" />
                    </a>
                  </li>
                  <li className="list-inline-item mx-3">
                    <a
                      href="https://linkedin.com/in/rafaelramos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none social-link"
                    >
                      <Linkedin className="icon text-primary" />
                    </a>
                  </li>
                  <li className="list-inline-item mx-3">
                    <a
                      href="mailto:rafael.ramos.jimenez04@gmail.com"
                      className="text-decoration-none social-link"
                    >
                      <Mail className="icon text-primary" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Navbar;
