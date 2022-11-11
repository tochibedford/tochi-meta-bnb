import styles from './App.module.scss'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {

  return (
    <div className={styles.app}>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main className={styles.main__content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque quo libero placeat repellat, recusandae totam cum dicta dolorum consectetur, repudiandae earum perspiciatis, magnam eum facere nisi inventore nesciunt numquam?
      </main>
    </div>
  )
}

export default App
