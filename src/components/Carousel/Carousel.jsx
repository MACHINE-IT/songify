import React, { useEffect } from 'react'
import styles from './Carousel.module.css'
import { Swiper, useSwiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';

const Controls = ({ data }) => {
    const swiper = useSwiper();
    const { slideTo } = swiper;

    console.log(swiper);

    useEffect(() => {
        swiper.slideTo(0, 0);
    }, [data, slideTo]);

    return <></>;
}

const Carousel = ({ data, renderCardComponent }) => {
    // const swiperParams = {
    //     modules: [Navigation],
    //     slidesPerView: 'auto',
    //     spaceBetween: 40,
    //     allowTouchMove: true,
    // };

    return (
        <div className={styles.wrapper}>
            <Swiper initialSlide={0} modules={[Navigation]} slidesPerView="auto" spaceBetween={40} allowTouchMove>
                {/* <Swiper {...swiperParams}> */}
                <Controls data={data} />
                <CarouselLeftNavigation />
                <CarouselRightNavigation />
                {
                    data.map((item) => (
                        <SwiperSlide key={item.id}>{renderCardComponent(item)}</SwiperSlide>
                    ))
                }
            </Swiper>
        </div >
    )
}

export default Carousel