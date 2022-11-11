import Hero from "../components/Hero";
import styles from '../styles/Home.module.scss'
const Home = () => {
    return ( 
        <>
            <Hero />
            <main className={styles.main__content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque quo libero placeat repellat, recusandae totam cum dicta dolorum consectetur, repudiandae earum perspiciatis, magnam eum facere nisi inventore nesciunt numquam?
            </main>
        </>
    );
}
 
export default Home;