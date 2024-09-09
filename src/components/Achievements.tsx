import React, { useState } from 'react';
import './Achievements.css'; // Importa el CSS personalizado

interface Achievement {
  title: string;
  description: string;
  details: string;
  date: string;
  location: string;
}

interface AchievementsProps {
  darkMode: boolean;
}

const Achievements: React.FC<AchievementsProps> = ({ darkMode }) => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null); // Estado para manejar el logro seleccionado

  const achievements = [
    {
      title: 'Silver Medal',
      description: '25th Mexican Olympiad of Informatics',
      details: 'Achieved second place among the top young programmers in Mexico, showcasing exceptional problem-solving skills and algorithmic thinking. This competition took place in 2018.',
      date: '2018',
      location: 'Mexico City, Mexico',
    },
    {
      title: 'Silver Medal',
      description: '26th Mexican Olympiad of Informatics',
      details: 'Once again secured a silver medal by solving complex algorithmic problems under timed conditions. The competition helped further refine programming and analytical skills.',
      date: '2019',
      location: 'Guadalajara, Mexico',
    },
    {
      title: 'Semifinalist',
      description: '2023 International Collegiate Programming Contest (Mexico)',
      details: 'Reached the semifinals in one of the world’s most prestigious programming contests, which tests teamwork, problem-solving, and advanced algorithm design.',
      date: '2023',
      location: 'Virtual (Due to COVID-19)',
    },
    {
      title: 'President',
      description: 'Programming Club at Tec Cancún',
      details: 'Led the club in organizing coding workshops and algorithm training sessions. As president, encouraged collaboration and mentorship among students.',
      date: '2021-2022',
      location: 'Cancún, Mexico',
    },
  ];

  const openModal = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
  };

  const closeModal = () => {
    setSelectedAchievement(null);
  };

  return (
    <section id="achievements" className="mb-16">
      <h2 className={`text-center mb-8 section-title ${darkMode ? 'text-light' : 'text-dark'}`}>
        Achievements
      </h2>

      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={`achievement-card ${darkMode ? 'bg-dark-card' : 'bg-light-card'} shadow-lg`}
            onClick={() => openModal(achievement)} // Abrir modal al hacer clic
          >
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedAchievement && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-border-wrapper">
            <div
              className={`modal-content ${darkMode ? 'bg-dark' : 'bg-light'} shadow-lg`}
              onClick={(e) => e.stopPropagation()} // Evitar que se cierre el modal al hacer clic dentro
            >
              <h3 className="modal-title">{selectedAchievement.title}</h3>
              <p className="modal-description">{selectedAchievement.description}</p>
              <p className="modal-details">{selectedAchievement.details}</p>
              <div className="modal-meta">
                <p>
                  <strong>Date:</strong> {selectedAchievement.date}
                </p>
                <p>
                  <strong>Location:</strong> {selectedAchievement.location}
                </p>
              </div>
              <button className="btn btn-secondary mt-3" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
