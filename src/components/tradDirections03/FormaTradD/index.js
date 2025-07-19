import styles from "./FormaD.module.css";
import { useEffect, useState} from 'react';
import { formaTradTags, formaTradTwos } from '../../../API/MainApi';


const FormaD = () => {
    const [formaTag, setformaTag] = useState(null);
    const [formaTwo, setformaTwo] = useState(null);
    useEffect(() => {
        const loadData = async () => {
            try {
                const dat = await formaTradTags();
                const dat2 = await formaTradTwos();
                setformaTag(dat);
                setformaTwo(dat2);
            } catch (error) {
                console.error('Ошибка загрузки данных:', error);
            }
        };
        loadData();
    }, []);
    if (!formaTag || !formaTwo) {
        return <div>Загрузка...</div>; 
    }
    return (
        <div className={styles.mainForma}>
            <div className={styles.container}>
                <div className={styles.formaButtons}>
                    <p>{formaTag.buttons[0]}</p>
                </div>
                <div className={styles.formaText}>
                    <p>{formaTag.tag[0]}</p>
                    <p className={styles.textOne}>{formaTag.tag[1]}</p>
                </div>
                <div className={styles.formaBlocks}>
                    <div className={styles.blockOne}>
                        <div className={styles.oneBlock}>
                            <p>{formaTag.text[0]}</p>
                        </div>
                        <div className={styles.twoBlock}>
                            <div className={styles.blockPrice}>
                                <p>{formaTag.price[0]}</p>
                            </div>
                            {/* onClick */}
                            <div className={styles.blockButton}>
                                <p>{formaTag.buttons[1]}</p>
                            </div>
                        </div>
                    </div>      
                    <div className={styles.blockTwo}>
                        {formaTwo.map((form, index) => (
                            <div key={index}  className={styles.conOne}>
                                <div className={styles.oneText}>
                                    <p>{form.title[0]}</p>
                                    <p>{form.title[1]}</p>
                                    <span>{form.text}</span>
                                </div>
                                <div className={styles.oneNum}>
                                    <p>{form.number}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormaD;
