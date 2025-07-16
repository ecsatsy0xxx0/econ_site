import styles from './TitleD.module.css';

const BackgroundMask = () => {
  return (
    <div className={styles.title}>
      <div className={styles.titleblock}>
        <div className={styles.button}>
          <p>
            {`БАКАЛАВРИАТ`}
          </p>
        </div>
        <p className={styles.name1}>{`27.03.05`}</p>
        <p className={styles.name2}>{`Инноватика`}</p>
        <div className={styles.buttons}>
          <div className={styles.button1}><p>{`О НАПРАВЛЕНИИ`}</p></div>
          <div className={styles.button1}><p>{`УЧЕБНЫЙ ПЛАН`}</p></div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundMask;