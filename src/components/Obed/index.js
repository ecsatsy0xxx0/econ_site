import styles from './ObedContainer.module.css';
import { useNavigate } from "react-router-dom";
const associationsData = [
  {
    icon: 'icons/Shapes.svg',
    title: 'Профорганизация',
    description: [
      'Это поддержка студентов и сотрудников',
      'в решении социальных и образовательных',
      'вопросов, защита прав и возможность',
      'участия в яркой внеучебной жизни.',
    ],
    vkLink: 'https://vk.com/profeconom',
    telegramLink: 'https://t.me/profcomkubsu1',
  },
  {
    icon: 'icons/Sparkle.svg',
    title: 'Студенческий совет',
    description: [
      'Это центр студенческой инициативы ',
      'и креатива. Здесь создаются проекты и',
      'принимаются решения, которые делают',
      'жизнь на факультете ярче и насыщеннее.',
    ],
    vkLink: 'https://vk.com/studsovet_kubsu',
    telegramLink: 'https://t.me/econom_ss',
  },
  {
    icon: 'icons/Idei.svg',
    title: 'Студенческое научное общество',
    description: [
      'Это площадка для амбициозных идей ',
      'и реальных научных открытий. Участие в',
      'проекте открывает двери к исследованиям,',
      'грантам и признанию в проф. сообществе.',
    ],
    vkLink: 'https://vk.com/nauka.kubsu',
    telegramLink: 'https://t.me/naukaeconomakubsu',
  },
];

const Section = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/associations"); // Убедитесь, что путь совпадает с маршрутом в index.js
  };
  return (
    <div className={styles.section}>
      <div className={styles.mainContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.headerContent}>
            <div className={styles.tag}>
              <div className={styles.buttonLabel}>для активистов</div>
            </div>
            <div className={styles.headerTitle}>
              <p className={styles.p}>Объединения</p>
              <p className={styles.p}>факультета</p>
            </div>
          </div>
          <div className={styles.button} onClick={handleNavigate}>
            <div className={styles.buttonLabel}>открыть все</div>
          </div>
        </div>
        <div className={styles.cardsContainer}>
          {associationsData.map((association, index) => (
            <div key={index} className={styles.donestudassociations}>
              <div className={styles.studassociations}>
                <img className={styles.icon} alt="" src={association.icon} />
                <div className={styles.cardContent}>
                  <div className={styles.cardHeading}>
                    <div className={styles.cardTitle}>{association.title}</div>
                  </div>
                  <div className={styles.cardDescriptionContainer}>
                    <div className={styles.cardDescription}>
                      {association.description.map((line, lineIndex) => (
                        <p key={lineIndex} className={styles.p}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
