import styles from './InfoStudContainer.module.css';

const specializationCardData = {
  icon: "icons/Kanban.svg",
  headerIcon: " ",
  title: "IT Project Management",
  subtitle: "Организация IT-проектов, управление командами и сроками.",
  actions1: [
    "Планирование",
    "Управление рисками",
    "Командная работа",
    "Agile/Scrum",
  ],
  actions2: ["Jira", "MS Project", "Waterfall"],
};

const specializationCardMiniData = {
  icon: "icons/Handshake.svg",
  title: "Product Owner",
  actions: ["Agile", "Product Management", "Команда", "Цели"],
};

const specializationCardData2 = {
  icon: "icons/ProjectorScreenChart.svg",
  title: "Business Analyst",
  actions: ["Процессы", "BPMN", "UML", "Коммуникации"],
};

const specializationCardQAData = {
  icon: "icons/Bug.svg",
  title: "System Analyst",
  actions1: ["Интеграция", "Оптимизация", "Базы данных"],
  actions2: ["UML", "SQL", "BPMN"],
};

const specializationCardCEOData = {
  icon: "icons/OfficeChair.svg",
  title: "Digital Marketing Specialist",
  actions: ["SEO", "Google Analytics", "SMM", "PPC"],
};

const specializationCardProductDesignData = {
  icon: "icons/Layout.svg",
  title: "ERP-Consultant",
  actions: ["ERP", "Автоматизация", "1C", "SAP"],
};

const specializationCardSoftwareDevData = {
  iconMain: "icons/BracketsCurly (2).svg",
  iconHeader: " ",
  title: "Data Analyst",
  subtitle:
    "Специалист по анализу данных, извлекает полезную информацию для принятия решений.",
  actions: ["Big Data", "Power BI", "SQL", "Python"],
};

