import styles from './DostishContainer.module.css';
import { useNavigate } from "react-router-dom";
const achievementsData = [
  {
    date: '30 ноября, Сириус',
    tags: ['конгресс', 'наука'],
    image: 'photos/OpPRe6ad_9g.png',
  },
  {
    date: '6 июля, Краснодар',
    tags: ['хакатон', 'аквариум'],
    image: 'photos/CnyEuMzTzN8Qn3Pazd3Z0ibxLjSrnhvSxtGk6NbrFSQuJSg7X8wqgqbu_vCxWmLavdtTXQNaAyW2q4Qqp0u8X59A.jpg',
  },
  {
    date: '2 февраля, Сочи',
    tags: ['олимпиада', 'экономика'],
    image: 'photos/photo_2024-12-16_15-41-24.jpg',
  },
];

const Section = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/progressstudent"); // Убедитесь, что путь совпадает с маршрутом в index.js
  };
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
            <div className={styles.button1} >
              <div className={styles.buttonLabel} >подробнее</div>
            </div>
          </div>
        </div>
        <div className={styles.container4}>
          {achievementsData.map((achievement, index) => (
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