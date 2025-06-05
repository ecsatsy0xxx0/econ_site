import { useEffect, useRef } from 'react';
import styles from './TitleContainer.module.css';

const buttonLabels = [
  { label: "О факультете", style: styles.button },
  { label: "Направления", style: styles.button1 },
];

const advantageCards = [
  {
    icon: "icons/Component 1.svg",
    titles: ["Экспертность", "в обучении"],
    hoverText: "Учись у лучших: докторов наук, опытных экономистов и успешных управленцев. Стань востребованным в любой сфере рынка профессионалом",
  },
  {
    icon: "icons/Sparkle.svg",
    titles: ["Инновации в", "образовании"],
    hoverText: "Освой цифровые технологии, симуляции и реальные кейсы от ведущих компаний. Мы готовим лидеров, готовых к вызовам нового времени.",
  },
  {
    icon: "icons/Handshake.svg",
    titles: ["Партнерство", "с компаниями"],
    hoverText: "Стажируйся в лучших компаниях региона и страны: начинай строить карьеру еще во время учебы. Мы откроем тебе двери к работодателям!",
  },
  {
    icon: "icons/RocketLaunch.svg",
    titles: ["Успешный", "карьерный старт"],
    hoverText: "87% наших выпускников находят престижную работу уже через 6 месяцев. Получи знания и практические навыки, которые приведут тебя к успеху",
  },
];

const Section = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            entry.target.querySelector(`.${styles.hoverText}`).classList.add(styles.hoverVisible);
          } else {
            entry.target.classList.remove(styles.visible);
            entry.target.querySelector(`.${styles.hoverText}`).classList.remove(styles.hoverVisible);
          }
        });
      },
      { threshold: 0.5 }
    );
  
    cardRefs.current.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);
  
  const handleScrollToDirections = () => {
    const directionsElement = document.getElementById("spesh-section");
    if (directionsElement) {
      directionsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  
  const handleScrollToDecan = () => {
    const decanElement = document.getElementById('decancontainer');
    if (decanElement) {
      decanElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className={styles.section}>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.background}>
            <div className={styles.titlecontainer}>
              <div className={styles.heading1}>
                <div className={styles.title}>
                  <span>{`Экономический факультет `}</span>
                  <span className={styles.span}>КубГУ</span>
                </div>
              </div>
            </div>
            <div className={styles.buttoncontainer}>
              {buttonLabels.map((button, index) => (
                <div
                  key={index}
                  className={button.style}
                  onClick={
                    button.label === "Направления"
                      ? handleScrollToDirections
                      : button.label === "О факультете"
                      ? handleScrollToDecan
                      : null
                  }
                >
                  <div className={styles.buttonLabel}>{button.label}</div>
                </div>
              ))}
            </div>
            <img className={styles.logo3whiteIcon} alt="" src="icons/Logo3White.svg" />
          </div>
          <div className={styles.topcoverrightbanner}>
            <div className={styles.videocontainer}>
              <video
                className={styles.containerIcon}
                src="muve/video_girl.mp4"
                autoPlay
                muted
                loop
              >
                Ваш браузер не поддерживает видео.
              </video>
            </div>
          </div>
        </div>
        <div className={styles.container1}>
          {advantageCards.map((card, index) => (
            <div
              key={index}
              className={`${styles.doneadventagecard1}`}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <div className={styles.adventagecard}>
                <img className={styles.sparkleIcon} alt="" src={card.icon} />
                <div className={styles.textcontainer}>
                  <div className={styles.title1}>
                    {card.titles.map((title, i) => (
                      <p key={i} className={styles.p}>{title}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.hoverText} style={{ textAlign: 'left' }}>{card.hoverText}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;