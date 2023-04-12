import { FC, useState } from 'react'
import { ReactSVG } from 'react-svg'

import themeData from '@/data/theme.json'
import menuIconsData from '@/data/menuIcons.json'
import IMenuThemeItem from '@/shared/interfaces/Header/IMenuThemeItem'
import IMenuIconsItem from '@/shared/interfaces/Header/IMenuIconsItem'

import styles from './MenuIcons.module.scss'

const MenuIcons: FC = () => {
    const [theme, setTheme] = useState('light')

    const iconsList: IMenuIconsItem[] = menuIconsData.icons
    const themeList: IMenuThemeItem[] = themeData.theme

    const handleClick = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.theme}>
                {themeList.map((item, idx)=>(
                    <div key={idx}>
                        {
                            item.text===theme && 
                            <ReactSVG src={item.url} width={32} height={32} className={styles.image} onClick={handleClick} />
                        }
                    </div>
                ))}
            </div >
                <ul className={styles.icons}>
                    {
                        iconsList.map((item) => 
                        <li key={item.alt} className={styles.icon}>
                            <ReactSVG src={item.url} width={32} height={32} className={styles.image} />
                        </li>
                        )
                    }
                </ul>
        </div>
    )
}

export default MenuIcons
