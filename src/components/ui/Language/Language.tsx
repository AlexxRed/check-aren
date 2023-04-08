import { FC, useState } from 'react'

import LanguageData from '@/data/language.json'
import ILanguage from '@/shared/interfaces/Header/ILanguage'

import styles from './Language.module.scss'

const Language: FC = () => {
    const [activeLanguage, setActiveLanguage] = useState('finnish')
    const {english, finnish}: ILanguage = LanguageData;

    const chooseLanguage = () =>{ 
        setActiveLanguage(activeLanguage === 'english' ? 'finnish' : 'english');
    }
    const activeClass = (language: string) =>
    activeLanguage === language ? styles.active : '';

    return (
        <div className={styles.wrapper} onClick={(chooseLanguage)}>
            <p className={`${styles.text} ${activeClass('english')}`}>{english}</p>
            <span className={styles.split}> &nbsp; | &nbsp; </span>
            <p className={`${styles.text} ${activeClass('finnish')}`}>{finnish}</p>
        </div>
    );
}

export default Language