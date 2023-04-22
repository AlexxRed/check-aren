import React, { useRef } from 'react'

import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";


import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import SwiperCore from 'swiper'

import data from '@/data/reviews.json'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import style from './Reviews.module.scss'
import Stars from '@/components/ui/Stars/Stars'
import { Russo_One } from 'next/font/google'

const russo = Russo_One({
    subsets: ['latin'],
    weight: '400'
})

function Reviews() {
  let swiper = useSwiper()
  const swiperRef = useRef<SwiperCore>()

  return (
    <section className={style.reviews} id='reviews'>
      <header className={style.header}>
        <h2 className={russo.className}>Reviews</h2>
        <div className={style.nav}>
          <button
            className={style.left}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <IoIosArrowBack className={style.icon}></IoIosArrowBack>
          </button>
          <button
            className={style.right}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <IoIosArrowForward className={style.icon}></IoIosArrowForward>
          </button>
        </div>
      </header>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        breakpoints={{
          934: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className={style.item}>
            <div className={style.top}>
              <div className={style.img}>{item.image}</div>
              <div className={style.userInfo}>
                <div className={style.userName}>{item.userInfo.name}</div>
                <div className={style.userProduct}>{item.userInfo.product}</div>
                <Stars rating={+item.ratings}></Stars>
              </div>
            </div>
            <div className={style.bottom}>{item.text}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Reviews
