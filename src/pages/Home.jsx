import Hero from "../components/Hero";
import styles from '../styles/Home.module.scss'

import partner1 from '../assets/partner_mbtoken.svg'
import partner2 from '../assets/partner_metamask.svg'
import partner3 from '../assets/partner_opensea.svg'
import learnImage from '../assets/learnMorePhoto.png'
import Card from "../components/Card";

const Home = () => {
    return (
        <>
            <Hero />
            <span className={styles.partner__banner}>
                <div className={styles.partner__img__container}>
                    <img src={partner1} alt="partner image" />
                </div>
                <div className={styles.partner__img__container}>
                    <img src={partner2} alt="partner image" />
                </div>
                <div className={styles.partner__img__container}>
                    <img src={partner3} alt="partner image" />
                </div>
            </span>
            <main className={styles.main__content}>
                <h2 className={styles.inspiration__title}>Inspiration for your next adventure</h2>
                <div className={styles.card__grid}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </main>
            <section className={styles.learn__container}>
                <div className={styles.learn__left}>
                    <div className={styles.section__title}>
                        Metabnb NFTs
                    </div>
                    <p className={styles.section__paragraph}>
                        Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
                    </p>
                    <div className={styles.learn__button__container}>
                        <button className={styles.learn__button}>Learn more</button>
                    </div>
                </div>
                <div className={styles.learn__right}>
                    <div className={styles.learn__image__container}>
                        <img src={learnImage} alt="learn more image" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;