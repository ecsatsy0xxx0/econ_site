import styles from './Entrance.module.css';
import { entranceMassk } from '../../../API/MainApi';
import { useState, useEffect } from 'react';

const EntranceMask = () => {
    const [entranceMask, entranceMaskData] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const dat = await entranceMassk();
                entranceMaskData(dat);
            } catch (error) {
                console.error('Ошибка загрузки данных:', error);
            }
        };
        loadData();
    }, []);

    if (!entranceMask) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className={styles.entrancemask}>
            <div className={styles.entrancemask__header}>
                <div className={styles.button}>
                    <p>{`Поступление`}</p>
                </div>
                <div className={styles.text}>
                    <p>{`Для поступления на магистратуру нужно минимум документов`}</p>
                </div>
            </div>
            <div className={styles.entrancemask__footer}>
                {Array(3).fill().map((_, index) => (
                    <div key={index} className={styles.tile1}>
                        <p>{entranceMask[index].number}</p>
                        <p>{entranceMask[index].title}</p>
                    </div>
                ))}
                <img src='icons/entr.svg' alt='entr'></img>
            </div>
        </div>
    );
};

export default EntranceMask;