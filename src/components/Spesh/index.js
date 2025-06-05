import styles from './SpeshContainer.module.css';
import { useNavigate } from "react-router-dom";

const specializationCardData = {
	icon: "icons/Icon.svg",
	innerIcon: "icons/Sunglasses.svg",
	programType: "бакалавриат",
	code: "27.03.05",
	title: "Инноватика",
	subtitle: "Управление инновационными проектами и трансфер технологий",
	language: "РУССКИЙ",
	exams: [
    { subject: "РУССКИЙ", score: 64 },
    { subject: "МАТЕМАТИКА", score: 68 },
    {
      option1: { subject: "ФИЗИКА", score: 56 },
      or: "ИЛИ",
      option2: { subject: "ИНФОРМАТИКА", score: 78 }
	  }
	]
};
const economicsCardData = {
  icon: "icons/Coins.svg",
  programType: "бакалавриат",
  code: "38.03.01",
  title: "Экономика",
  language: "РУССКИЙ",
  exams: ["МАТЕМАТИКА", "ОБЩ."]
};
const managementCardData = {
  icon: "icons/UserGear.svg",
  programType: "бакалавриат",
  code: "38.03.01",
  title: "Менеджмент",
  language: "РУССКИЙ",
  exams: [
    "МАТЕМАТИКА",
    {
      option1: "ОБЩ.",
      or: "или",
      option2: "ИН. ЯЗ."
    }
  ]
};
const tradeCardData = {
  icon: "icons/HandCoins.svg",
  programType: "бакалавриат",
  code: "38.03.06",
  title: "Торговое дело",
  language: "РУССКИЙ",
  exams: [
    "МАТЕМАТИКА",
    {
      option1: "ОБЩ.",
      or: "или",
      option2: "ИНФ."
    }
  ]
};
const businessInformaticsCardData = {
  icon: "icons/BracketsCurly.svg",
  programType: "бакалавриат",
  code: "38.03.05",
  title: "Бизнес-информатика",
  language: "РУССКИЙ",
  exams: ["МАТЕМАТИКА", "ОБЩ."]
};
const systemAnalysisCardData = {
  icon: "icons/ChartDonut.svg",
  programType: "бакалавриат",
  code: "27.03.03 Системный",
  title: "анализ и управление",
  language: "РУССКИЙ",
  exams: [
    "МАТЕМАТИКА",
    {
      option1: "ФИЗИКА",
      or: "или",
      option2: "ИНФ."
    }
  ]
};
const economicSecurityCardData = {
  icon: "icons/Icon.svg",
  innerIcon: "icons/UserFocus.svg",
  programType: "специалитет",
  code: "38.05.01",
  title: "Экономическая безопасность",
  subtitle: "Экономико-правовое обеспечение экономической безопасности и др.",
  language: "РУССКИЙ",
  exams: ["МАТЕМАТИКА", "ОБЩЕСТВОЗНАНИЕ"]
};
const faqBlockData = {
  titleLines: [
    "Собрали самые часто-задаваемые",
    "вопросы абитуриентов факультета"
  ],
  buttons: [
    { label: "ответы на популярные вопросы" },
    { label: "уточнить свой у декана" }
  ]
};
  
