import styles from "./SpecializationDescriptionContainer.module.css";
const specializationDescriptionData = {
    description: [
      "Экономическая безопасность — междисциплинарная область, объединяющая экономику, право, социологию и информационные технологии для обеспечения стабильного функционирования экономических систем. Выпускники работают в государственных органах, финансовых институтах, корпорациях и консалтинговых компаниях, занимаясь анализом рисков, разработкой стратегий безопасности и мониторингом экономической стабильности. Преимущества включают высокий спрос, карьерный рост, возможность работы в различных секторах экономики и высокий уровень заработной платы. Примеры должностей: специалист по экономической безопасности, аналитик финансовых рисков, консультант по кибербезопасности, аудитор экономической безопасности и эксперт по внутренним расследованиям.",
    ],
    formats: "Очно,Заочно",
    duration: "5 лет",
    cost: ["74 500,00 ₽", "149 00,00 ₽"],
    buttons: ["возможности выпускников", "контрольные цифры на 2025"],
  };
  
const SpecializationDescriptionTopBa = () => {
  return (
    <div className={styles.specializationdescriptiontopba}>
      <div className={styles.descriptionSectionParent}>
        <div className={styles.descriptionSection}>
          <div className={styles.descriptioncontainer}>
            <div className={styles.descriptionText}>
              <div className={styles.description}>
                {specializationDescriptionData.description.map((paragraph, index) => (
                  <p key={index} className={index === 2 ? styles.p2 : styles.p}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.descriptioncontainerParent}>
            <div className={styles.descriptioncontainer1}>
              <div className={styles.formatsSection}>
                <div className={styles.description1}>
                  <p className={styles.p}>Форматы обучения</p>
                  <p className={styles.p}>на направлении:</p>
                </div>
                <div className={styles.score}>{specializationDescriptionData.formats}</div>
              </div>
            </div>
            <div className={styles.descriptioncontainer2}>
              <div className={styles.durationSection}>
                <div className={styles.description1}>Срок обучения:</div>
              </div>
              <div className={styles.score}>{specializationDescriptionData.duration}</div>
            </div>
            <div className={styles.descriptioncontainer}>
              <div className={styles.formatsSection}>
                <div className={styles.description3}>
                  <p className={styles.p}>Стоимость обучения*</p>
                  <p className={styles.p}>в семестр/год (договор):</p>
                </div>
                <div className={styles.costOptions}>
                  <div className={styles.tagspecializationdiff}>
                    <div className={styles.buttonLabel}>{specializationDescriptionData.cost[0]}</div>
                  </div>
                  <div className={styles.costDivider}>/</div>
                  <div className={styles.tagspecializationdiff1}>
                    <div className={styles.buttonLabel}>{specializationDescriptionData.cost[1]}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.buttoncontainer}>
            <div className={styles.buttonParent}>
              {specializationDescriptionData.buttons.map((buttonLabel, index) => (
                <div key={index} className={index === 0 ? styles.button : styles.button1}>
                  <div className={styles.buttonLabel2}>{buttonLabel}</div>
                </div>
              ))}
            </div>
            <div className={styles.description4}>
              <span>{specializationDescriptionData.footerNote}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecializationDescriptionTopBa;
