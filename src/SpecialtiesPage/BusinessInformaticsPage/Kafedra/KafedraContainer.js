import styles from "./KafedraContainer.module.css";
const kafedraData = {
    title: "Теоретической экономики",
    buttonLabel: "кафедра данного направления",
    detailsButtonLabel: "подробнее",
    team: [
      {
        name: "Виктор Александрович СИДОРОВ",
        role: "зав. кафедрой",
        image: "photos/buiznes_sidor.jpg",
      },
      {
        name: "Наталья Юрьевна НАРЫЖНАЯ ",
        role: "доцент",
        image: "photos/buiznes_nar.jpg",
      },
      {
        name: "Игорь Владимирович АРИНИЧЕВ",
        role: "доцент",
        image: "photos/buiznes_arin.png",
      },
    ],
  };
  
const KafedraCard = ({ member }) => (
  <div className={styles.newsachivecard}>
    <div className={styles.image}>
      <img className={styles.containerIcon} alt="" src={member.image} />
    </div>
    <div className={styles.newsacivecardtagbar}>
      <div className={styles.container5}>
        <div className={styles.title}>
          <p className={styles.p}>
            <span>{member.name.split(" ")[0] + " " + member.name.split(" ")[1]}</span>
          </p>
          <p className={styles.p1}>{member.name.split(" ")[2]}</p>
        </div>
      </div>
      <div className={styles.container6}>
        <div className={styles.button}>
          <div className={styles.buttonLabel}>{member.role}</div>
        </div>
      </div>
    </div>
  </div>
);

const Section = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <div className={styles.button}>
              <div className={styles.buttonLabel}>{kafedraData.buttonLabel}</div>
            </div>
            <div className={styles.heading2}>
              <div className={styles.div}>{kafedraData.title}</div>
            </div>
          </div>
          <div className={styles.container3}>
            <div className={styles.button1}>
              <div className={styles.buttonLabel}>{kafedraData.detailsButtonLabel}</div>
            </div>
          </div>
        </div>
        <div className={styles.container4}>
          {kafedraData.team.map((member, index) => (
            <KafedraCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
