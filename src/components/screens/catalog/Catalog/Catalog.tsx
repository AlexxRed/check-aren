import { FC, useEffect, useState} from 'react'
import { RiSearchLine } from "@react-icons/all-files/ri/RiSearchLine"
import { FiSliders } from "@react-icons/all-files/fi/FiSliders"



import ProductCardItem from '@/components/ui/ProductCard/ProductCardItem'
import Button from '@/components/ui/Button/Button'
import Arrows from '@/components/ui/Arrows/Arrows'
import catalogData from '@/data/offertemplate.json'
import IProductItem from '@/shared/interfaces/Product/IProductItem'
import useWindowSize from '@/hooks/useWindowSize'

import styles from './Catalog.module.scss'
import { Russo_One } from 'next/font/google'
import Navigation from '../Navigation/Navigation';
import Timer from '@/helpers/timer'



const russo = Russo_One({
    subsets: ['latin'],
    weight: '400'
})



const Catalog: FC = () => {
    const productList: IProductItem[] = catalogData.offer

    const [found, setFound] = useState<number>(29)
    const [filterView, setFilterView] = useState<string | null>(null)
    const windowSize = useWindowSize()
    
        useEffect(() => {
            if(windowSize.width > 834) {
                setFilterView('descktop')
            } if(windowSize.width < 834) {
                setFilterView('tablet')
            } if (windowSize.width < 428){
                setFilterView('phone')
            }
        }, [windowSize])

        const handleClick = () =>{
            console.log('load discs')
        }

    return (
        <section className={styles.section} >
            <div className='container'>
            <Navigation/>
                <div className={styles.title_container}>
                    <div className={styles.top_menu}>
                        <div className={styles.top_text}>
                        {filterView ==='descktop' && 
                            <p>{found} products found</p>
                        }
                        {filterView ==='tablet' &&
                            <Button type="button" text={'Filter'}  className="theme" customClass={styles.view} handleClick={handleClick} />
                        }
                        {filterView ==='phone' && 
                            <div className={styles.search}>
                                <FiSliders className={styles.sliders_icon} />
                            </div>                        
                        }
                        </div>

                        <div className={styles.top_filter}>
                            <div className={styles.view}>
                                <Timer/>
                            </div>
                            <Button type="button" text={'Sort by'}  className="theme" customClass={styles.view} handleClick={handleClick} />
                            
                            <div className={styles.search}>
                                <RiSearchLine className={styles.icon} />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={styles.wrapper}>
                    <div className={styles.filter}>

                    </div>

                    <div className={styles.cards}>
                        <ul className={styles.list}>
                            {productList.map(({title, price, image, href}, idx)=>(
                                <ProductCardItem title={title} price={price} image={image} key={idx} href={href} />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.pagination}>
                    <Arrows/>
                </div>
            </div>          
        </section>
    );
}

export default Catalog
