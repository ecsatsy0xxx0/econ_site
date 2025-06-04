import { useContext } from "react";
import styles from './JournalInfo.module.css';
import { LanguageContext } from "../LanguageContext"; // Подключаем контекст языка

const journalSections = {
  ru: [
    {
      title: "О журнале",
      content: `НАУЧНО-ПРАКТИЧЕСКИЙ ЖУРНАЛ «ЭКОНОМИКА: ТЕОРИЯ И ПРАКТИКА» издается с 2000 г. Журнал зарегистрирован Управлением Федеральной службы по надзору в сфере связи, информационных технологий и массовых коммуникаций по Южному федеральному округу. Свидетельство о регистрации ПИ №ТУ23-01556. ISSN 2224-042X Журнал включен в Перечень рецензируемых научных изданий ВАК Министерства образования и науки РФ, в которых должны быть опубликованы результаты диссертаций на соискание ученой степени кандидата (доктора) наук по научным специальностям: 5.2.1. Экономическая теория, 5.2.4. Финансы, 5.2.5. Мировая экономика. Зарегистрирован в системе Российского Индекса Научного Цитирования (РИНЦ).  Индексируется в: “eLIBRARY.RU“, ”ULRICHSWEB“. Входит во 2-й квартиль`,
    },
    {
      title: "Учредитель и издатель",
      content: `ФГБОУ ВО «Кубанский государственный университет» (Россия, г. Краснодар) Статьи рецензируются. Журнал выходит 4 раза в год. Формат А4, объем 100 стр.`,
    },
    {
      title: "Миссия журнала",
      content: `Публикация результатов научных исследований по организационным, экономическим, правовым и социальным проблемам современной макро-, мезо- и микроэкономики, популяризация экономической науки в студенческой среде; расширение научного сотрудничества с ведущими учеными-экономистами РФ, СНГ, ближнего и дальнего зарубежья, содействие интеграции науки и практики.`,
    },
    {
      title: "Авторы",
      content: `Авторами публикаций являются преподаватели высших учебных заведений, научные сотрудники, 
      докторанты, аспиранты и магистранты, специализирующиеся в области экономики, финансов и управления.`,
    },
    {
      title: "Рубрики журнала",
      tags: [
        "Экономическая теория",
        "Мировая экономика",
        "Региональная экономика",
        "Отраслевая экономика",
        "Инновационная экономика",
        "Цифровая экономика",
        "Институциональная экономика",
        "Инвестиции",
        "Экономическая безопасность",
        "Рынок труда",
        "Банковское дело",
        "Финансовый менеджмент",
        "Корпоративный менеджмент",
        "Предпринимательство",
        "Маркетинг",
        "Логистика",
        "Слово молодым ученым",
        "Научная жизнь"
      ],
    },
    {
      title: "Контакты",
      content: `350040, Россия, г. Краснодар, ул. Ставропольская, 149, Кубанский госуниверситет, экономический факультет, ауд. 236, редакция журнала «Экономика: теория и практика»
    Е-mail: etip@kubsu.ru 
    Тел. гл. ред. (861) 2199554`,
    }
  ],
  en: [
    {
      title: "About the Journal",
      content: `The SCIENTIFIC AND PRACTICAL JOURNAL "ECONOMICS: THEORY AND PRACTICE" has been published since 2000. The journal is registered with the Federal Service for Supervision in the Sphere of Communications, Information Technologies, and Mass Communications in the Southern Federal District. Registration certificate PI №TU23-01556. ISSN 2224-042X. The journal is included in the List of Peer-Reviewed Scientific Publications of the Higher Attestation Commission of the Ministry of Education and Science of the Russian Federation, in which dissertation research results must be published for obtaining academic degrees of candidate (doctor) of sciences in scientific specialties: 5.2.1. Economic Theory, 5.2.4. Finance, 5.2.5. World Economy. Registered in the Russian Science Citation Index (RSCI). Indexed in: "eLIBRARY.RU", "ULRICHSWEB".`,
    },
    {
      title: "Founder and Publisher",
      content: `Federal State budgetary educational institution of higher education "Kuban State University" (Krasnodar, Russia) Articles are reviewed. The magazine is published 4 times a year. A4 format, volume 100 pages.`,
    },
    {
      title: "Mission of the Journal",
      content: `Publication of scientific research results on organizational, economic, legal, and social issues of modern macro-, meso-, and microeconomics, popularization of economic science among students; expansion of scientific cooperation with leading economists from Russia, CIS, and other countries, promotion of integration between science and practice.`,
    },
    {
      title: "Authors",
      content: `Authors of publications include university professors, researchers, 
      doctoral students, graduate students, and master’s students specializing in economics, finance, and management.`,
    },
    {
      title: "Journal Sections",
      tags: [
        "Economic Theory",
        "World Economy",
        "Regional Economy",
        "Sectoral Economy",
        "Innovative Economy",
        "Digital Economy",
        "Institutional Economy",
        "Investments",
        "Economic Security",
        "Labor Market",
        "Banking",
        "Financial Management",
        "Corporate Management",
        "Entrepreneurship",
        "Marketing",
        "Logistics",
        "Young Scientists' Section",
        "Scientific Life"
      ],
    },
    {
      title: "Contacts",
      content: `350040, Russia, Krasnodar, Stavropolskaya St., 149, Kuban State University, Faculty of Economics, Office 236, Editorial Office of the journal "Economics: Theory and Practice"
    E-mail: etip@kubsu.ru 
    Tel. Chief Editor: (861) 2199554`,
    }
  ]
};

const JournalInfo = () => {
  const { language } = useContext(LanguageContext); // Получаем текущий язык
  const sections = journalSections[language]; // Выбираем нужный массив данных

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {sections.map((section, index) => (
          <Section key={index} title={section.title}>
            {section.tags ? (
              <div className={styles.tags}>
                {section.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>
            ) : (
              <p>{section.content}</p>
            )}
          </Section>
        ))}
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className={styles.section}>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.content}>{children}</div>
  </div>
);

export default JournalInfo;
