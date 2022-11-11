import Hero from "../components/Hero";
import styles from '../styles/Home.module.scss'

import partner1 from '../assets/partner_mbtoken.svg'
import partner2 from '../assets/partner_metamask.svg'
import partner3 from '../assets/partner_opensea.svg'

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque quo libero placeat repellat, recusandae totam cum dicta dolorum consectetur, repudiandae earum perspiciatis, magnam eum facere nisi inventore nesciunt numquam?
            </main>
        </>
    );
}
 
export default Home;