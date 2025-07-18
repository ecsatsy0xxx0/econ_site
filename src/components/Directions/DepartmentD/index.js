import styles from "./DepartmentD.module.css";

export const departmentTag = [
  {
    buttons: ["кафедра данного направления", "подробнее"],
    text: ["Экономики и управления", "инновационными системами"]
  },
  {
    name: ["Кирилл Олегович", "Александр Сергеевич", "Наталья Николаевна"],
    span: ["ЛИТВИНСКИЙ", "АЛЕНИКОВ", "АВЕДИСЯН"],
    but: ["зав. кафедрой", "доцент", "доцент"],
    img: ["photos/Litvinskiy.png", "photos/Alenikov.png", "photos/Avedician.png"]
  }
];

const DepartmentD = () => {
  return (
    <div className={styles.profileD}>
      <div className={styles.conD}>
        <div className={styles.header}>
          <div className={styles.headerUp}>
            <p>{departmentTag[0].buttons[0]}</p>
          </div>
          <div className={styles.headerUnder}>
            <div className={styles.underText}>
              <p>{departmentTag[0].text[0]}</p>
              <p>{departmentTag[0].text[1]}</p>
            </div>
            <div className={styles.underButton}>
              <p>{departmentTag[0].buttons[1]}</p>
            </div>
          </div>
        </div>
        <div className={styles.main}>
          {departmentTag[1].name.map((dep, index) => (
            <div key={index} className={styles.mainBlock}>
              <img src={departmentTag[1].img[index]} alt={dep} />
              <div className={styles.blockWhite}>
                <div className={styles.whiteText}>
                  <p>{dep}</p>
                  <span>{departmentTag[1].span[index]}</span>
                </div>
                <div className={styles.whiteButton}>
                  <p>{departmentTag[1].but[index]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentD;
