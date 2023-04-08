import { Navigation,Autoplay } from 'swiper';

const getSwiperOptions = () => {
    return {
        modules: [Navigation, Autoplay],
        slidesPerView: 2,
        spaceBetween: 30,
        allowTouchMove: true,
        loop: true,
        navigation: {
            nextEl: '.nextSlide',
            prevEl: '.prevSlide',
        },
        breakpoints: {
            420: {
                slidesPerView: 1,
                spaceBetween: 24
            },
            834: {
                slidesPerView: 2,
                spaceBetween: 32
            },
            1240: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    }
}

export default getSwiperOptions;