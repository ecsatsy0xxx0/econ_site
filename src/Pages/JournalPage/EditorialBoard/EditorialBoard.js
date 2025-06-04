import styles from './EditorialBoard.module.css';
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext"; 
const editorialData = {
    ru: [
      {
    title: "О совете",
    content: `В состав редакционного совета и редакционной коллегии научно-практического журнала "Экономика: теория и практика" входят 16 докторов экономических наук, 4 кандидата экономических наук (РФ); 3 доктора наук, 1 кандидат наук, 1 PhD (Армения, Белоруссия, Казахстан, Киргизия, Узбекистан).`,
  },
  {
    title: "Редакционный совет",
    content: `Ю.В. Вертакова, д-р экон. наук, профессор, профессор Курского филиала Финансового университета при Правительстве РФ (г. Курск, Российская Федерация); 
Н.Г. Кузнецов, д-р экон. наук, профессор, заслуженный деятель науки РФ, зав. кафедрой экономической теории ФГБОУ ВО «Ростовский государственный экономический университет (РИНХ)» (г. Ростов-на-Дону, РФ);
Е.Л. Логинов, д-р экон. наук, профессор РАН, начальник экспертно-аналитической службы ФГБУ «Ситуационно-аналитический центр Минэнерго России» (г. Москва, РФ); 
И.А. Перонко, д-р экон. наук, профессор, заслуженный экономист РФ; проректор по развитию ФГБОУ ВО «Кубанский государственный аграрный университет им. И.Т. Трубилина» (г. Краснодар, РФ); 
Ю.И. Трещевский, д-р экон. наук, профессор, зав. кафедрой экономики и управления организациями ФГБОУ ВО «Воронежский государственный университет» (г. Воронеж, РФ);  
Л.С. Шаховская, д-р экон. наук, профессор, зав. кафедрой мировой экономики и экономической теории Волгоградского государственного технического университета (г. Волгоград, РФ); 
Р.Т. Адильчаев, канд. экон. наук, доцент, зав. кафедрой «Экономика» Каракалпакского государственного университета им. Бердаха (Республика Узбекистан, г. Нукус); 
В. Благоев, профессор, PhD, Университет менеджмента Варна (Республика Болгария, г. София);
А. Даваасурэн, д-р экон. наук, профессор, зав. отделом региональной экономики Института международных исследований Академии Наук Монголии (Монголия, г. Улан-Батор); 
А.Б. Карбекова, д-р экон. наук, и.о. профессора, координатор Центра поддержки технологий и инноваций Жалал-Абадского государственного университета им. Б. Осмонова (Кыргызская Республика, г. Жалал-Абад); 
В.В. Пузиков, д-р экон. наук, профессор, профессор кафедры финансов и менеджмента Института бизнеса Белорусского государственного университета (Республика Беларусь, г. Минск); 
Г.Л. Саргсян, д-р экон. наук, профессор, декан факультета экономики и управления Ереванского государственного университета (Республика Армения, г. Ереван); 
Е.П. Шустова, д-р экон. наук, MBA, проректор по международному сотрудничеству университета им. А. Бокейханова (Республика Казахстан, г. Семей).`,
  },
  {
    title: "Главный редактор",
    content: `И. В. Шевченко, д-р экон. наук, профессор, декан экономического факультета, зав. кафедрой мировой экономики и менеджмента ФГБОУ ВО «Кубанский государственный университет».`,
  },
  {
    title: "Зам. главного редактора",
    content: ` Е. М. Егорова, канд. экон. наук, доцент, доцент кафедры мировой экономики и менеджмента ФГБОУ ВО «Кубанский государственный университет»; 
А. К. Кочиева, канд. экон. наук, доцент, доцент кафедры мировой экономики и менеджмента ФГБОУ ВО «Кубанский государственный университет» `,
  },
  {
    title: "Редакционная коллегия",
    content: `Е. Н. Александрова, канд. экон. наук, доцент, доцент кафедры мировой экономики и менеджмента ФГБОУ ВО «Кубанский государственный университет»; А. А. Воронов, профессор кафедры «Логистика и коммерческая работа» ФГБОУ ВО «Петербургский университет путей сообщения Императора Александра I»; Г. Г. Вукович, д-р экон. наук, профессор, зав. кафедрой экономики предприятия, регионального и кадрового менеджмента ФГБОУ ВО «Кубанский государственный университет»; Ж.Д. Дармилова, д-р экон. наук, профессор, профессор кафедры мировой экономики и менеджмента ФГБОУ ВО «Кубанский государственный университет"; Л. Н. Дробышевская, д-р экон. наук, профессор, профессор кафедры мировой экономики и менеджмента ФГБОУ ВО «Кубанский государственный университет»; Л. И. Егорова, д-р экон. наук, профессор, профессор кафедры мировой экономики и менеджмента ФГБОУ ВО «Кубанский государственный университет»; А. А. Кизим, д-р экон. наук, профессор, профессор кафедры мировой экономики и менеджмента ФГБОУ ВО «Кубанский государственный университет»; М. Е. Листопад, д-р экон. наук, доцент, профессор кафедры мировой экономики и менеджмента ФГБОУ ВО «Кубанский государственный университет»; К. О. Литвинский, канд. экон. наук, доцент, зав. кафедрой экономики и управления инновационными системами ФГБОУ ВО «Кубанский государственный университет»; В.И. Милета, канд. экон. наук, доцент, доцент кафедры мировой экономики и менеджмента ФГБОУ ВО «Кубанский государственный университет»; М.В. Плешакова, канд. экон. наук, доцент департамента экономики и управления, ГАОУ ВО «Московский городской педагогический университет»; С.Н. Третьякова, д-р экон. наук, доцент, профессор кафедры мировой экономики и менеджмента ФГБОУ ВО «Кубанский государственный университет».`,
},
],
en: [
    {
      title: "About the Board",
      content: `The editorial board and editorial committee of the scientific and practical journal "Economics: Theory and Practice" include 16 doctors of economic sciences, 4 candidates of economic sciences (RF); 3 doctors of sciences, 1 candidate of sciences, 1 PhD (Armenia, Belarus, Kazakhstan, Kyrgyzstan, Uzbekistan).`,
    },
    {
        title: "Editorial Board",
        content: `Y.V. Vertakova, PhD in Economics, Professor, Professor at the Kursk Branch of the Financial University under the Government of the Russian Federation (Kursk, Russian Federation); 
      N.G. Kuznetsov, PhD in Economics, Professor, Honored Scientist of the Russian Federation, Head of the Department of Economic Theory at the Rostov State University of Economics (RINH) (Rostov-on-Don, RF);
      E.L. Loginov, PhD in Economics, Professor of the Russian Academy of Sciences, Head of the Expert-Analytical Service at the Situational-Analytical Center of the Ministry of Energy of Russia (Moscow, RF); 
      I.A. Peronko, PhD in Economics, Professor, Honored Economist of the Russian Federation; Vice-Rector for Development at the Kuban State Agrarian University named after I.T. Trubilin (Krasnodar, RF); 
      Y.I. Treschevsky, PhD in Economics, Professor, Head of the Department of Economics and Management of Organizations at Voronezh State University (Voronezh, RF);  
      L.S. Shakhovskaya, PhD in Economics, Professor, Head of the Department of World Economy and Economic Theory at the Volgograd State Technical University (Volgograd, RF); 
      R.T. Adilchaev, Candidate of Economic Sciences, Associate Professor, Head of the "Economics" Department at the Karakalpak State University named after Berdakh (Republic of Uzbekistan, Nukus); 
      V. Blagoyev, Professor, PhD, University of Management Varna (Republic of Bulgaria, Sofia);
      A. Davaasuren, PhD in Economics, Professor, Head of the Department of Regional Economics at the Institute of International Studies of the Academy of Sciences of Mongolia (Mongolia, Ulan Bator); 
      A.B. Karbekova, PhD in Economics, Acting Professor, Coordinator of the Center for Technology and Innovation Support at the Jalal-Abad State University named after B. Osmonov (Kyrgyz Republic, Jalal-Abad); 
      V.V. Puzikov, PhD in Economics, Professor, Professor of the Department of Finance and Management at the Institute of Business of Belarusian State University (Republic of Belarus, Minsk); 
      G.L. Sargsyan, PhD in Economics, Professor, Dean of the Faculty of Economics and Management at Yerevan State University (Republic of Armenia, Yerevan); 
      E.P. Shustova, PhD in Economics, MBA, Vice-Rector for International Cooperation at A. Bokeikhanov University (Republic of Kazakhstan, Semey).`
      },
      
    {
      title: "Editor-in-Chief",
      content: `I. V. Shevchenko, Doctor of Economics, Professor, Dean of the Faculty of Economics, Head of the Department of World Economy and Management, Kuban State University.`,
    },
    {
      title: "Deputy Editor-in-Chief",
      content: `E. M. Egorova, Candidate of Economic Sciences, Associate Professor, Associate Professor of the Department of World Economy and Management, Kuban State University; 
A. K. Kochieva, Candidate of Economic Sciences, Associate Professor, Associate Professor of the Department of World Economy and Management, Kuban State University.`,
    },
    {
        title: "Editorial Board",
        content: `E.N. Aleksandrova, PhD in Economics, Associate Professor, Associate Professor of the Department of World Economy and Management at Kuban State University; 
      A.A. Voronov, Professor at the Department of "Logistics and Commercial Operations" of Emperor Alexander I St. Petersburg State Transport University; 
      G.G. Vukovich, Doctor of Economic Sciences, Professor, Head of the Department of Enterprise Economics, Regional and Personnel Management at Kuban State University; 
      Zh.D. Darmilova, Doctor of Economic Sciences, Professor, Professor of the Department of World Economy and Management at Kuban State University; 
      L.N. Drobyshevskaya, Doctor of Economic Sciences, Professor, Professor of the Department of World Economy and Management at Kuban State University; 
      L.I. Yegorova, Doctor of Economic Sciences, Professor, Professor of the Department of World Economy and Management at Kuban State University; 
      A.A. Kizim, Doctor of Economic Sciences, Professor, Professor of the Department of World Economy and Management at Kuban State University; 
      M.E. Listopad, Doctor of Economic Sciences, Associate Professor, Professor of the Department of World Economy and Management at Kuban State University; 
      K.O. Litvinsky, PhD in Economics, Associate Professor, Head of the Department of Economics and Management of Innovative Systems at Kuban State University; 
      V.I. Mileta, PhD in Economics, Associate Professor, Associate Professor of the Department of World Economy and Management at Kuban State University; 
      
      Search on the site: About the Faculty (Economics Faculty), For Prospective Students, For Students, For Alumni, Conferences,  
      Scientific and Practical Journal "Economics: Theory and Practice"
      
      An information center has been established at Kuban State University in collaboration with the publishing house “Finance and Credit.” The center is headed by the Dean of our faculty, Professor, Doctor of Economic Sciences Igor Viktorovich Shevchenko. 
      
      M.V. Pleshakova, Associate Professor at the Department of Economics and Management, Moscow City Pedagogical University; 
      S.N. Tretyakova, Doctor of Economic Sciences, Associate Professor, Professor of the Department of World Economy and Management at Kuban State University.`
      }
      
  ],
};


const text = {
    ru: {
      title: "Редакционный совет и редколлегия",
    },
    en: {
      title: "Editorial Board and Editorial Committee",
    },
  };
const EditorialBoard = () => {
    const { language } = useContext(LanguageContext);
    const boardSections = editorialData[language];
  
    return (
      <div className={styles.container}>
        <h2 className={styles.titleherd}>{text[language].title}</h2>
        <div className={styles.card}>
          {boardSections.map((section, index) => (
            <Section key={index} title={section.title} content={section.content} />
          ))}
        </div>
      </div>
    );
  };
  
  const Section = ({ title, content }) => (
    <div className={styles.section}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        {content.split(";").map((line, index) => (
          <p key={index}>{line.trim()}</p>
        ))}
      </div>
    </div>
  );
  
  export default EditorialBoard;