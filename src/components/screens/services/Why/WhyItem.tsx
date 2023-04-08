import { FC } from 'react'
import Image from 'next/image'

import IWhyItem from '@/shared/interfaces/Why/IWhyItem'

import styles from './Why.module.scss'
import { Russo_One } from 'next/font/google';

const russo = Russo_One({
    subsets: ['latin'],
    weight: '400'
})

const WhyItem: FC<IWhyItem> = ({title, description, image}) => {
    return (
        <li className={styles.item}>
            <Image src={image} alt='icon' width={32} height={32} className={styles.icon}/>
            <h3 className={styles.card_title}>
                <span className={russo.className}>{title}</span>
            </h3>
            <p className={styles.description}>{description}</p>
        </li>
    );
}

export default WhyItem