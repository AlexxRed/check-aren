import { FC } from 'react'

import styles from './Fail.module.scss'
import { Russo_One } from 'next/font/google'


const russo = Russo_One({
    subsets: ['latin'],
    weight: '400'
})

const Fail: FC = () => {

    return (
        <section className={styles.section} >
            <div className="container">
                <div className={styles.list}>
                    <div className={russo.className}>
                        <h3 className={styles.title}>404</h3>
                        <p className={styles.description}>Something is going wrong...</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Fail