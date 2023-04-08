import { FC, useState } from 'react'
import Link from 'next/link';

import navigationData from '@/data/deliveryNavigation.json'
import IDeliveryNavigation from '@/shared/interfaces/Delivery/IDeliveryNavigation'

import styles from './Navigation.module.scss'

const Navigation: FC = () => {
    const [activeLink, setActiveLink] = useState('delivery')
    const {main, delivery}: IDeliveryNavigation = navigationData;

    const activeMenu = () =>{ 
        setActiveLink(activeLink === 'main' ? 'main' : 'delivery');
    }
    const activeClass = (link: string) =>
    activeLink === link ? styles.active : '';

    return (
        <div className={styles.wrapper} onClick={(activeMenu)}>
            <Link href='/'>
                <p className={`${styles.text} ${activeClass('main')}`}>{main}</p>
            </Link>
            <span className={styles.split}> &nbsp; | &nbsp; </span>
            <Link href='/delivery'>
                <p className={`${styles.text} ${activeClass('delivery')}`}>{delivery}</p>
            </Link>
        </div>
    );
}

export default Navigation