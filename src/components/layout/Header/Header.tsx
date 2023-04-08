import { FC, RefObject, useEffect, useState } from 'react';
import Link from 'next/link';

import Logo from '@/components/ui/Logo/Logo';
import Menu from '@/components/ui/Menu/Menu';
import Language from '@/components//ui/Language/Language'
import MenuIcons from '@/components/ui/MenuIcons/MenuIcons';

// import anchorClick from '@helpers/anchorClick';
import styles from './Header.module.scss';

type Props = {
    isSticky: boolean,
    headerRef: RefObject<HTMLElement>
}

const Header: FC<Props> = ({isSticky, headerRef}) => {

    return (
        <header className={`${styles.wrapper} ${isSticky ? styles.sticky : ''}`} id="header" ref={headerRef}>
            <div className="container">
                <nav className={styles.navigation}>
                    <Logo />
                    <div className={styles.right}>
                        <Menu place="header" />
                        <Language/>
                        <MenuIcons/>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;