import { FC, useState } from 'react'

import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { VscGitCompare } from "@react-icons/all-files/vsc/VscGitCompare";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { BiMoon } from "@react-icons/all-files/bi/BiMoon";
import { WiDaySunny } from "@react-icons/all-files/wi/WiDaySunny";


import themeData from '@/data/theme.json'
import menuIconsData from '@/data/menuIcons.json'
import IMenuThemeItem from '@/shared/interfaces/Header/IMenuThemeItem'
import IMenuIconsItem from '@/shared/interfaces/Header/IMenuIconsItem'

import styles from './MenuIcons.module.scss';

const MenuIcons: FC = () => {
    const [theme, setTheme] = useState(true)

    const iconsList: IMenuIconsItem[] = menuIconsData.icons
    const themeList: IMenuThemeItem[] = themeData.theme

    const handleClick = () => {
        setTheme(!theme)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.theme}>
                {/* {themeList.map((item, idx)=>(
                    <div key={idx}>
                    {item.text===theme && <Image src={item.url} alt={item.alt} width={30} height={30} />}
                    </div>
                ))} */}
                {theme===true && <WiDaySunny className={styles.icon} onClick={handleClick}/>}
                {theme===false && <BiMoon  className={styles.icon} onClick={handleClick}/>}
            </div>
            <ul className={styles.icons}>
                {
                    <>
                    <li><AiOutlineShoppingCart className={styles.icon}/></li>
                    <li><VscGitCompare className={styles.icon}/></li>
                    <li><AiOutlineUser className={styles.icon}/></li>
                    <li><AiOutlineMenu className={styles.icon}/></li>
                    </>
                    // iconsList.map((item) => 
                    // <li key={item.alt} className={styles.icon}>
                    //     <Image src={item.url} alt={item.alt} width={30} height={30} className={styles.image} />
                    // </li>
                    // )
                }
            </ul>
        </div>
    );
}

export default MenuIcons;
