import React from "react";
import vibratingHeadphone from "../../Assets/vibrating-headphone 1.svg";
import styles from "./Hero.module.css"

const HeroImage = () => {
    return (
        <div className={styles.mainHero}>
            <div className={styles.heroText}>
                <p>100 Thousand Songs, ad-free</p>
                <p>Over thousands podcast episodes</p>
            </div>
            <div className={styles.heroImage}>
                <img
                    src={vibratingHeadphone}
                    alt="vibrating headphone hero"
                />
            </div>
        </div>
    );
};

export default HeroImage;
