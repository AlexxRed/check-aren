import { FC} from 'react';
import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react'
import getSwiperOptions from '@/helpers/getSwiperOptions'
import 'swiper/css/navigation'
import 'swiper/css'


import offerData from '@/data/offertemplate.json'
import IProductItem from '@/shared/interfaces/Product/IProductItem'

import ProductCardItem from '@/components/ui/ProductCard/ProductCardItem'
import Button from '@/components/ui/Button/Button'
import Arrows from '@/components/ui/Arrows/Arrows'

import styles from './Offer.module.scss'
import { Russo_One } from 'next/font/google'

const russo = Russo_One({
    subsets: ['latin'],
    weight: '400'
})



const Offer: FC = () => {
    const offerList: IProductItem[] = offerData.offer

    const handleClick = () =>{
        console.log('load discs')
    }

    return (
        <section className={styles.section} id={'offer'}>
            <div className='container'>
                <div className={styles.title_container}>
                    <h2 className={styles.title}>
                        <span className={russo.className}>Special offers</span> 
                    </h2>
                    <Arrows/>
                </div>

                <div className={styles.cards}>
                    <ul className={styles.wrapper}>
                    <Swiper {...getSwiperOptions()}>
                            {offerList.map(({title, price, image, href}, idx)=>(
                                <SwiperSlide key={idx}  className={styles.slide}>
                                            <ProductCardItem
                                                title={title} 
                                                price={price} 
                                                image={image} 
                                                href={href}
                                                />
                                </SwiperSlide>
                                    ))}
                        </Swiper>
                    </ul>
                </div>

                <Link href={'/catalog'}>
                    <Button type="button" text={'View all discs'}  className="theme" customClass={styles.view} handleClick={handleClick} />
                </Link>
            </div>          
        </section>
    );
}

export default Offer
