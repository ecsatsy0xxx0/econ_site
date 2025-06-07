import styles from './NewsContainer.module.css';
import { useState, useEffect } from 'react';
import { setNews } from '../../API/MainApi';
import { useNavigate } from "react-router-dom";
  
const Section = () => {
  const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/news"); // Убедитесь, что путь совпадает с маршрутом в index.js
  };
  const [News, setNewss] = useState(null);
  useEffect(() => {
      const loadData = async () => {
        try {
          const dat = await setNews();
          setNewss(dat);
        } catch (error) {
          console.error('Ошибка загрузки данных:', error);
        }
      };
      loadData();
  }, []);
  if (!News) {
    return <div>Загрузка...</div>; 
  }

  return (
    <div className={styles.section}>
      <div className={styles.mainContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.logoAndTitleContainer}>
            <div className={styles.logo}>
              <div className={styles.buttonLabel1}>ПОРТФОЛИО ФАКУЛЬТЕТА</div>
            </div>
            <div className={styles.titleContainer}>
              <div className={styles.title}>
                <p className={styles.p}>Последние</p>
                <p className={styles.p}>новости ЭФ</p>
              </div>
            </div>
          </div>
          <div className={styles.buttonContainer} onClick={handleNavigate}>
            <div className={styles.button2}>
                <div className={styles.buttonLabel2}>ОТКРЫТЬ ВСЕ</div>
            </div>
          </div>
        </div>
        <div className={styles.contentSection}>
          <div
            className={`${styles.sidebar} ${hovered ? styles.hovered : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div
              className={styles.container}
              style={{
                backgroundImage: `url(${News[0].image})`,
                filter: hovered ? 'grayscale(0%)' : 'grayscale(100%)',
                transition: 'filter 0.3s ease-in-out',
              }}
            >
              <div className={styles.iconWrapper}>
                <div className={styles.iconBackground}>
                  <img
                    className={styles.icon1}
                    alt=""
                    src={News[0].icon}
                    style={{
                      opacity: hovered ? 1 : 0.7,
                      transition: 'opacity 0.3s ease-in-out',
                    }}
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.titlecontainer}>
                  <div className={styles.tagcontainer}>
                    <div className={styles.button1}>
                      <div className={styles.buttonLabel}>{News[0].date}</div>
                    </div>
                    {News[0].tags.map((tag, tagIndex) => (
                      <div key={tagIndex} className={styles.button1}>
                        <div className={styles.buttonLabel}>{tag}</div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.container1}>
                    <div className={styles.title1}>
                      {News[0].title.map((line, lineIndex) => (
                        <p key={lineIndex} className={styles.p}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mainContentContainer}>
            {News.slice(1).map((news, index) => (
              <div key={index} className={styles.newsachivecard}>
                <div className={styles.icon}>
                  <img className={styles.icon1} alt="" src={news.icon} />
                  <div className={styles.cardHeading}>
                    <div className={styles.cardTitle}>{news.date}</div>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.titlecontainer}>
                    <div className={styles.cardHeading1}>
                      <div className={styles.cardTitle}>
                        {news.title.map((line, lineIndex) => (
                          <p key={lineIndex} className={styles.p}>{line}</p>
                        ))}
                      </div>
                    </div>
                    <div className={styles.cardDescriptionContainer}   
                        style={{
                          opacity: 1, // Убираем условия
                          transform: 'translateY(0)', // Без анимации
                          transition: 'none', // Отключаем переход
                          textAlign: 'left', // Выравниваем текст по левому краю
                        }}
                      >
                      <div
                        className={styles.cardDescription}
                        style={{
                          opacity: 1, // Убираем условия
                          transform: 'translateY(0)', // Без анимации
                          transition: 'none', // Отключаем переход
                          textAlign: 'left', // Выравниваем текст по левому краю
                        }}
                      >
                        {news.description}
                      </div>
                <div className={styles.cardButtons}>
                      <a
                        href={news.detailsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.button}  style={{ textDecoration: 'none'}}
                      >
                        Подробнее
                      </a>
                      <a
                        href={news.mediaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.button} style={{ textDecoration: 'none'}}
                      >
                        Статья в СМИ
                      </a>
                    </div>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
