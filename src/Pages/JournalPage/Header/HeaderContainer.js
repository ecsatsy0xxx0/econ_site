import styles from './HeaderContainer.module.css';
import React, { useState } from 'react';

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

  const handleLogoClick = () => {
    window.location.href = '/'; // Перенаправление на главную страницу
  };

  return (
    <div className={styles.backgroundmask}>
      <div className={styles.overlay}></div>
      <div className={styles.header}>
        {/* Логотип */}
        <div className={styles.logoContainer} onClick={handleLogoClick}>
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
          <div className={styles.button}>
            <div className={styles.buttonLabel}>О факультете</div>
          </div>
          <div className={styles.button}>
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