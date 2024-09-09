import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer
      className={`${
        darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'
      } py-6 mt-12 relative`}
      style={{ zIndex: 0 }} // Asegura que el footer no se superponga
    >
      <div className="container mx-auto px-4 text-center">
        {/* Breve descripción */}
        <p className="footer-description mt-4">
          Rafael Ramos - Full Stack Developer | Passionate about solving complex problems through technology.
        </p>

        {/* Enlaces a redes sociales */}
        <div className="footer-social-icons flex justify-center space-x-6 mb-2">
          <a
            href="https://github.com/rafaello129"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="footer-icon"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/rafaelramos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-icon"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:rafael.ramos.jimenez04@gmail.com"
            aria-label="Email"
            className="footer-icon"
          >
            <FaEnvelope className="h-6 w-6" />
          </a>
        </div>

        {/* Información de derechos reservados */}
        <p className="text-sm footer-rights">
          &copy; 2023 Rafael Ramos. All rights reserved.
        </p>

        {/* Información de contacto adicional */}
        <p className="text-sm footer-contact mt-2">
          Email: <a href="mailto:rafael.ramos.jimenez04@gmail.com" className="footer-email">rafael.ramos.jimenez04@gmail.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
