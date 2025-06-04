import styles from './HeaderContainer.module.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const BackgroundMask = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen); // Переключаем состояние меню
  };
  const handleScrollToSpesh = () => {
    const speshElement = document.getElementById('spesh-section');
    if (speshElement) {
      speshElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToDecan = () => {
    const decanElement = document.getElementById('decancontainer');
    if (decanElement) {
      decanElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const navigate = useNavigate();
  const handleDep = () => {
    navigate("/department");
  };
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.header2}>
      <div className={styles.header}>
        {/* Логотип */}
        <div className={styles.logoContainer}  onClick={handleScrollToTop}>
          <div className={styles.logo}>
            <img
              className={styles.logo3blueIcon}
              alt="Логотип"
              src="icons/Logo3Blue.svg"
            />
          </div>
        </div>
        {/* Навигационные кнопки */}
        <div className={styles.container}>
          <div className={styles.button} onClick={handleScrollToDecan}>
            <div className={styles.buttonLabel}>О факультете</div>
          </div>
          <div className={styles.button} onClick={handleDep}>
            <div className={styles.buttonLabel}>Кафедры</div>
          </div>
          <div
            className={styles.button}
            onClick={handleScrollToSpesh}
          >
            <div className={styles.buttonLabel}>Направления</div>
          </div>
        </div>
        {/* Кнопка "Поступить" */}
        <div
          className={styles.button3}
          onClick={() => window.open('https://t.me/econom_kubsu_ab', '_blank')}
        >
          <div className={styles.buttonLabel}>Поступить</div>
        </div>
        {/* Кнопка-гамбургер для мобильных */}
        <div className={styles.hamburgerMenu} onClick={handleMenuClick}>
          <img
            src="icons/hamburger.svg"
            alt="Меню"
            className={styles.hamburgerIcon}
          />
        </div>
      </div>
      {/* Мобильное меню с кнопками */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.menuButton}>О факультете</div>
          <div className={styles.menuButton}>Кафедры</div>
          <div
            className={styles.menuButton}
            onClick={handleScrollToSpesh}
          >
            Направления
          </div>
          <div
            className={styles.menuButton}
            onClick={() => window.open('https://t.me/econom_kubsu_ab', '_blank')}
          >
            Поступить
          </div>
        </div>
      )}
    </div>
  );
};

export default BackgroundMask;
