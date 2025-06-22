import { useState, useContext } from "react";
import styles from "./Archive.module.css";
import { LanguageContext } from "../LanguageContext";

const latestYear = 2025;
const oldestYear = 2011;

const generateArchiveItems = (startYear, endYear) => {
  const archive = [];
  for (let year = startYear; year >= endYear; year--) {
    archive.push({ title: `${year}`, pdfUrl: "", isYear: true }); // Год как заголовок
    if (year === 2025) {
      // Для 2025 года только 1 выпуск
      archive.push({ title: `№1/${year}`, pdfUrl: `/images/1_${year}.pdf` });
    } else {
      // Для остальных лет по 4 выпуска
      for (let issue = 4; issue >= 1; issue--) {
        archive.push({ title: `№${issue}/${year}`, pdfUrl: `/images/${issue}_${year}.pdf` });
      }
    }
  }
  return archive;
};

const allArchiveItems = generateArchiveItems(latestYear, oldestYear);
const archiveItems = allArchiveItems.filter(item => !item.isYear).slice(0, 6); // Только 6 последних номеров

const Archive = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useContext(LanguageContext);

  const text = {
    ru: {
      archiveTitle: "Архив номеров",
      openAll: "Открыть все",
      allArchiveTitle: "Архив всех номеров",
    },
    en: {
      archiveTitle: "Issue Archive",
      openAll: "Open All",
      allArchiveTitle: "Full Issue Archive",
    },
  };

  const handleCardClick = (pdfUrl) => {
    if (pdfUrl) window.open(pdfUrl, "_blank");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{text[language].archiveTitle}</h2>
        <button className={styles.openAll} onClick={() => setIsModalOpen(true)}>
          {text[language].openAll}
        </button>
      </div>

      <div className={styles.grid}>
        {archiveItems.map((item, index) => (
          <div key={index} className={styles.card} onClick={() => handleCardClick(item.pdfUrl)}>
            <img src={"icons/Handshake.svg"} alt="Handshake Icon" />
            <div className={styles.date}>{item.title}</div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>
              ✖
            </button>
            <h2>{text[language].allArchiveTitle}</h2>
            <div className={styles.modalGrid}>
              {allArchiveItems.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.modalCard} ${item.isYear ? styles.yearCard : ""}`}
                  onClick={() => !item.isYear && handleCardClick(item.pdfUrl)}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Archive;