const Section = () => {
  const handleScrollToFqa = () => {
    const faqElement = document.getElementById("fqa-section"); // Убедитесь, что у компонента fqa есть id="fqa-section"
    if (faqElement) {
      faqElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/innovatika"); // Убедитесь, что путь совпадает с маршрутом в index.js
  };
  const handleNavigateBI = () => {
    navigate("/businessinformatics"); // Убедитесь, что путь совпадает с маршрутом в index.js
  };
  const handleNavigateTD = () => {
    navigate("/tradingbusinesses"); // Убедитесь, что путь совпадает с маршрутом в index.js
  };
  const handleNavigateSA = () => {
    navigate("/systemanalysis"); // Убедитесь, что путь совпадает с маршрутом в index.js
  };
  const handleNavigateES = () => {
    navigate("/economicsecurity"); // Убедитесь, что путь совпадает с маршрутом в index.js
  };
  const handleNavigateE = () => {
    navigate("/economy"); // Убедитесь, что путь совпадает с маршрутом в index.js
  };
  const handleNavigateM = () => {
    navigate("/management"); // Убедитесь, что путь совпадает с маршрутом в index.js
  };
	const data = specializationCardData;
  return (
    <div className={styles.section} id="spesh-section">
        <div className={styles.container}>
            <div className={styles.container1}>
                <div className={styles.container2}>
                    <div className={styles.buttonWrapper}>
                        <div className={styles.button}>
                            <div className={styles.buttonLabel}>образование, опережающее время</div>
                        </div>
                    </div>
                    <div className={styles.heading2Parent}>
                        <div className={styles.heading2}>
                            <div className={styles.div}>
                                <p className={styles.p}>{`Направления `}</p>
                                <p className={styles.p}>подготовки ЭФ</p>
                            </div>
                        </div>
                        <img className={styles.frameChild} alt="" src="icons/Line 2.svg" />
                        <div className={styles.div1}>#абитуриент2025</div>
                    </div>
                </div>
                <div className={styles.iconbuttonParent}>
                    <div className={styles.iconbutton}>
                        <img className={styles.magnifyingglassIcon} alt="" src="icons/MagnifyingGlass.svg" />
                    </div>
                    <div className={styles.button1}>
                        <div className={styles.buttonLabel}>все направления</div>
                    </div>
                </div>
            </div>
            <div className={styles.container3}>
              <div className={styles.specializationcardfull}>
                <img className={styles.icon} alt="" src={data.icon} />
                <div className={styles.container4}>
                  <div className={styles.header2}>
                    <div className={styles.icon1}>
                      <img className={styles.magnifyingglassIcon} alt="" src={data.innerIcon} />
                    </div>
                    <div className={styles.button100} onClick={handleNavigate}>
                      <div className={styles.buttonLabel}>подробнее о направлении</div>
                    </div>
                  </div>

                  <div className={styles.content}>
                    <div className={styles.content1}>
                      <div className={styles.content2}>
                        <div className={styles.tag}>
                          <div className={styles.buttonLabel}>{data.programType}</div>
                        </div>
                        <div className={styles.content3}>
                          <div className={styles.heading}>
                            <div className={styles.title}>{data.code} {data.title}</div>
                          </div>
                          <div className={styles.subtitleContainer}>
                            <div className={styles.subtitle}>{data.subtitle}</div>
                          </div>
                        </div>
                      </div>
                      {/* Блоки с предметами */}
                      <div className={styles.actions}>
                        <div className={styles.subjectBlock}>
                          <div className={styles.score}>{specializationCardData.exams[0].score}*</div>
                          <div className={styles.subjectText}>{specializationCardData.exams[0].subject}</div>
                        </div>
                        <div className={styles.subjectBlock2}>
                          <div className={styles.score}>{specializationCardData.exams[1].score}*</div>
                          <div className={styles.subjectText}>{specializationCardData.exams[1].subject}</div>
                        </div>
                        <div className={styles.separator}></div>
                        <div className={styles.subjectBlockOutlined}>
                          <div className={styles.score}>{specializationCardData.exams[2].option1.score}*</div>
                          <div className={styles.subjectText}>{specializationCardData.exams[2].option1.subject}</div>
                        </div>
                        <div className={styles.orText}>{specializationCardData.exams[2].or}</div>
                        <div className={styles.subjectBlockOutlined2}>
                          <div className={styles.score}>{specializationCardData.exams[2].option2.score}*</div>
                          <div className={styles.subjectText}>{specializationCardData.exams[2].option2.subject}</div>
                        </div>
                      </div>

                    </div>
                    {/* <div className={styles.descriptionTop}>
                        <p>
                          Инноватика — это направление для тех, кто хочет
                          <span style={{ whiteSpace: 'pre-wrap' }}>
                            находиться на передовой технологических изменений. 
                            Выпускники занимаются разработкой и внедрением 
                            инновационных решений, управлением проектами и 
                            стратегическим развитием бизнеса. Карьера в данной 
                            профессии — это возможность напрямую влиять на 
                            будущее, создавая эффективные технологии, запуская 
                            прорывные продукты и собственные стартапы!
                          </span>
                        </p>
                        <p>
                          Срок обучения — 4 года.
                        </p>
                        <p>
                          <em>*Проходной балл на бюджетную основу в 2024 году</em>
                        </p>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className={styles.specializationCard}>
                <div className={styles.card}>
                  <div className={styles.container5}>
                    <div className={styles.header}>
                      <div className={styles.icon1}>
                        <img className={styles.magnifyingglassIcon} alt="" src={economicsCardData.icon} />
                      </div>
                      <div className={styles.button1002}>
                        <div className={styles.buttonLabel} onClick={handleNavigateE}>подробнее о направлении</div>
                      </div>   
                    </div>
  
                    <div className={styles.content}>
                      <div className={styles.block}>
                        <div className={styles.titleContainer}>
                          <div className={styles.tag}>
                            <div className={styles.buttonLabel}>{economicsCardData.programType}</div>
                          </div>
                          <div className={styles.heading1}>
                            <div className={styles.title}>
                              {economicsCardData.code} {economicsCardData.title}
                            </div>
                          </div>
                        </div>
                        <div className={styles.actions}>

                          <div className={styles.subjectBlock}>
                            <div className={styles.score}>70*</div>
                            <div className={styles.subjectText}>{economicsCardData.language}</div>
                          </div>
                          
                          <div className={styles.subjectBlock2}>
                            <div className={styles.score}>64*</div>
                            <div className={styles.subjectText}>{economicsCardData.exams[0]}</div>
                          </div>
                          
                          <div className={styles.subjectBlockOutlined}>
                              <div className={styles.score}>82*</div>
                              <div className={styles.subjectText}>{economicsCardData.exams[1]}</div>
                            </div>
                        </div>
                      </div>
                      <div>
                        
                      </div>
                      <p className={styles.descriptionTop}>
                        <em>*Проходной балл на договорную основу в 2024 году</em>
                      </p>
                      <p className={styles.descriptionTop2}>
                        Срок обучения – 4 года.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.specializationCard}>
                <div className={styles.card}>
                  <div className={styles.container5}>
                    <div className={styles.header}>
                      <div className={styles.icon1}>
                        <img className={styles.magnifyingglassIcon} alt="" src={managementCardData.icon} />
                      </div>
                      <div className={styles.button1001}>
                        <div className={styles.buttonLabel} onClick={handleNavigateM}>подробнее о направлении</div>
                      </div>
                    </div>

                    <div className={styles.content}>
                      <div className={styles.blocks}>
                        <div className={styles.titleContainer}>
                          <div className={styles.tag}>
                            <div className={styles.buttonLabel}>{managementCardData.programType}</div>
                          </div>
                          <div className={styles.heading1}>
                            <div className={styles.title}>
                              {managementCardData.code} {managementCardData.title}
                            </div>
                          </div>
                        </div>
                        
                        <div className={styles.actions2}>
                          <div className={styles.subjectBlock}>
                            <div className={styles.score}>45*</div>
                            <div className={styles.subjectText}>{managementCardData.language}</div>
                          </div>
                          
                          <div className={styles.subjectBlock}>
                            <div className={styles.score}>40*</div>
                            <div className={styles.subjectText}>{managementCardData.exams[0]}</div>
                          </div>
                          
                          <div className={styles.separator}></div>
                          <div className={styles.subjectBlockOutlined2}>
                            <div className={styles.score}>45*</div>
                            <div className={styles.subjectText}>{managementCardData.exams[1].option1}</div>
                          </div>
                          <div className={styles.orText}>{managementCardData.exams[1].or}</div>
                          <div className={styles.subjectBlockOutlined2}>
                            <div className={styles.score}>30*</div>
                            <div className={styles.subjectText}>{managementCardData.exams[1].option2}</div>
                          </div>
                        </div>
                      </div>

                      <p className={styles.descriptionTop}>
                        <em>*Проходной балл на договорную основу в 2024 году</em>
                      </p>
                      <p className={styles.descriptionTop2}>
                        Срок обучения – 4 года.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.specializationCard}>
                <div className={styles.card}>
                <div className={styles.container56}>
                  <div className={styles.header}>
                    <div className={styles.icon1}>
                      <img className={styles.magnifyingglassIcon} alt="" src={tradeCardData.icon} />
                    </div>
                    <div className={styles.button10021}>
                        <div className={styles.buttonLabel} onClick={handleNavigateTD}>подробнее о направлении</div>
                    </div>  
                  </div>
                  <div className={styles.content}>
                    <div className={styles.blocks}>
                    <div className={styles.titleContainer}>
                      <div className={styles.tag}>
                        <div className={styles.buttonLabel}>{tradeCardData.programType}</div>
                      </div>
                      <div className={styles.heading1}>
                        <div className={styles.title}>
                          {tradeCardData.code} {tradeCardData.title}
                        </div>
                      </div>
                    </div>

                    <div className={styles.actions}>
                      <div className={styles.subjectBlock}>
                        <div className={styles.score}>45*</div>
                        <div className={styles.subjectText}>{tradeCardData.language}</div>
                      </div>
                      
                      <div className={styles.subjectBlock}>
                        <div className={styles.score}>40*</div>
                        <div className={styles.subjectText}>{tradeCardData.exams[0]}</div>
                      </div>
                      
                      <div className={styles.separator}></div>
                      <div className={styles.subjectBlockOutlined2}>
                        <div className={styles.score}>45*</div>
                        <div className={styles.subjectText}>{tradeCardData.exams[1].option1}</div>
                      </div>
                      <div className={styles.orText}>{tradeCardData.exams[1].or}</div>
                      <div className={styles.subjectBlockOutlined2}>
                        <div className={styles.score}>44*</div>
                        <div className={styles.subjectText}>{tradeCardData.exams[1].option2}</div>
                      </div>
                    </div>

                    </div>
                    <p className={styles.descriptionTop}>
                      <em>*Проходной балл на договорную основу в 2024 году</em>
                    </p>
                    <p className={styles.descriptionTop2}>
                      Срок обучения – 4 года.
                    </p>
                  </div>
                </div>
                </div>
              </div>

              <div className={styles.specializationCard}>
                <div className={styles.card}>
                  <div className={styles.container57}>
                    <div className={styles.header}>
                      <div className={styles.icon1}>
                        <img className={styles.magnifyingglassIcon} alt="" src={businessInformaticsCardData.icon} />
                      </div>
                      <div className={styles.button1002}>
                          <div className={styles.buttonLabel} onClick={handleNavigateBI}>подробнее о направлении</div>
                      </div>  
                    </div>
                    <div className={styles.content}>

                      <div className={styles.blocks}>
                        <div className={styles.titleContainer}>
                        <div className={styles.tag}>
                          <div className={styles.buttonLabel}>{businessInformaticsCardData.programType}</div>
                        </div>
                        <div className={styles.heading1}>
                          <div className={styles.title}>
                            {businessInformaticsCardData.code} {businessInformaticsCardData.title}
                          </div>
                        </div>
                      </div>
                      
                      <div className={styles.actions}>
                        <div className={styles.subjectBlock}>
                          <div className={styles.score}>45*</div>
                          <div className={styles.subjectText}>{businessInformaticsCardData.language}</div>
                        </div>
                        
                        <div className={styles.subjectBlock}>
                          <div className={styles.score}>40*</div>
                          <div className={styles.subjectText}>{businessInformaticsCardData.exams[0]}</div>
                        </div>
                        
                        <div className={styles.subjectBlockOutlined}>
                          <div className={styles.score}>45*</div>
                          <div className={styles.subjectText}>{businessInformaticsCardData.exams[1]}</div>
                        </div>
                      </div>
                      </div>

                      <p className={styles.descriptionTop}>
                        <em>*Проходной балл на договорную основу в 2024 году</em>
                      </p>
                      <p className={styles.descriptionTop2}>
                        Срок обучения – 4 года.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.specializationCard}>
                <div className={styles.card}>
                  <div className={styles.container58}>
                    <div className={styles.header}>
                      <div className={styles.icon1}>
                        <img className={styles.magnifyingglassIcon} alt="" src={systemAnalysisCardData.icon} />
                      </div>
                      <div className={styles.button1001}>
                        <div className={styles.buttonLabel} onClick={handleNavigateM}>подробнее о направлении</div>
                      </div>
                    </div>
                    <div className={styles.content}>
                      <div className={styles.blocks2}>
                        <div className={styles.titleContainer}>
                          <div className={styles.tag}>
                            <div className={styles.buttonLabel}>{systemAnalysisCardData.programType}</div>
                          </div>
                          <div className={styles.heading1}>
                            <div className={styles.title}>
                              {systemAnalysisCardData.code}
                            </div>
                            <div className={styles.title}>
                              {systemAnalysisCardData.title}
                            </div>
                          </div>
                        </div>
                        
                        <div className={styles.actions2}>
                          <div className={styles.subjectBlock}>
                            <div className={styles.score}>45*</div>
                            <div className={styles.subjectText}>{systemAnalysisCardData.language}</div>
                          </div>
                          
                          <div className={styles.subjectBlock}>
                            <div className={styles.score}>40*</div>
                            <div className={styles.subjectText}>{systemAnalysisCardData.exams[0]}</div>
                          </div>
                          
                          <div className={styles.separator}></div>
                          <div className={styles.subjectBlockOutlined2}>
                            <div className={styles.score}>45*</div>
                            <div className={styles.subjectText}>{systemAnalysisCardData.exams[1].option1}</div>
                          </div>
                          <div className={styles.orText}>{systemAnalysisCardData.exams[1].or}</div>
                          <div className={styles.subjectBlockOutlined2}>
                            <div className={styles.score}>30*</div>
                            <div className={styles.subjectText}>{systemAnalysisCardData.exams[1].option2}</div>
                          </div>
                        </div>
                      </div>

                      <p className={styles.descriptionTop}>
                        <em>*Проходной балл на договорную основу в 2024 году</em>
                      </p>
                      <p className={styles.descriptionTop2}>
                        Срок обучения – 4 года.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.specializationcardfull}>
                <img className={styles.icon} alt="" src={economicSecurityCardData.icon} />
                <div className={styles.container4}>
                  <div className={styles.header2}>
                    <div className={styles.icon1}>
                      <img className={styles.magnifyingglassIcon} alt="" src={economicSecurityCardData.innerIcon} />
                    </div>
                    <div className={styles.button1002}>
                        <div className={styles.buttonLabel} onClick={handleNavigateES}>подробнее о направлении</div>
                    </div> 
                  </div>
                  <div className={styles.content}>
                    <div className={styles.content1}>
                      <div className={styles.content2}>
                        <div className={styles.tag}>
                          <div className={styles.buttonLabel}>{economicSecurityCardData.programType}</div>
                        </div>
                        <div className={styles.content3}>
                          <div className={styles.heading}>
                            <div className={styles.title}>{economicSecurityCardData.code} {economicSecurityCardData.title}</div>
                          </div>
                          <div className={styles.subtitleContainer}>
                            <div className={styles.subtitle}>{economicSecurityCardData.subtitle}</div>
                          </div>
                        </div>
                      </div>

                      <div className={styles.actions}>
                        <div className={styles.subjectBlock}>
                          <div className={styles.score}>45*</div>
                          <div className={styles.subjectText}>{economicSecurityCardData.language}</div>
                        </div>

                        <div className={styles.subjectBlock}>
                          <div className={styles.score}>40*</div>
                          <div className={styles.subjectText}>{economicSecurityCardData.exams[0]}</div>
                        </div>
                        <div className={styles.separator}>|</div>
                        <div className={styles.subjectBlockOutlined}>
                          <div className={styles.score}>45*</div>
                          <div className={styles.subjectText}>{tradeCardData.exams[1].option1}</div>
                        </div>
                        <div className={styles.orText}>{tradeCardData.exams[1].or}</div>
                        <div className={styles.subjectBlockOutlined}>
                          <div className={styles.score}>44*</div>
                          <div className={styles.subjectText}>{tradeCardData.exams[1].option2}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 

              <div className={styles.background}>
              <div className={styles.container11}>
              <div className={styles.div2}>
                {faqBlockData.titleLines.map((line, index) => (
                  <p key={index} className={styles.p}>{line}</p>
                ))}
              </div>
              </div>
              <div className={styles.container12}>
                <div className={styles.container13}>
                  <div className={styles.button31} onClick={handleScrollToFqa}>
                    <p>ОТВЕТЫ НА ПОПУЛРНЫЕ ВОПРОСЫ</p>
                  </div>
                  <div className={styles.button32}>
                    <p>УТОЧНИТЬ СВОЙ У ДЕКАНА</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
        </div>
    </div>
  );
};

export default Section;
