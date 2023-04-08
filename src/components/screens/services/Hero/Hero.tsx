import { FC, useEffect, useRef } from 'react'
import Image from 'next/image'

import heroData from '@/data/heroServices.json'
import IHeroContent from '@/shared/interfaces/Hero/IHeroContent'
import Advantages from '../../home/Advantages/Advantages'
import Button from '@/components/ui/Button/Button'
import ProductCardItem from './ProductCardItem'

import card from '/public/img/pages/home/hero-card.png'
import styles from './Hero.module.scss'
import { Russo_One } from 'next/font/google'


const russo = Russo_One({
    subsets: ['latin'],
    weight: '400'
})

const Hero: FC = () => {
    const {section, description, button}: IHeroContent = heroData;

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.image_wrapper}>
                    <div className={styles.box}>
                        <div className={styles.wrapper}>
                            <div className={styles.content}>
                                <h1 className={styles.title}>
                                    <span className={russo.className}>
                                    <span className={styles.title_link}>
                                        Forget about the long gatherings&nbsp;
                                    </span>
                                    in the service station! Get a quote within an hour after the diagnosis
                                    </span>
                                </h1>
                                <p className={styles.description}>{description}</p>
                                <Button type="button" 
                                        text={button.text} 
                                        className="theme" 
                                        customClass={styles.button} />
                            </div>
                            <div className={styles.card_wrapper}>
                                <Image src={card} alt='card' width={401} height={378} className={styles.card}/>
                                <ProductCardItem />
                            </div>
                        </div>                    
                    </div>
                    <Advantages/>
                </div>
            </div>
        </section>
    );
}

export default Hero;