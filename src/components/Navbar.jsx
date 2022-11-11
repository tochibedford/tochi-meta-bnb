import styles from '../styles/Navbar.module.scss'
import MetaBrand from '../assets/MetaBrand.svg'

const Navbar = () => {
    const menuItems = [
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'Place to Stay',
            url: '/placetostay'
        },
        {
            title: 'NFTs',
            url: '/nfts'
        },
        {
            title: 'Community',
            url: '/community'
        },

    ]
    return (
        <nav className={styles.navbar}>
            <div className={styles.brand__container}>
                <img src={MetaBrand} className={styles.brand} alt="brand logo" />
            </div>
            <div className={styles.scalable__nav}>
                <ul className={styles.main__nav}>
                    {menuItems.map((item, index) => {
                        return (
                            <li key={item.url + index} className={styles.main__nav__item}>
                                <a href={item.url}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
                <div className={styles.wallet__button__container}>
                    <button className={styles.wallet__button}>Connect Wallet</button>
                </div>
            </div>
            <div className={styles.mobile__menu}>
                
                <div className={styles.burger__menu}>
                    <input type="checkbox"/>
                    <div className={styles.scalable__nav}>
                        <ul className={styles.main__nav}>
                            {menuItems.map((item, index) => {
                                return (
                                    <li key={item.url + index} className={styles.main__nav__item}>
                                        <a href={item.url}>{item.title}</a>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className={styles.wallet__button__container}>
                            <button className={styles.wallet__button}>Connect Wallet</button>
                        </div>
                    </div>
                    <span className={styles.line1}></span>
                    <span className={styles.line2}></span>
                    <span className={styles.line3}></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;