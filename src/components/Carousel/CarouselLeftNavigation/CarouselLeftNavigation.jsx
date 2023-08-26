import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import styles from '../Carousel.module.css';
import { ReactComponent as LeftArrow } from "../../../Assets/LeftArrow.svg";

const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(true);

    useEffect(() => {
        swiper.on("slideChange", function () {
            console.log("Slide changed!!!!!");
            setIsBeginning(swiper.isBeginning)
        })
    }, [swiper])
    console.log(`isBeginning: ${isBeginning}`);
    return (
        <div className={styles.leftNavigation}>
            {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
        </div>
    )
}

export default CarouselLeftNavigation