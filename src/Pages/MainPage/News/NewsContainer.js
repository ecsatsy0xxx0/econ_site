import styles from './NewsContainer.module.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const newsData = [
	{
      date: '26 НОЯБРЯ',
      tags: ['КубГУ'],
      title: ['Подвели итоги', 'акселератора “Бизнес.Куб”'],
      image: 'photos/Decan.jpg',
      icon: 'icons/Heartbeat.svg',
      // description: '26 января в 13:30 Экономический факультет Кубанского государственного университета ждет своих абитуриентов!',
      detailsLink: 'https://kubsu.ru/open-day',
      mediaLink: 'https://kubsu.ru/media/open-day',
	},
	{
      date: '16.12.2024',
      tags: [],
      title: ['Твой Альфа-Шанс на 300000₽'],
      icon: 'icons/Heartbeat.svg',
      description: 'Дарим 100 грантов от Альфа-Банка для лучших студентов. У тебя есть идея инновационного проекта, но нет денег на его реализацию? Используй свой Альфа-Шанс!',
      detailsLink: '',
      mediaLink: 'https://vk.com/wall-185726_33091',
	},
	{
      date: '28.11.2024',
      tags: [],
      title: ['Наши студенты на конгрессе', 'молодых ученых'],
      icon: 'icons/Heartbeat.svg',
      description: 'Представляем разработки на Конгрессе в рамках работы площадки НОЦ Юга России',
      detailsLink: ' ',
      mediaLink: 'https://vk.com/wall-185726_33082',
	},
	{
      date: '17.11.2024',
      tags: [],
      title: ['🔥 Наши на «ТехПред 2024»', 'в Москве!'],
      icon: 'icons/Heartbeat.svg',
      description: 'В Москве стартовал событие этого года в сфере техпреда — Всероссийский форум технологического предпринимательства.',
      detailsLink: ' ',
      mediaLink: 'https://vk.com/wall-185726_33079',
	},
	{
      date: '02.10.2024',
      tags: [],
      title: ['🟢Сбер приглашает тебя на стажировку'],
      icon: 'icons/Heartbeat.svg',
      description: 'Открыт набор на оплачиваемую стажировку в Сбере для студентов очной формы обучения',
      detailsLink: ' ',
      mediaLink: 'https://vk.com/wall-185726_33065',
	},
];
  
const Section = () => {
  const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/news"); // Убедитесь, что путь совпадает с маршрутом в index.js
  };
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
                backgroundImage: `url(${newsData[0].image})`,
                filter: hovered ? 'grayscale(0%)' : 'grayscale(100%)',
                transition: 'filter 0.3s ease-in-out',
              }}
            >
              <div className={styles.iconWrapper}>
                <div className={styles.iconBackground}>
                  <img
                    className={styles.icon1}
                    alt=""
                    src={newsData[0].icon}
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
                      <div className={styles.buttonLabel}>{newsData[0].date}</div>
                    </div>
                    {newsData[0].tags.map((tag, tagIndex) => (
                      <div key={tagIndex} className={styles.button1}>
                        <div className={styles.buttonLabel}>{tag}</div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.container1}>
                    <div className={styles.title1}>
                      {newsData[0].title.map((line, lineIndex) => (
                        <p key={lineIndex} className={styles.p}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mainContentContainer}>
            {newsData.slice(1).map((news, index) => (
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
