import { useEffect, useRef, useState} from 'react';
import styles from './TitleContainer.module.css';
import { sTitle1, sTitle2 } from '../../API/MainApi';

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

    const [Title, setTitle] = useState(null);
    const [Title2, setTitle2] = useState(null);
    useEffect(() => {
        const loadData = async () => {
          try {
            const dat = await sTitle1();
            const dat2 = await sTitle2();
            setTitle(dat);
            setTitle2(dat2);
          } catch (error) {
            console.error('Ошибка загрузки данных:', error);
          }
        };
        loadData();
    }, []);
    if (!Title || !Title2) {
      return <div>Загрузка...</div>; 
    }

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
              {Title.map((button, index) => (
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
          {Title2.map((card, index) => (
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