import React, { useState } from "react";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import OtherProjects from "./components/OtherProjects"; // Importar la nueva sección
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Incluye el CSS actualizado para el fondo dinámico

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Fondo dinámico */}
      <div className="background-animation"></div>

      {/* Navbar Component */}
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      {/* Main Content */}
      <main className="container">
        {/* About Me Section */}
        <section id="about" className="mb-5">
          <AboutMe darkMode={darkMode} />
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-5">
          <Projects darkMode={darkMode} />
        </section>

        {/* Other Projects Section */}
        <section id="other-projects" className="mb-5">
          <OtherProjects darkMode={darkMode} />
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-5">
          <Skills darkMode={darkMode} />
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="mb-5">
          <Achievements darkMode={darkMode} />
        </section>
      </main>

      {/* Footer Component */}
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
