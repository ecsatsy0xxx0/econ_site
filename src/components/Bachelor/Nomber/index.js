import styles from './NomderContainer.module.css';
import { useState, useEffect } from 'react';
import { indNumber } from '../../../API/MainApi';

const AnimatedNumber = ({ targetNumber, displayNumber }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // длительность анимации в мс
    const increment = targetNumber / (duration / 16); // прирост за кадр (~60fps)

    const animate = () => {
      start += increment;
      if (start >= targetNumber) {
        setCurrentNumber(targetNumber);
      } else {
        setCurrentNumber(Math.ceil(start));
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [targetNumber]);

  // Логика определения вывода
  const getDisplay = () => {
    if (displayNumber.startsWith('№')) {
      return displayNumber;
    } 
    
    if (displayNumber.includes('млн ₽')) {
      return `${currentNumber}+ млн ₽`;
    }

    if (displayNumber.includes('тыс')) {
      return `${currentNumber}+ тыс`;
    }

    if (displayNumber.includes('лет')) {
      return `${currentNumber}+ лет`;
    }

    // По умолчанию просто число с плюсом
    return `${currentNumber}+`;
  };

  return <div className={styles.div4}>{getDisplay()}</div>;
};

const Section = () => {
  const [indicators, setIndicators] = useState([]);

  useEffect(() => {
    indNumber().then(data => {
      if (Array.isArray(data)) {
        setIndicators(data);
      } else {
        console.error("Ошибка данных: ожидается массив", data);
      }
    }).catch((error) => {
      console.error("Ошибка загрузки данных:", error);
    });
  }, []);

  if (indicators.length === 0) {
    return <div>Загрузка...</div>;
  }
  return (
    <div className={styles.section}>
      <div className={styles.indicators}>
        <div className={styles.parent}>
          <div className={styles.div}>1970  –</div>
          <div className={styles.div1}>–  2025</div>
        </div>
        <div className={styles.containerParent}>
          <div className={styles.container}>
            <div className={styles.container1}>
              <div className={styles.button}>
                <div className={styles.buttonLabel}>55 лет истории</div>
              </div>
              <div className={styles.container2}>
                <div className={styles.heading2}>
                  <div className={styles.div2}>Эконом</div>
                  <div className={styles.div2}>в цифрах</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container3}>
            {indicators.map((indicator, index) => (
              <div key={index} className={styles.overlay}>
                <div className={styles.container4}>
                  <div className={styles.container5}>
                    <AnimatedNumber
                      targetNumber={indicator.number}
                      displayNumber={indicator.displayNumber}
                    />
                  </div>
                </div>
                <div className={styles.heading3}>
                  <div className={styles.div5}>
                    {indicator.description.map((line, lineIndex) => (
                      <span>
                        <p key={lineIndex} className={styles.p}>{line}</p>
                      </span>
                    ))}
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