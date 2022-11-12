import styles from '../styles/Footer.module.scss'
import footerLogo from '../assets/footerLogo.svg'
import facebookIcon from '../assets/socials/fb.svg'
import igIcon from '../assets/socials/ig.svg'
import twitterIcon from '../assets/socials/twitter.svg'

const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <div className={styles.footer__left}>
                <div className={styles.footer__logo__container}>
                    <img src={footerLogo} alt="footer logo" />
                </div>
                <div className={styles.socials}>
                    <a href='https://www.facebook.com' className={styles.social__item}>
                        <img src={facebookIcon} alt="facebook icon" />
                    </a>
                    <a href='https://www.instagram.com' className={styles.social__item}>
                        <img src={igIcon} alt="instagram icon" />
                    </a>
                    <a href='https://www.twitter.com' className={styles.social__item}>
                        <img src={twitterIcon} alt="twitter icon" />
                    </a>
                </div>
            </div>
            <div className={styles.footer__right}>
                <div className={styles.footer__right__section}>
                    <a href="#" className={styles.title}>Community</a>
                    <a href="#" className={styles.link}>NFT</a>
                    <a href="#" className={styles.link}>Tokens</a>
                    <a href="#" className={styles.link}>Landlords</a>
                    <a href="#" className={styles.link}>Discord</a>
                </div>
                <div className={styles.footer__right__section}>
                    <a href="#" className={styles.title}>Places</a>
                    <a href="#" className={styles.link}>Castle</a>
                    <a href="#" className={styles.link}>Farms</a>
                    <a href="#" className={styles.link}>Beach</a>
                    <a href="#" className={styles.link}>Learn more</a>
                </div>
                <div className={styles.footer__right__section}>
                    <a href="#" className={styles.title}>About us</a>
                    <a href="#" className={styles.link}>Road map</a>
                    <a href="#" className={styles.link}>Creators</a>
                    <a href="#" className={styles.link}>Career</a>
                    <a href="#" className={styles.link}>Contact us</a>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;