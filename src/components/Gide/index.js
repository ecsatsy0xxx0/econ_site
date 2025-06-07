import styles from './GideContainer.module.css';
import React, { useEffect, useState } from 'react';
import { gideStudents } from '../../API/MainApi';

const GideForAppliCats = () => {
  const [gideSteps, setGide] = useState([]);

  useEffect(() => {
    gideStudents().then(data => {
      if (Array.isArray(data)) { 
        setGide(data);
      } else {
        console.error("Ошибка данных: ожидается массив", data);
      }
    }).catch((error) => {
      console.error("Ошибка загрузки данных:", error);
    });
  }, []); 


  if (gideSteps.length === 0) {
    return <div>Загрузка...</div>;  // Индикатор загрузки
  }
  return (
    <div id="gidecontainer">
      <div className={styles.gideforapplicats}>
        <div className={styles.container}>
          <div className={styles.container1}>
            <div className={styles.container2}>
              <div className={styles.button}>
                <div className={styles.buttonLabel}>для бакалавриата 2025</div>
              </div>
              <div className={styles.container3}>
                <div className={styles.heading2}>
                  <div className={styles.title}>Краткий гайд</div>
                  <div className={styles.title}>по поступлению</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container4}>
            {gideSteps.map((step, index) => (
              <div
                key={index}
                className={index % 2 === 0 ? styles.stepcard1 : styles.stepcard}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className={styles.stepnumber1}>
                      <div className={styles.number}>{step.number}</div>
                    </div>
                    <div className={styles.stepcontent}>
                      <div className={styles.title1}>{step.title}</div>
                      <div className={styles.content}>
                        <div className={styles.description}>
                          {step.description.map((desc, i) => (
                            <p key={i} className={styles.p}>{desc}</p>
                          ))}
                        </div>
                        <div className={styles.buttoncontainer}>
                          {step.buttons.map((button, i) => (
                            <div key={i} className={styles.button}>
                              <div className={styles.buttonLabel}>{button}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.stepcontent}>
                      <div className={styles.title1}>{step.title}</div>
                      <div className={styles.content}>
                        <div className={styles.description}>
                          {step.description.map((desc, i) => (
                            <p key={i} className={styles.p}>{desc}</p>
                          ))}
                        </div>
                        <div className={styles.buttoncontainer}>
                          {step.buttons.map((button, i) => (
                            <div key={i} className={styles.button}>
                              <div className={styles.buttonLabel}>{button}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={styles.stepnumber}>
                      <div className={styles.number}>{step.number}</div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GideForAppliCats;
