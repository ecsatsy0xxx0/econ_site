import styles from './DecanContainer.module.css';

const Section = () => {
const handleScrollToGide = () => {
	const gideElement = document.getElementById("gidecontainer"); // Убедитесь, что у компонента fqa есть id="fqa-section"
	if (gideElement) {
		gideElement.scrollIntoView({ behavior: "smooth" });
	};
};
return (

	<div className={styles.section} id="decancontainer">
		<div className={styles.background}>
		<div className={styles.background1}>
			<img className={styles.backgroundChild} alt="" src="icons/Frame 6.svg" />
			<div className={styles.heading2}>
			<div className={styles.div}>КубГУ — твой путь к успеху!</div>
			<div className={styles.div1}>
				<p className={styles.p}>{`Экономический факультет является признанным `}</p>
				<p className={styles.p}>
				лидером в подготовке востребованных специалистов. Присоединяйся и создавай сильное будущее с нами
				</p>
			</div>
			</div>
			<div className={styles.container}>
			<div className={styles.container1}>
				<a
				href="https://vk.com/video-940543_456239236"
				target="_blank"
				rel="noopener noreferrer"
				style={{ textDecoration: 'none', color: 'inherit' }}
				>
				<div className={styles.button}>
					<div className={styles.buttonLabel}>Смотреть видео</div>
				</div>
				</a>
				<div className={styles.button1} onClick={handleScrollToGide}>
				<div className={styles.buttonLabel} >как поступить?</div>
				</div>
			</div>
			</div>
		</div>
		<div className={styles.background2}>
			<div className={styles.quotesParent}>
			<img className={styles.quotesIcon} alt="" src="icons/Quotes.svg" />
			<div className={styles.div2}>
				<p className={styles.p}>
					<i className={styles.i}>Экономический факультет КубГУ</i>
					<i>{` — одна из `}</i>
					<span>
							<i>{`«визитных карточек» Кубанского государственного университета. К нему бы отлично подошел известный рекламный слоган о людях, управляющих Краснодаром и краем. Среди выпускников `}</i>
						<span>
								<i>{`экономфака бывшие и нынешние вице-губернаторы, мэры, топ-менеджеры крупных компаний и самый популярный предприниматель современной `}</i>
							<span>
									<i>{`России — Сергей Галицкий. К нам приходят `}</i>
								<span>
										<i>{`за бизнес-образованием. Я всегда подчеркиваю, `}</i>
									<span>
										<i>что мы учим людей заниматься малым и средним бизнесом, открывать новые предприятия.</i>
									</span>
								</span>
							</span>
						</span>
					</span>
				</p>
			</div>
			</div>
			<div className={styles.parent}>
				<div className={styles.div2}>
					<p className={styles.p8}>{`О том, как факультету удается держать «марку» `}</p>
					<p className={styles.p9}>{`и какие новшества ждут будущих студентов,  `}</p>
					<p className={styles.p}>
						<span className={styles.span}>{`рассказал `}</span>
						<b className={styles.b}>декан Игорь Викторович Шевченко</b>
					</p>
				</div>
				<div className={styles.buttonParent}>
					<div className={styles.button2} />
					<div className={styles.button3}>
					<a
						className={styles.buttonLabel2}
						href="https://newkuban.ru/news/16041514/#:~:text=Любой%20факультет%20—%20это%20прежде%20всего%20преподаватели"
						target="_blank"
						rel="noreferrer"
					>
						читать статью
					</a>
					</div>
				</div>
			</div>
		</div>
		</div>
	</div>
);

}
export default Section;
