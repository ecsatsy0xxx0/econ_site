import { useState, useEffect } from 'react';
import { sSpisok } from '../../API/MainApi';
import styles from './SpisokContainer.module.css';

const Frame = () => {
  const [Spisok, setSpisok] = useState(null);
  const [expanded, setExpanded] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const dat = await sSpisok();
        setSpisok(dat);
        setExpanded(Array(dat.length).fill(false));  // Инициализация expanded после загрузки
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
      }
    };
    loadData();
  }, []);

  const toggleExpand = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  if (!Spisok) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={styles.faqParent} id="fqa-section">
      <div className={styles.faq}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.iconContainer}>
              <div className={styles.button}>
                <div className={styles.buttonLabel}>FAQ</div>
              </div>
            </div>
            <div className={styles.titleContainer}>
              <div className={styles.iconContainer}>
                <div className={styles.subtitle}>Вы не спрашивали</div>
                <div className={styles.subtitle}>но мы ответили</div>
              </div>
            </div>
          </div>
          <div className={styles.faqContainer}>
            {Spisok.map((question, index) => (
              <div key={index} className={styles.questioncard}>
                <div className={styles.container}>
                  <div className={styles.titlecontainer}>
                    <div className={styles.title1}>{question.title}</div>
                  </div>
                  <div
                    className={styles.expandIcon}
                    onClick={() => toggleExpand(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      className={`${styles.plusIcon} ${expanded[index] ? styles.rotated : ''}`}
                      alt=""
                      src={question.icon}
                    />
                  </div>
                </div>
                {expanded[index] && question.description && (
                  <div className={styles.descriptioncontainer}>
                    <div
                      className={styles.description}
                      dangerouslySetInnerHTML={{ __html: question.description }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
