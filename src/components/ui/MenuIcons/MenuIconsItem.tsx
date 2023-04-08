import { FC } from 'react'
import Image from 'next/image'

import IMenuIconsItem from '@/shared/interfaces/Header/IMenuIconsItem'
import styles from './MenuIcons.module.scss';


const MenuIconsItem: FC<IMenuIconsItem> = (url: string | any, alt) => {

    return (
        <div className={styles.wrapper}>
            <Image src={url} alt={alt} className={styles.icon} width={30}/>
        </div>
    );
}

export default MenuIconsItem;