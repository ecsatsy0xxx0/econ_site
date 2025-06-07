import styles from './DostishContainer.module.css';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { fetchAchievements } from '../../API/MainApi';

const Section = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    fetchAchievements().then(data => {
      if (Array.isArray(data)) {
        setAchievements(data);
      } else {
        console.error("Ошибка данных: ожидается массив", data);
      }
    }).catch((error) => {
      console.error("Ошибка загрузки данных:", error);
    });
  }, []);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/progressstudent");
  };

  if (achievements.length === 0) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <div className={styles.button}>
              <div className={styles.buttonLabel}>Портфолио факультета</div>
            </div>
            <div className={styles.heading2}>
              <div className={styles.div}>
                <p className={styles.p}>Достижения</p>
                <p className={styles.p}>наших студентов</p>
              </div>
            </div>
          </div>
          <div className={styles.container3} onClick={handleNavigate}>
            <div className={styles.button1}>
              <div className={styles.buttonLabel}>подробнее</div>
            </div>
          </div>
        </div>
        <div className={styles.container4}>
          {achievements.map((achievement, index) => (
            <div key={index} className={styles.newsachivecard}>
              <div className={styles.image}>
                <img className={styles.containerIcon} alt="" src={achievement.image} />
              </div>
              <div className={styles.newsacivecardtagbar}>
                <div className={styles.container5}>
                  <div className={styles.title}>{achievement.date}</div>
                </div>
                <div className={styles.container6}>
                  {achievement.tags.map((tag, tagIndex) => (
                    <div key={tagIndex} className={styles.button}>
                      <div className={styles.buttonLabel}>{tag}</div>
                    </div>
                  ))}
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