import styles from './SpeshContainer.module.css';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { specializationSpeshMag1, specializationSpeshMag2, specializationSpeshMag3, specializationSpeshMag4, specializationSpeshMag6, specializationSpeshMag7, specializationSpesh8 } from '../../../API/MainApi';

const Section = () => {
  const handleScrollToFqa = () => {
    const faqElement = document.getElementById("fqa-section"); // Убедитесь, что у компонента fqa есть id="fqa-section"
    if (faqElement) {
      faqElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navigate = useNavigate();
  const magEconomyPage04 = () => {
    navigate("/mageconomy04"); // Убедитесь, что путь совпадает с маршрутом в index.js
  };
  const magEconomyPage03 = () => {
    navigate("/mageconomy03"); // Убедитесь, что путь совпадает с маршрутом в index.js
  };
  const MagMangPage = () => {
    navigate("/management"); // Убедитесь, что путь совпадает с маршрутом в index.js
  };
  const MagTradPage03 = () => {
    navigate("/trading03"); // Убедитесь, что путь совпадает с маршрутом в index.js
  };
  const MagTradPage04 = () => {
    navigate("/trading04"); // Убедитесь, что путь совпадает с маршрутом в index.js
  };
  const MagFinPage = () => {
    navigate("/finance"); // Убедитесь, что путь совпадает с маршрутом в index.js
  };
  const [specializationData, setSpecializationData] = useState(null);
  const [specializationData2, setSpecializationData2] = useState(null);
  const [specializationData3, setSpecializationData3] = useState(null);
  const [specializationData4, setSpecializationData4] = useState(null);
  const [specializationData6, setSpecializationData6] = useState(null);
  const [specializationData7, setSpecializationData7] = useState(null);
  const [specializationData8, setSpecializationData8] = useState(null);
  useEffect(() => {
      const loadData = async () => {
        try {
          const dat = await specializationSpeshMag1();
          const dat2 = await specializationSpeshMag2();
          const dat3 = await specializationSpeshMag3();
          const dat4 = await specializationSpeshMag4();
          const dat6 = await specializationSpeshMag6();
          const dat7 = await specializationSpeshMag7();
          const dat8 = await specializationSpesh8();
          setSpecializationData(dat);
          setSpecializationData2(dat2);
          setSpecializationData3(dat3);
          setSpecializationData4(dat4);
          setSpecializationData6(dat6);
          setSpecializationData7(dat7);
          setSpecializationData8(dat8);
        } catch (error) {
          console.error('Ошибка загрузки данных:', error);
        }
      };
      loadData();
  }, []);
  if (!specializationData || !specializationData2 || !specializationData3 || !specializationData4 || !specializationData6 || !specializationData7 || !specializationData8) {
    return <div>Загрузка...</div>; 
  }
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
                <img className={styles.icon} alt="" src={specializationData.icon} />
                <div className={styles.container4}>
                  <div className={styles.header2}>
                    <div className={styles.icon1}>
                      <img className={styles.magnifyingglassIcon} alt="" src={specializationData.innerIcon} />
                    </div>
                    <div className={styles.button100} onClick={magEconomyPage04}>
                      <div className={styles.buttonLabel} >подробнее о направлении</div>
                    </div>
                  </div>

                  <div className={styles.content}>
                    <div className={styles.content1}>
                      <div className={styles.content2}>
                        <div className={styles.tag}>
                          <div className={styles.buttonLabel}>{specializationData.programType}</div>
                        </div>
                        <div className={styles.content3}>
                          <div className={styles.heading}>
                            <div className={styles.title}>
                              {specializationData.code} {specializationData.title}
                            </div>
                          </div>
                          <div className={styles.subtitleContainer}>
                            <div className={styles.subtitle}>{specializationData.subtitle}</div>
                          </div>
                        </div>
                      </div>

                      {/* Блоки с экзаменами */}
                      <div className={styles.actions}>
                        <div className={styles.subjectBlockOutlined}>
                          <div className={styles.subjectText}>{specializationData.exams[0].option1.subject}</div>
                        </div>
                        <div className={styles.subjectBlockOutlined2}>
                          <div className={styles.subjectText}>{specializationData.exams[0].option2.subject}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.specializationCard}>
                <div className={styles.card}>
                  <div className={styles.container5}>
                    <div className={styles.header}>
                      <div className={styles.icon1}>
                        <img className={styles.magnifyingglassIcon} alt="" src={specializationData2.icon} />
                      </div>
                      <div className={styles.button1002} onClick={magEconomyPage03}>
                        <div className={styles.buttonLabel} >подробнее о направлении</div>
                      </div>   
                    </div>
  
                    <div className={styles.content}>
                      <div className={styles.block}>
                        <div className={styles.titleContainer}>
                          <div className={styles.tag}>
                            <div className={styles.buttonLabel}>{specializationData2.programType}</div>
                          </div>
                          <div className={styles.heading1}>
                            <div className={styles.title}>
                              {specializationData2.code} {specializationData2.title}
                            </div>
                          </div>
                        </div>
                        <div className={styles.actions}>
                          
                          <div className={styles.subjectBlockOutlined}>
                            <div className={styles.subjectText}>{specializationData2.exams[0]}</div>
                          </div>
                          
                          <div className={styles.subjectBlockOutlined}>
                              <div className={styles.subjectText}>{specializationData2.exams[1]}</div>
                            </div>
                        </div>
                      </div>
                      <div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.specializationCard}>
                <div className={styles.card}>
                  <div className={styles.container5}>
                    <div className={styles.header}>
                      <div className={styles.icon1}>
                        <img className={styles.magnifyingglassIcon} alt="" src={specializationData3.icon} />
                      </div>
                      <div className={styles.button1001} onClick={MagMangPage}>
                        <div className={styles.buttonLabel}>подробнее о направлении</div>
                      </div>
                    </div>

                    <div className={styles.content}>
                      <div className={styles.blocks}>
                        <div className={styles.titleContainer}>
                          <div className={styles.tag}>
                            <div className={styles.buttonLabel}>{specializationData3.programType}</div>
                          </div>
                          <div className={styles.heading1}>
                            <div className={styles.title}>
                              <p>
                                {specializationData3.code}
                              </p>
                              <p>
                                {specializationData3.title}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className={styles.actions2}>
                          <div className={styles.subjectBlockOutlined2}>
                            <div className={styles.subjectText}>{specializationData3.exams[0].option1}</div>
                          </div>
                          <div className={styles.subjectBlockOutlined2}>
                            <div className={styles.subjectText}>{specializationData3.exams[0].option2}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.specializationCardl}>
                <div className={styles.card}>
                <div className={styles.container56}>
                  <div className={styles.header}>
                    <div className={styles.icon1}>
                      <img className={styles.magnifyingglassIcon} alt="" src={specializationData4.icon} />
                    </div>
                    <div className={styles.button10021} onClick={MagTradPage03}>
                        <div className={styles.buttonLabel} >подробнее о направлении</div>
                    </div>  
                  </div>
                  <div className={styles.content}>
                    <div className={styles.blocks}>
                    <div className={styles.titleContainer}>
                      <div className={styles.tag}>
                        <div className={styles.buttonLabel}>{specializationData4.programType}</div>
                      </div>
                      <div className={styles.heading1}>
                        <div className={styles.title}>
                          {specializationData4.code} {specializationData4.title}
                        </div>
                      </div>
                    </div>

                    <div className={styles.actions}>
                      <div className={styles.subjectBlockOutlined2}>
                        <div className={styles.subjectText}>{specializationData4.exams[1].option1}</div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div className={styles.specializationCard}>
                <div className={styles.card}>
                  <div className={styles.container58}>
                    <div className={styles.header}>
                      <div className={styles.icon1}>
                        <img className={styles.magnifyingglassIcon} alt="" src={specializationData6.icon} />
                      </div>
                      <div className={styles.button1001} onClick={MagTradPage04}>
                        <div className={styles.buttonLabel} >подробнее о направлении</div>
                      </div>
                    </div>
                    <div className={styles.content}>
                      <div className={styles.blocks2}>
                        <div className={styles.titleContainer}>
                          <div className={styles.tag}>
                            <div className={styles.buttonLabel}>{specializationData6.programType}</div>
                          </div>
                          <div className={styles.heading1}>
                            <p className={styles.title}>
                              {specializationData6.code}
                              {specializationData6.title}
                            </p>
                          </div>
                        </div>
                        
                        <div className={styles.actions2}>
                          <div className={styles.subjectBlockOutlined2}>
                            <div className={styles.subjectText}>{specializationData6.exams[1].option1}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.specializationcardfull}>
                <img className={styles.icon} alt="" src={specializationData7.icon} />
                <div className={styles.container4}>
                  <div className={styles.header2}>
                    <div className={styles.icon1}>
                      <img className={styles.magnifyingglassIcon} alt="" src={specializationData7.innerIcon} />
                    </div>
                    <div className={styles.button1002} onClick={MagFinPage}>
                        <div className={styles.buttonLabel} >подробнее о направлении</div>
                    </div> 
                  </div>
                  <div className={styles.content}>
                    <div className={styles.content1}>
                      <div className={styles.content2}>
                        <div className={styles.tag}>
                          <div className={styles.buttonLabel}>{specializationData7.programType}</div>
                        </div>
                        <div className={styles.content3}>
                          <div className={styles.heading}>
                            <div className={styles.title}>{specializationData7.code} {specializationData7.title}</div>
                          </div>
                          <div className={styles.subtitleContainer}>
                            <div className={styles.subtitle}>{specializationData7.subtitle}</div>
                          </div>
                        </div>
                      </div>

                      <div className={styles.actions}>
                        <div className={styles.subjectBlockOutlined}>
                          <div className={styles.subjectText}>{specializationData4.exams[1].option1}</div>
                        </div>
                        <div className={styles.subjectBlockOutlined2}>
                          <div className={styles.subjectText}>{`ЗФО`}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 

              <div className={styles.background}>
                <div className={styles.container11}>
                  <div className={styles.div2}>
                    {specializationData8.titleLines.map((line, index) => (
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