import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';

type CardProps = {
  title: string;
  description: string;
  moreDetails: string;
};

const Card: React.FC<CardProps> = ({ title, description, moreDetails }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [easterEggActive, setEasterEggActive] = useState(false);

  // Event listener for Easter egg
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'k') {
        setEasterEggActive(true);
        setTimeout(() => setEasterEggActive(false), 3000); // Reset after 3 seconds
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className={`${styles.card} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={openModal}
    >
      <h2>{title}</h2>
      <p>{description}</p>

      {/* Modal for more details */}
      {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span className={styles.close} onClick={closeModal}>&times;</span>
            <h2>More Details</h2>
            <p>{moreDetails}</p>
          </div>
        </div>
      )}

      {/* Easter egg overlay */}
      {easterEggActive && (
        <div className={styles.easterEgg}>
          <p>🎉 Surprise! 🎉</p>
          <audio autoPlay>
            <source src="Module4pt3/public/telephone-ringtone.wav" type="audio/mpeg" />
          </audio>
        </div>
      )}
    </div>
  );
};

export default Card;
