import React, { useState } from 'react';
import './AboutMe.css'; // Asegúrate de importar tu archivo de CSS personalizado

interface AboutMeProps {
  darkMode: boolean; // El estado de darkMode que viene del componente padre
}

const AboutMe: React.FC<AboutMeProps> = ({ darkMode }) => {
  const [showMore, setShowMore] = useState(false); // Estado para controlar la expansión del contenido

  const toggleShowMore = () => {
    setShowMore(!showMore); // Alterna entre mostrar más o menos contenido
  };

  return (
    <section id="about" className="mb-5">
      <div className="container">
        <h2 className={`text-center mb-4 section-title ${darkMode ? 'text-light' : 'text-dark'}`}>
          About Me
        </h2>

        <div className={`about-card p-5 ${darkMode ? 'bg-dark-card text-light' : 'bg-light-card text-dark'} shadow-lg animate-card`}>
          <div className={`row align-items-center ${darkMode ? 'bg-dark-card text-light' : 'bg-light-card text-dark'} `}>
            {/* Image Section */}
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img
                src="/path-to-your-image.jpg" // Reemplaza con tu imagen
                alt="Rafael Ramos"
                className="about-image rounded-circle shadow-lg"
              />
            </div>

            {/* Text Section */}
            <div className="col-md-8">
              <div className="card-body">
                <p className="about-text">
                  I’m Rafael Ramos, a passionate Computer Systems Engineering student at the Instituto Tecnológico de Cancún. My journey is marked by significant achievements, including silver medals in both the 25th and 26th Mexican Olympiad of Informatics.
                </p>
                {!showMore && (
                  <p className="about-text">
                    Additionally, I became a semifinalist in the 2023 International Collegiate Programming Contest (Mexico). I have also taken on leadership roles as the President of the Programming Club at Tec Cancún.
                  </p>
                )}
                {showMore && (
                  <>
                    <p className="about-text">
                      Apart from competitions, I share my deep knowledge in competitive programming and foster a collaborative learning environment for fellow students. My passion for technology drives me to constantly seek new opportunities to grow and learn in the field.
                    </p>
                    <p className="about-text">
                      I am highly experienced in frontend technologies like React, Angular, and backend technologies like NestJS. I am also proficient in databases like MySQL and MongoDB, and I’m currently learning new technologies such as Flutter and Unity to expand my skill set.
                    </p>
                  </>
                )}
                <button className="btn btn-primary mt-3" onClick={toggleShowMore}>
                  {showMore ? 'Show Less' : 'Learn More'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
