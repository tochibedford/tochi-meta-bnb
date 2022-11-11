import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import styles from '../styles/Hero.module.scss'

const Hero = () => {
    return (
        <div className={styles.hero__container}>
            <div className={styles.hero__left}>
                <div className={styles.hero__title}>
                    Rent a <span className={styles.special__text}>Place</span> away from <span className={styles.special__text}>Home</span> in the <span className={styles.special__text}>Metaverse</span>
                </div>
                <p className={styles.hero__paragraph}>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <span className={styles.search__container}>
                    <input type="text" placeholder='Search for location' className={styles.search__input} />
                    <button className={styles.search__button}>Search</button>
                </span>
            </div>
            <div className={styles.hero__right}>
                <div className={styles.hero__masonry}>
                    <div className={`${styles.masonry__image__container} ${styles.img1__container}`}>
                        <img src={img1} alt="hero image" />
                    </div>
                    <div className={`${styles.masonry__image__container} ${styles.img2__container}`}>
                        <img src={img2} alt="hero image" />
                    </div>
                    <div className={`${styles.masonry__image__container} ${styles.img3__container}`}>
                        <img src={img3} alt="hero image" />
                    </div>
                    <div className={`${styles.masonry__image__container} ${styles.img4__container}`}>
                        <img src={img4} alt="hero image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;