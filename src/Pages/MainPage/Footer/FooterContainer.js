import styles from './FooterContainer.module.css';
import { useNavigate } from "react-router-dom";


const Footer = () => {
	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate("/econtp"); // Убедитесь, что путь совпадает с маршрутом в index.js
	};
	const handleNavigateGide = () => {
		navigate("/gide"); // Убедитесь, что путь совпадает с маршрутом в index.js
	};
	const handleScrollToSpesh = () => {
		const speshElement = document.getElementById('spesh-section');
		if (speshElement) {
			speshElement.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleScrollToDecan = () => {
		const decanElement = document.getElementById('decancontainer');
		if (decanElement) {
			decanElement.scrollIntoView({ behavior: 'smooth' });
		}
	};
	return (
		<div className={styles.footer}>
			<div className={styles.container}>
					<div className={styles.overlay}>
						<div className={styles.containerParent}>
								<div className={styles.container1}>
									<div className={styles.link}>
											<div className={styles.logo}>
												<img className={styles.logoChild} alt="" src="icons/Frame 14.svg" />
												<div className={styles.logoItem} />
												<img className={styles.logoInner} alt="" src="icons/Frame 6Blue.svg" />
												<div className={styles.logoItem} />
												<div className={styles.logo3blueWrapper}>
														<img className={styles.logo3blueIcon} alt="" src="icons/Logo3Blue (1).svg" />
												</div>
											</div>
											<div className={styles.parent}>
												<div className={styles.div}>Кубанский государственный университет</div>
												<div className={styles.div1}>экономический факультет</div>
											</div>
									</div>
								</div>
								<div className={styles.container2}>
									<div className={styles.container1} onClick={handleScrollToDecan}>
											<div className={styles.link1}>
												<div className={styles.container1}>
														<div className={styles.container5}>
															<div className={styles.buttonLabel}>о факультете</div>
														</div>
												</div>
											</div>
									</div>
									<div className={styles.container1} onClick={handleScrollToSpesh}>
											<div className={styles.link1}>
												<div className={styles.container1}>
														<div className={styles.container5}>
															<div className={styles.buttonLabel}>направления</div>
														</div>
												</div>
											</div>
									</div>
									<div className={styles.container1}>
											<div className={styles.link1}>
												<div className={styles.container1}>
														<div className={styles.container5} onClick={handleNavigate}>
															<div className={styles.buttonLabel}>журнал</div>
														</div>
												</div>
											</div>
									</div>
									<div className={styles.container1} onClick={handleNavigateGide}>
											<div className={styles.link1}>
												<div className={styles.container1}>
														<div className={styles.container5}>
															<div className={styles.buttonLabel}>гайд абитуриента</div>
														</div>
												</div>
											</div>
									</div>
								</div>
						</div>
						<div className={styles.group}>
								<div className={styles.div6}>ТЕЛ: 8 (861) 219-95-53</div>
								<div className={styles.iconbuttonParent}>
									<div className={styles.iconbutton}>
										<a
										href="https://vk.com/econom_kubsu"
										target="_blank"
										rel="noopener noreferrer"
										style={{ textDecoration: 'none', color: 'inherit' }}
									>
											<div className={styles.vk}>
												<img className={styles.vectorIcon} alt="" src="icons/vk.svg" />
											</div>
											</a>
									</div>
									<div className={styles.iconbutton}>
										<a
										href="https://t.me/econom_kubsu"
										target="_blank"
										rel="noopener noreferrer"
										style={{ textDecoration: 'none', color: 'inherit' }}
									>
											<div className={styles.tg}>
												<img className={styles.component1Icon} alt="" src="icons/tg.svg" />
											</div>
											</a>
									</div>
								</div>
								<div className={styles.div7}>{`ул. Ставропольская, 159 `}</div>
						</div>
					</div>
			</div>
			<div className={styles.copyright}>
					<div className={styles.overlay1}>
						<div className={styles.div8}>© 2025, экономический факультет кубгу</div>
						<div className={styles.container15}>
							<a
	href="https://t.me/h0vvian"
	target="_blank"
	rel="noopener noreferrer"
	style={{ textDecoration: 'none', color: 'inherit' }}
	>
								<div className={styles.button}>
									<div className={styles.buttonLabel}>дизайн – matlakhov v.</div>
								</div>
								</a>
								<a
	href="https://t.me/skoro0977"
	target="_blank"
	rel="noopener noreferrer"
	style={{ textDecoration: 'none', color: 'inherit' }}
	>
								<div className={styles.button}>
									<div className={styles.buttonLabel}>разработка – avenir</div>
								</div>
								</a>
						</div>
					</div>
			</div>
	</div>
	);
};

export default Footer;
