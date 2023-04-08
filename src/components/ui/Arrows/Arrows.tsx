import { FC } from 'react'


import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";

import arrowsData from '@/data/arrows.json'
import IArrows from '@/shared/interfaces/IArrows'

import styles from './Arrows.module.scss'


const Arrows: FC = () => {
    const {left, right}: IArrows = arrowsData;

    const handleClick = () => {
        console.log('forward or back')
    }

    return (
        <div className={styles.box}>
            <div className='prevSlide'>
                <div className={styles.wrapper} onClick={handleClick}>
                    <IoIosArrowBack className={styles.icon}/>
                </div>
            </div>

            <div className='nextSlide'>
                <div className={styles.wrapper} onClick={handleClick}>
                    <IoIosArrowForward  className={styles.icon}/>
                </div>
            </div>

        </div>
    );
}

export default Arrows