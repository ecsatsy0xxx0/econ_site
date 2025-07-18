import styles from "./PossibilityD.module.css";
import { useEffect, useState} from 'react';
import { headerPosTags, sectionPosTags, lastSectionPosTags } from '../../../API/MainApi';

const PossibilityD = () => {
    const [headerPosTag, setHeaderPosTag] = useState(null);
    const [sectionPosTag, setSectionPosTag] = useState(null);
    const [lastSectionPosTag, setLastSectionPosTag] = useState(null);
    useEffect(() => {
        const loadData = async () => {
            try {
                const dat = await headerPosTags();
                const dat2 = await sectionPosTags();
                const dat3 = await lastSectionPosTags();
                setHeaderPosTag(dat);
                setSectionPosTag(dat2);
                setLastSectionPosTag(dat3);
            } catch (error) {
                console.error('Ошибка загрузки данных:', error);
            }
        };
        loadData();
    }, []);
    if (!headerPosTag || !sectionPosTag || !lastSectionPosTag) {
        return <div>Загрузка...</div>; 
    }
    return (
        <div className={styles.profileD}>
            <div className={styles.conD}>
                <div className={styles.header}>
                    <div className={styles.headerButtons}>
                        <p>{headerPosTag.buttons[0]}</p>
                    </div>
                    <div className={styles.headerText}>
                        <p>{headerPosTag.tag[0]}</p>
                        <p className={styles.textOne}>{headerPosTag.tag[1]}</p>
                    </div>
                </div>
                <div className={styles.upMain}>
                    <div className={styles.mainPm1}>
                        <div className={styles.pm1UP}>
                            <div className={styles.mainImgs}>
                                <img alt="icon" src={lastSectionPosTag[0].img[0]}></img>
                            </div>
                            <div className={styles.upImg}>
                                <img alt="icon" src={lastSectionPosTag[0].img[1]}></img>
                            </div>
                        </div>
                        <div className={styles.pm1Under}>
                            <p>{lastSectionPosTag[0].text[0]}</p>
                            <span>{lastSectionPosTag[0].text[1]}</span>
                            <div className={styles.blockS}>
                                {lastSectionPosTag[0].buttons.map((but, index)=>(
                                    <div key={index} className={styles.button}>
                                        <p>{but}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.mainPm2}>
                        <div className={styles.mainImg}>
                            <img alt="icon" src={lastSectionPosTag[1].img}></img>
                        </div>
                        <div className={styles.pm2Under}>
                            <p>{lastSectionPosTag[1].text[0]}</p>
                            <div className={styles.blockS}>
                                {lastSectionPosTag[1].buttons.map((but, index)=>(
                                    <div key={index} className={styles.button}>
                                        <p>{but}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
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
                {sectionPosTag.map((sec, index)=>(
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
                <div className={styles.underMain}>
                    <div className={styles.undermainPm1}>
                        <div className={styles.underpm1UP}>
                            <div className={styles.undermainImgs}>
                                <img alt="icon" src={lastSectionPosTag[2].img[0]}></img>
                            </div>
                            <div className={styles.upImg}>
                                <img alt="icon" src={lastSectionPosTag[2].img[1]}></img>
                            </div>
                        </div>
                        <div className={styles.pm1Under}>
                            <p>{lastSectionPosTag[2].text[0]}</p>
                            <span>{lastSectionPosTag[2].text[1]}</span>
                            <div className={styles.blockS}>
                                {lastSectionPosTag[2].buttons.map((but, index)=>(
                                    <div key={index} className={styles.button}>
                                        <p>{but}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PossibilityD;
