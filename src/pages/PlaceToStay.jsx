import Card from "../components/Card";
import styles from "../styles/PlaceToStay.module.scss"

const PlaceToStay = () => {
    return (
        <main className={styles.main__content}>
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
    );
}

export default PlaceToStay;