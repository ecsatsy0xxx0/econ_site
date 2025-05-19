import styles from "./SpecializationDescriptionContainer.module.css";
const specializationDescriptionData = {
    description: [
      "Инноватика — это направление для тех, кто хочет быть на передовой изменений, создавая и внедряя инновационные проекты. Выпускники изучают трансфер технологий, коммерциализацию научных разработок и управление проектами, что позволяет разрабатывать и реализовывать эффективные решения в условиях цифровизации.",
      "",
      "Карьера в инноватике — это участие в создании передовых технологий, запуск прорывных продуктов",
      "и развитие собственных стартапов. Выпускники становятся лидерами изменений, трансформирующими бизнес и формирующими будущее. Если вы хотите не только следить за развитием технологий,",
      "но и создавать их, это направление определенно для вас!",
    ],
    formats: "Очно",
    duration: "4 года",
    cost: ["77 000,00 ₽", "154 00,00 ₽"],
    buttons: ["возможности выпускников", "контрольные цифры на 2025"],
    footerNote: "*каждый студент имеет право перевода на бюджетную форму (подробнее)",
    footerLink: "http://www.kubsu.ru/sites/default/files/insert/page/pologenie_perevod_na_budget.pdf", // Укажите URL ссылки
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
              <span>
                *каждый студент имеет право перевода на бюджетную форму (
                <a href={specializationDescriptionData.footerLink} className={styles.link}>
                  подробнее
                </a>)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecializationDescriptionTopBa;
