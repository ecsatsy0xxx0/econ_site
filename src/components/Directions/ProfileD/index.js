import styles from "./ProfileD.module.css";
import { useEffect, useState} from 'react';
import { headerTags, sectionTags } from '../../../API/MainApi';


const ProfileD = () => {
    const [headerTag, setHeaderTag] = useState(null);
    const [sectionTag, setSectionTag] = useState(null);
    useEffect(() => {
        const loadData = async () => {
            try {
                const dat = await headerTags();
                const dat2 = await sectionTags();
                setHeaderTag(dat);
                setSectionTag(dat2);
            } catch (error) {
                console.error('Ошибка загрузки данных:', error);
            }
        };
        loadData();
    }, []);
    if (!headerTag || !sectionTag) {
        return <div>Загрузка...</div>; 
    }
    return (
        <div className={styles.profileD}>
            <div className={styles.conD}>
                <div className={styles.header}>
                    <div className={styles.headerButtons}>
                        <p>{headerTag.buttons[0]}</p>
                    </div>
                    <div className={styles.headerText}>
                        <p>{headerTag.tag[0]}</p>
                        <p className={styles.textOne}>{headerTag.tag[1]}</p>
                    </div>
                </div>
                {sectionTag.map((sec, index)=>(
                    <div key={index} className={styles.main}>
                        {sec.map((sect, unindex) => (
                            <div key={unindex} className={styles.blockMain}>
                                <div className={styles.mainImg}>
                                    <img alt="icon" src={sect.img}></img>
                                </div>
                                <div className={styles.mainBlock}>
                                    {sect.text.map((secs, uindex)=>(
                                        <div key={uindex}>
                                            <p>{secs}</p>
                                        </div>
                                    ))}
                                    <div className={styles.blockS}>
                                        {sect.buttons.map((secs, uindex)=>(
                                            <div key={uindex} className={styles.button}>
                                                <p>{secs}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                <div className={styles.footer}>
                    <p>
                        {`При углублении в отдельные треки или после магистратуры:`}
                    </p>
                    {/* onClick */}
                    <div className={styles.footeButton}>
                        <p>
                            {`ПОДРОБНЕЕ`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileD;
