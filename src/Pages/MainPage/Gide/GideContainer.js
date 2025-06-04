import styles from './GideContainer.module.css';

const steps = [
  {
    number: '01',
    title: 'Определитесь со специальностью',
    description: [
      '• Ознакомьтесь с направлениями на сайте КубГУ.',
      '• Выберите программу, которая соответствует вашим интересам.',
      '• Проверьте вступительные экзамены для поступления.'
    ],
    buttons: ['1-2 дня', 'надежный выбор']
  },
  {
    number: '02',
    title: 'Подготовьте документы',
    description: [
      '• Соберите паспорт, СНИЛС, документ об образовании (аттестат или диплом) и результаты ЕГЭ (при наличии).',
      '• Убедитесь в наличии всех дополнительных документов.'
    ],
    buttons: ['1-3 дня', 'всё по полочкам']
  },
  {
    number: '03',
    title: 'Подайте заявление',
    description: [
      '• Подача доступна с 20 июня. Укажите понравившиеся направления и форму обучения (очно/очно-заочно/заочно).',
      '• Способы подачи: через личный кабинет, почтой или в приемной комиссии.'
    ],
    buttons: ['до 10 мин', 'удобный формат']
  },
  {
    number: '04',
    title: 'Пройдите вступительные испытания*',
    description: [
      '• Зарегистрируйтесь на экзамены в КубГУ заранее или сдайте требуемые для направления предметы ЕГЭ.',
      '• Ознакомьтесь с расписанием экзаменов на сайте.',
      '*Пропустите этот шаг, если уже сдали ЕГЭ в школе!'
    ],
    buttons: ['1-3 нед', 'это победа']
  },
  {
    number: '05',
    title: 'Следите за конкурсными списками',
    description: [
      '• Конкурсные списки появляются 27 июля (бюджет) и 16 августа (договор).',
      '• Найдите себя в списках или уточните статус в приемной комиссии.'
    ],
    buttons: ['1 день', 'результаты на подходе']
  },
  {
    number: '06',
    title: 'Подайте согласие на зачисление',
    description: [
      '• Подтвердите согласие до 1 августа (приоритетное зачисление) или до 5 августа (основной этап зачисления).',
      '• Для договорных мест: до 21 августа.'
    ],
    buttons: ['до 10 мин', 'финальный этап']
  },
  {
    number: '07',
    title: 'Поздравляем с зачислением!',
    description: [
      'Приказы о зачислении на бюджет: 2-3 августа, 6-7 августа, 10-11 августа;',
      'на договор: 22 августа.',
      'Остается подготовиться к началу учебного года.'
    ],
    buttons: ['1 день', 'теперь вы студент эф']
  }
];

const GideForAppliCats = () => {
  return (
    <div  id="gidecontainer">
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
            {steps.map((step, index) => (
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
