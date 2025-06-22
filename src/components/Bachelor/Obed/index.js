import styles from './ObedContainer.module.css';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { associationsObed } from '../../../API/MainApi';

const Section = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/associations"); // Убедитесь, что путь совпадает с маршрутом в index.js
  };

  const [associations, setObed] = useState([]);

  useEffect(() => {
    associationsObed().then(data => {
      if (Array.isArray(data)) {
        setObed(data);
      } else {
        console.error("Ошибка данных: ожидается массив", data);
      }
    }).catch((error) => {
      console.error("Ошибка загрузки данных:", error);
    });
  }, []);

  if (associations.length === 0) {
    return <div>Загрузка...</div>;
  }
  return (
    <div className={styles.section}>
      <div className={styles.mainContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.headerContent}>
            <div className={styles.tag}>
              <div className={styles.buttonLabel}>для активистов</div>
            </div>
            <div className={styles.headerTitle}>
              <p className={styles.p}>Объединения</p>
              <p className={styles.p}>факультета</p>
            </div>
          </div>
          <div className={styles.button} onClick={handleNavigate}>
            <div className={styles.buttonLabel}>открыть все</div>
          </div>
        </div>
        <div className={styles.cardsContainer}>
          {associations.map((association, index) => (
            <div key={index} className={styles.donestudassociations}>
              <div className={styles.studassociations}>
                <img className={styles.icon} alt="" src={association.icon} />
                <div className={styles.cardContent}>
                  <div className={styles.cardHeading}>
                    <div className={styles.cardTitle}>{association.title}</div>
                  </div>
                  <div className={styles.cardDescriptionContainer}>
                    <div className={styles.cardDescription}>
                      {association.description.map((line, lineIndex) => (
                        <p key={lineIndex} className={styles.p}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
