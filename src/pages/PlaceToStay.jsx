import Card from "../components/Card";
import Filter from "../components/Filter";
import styles from "../styles/PlaceToStay.module.scss"

import image1 from "../assets/Home/5.webp"
import image2 from "../assets/Home/6.webp"
import image3 from "../assets/Home/7.webp"
import image4 from "../assets/Home/8.webp"
import image5 from "../assets/Home/1.webp"
import image6 from "../assets/Home/2.webp"
import image7 from "../assets/Home/3.webp"
import image8 from "../assets/Home/4.webp"
import image9 from "../assets/placetostay/1.webp"
import image10 from "../assets/placetostay/2.webp"
import image11 from "../assets/placetostay/3.webp"
import image12 from "../assets/placetostay/4.webp"
import image13 from "../assets/placetostay/5.webp"
import image14 from "../assets/placetostay/6.webp"
import image15 from "../assets/placetostay/7.webp"
import image16 from "../assets/placetostay/8.webp"

const PlaceToStay = () => {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16
    ]

    const cards = []
    for(let i = 0; i<16; i++){
        cards.push(
            <Card key={i} image={images[i]}/>
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