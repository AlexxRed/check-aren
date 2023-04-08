import { FC} from 'react';

import WhyItem from './WhyItem'
import Button from '@/components/ui/Button/Button'
import whyData from '@/data/why.json'
import IWhyItem from '@/shared/interfaces/Why/IWhyItem'

import styles from './Why.module.scss'
import { Russo_One } from 'next/font/google';


const russo = Russo_One({
    subsets: ['latin'],
    weight: '400'
})



const Why: FC = () => {
    const whyList: IWhyItem[] = whyData.list

    const handleClick = () =>{
        console.log('load discs')
    }

    return (
        <section className={styles.section} id='about-us'>
            <div className='container'>
                <div className={styles.title_container}>
                    <h2 className={styles.title}>
                        <span className={russo.className}>Why us?</span> 
                    </h2>
                    <Button type="button" text={'Book an appointment'}  className="theme" customClass={styles.view} handleClick={handleClick} />
                </div>

                <div className={styles.cards}>
                    <ul className={styles.list}>
                        {whyList.map(({title, description, image, id})=>(
                            <WhyItem title={title} description={description} image={image} key={id} id={''}/>
                        ))}
                    </ul>
                </div>

            </div>          
        </section>
    );
}

export default Why
