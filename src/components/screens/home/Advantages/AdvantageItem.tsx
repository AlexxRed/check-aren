import { FC } from 'react'
import IAdvantagetem from '@/shared/interfaces/Advantages/IAdvantage'

import styles from './Advantages.module.scss'

const AdvantageItem: FC<IAdvantagetem> = ({title, description}) => {
    return (
        <li className={styles.item}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </li>
    );
}

export default AdvantageItem