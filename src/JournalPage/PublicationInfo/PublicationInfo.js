import { useContext } from "react";
import styles from "./PublicationInfo.module.css";
import { LanguageContext } from "../LanguageContext"; // Подключаем контекст языка

const publicationDocuments = {
  ru: [
    {
      title: "Условия публикации",
      pdfUrl: "/images/documents/Conditions_of_publication.pdf",
      icon: "📄", // Можно заменить на иконку из FontAwesome или SVG
    },
    {
      title: "Публикационная этика",
      pdfUrl: "/images/documents/Publication_Ethics.pdf",
      icon: "🏛️",
    },
    {
      title: "Порядок рецензирования рукописей",
      pdfUrl: "/images/documents/reviewing.pdf",
      icon: "📑",
    },
  ],
  en: [
    {
      title: "Publication Terms",
      pdfUrl: "/images/documents/Conditions_of_publication.pdf",
      icon: "📄",
    },
    {
      title: "Publication Ethics",
      pdfUrl: "/images/documents/Publication_Ethics.pdf",
      icon: "🏛️",
    },
    {
      title: "Peer Review Procedure",
      pdfUrl: "/images/documents/reviewing.pdf",
      icon: "📑",
    },
  ],
};

const PublicationInfo = () => {
  const { language } = useContext(LanguageContext); // Получаем текущий язык

  // Тексты на двух языках
  const text = {
    ru: {
      title: "Важная информация для публикации",
      opportunities: "ВОЗМОЖНОСТИ",
    },
    en: {
      title: "Important Information for Publication",
      opportunities: "OPPORTUNITIES",
    },
  };

  const handleCardClick = (pdfUrl) => {
    window.open(pdfUrl, "_blank"); // Открывает PDF в новой вкладке
  };

  return (
    <div className={styles.container}>
      {/* Блок "ВОЗМОЖНОСТИ" */}
      <div className={styles.buttonContainer}>
        <button className={styles.optionsButton}>{text[language].opportunities}</button>
      </div>
      <h2 className={styles.title}>{text[language].title}</h2>

      <div className={styles.grid}>
        {publicationDocuments[language].map((doc, index) => (
          <div key={index} className={styles.card} onClick={() => handleCardClick(doc.pdfUrl)}>
            <div className={styles.icon}>{doc.icon}</div>
            <div className={styles.text}>{doc.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicationInfo;
