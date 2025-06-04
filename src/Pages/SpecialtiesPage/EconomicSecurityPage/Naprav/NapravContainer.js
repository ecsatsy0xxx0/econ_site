import styles from './NapravContainer.module.css';

const Frame = () => {
  const specializations = [
    {
      title: "Управление безопасностью бизнеса",
      actions: [
        "анализ рисков",
        "защита активов",
        "финансовый контроль",
        "корпоративная безопасность"
      ],
      icon: "icons/Calculator.svg",
    },
    {
      title: "Учет и контроль в системе экономической безопасности",
      actions: [
        "финансовый учет",
        "комплаенс-контроль",
        "мониторинг операций",
        "регулирование рисков"
      ],
      icon: "icons/Bank.svg",
    },
    {
      title: "Финансово-экономическая безопасность",
      actions: [
        "анализ угроз",
        "управление финансами",
        "стратегическая защита",
        "контроль затрат"
      ],
      icon: "icons/Buildings.svg",
    },
  ];
  

  return (
    <div className={styles.titlecontainerParent}>
      <div className={styles.titlecontainer}>
        <div className={styles.heading2}>
          <p className={styles.p}>Направление подразумевает выбор одного из профилей обучения</p>
        </div>
      </div>
      <div className={styles.frameParent}>
        {specializations.map((specialization, index) => (
          <div key={index} className={styles.specializationcardmini1Parent}>
            <div className={styles.specializationcardmini1}>
              <div className={styles.card}>
                <div className={styles.container1}>
                  <div className={styles.header}>
                    <div className={styles.icon}>
                      <img className={styles.calculatorIcon} src={specialization.icon} alt="" />
                    </div>
                  </div>
                  <div className={styles.content}>
                    <div className={styles.content1}>
                      <div className={styles.title1}>{specialization.title}</div>
                      <div className={styles.actions}>
                        {specialization.actions.map((action, actionIndex) => (
                          <div key={actionIndex} className={styles.button}>
                            <div className={styles.buttonLabel}>{action}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frame;
