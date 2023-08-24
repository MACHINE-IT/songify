import { CircularProgress } from '@mui/material';
import Card from '../Card/Card';
import React, { useState } from 'react';
import styles from './Section.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';

const Section = ({ title, data, type, filter }) => {

    const [carouselToggle, setCarouselToggle] = useState(true);

    const handleToggle = () => {
        setCarouselToggle(!carouselToggle);
    }

    return (
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>{carouselToggle ? "show All" : 'collapse All'}</h4>
            </div>
            {
                data?.length === 0 ? (
                    <CircularProgress />
                ) : (
                    <div className={styles.cardWrapper}>
                        {!carouselToggle ? (
                            <div className={styles.wrapper}>
                                {data.map((ele) => (
                                    <Card data={ele} type={type} key={ele.id} />

                                ))}
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                )
            }
        </div>
    )
}


export default Section