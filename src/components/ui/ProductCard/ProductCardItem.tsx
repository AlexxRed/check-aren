import { FC } from 'react'
import Image from 'next/image'
import { BsBookmark } from "@react-icons/all-files/bs/BsBookmark";

import IProductItem from '@/shared/interfaces/Product/IProductItem'
import Button from '@/components/ui/Button/Button';
import { Russo_One } from 'next/font/google';

const russo = Russo_One({
    subsets: ['latin'],
    weight: '400'
})

import styles from './ProductCardItem.module.scss';

const ProductCardItem: FC<IProductItem> = ({image, title, price}) => {
    const {url, alt} = image;


    return (
        <li className={styles.item}>
            <div className={styles.wrapper}>
                <div className={styles.image_wrapper}>
                    <div className={styles.image}>
                        <Image src={url} blurDataURL={url} alt={alt} placeholder="blur" width={225} height={227} className={styles.image}/>
                    </div>
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}><span className={russo.className}>{title}</span></h3>
                    <p className={styles.price}>{price}</p>
                    <div className={styles.button}>
                        <div className={styles.add}>
                            <Button type="button" text={"Add to cart"}  className="theme" customClass={styles.add} />
                        </div>
                        <div className={styles.flag}>
                            <BsBookmark className={styles.icon}/>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default ProductCardItem;