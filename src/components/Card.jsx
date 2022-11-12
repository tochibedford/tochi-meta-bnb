import styles from '../styles/Card.module.scss'
import img1 from '../assets/cards/1.png'

const Card = () => {
    return ( 
        <div className={styles.card__container}>
            <div className={styles.card__image__container}>
                <img src={img1} alt="card image" />
            </div>
            <div className={styles.card__info}>
                <div className={styles.top__section}>
                    <div className={styles.title}>Desert king</div>
                    <div className={styles.price}>1MBT</div>
                </div>
                <div className={styles.bottom__section}>
                    <div className={styles.distance}>2345</div>
                    <div className={styles.availability}>2 weeks</div>
                </div>
            </div>
        </div>
    );
}
 
export default Card;