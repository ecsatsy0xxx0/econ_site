import styles from './TitleD.module.css';
import { useEffect, useState} from 'react';
import { titleTradData } from '../../../API/MainApi';

const BackgroundMask = () => {
  const [titleDat, setTitleData] = useState(null);
  useEffect(() => {
      const loadData = async () => {
        try {
          const dat = await titleTradData();
          setTitleData(dat);
        } catch (error) {
          console.error('Ошибка загрузки данных:', error);
        }
      };
      loadData();
  }, []);
  if (!titleDat) {
    return <div>Загрузка...</div>; 
  }
  return (
    <div className={styles.title}>
      <div className={styles.titleblock}>
        <div className={styles.button}>
          <p>
            {titleDat.description}
          </p>
        </div>
        <p className={styles.name1}>{titleDat.numbername[0]}</p>
        <p className={styles.name2}>{titleDat.numbername[1]}</p>
        <div className={styles.buttons}>
          <div className={styles.button1}><p>{titleDat.buttons[0]}</p></div>
          <div className={styles.button2}><p>{titleDat.buttons[1]}</p></div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundMask;