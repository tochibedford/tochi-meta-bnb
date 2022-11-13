import styles from '../styles/Card.module.scss'
import img1 from '../assets/cards/1.png'
import star from '../assets/cards/star.svg'
import heart from '../assets/cards/heart.svg'

const Card = () => {
    const rating = 5 // can switch this out for a ratings prop

    const stars = []
    for(let i = 0; i<rating; i++){
        stars.push(
            <div className={styles.star__image__container} key={`star__${i}`}>
                <img className={styles.star__image} src={star} alt="star image" />
            </div>
        )
    }
    return ( 
        <div className={styles.card__container}>
            <div className={styles.card__image__container}>
                <img className={styles.card__image} src={img1} alt="card image" />
                <img className={styles.card__heart} src={heart} alt="heart icon"/>
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
                <span className={styles.rating}>
                    {stars}
                </span>
            </div>
        </div>
    );
}
 
export default Card;