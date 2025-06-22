import { useState, useContext } from "react";
import styles from "./News.module.css";
import { LanguageContext } from "../LanguageContext"; // Подключаем контекст языка

const newsData = {
  ru: [
    {
      date: "15.04.2025",
      title: "Продолжается прием статей в №2(78) 2025 г.",
      description: "Уважаемые авторы! Продолжается прием статей в №2(78) 2025 г. Прием статей до 15.05.2025. Количество статей ограничено!",
    },
    {
      date: "13.01.2025",
      title: "Продолжается прием статей в №1(77) 2025 г.",
      description: "Уважаемые авторы! Продолжается прием рукописей статей в №1(77) 2025 г. Прием статей до 15.02.2025. Количество статей ограничено!",
    },
    {
      date: "09.12.2024",
      title: "Вышел из печати №4(76)_2024",
      description: "С полнотекстовой версией номера можно ознакомиться в рубрике «Архив номеров».",
    },
    {
      date: "27.09.2024",
      title: "Прием рукописей статей в №4(76) 2024",
      description: "Прием статей до 15.11.2024. Количество статей ограничено!",
    },
    {
      date: "25.09.2024",
      title: "Вышел из печати №3(75)_2024",
      description: "С полнотекстовой версией номера можно ознакомиться в рубрике «Архив номеров».",
    },
    {
      date: "26.03.2024",
      title: "Прием рукописей статей в №2(74) 2024",
      description: "Прием статей до 15.02.2024. Количество статей ограничено!",
    },
    {
      date: "25.03.2024",
      title: "Вышел из печати №1(73)_2024",
      description: "С полнотекстовой версией номера можно ознакомиться в рубрике «Архив номеров».",
    },
  ],
  en: [
    {
      date: "15.04.2025",
      title: "Submission of articles for issue №2(78) 2025 continues",
      description: "Dear authors! The submission of articles for issue №2(78) 2025 continues. Submission deadline: 15.05.2025. Limited number of articles!",
    },
    {
      date: "13.01.2025",
      title: "Submission of articles for issue №1(77) 2025 continues",
      description: "Dear authors! The submission of manuscripts for issue №1(77) 2025 continues. Submission deadline: 15.02.2025. Limited number of articles!",
    },
    {
      date: "09.12.2024",
      title: "Issue №4(76)_2024 has been published",
      description: "The full-text version of the issue is available in the 'Archive of Issues' section.",
    },
    {
      date: "27.09.2024",
      title: "Submission of manuscripts for issue №4(76) 2024",
      description: "Submission deadline: 15.11.2024. Limited number of articles!",
    },
    {
      date: "25.09.2024",
      title: "Issue №3(75)_2024 has been published",
      description: "The full-text version of the issue is available in the 'Archive of Issues' section.",
    },
    {
      date: "26.03.2024",
      title: "Submission of manuscripts for issue №2(74) 2024",
      description: "Submission deadline: 15.02.2024. Limited number of articles!",
    },
    {
      date: "25.03.2024",
      title: "Issue №1(73)_2024 has been published",
      description: "The full-text version of the issue is available in the 'Archive of Issues' section.",
    },
  ],
};

// Функция для сортировки новостей по дате
const sortNews = (newsArray) => {
  return newsArray.sort((a, b) => new Date(b.date.split('.').reverse().join('-')) - new Date(a.date.split('.').reverse().join('-')));
};

const News = () => {
  const { language } = useContext(LanguageContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const latestNews = sortNews([...newsData[language]]).slice(0, 6);
  const allNews = sortNews([...newsData[language]]);

  // Тексты на двух языках
  const text = {
    ru: {
      title: "Последние новости журнала",
      openAll: "Открыть все",
      modalTitle: "Все новости",
    },
    en: {
      title: "Latest Journal News",
      openAll: "Open All",
      modalTitle: "All News",
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{text[language].title}</h2>
        <button className={styles.openAll} onClick={() => setIsModalOpen(true)}>
          {text[language].openAll}
        </button>
      </div>

      <div className={styles.grid}>
        {latestNews.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardTop}>
              <img src={"icons/Handshake.svg"} alt="Handshake Icon" />
              <div className={styles.date}>{item.date}</div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>
              ✖
            </button>
            <h2>{text[language].modalTitle}</h2>
            <div className={styles.modalGrid}>
              {allNews.map((item, index) => (
                <div key={index} className={styles.modalCard}>
                  <div className={styles.modalDate}>{item.date}</div>
                  <div className={styles.modalTitle}>{item.title}</div>
                  <p className={styles.modalDescription}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;