import Card from "../components/Card";
import styles from "../styles/PlaceToStay.module.scss"

const PlaceToStay = () => {
    const cards = []
    for(let i = 0; i<16; i++){
        cards.push(
            <Card key={i}/>
        )
    }
    return (
        <main className={styles.main__content}>
            <div className={styles.card__grid}>
                {cards}
            </div>
        </main>
    );
}

export default PlaceToStay;