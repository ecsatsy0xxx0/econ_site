import styles from './BannerContainer.module.css';

// Текст вынесен в массив
const bannerText = {
  tags: "бакалавриат",
  subtitle: "38.03.05",
  title: "Бизнес-информатика",
  buttons: [
    { label: "О направлении", style: "button1" },
    { label: "Учебный план", style: "button2" },
  ],
};

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.tags}>
          <div className={styles.button}>
            <div className={styles.buttonLabel}>{bannerText.tags}</div>
          </div>
        </div>
        <div className={styles.heading1}>
          <div className={styles.subtitle}>{bannerText.subtitle}</div>
          <div className={styles.title}>{bannerText.title}</div>
        </div>
      </div>
      <div className={styles.container1}>
        <div className={styles.buttoncontainer}>
          {bannerText.buttons.map((button, index) => (
            <div key={index} className={styles[button.style]}>
              <div className={styles.buttonLabel}>{button.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
