import styles from "./SpecializationDescriptionContainer.module.css";
const specializationDescriptionData = {
    description: [
      "«Экономика» — это обширная область, которая объединяет экономику, финансы, статистику и другие научные дисциплины для анализа и прогнозирования экономических процессов. Выпускники этой специальности работают в государственных органах, частных компаниях, банках и других финансовых институтах, занимаясь аналитической деятельностью, финансовым планированием и контролем, а также разработкой стратегий развития предприятий.",
    ],
    formats: "Очно, Очно-заочная",
    duration: "4 года",
    cost: ["71 500,00 ₽", "143 00,00 ₽"],
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
