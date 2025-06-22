import styles from './EndContainer.module.css';
import { useNavigate } from "react-router-dom";

const Section = () => {
	const navigate = useNavigate();
	const ProgressNavigate = () => {
		navigate("/progress"); // Убедитесь, что путь совпадает с маршрутом в index.js
	};
	return (
		<div className={styles.section}>
			<div className={styles.section1}>
				<div className={styles.background}>
					<div className={styles.container}>
					<div className={styles.container1}>
						<div className={styles.container2}>
						<div className={styles.container3}>
							<div className={styles.container4}>
							<div className={styles.div}>Абитуриент</div>
							</div>
						</div>
						<div className={styles.border} />
						</div>
					</div>
					<div className={styles.heading2}>
						<div className={styles.div1}>Ждем тебя</div>
						<div className={styles.div2}>на ЭФ КубГУ</div>
					</div>
					</div>
					<div className={styles.container5}>
						<div className={styles.buttonParent}>
							<div className={styles.button} onClick={ProgressNavigate}>
							<div className={styles.buttonLabel}>Подать документы</div>
							</div>
							<div className={styles.container6}>
							<div className={styles.container4}>
								<div className={styles.div}>{`*прием с 20.06.2025 `}</div>
							</div>
							</div>
						</div>
						<a
							href="https://vk.com/video-940543_456239236"
							target="_blank"
							rel="noopener noreferrer"
							style={{ textDecoration: 'none', color: 'inherit', margin: '0 auto' }}
						>
							<div className={styles.button1}>
							<div className={styles.buttonLabel1}>смотреть видео</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section;