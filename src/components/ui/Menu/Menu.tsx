import { FC, useState } from 'react';
import Link from 'next/link';

import MenuItem from './MenuItem';

import menuData from '@/data/menu.json';
import styles from './Menu.module.scss';

type Props = { 
    place: 'header' | 'footer'
}

const Menu: FC<Props> = ({place}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        document.body.classList.toggle('lock-scroll');
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <ul className={`${styles[`list_` + place]} ${isOpen ? styles.show : ''}`}>
                {menuData.header.map(({text, href, type}, index) => (
                    <MenuItem text={text} 
                                href={href} 
                                type={type} 
                                toggleMenu={toggleMenu} 
                                key={index} />
                ))}
            </ul>

            {place === 'header' &&
            <button type="button" 
                    aria-label="Toggle Menu" 
                    className={`${styles.open_btn} ${isOpen ? styles.close_btn : ''}`} 
                    onClick={toggleMenu}>
            </button>}
        </div>
    );
}

export default Menu;