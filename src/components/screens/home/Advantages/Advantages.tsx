import { FC } from 'react'

import AdvantagesList from '@/data/advantages.json'
import IAdvantagesList from '@/shared/interfaces/Advantages/IAdvantagesList'

import AdvantageItem from './AdvantageItem'
import styles from './Advantages.module.scss'

const Advantages: FC = () => {
    const {advantages}: IAdvantagesList = AdvantagesList

    return (
        <section className={styles.section} >
            <div className="container">
                <ul className={styles.list}>
                    {advantages.map(({title, description}, index) => (
                        <AdvantageItem title={title} description={description} key={index} />
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Advantages