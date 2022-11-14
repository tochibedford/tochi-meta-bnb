import Card from "../components/Card";
import Filter from "../components/Filter";
import styles from "../styles/PlaceToStay.module.scss"

const PlaceToStay = () => {
    const cards = []
    for(let i = 0; i<16; i++){
        cards.push(
            <Card key={i}/>
        )
    }

    const locations = ["Restaurant", "Cottage", "Castle", "Fantast City", "Beach", "Cabins", " Off-grid", "Farm"]
    return (
        <main className={styles.main__content}>
            <Filter options={locations} />
            <div className={styles.card__grid}>
                {cards}
            </div>
        </main>
    );
}

export default PlaceToStay;