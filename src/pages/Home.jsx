import Hero from "../components/Hero";
import styles from '../styles/Home.module.scss'

import partner1 from '../assets/partner_mbtoken.svg'
import partner2 from '../assets/partner_metamask.svg'
import partner3 from '../assets/partner_opensea.svg'
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
                
            </section>
        </>
    );
}
 
export default Home;