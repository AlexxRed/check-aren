import { FC } from 'react'
import Image from 'next/image'
// import { BsBookmark } from 'react-icons/Bs';

import Button from '@/components/ui/Button/Button';
import wheel from '/public/img/pages/home/wheel.png'
import { Russo_One } from 'next/font/google';

const russo = Russo_One({
    subsets: ['latin'],
    weight: '400'
})

import styles from './ProductCardItem.module.scss';

const ProductCardItem: FC = () => {


    return (
        <div className={styles.item}>
            <div className={styles.wrapper}>
                <div className={styles.image_wrapper}>
                    <Image src={wheel} alt='wheel'  width={170} className={styles.image}/>
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>
                        <span className={russo.className}>
                            Replica B1383 / R19X9.5 / 5×120 / ET38 / 72.6
                        </span>
                    </h3>
                    <p className={styles.price}>990$/pcs</p>
                    <div className={styles.button}>
                        <div className={styles.add_warapper}>
                            <Button type="button" text={"Add to cart"}  className="theme" customClass={styles.add} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCardItem;