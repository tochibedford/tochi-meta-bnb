import styles from '../styles/Card.module.scss'
import img1 from '../assets/cards/1.png'

const Card = () => {
    return ( 
        <div className={styles.card}>
            <div className={styles.card__image__container}>
                <img src={img1} alt="card image" />
            </div>
        </div>
    );
}
 
export default Card;