const Section = () => {
    const data=specializationCardData;
    const data1=specializationCardMiniData;
    const data2=specializationCardData2;
    const data3=specializationCardQAData;
    const data4=specializationCardCEOData;
    const data5=specializationCardProductDesignData;
    const data6=specializationCardSoftwareDevData;
  	return (
    		<div className={styles.section}>
      			<div className={styles.container}>
        				<div className={styles.container1}>
          					<div className={styles.button}>
            						<div className={styles.buttonLabel}>возможности</div>
          					</div>
          					<div className={styles.heading2}>
            						<div className={styles.div}>
              							<p className={styles.p}>{`Выпускник сможет работать `}</p>
              							<p className={styles.p}>в следующих направлениях</p>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.container2}>
        				<div className={styles.specializationcardfullParent}>
                        <div className={styles.specializationcardfull}>
      <div className={styles.container3}>
        <div className={styles.header}>
          <div className={styles.icon1}>
            <img className={styles.usersthreeIcon} alt="" src={data.headerIcon} />
          </div>
          <div className={styles.button1} />
        </div>
        <div className={styles.content}>
          <div className={styles.content1}>
            <div className={styles.content2}>
              <div className={styles.tag} />
              <div className={styles.content3}>
                <div className={styles.heading}>
                  <div className={styles.title}>{data.title}</div>
                </div>
                <div className={styles.subtitleContainer}>
                  <div className={styles.subtitle}>{data.subtitle}</div>
                </div>
              </div>
            </div>
            <div className={styles.actions}>
              <div className={styles.actions1}>
                {data.actions1.map((action, index) => (
                  <div key={index} className={styles.button}>
                    <div className={styles.buttonLabel}>{action}</div>
                  </div>
                ))}
              </div>
              <div className={styles.actions2}>
                {data.actions2.map((action, index) => (
                  <div key={index} className={styles.button}>
                    <div className={styles.buttonLabel}>{action}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.specializationcardmini2}>
      <div className={styles.card}>
        <div className={styles.container4}>
          <div className={styles.header}>
            <div className={styles.icon1}>
              <img className={styles.usersthreeIcon} alt="" src={data1.icon} />
            </div>
            <div className={styles.button1} />
          </div>
          <div className={styles.content}>
            <div className={styles.titleContainer}>
              <div className={styles.titleContainer}>
                <div className={styles.tag} />
                <div className={styles.content}>
                  <div className={styles.title}>{data1.title}</div>
                </div>
              </div>
              <div className={styles.actions3}>
                <div className={styles.actions1}>
                  {data1.actions.map((action, index) => (
                    <div key={index} className={styles.button}>
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
        				</div>
        				<div className={styles.backgroundParent}>
          					<div className={styles.background}>
            						<div className={styles.container5}>
              							<div className={styles.div1}>При углублении в отдельные треки или после магистратуры:</div>
            						</div>
            						<div className={styles.container6}>
              							<div className={styles.container7}>
                								<div className={styles.button14}>
                  									<div className={styles.buttonLabel}>подробнее</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.specializationcardfullParent}>
                              <div className={styles.specializationCard}>
      <div className={styles.card}>
        <div className={styles.container4}>
          <div className={styles.header}>
            <div className={styles.icon1}>
              <img className={styles.usersthreeIcon} alt="" src={data2.icon} />
            </div>
            <div className={styles.button1} />
          </div>
          <div className={styles.content}>
            <div className={styles.titleContainer}>
              <div className={styles.titleContainer}>
                <div className={styles.tag} />
                <div className={styles.content}>
                  <div className={styles.title}>{data2.title}</div>
                </div>
              </div>
              <div className={styles.actions5}>
                {data2.actions.map((action, index) => (
                  <div key={index} className={styles.button}>
                    <div className={styles.buttonLabel}>{action}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.specializationCard}>
      <div className={styles.card}>
        <div className={styles.container4}>
          <div className={styles.header}>
            <div className={styles.button1} />
            <div className={styles.icon1}>
              <img className={styles.usersthreeIcon} alt="" src={data3.icon} />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.titleContainer}>
              <div className={styles.titleContainer}>
                <div className={styles.tag} />
                <div className={styles.content}>
                  <div className={styles.title}>{data3.title}</div>
                </div>
              </div>
              <div className={styles.actions}>
                <div className={styles.actions1}>
                  {data3.actions1.map((action, index) => (
                    <div key={index} className={styles.button}>
                      <div className={styles.buttonLabel}>{action}</div>
                    </div>
                  ))}
                </div>
                <div className={styles.actions2}>
                  {data3.actions2.map((action, index) => (
                    <div key={index} className={styles.button}>
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
          					</div>
          					<div className={styles.specializationcardfullParent}>
                              <div className={styles.specializationCard}>
      <div className={styles.card}>
        <div className={styles.container4}>
          <div className={styles.header}>
            <div className={styles.button1} />
            <div className={styles.icon1}>
              <img className={styles.usersthreeIcon} alt="" src={data4.icon} />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.titleContainer}>
              <div className={styles.titleContainer}>
                <div className={styles.tag} />
                <div className={styles.content}>
                  <div className={styles.title}>{data4.title}</div>
                </div>
              </div>
              <div className={styles.actions9}>
                {data4.actions.map((action, index) => (
                  <div key={index} className={styles.button}>
                    <div className={styles.buttonLabel}>{action}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.specializationCard}>
      <div className={styles.card}>
        <div className={styles.container4}>
          <div className={styles.header}>
            <div className={styles.button1} />
            <div className={styles.icon1}>
              <img className={styles.usersthreeIcon} alt="" src={data5.icon} />
            </div>
          </div>
          <div className={styles.content1}>
            <div className={styles.titleContainer}>
              <div className={styles.tag} />
              <div className={styles.content}>
                <div className={styles.title}>{data5.title}</div>
              </div>
            </div>
            <div className={styles.actions10}>
              {data5.actions.map((action, index) => (
                <div key={index} className={styles.button}>
                  <div className={styles.buttonLabel}>{action}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
          					</div>
                              <div className={styles.specializationcardfull1}>
      <div className={styles.container3}>
        <div className={styles.header}>
          <div className={styles.icon1}>
            <img className={styles.usersthreeIcon} alt="" src={data6.iconHeader} />
          </div>
          <div className={styles.button1} />
        </div>
        <div className={styles.content}>
          <div className={styles.content1}>
            <div className={styles.content2}>
              <div className={styles.tag} />
              <div className={styles.content3}>
                <div className={styles.heading}>
                  <div className={styles.title}>{data6.title}</div>
                </div>
                <div className={styles.subtitleContainer}>
                  <div className={styles.subtitle}>{data6.subtitle}</div>
                </div>
              </div>
            </div>
            <div className={styles.actions9}>
              {data6.actions.map((action, index) => (
                <div key={index} className={styles.button}>
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
    		</div>);
};

export default Section;
