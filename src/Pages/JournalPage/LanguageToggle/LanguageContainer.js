import { useContext } from "react";
import styles from './LanguageContainer.module.css';
import { LanguageContext } from "../LanguageContext"; // Импортируем контекст

const LanguageToggle = () => {
  const { language, toggleLanguage } = useContext(LanguageContext); // Получаем текущий язык и функцию смены языка

  return (
    <div className={styles.contentFrame}>
      <div className={styles.cover}>
        {/* Кнопка переключения языка */}
        <button className={styles.languageButton} onClick={toggleLanguage}>
          {language === "ru" ? "РУССКИЙ" : "ENGLISH "}
        </button>

        <div className={styles.titleContainer}>
          <p className={styles.title}>
            {language === "ru"
              ? "Научно-практический журнал"
              : "Scientific and Practical Journal"}
          </p>
          <p className={styles.title}>
            {language === "ru"
              ? '"Экономика: теория и практика"'
              : '"Economics: Theory and Practice"'}
          </p>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.primaryButton}>
            {language === "ru" ? "О ЖУРНАЛЕ" : "ABOUT THE JOURNAL"}
          </button>
          <button className={styles.secondaryButton}>
            {language === "ru" ? "ВОЗМОЖНОСТИ" : "OPPORTUNITIES"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageToggle;
