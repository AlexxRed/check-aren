import { FC } from 'react'
import Link from 'next/link'

import logoData from '@/data/logo.json'
import ILogo from '@/shared/interfaces/ILogo'

import styles from './Logo.module.scss'
import { Russo_One } from 'next/font/google'

const russo = Russo_One({
    subsets: ['latin'],
    weight: '400'
})

const Logo: FC = () => {
    const {title, description}: ILogo = logoData

    return (
        <div className={russo.className}>
            <Link className={styles.wrapper} href={'/'}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </Link>
        </div>
    );
}

export default Logo