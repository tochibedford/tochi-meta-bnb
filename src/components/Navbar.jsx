import styles from '../styles/Navbar.module.scss'
import MetaBrand from '../assets/MetaBrand.svg'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Connect from '../pages/Connect'

const Navbar = () => {
    const [isConnectWalletOpen, setIsConnectWalletOpen] = useState(false);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const burgerInputRef = useRef(null)
    const closeBurger = () => {
        burgerInputRef.current.checked = false
        setIsBurgerOpen(false)
    }
    
    const handleResize = () => {
        if (window.innerWidth >= 1200 && burgerInputRef.current.checked) {
            closeBurger()
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

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
            <Link to="/" className={styles.brand__container}>
                <img src={MetaBrand} className={styles.brand} alt="brand logo" />
            </Link>
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
                    <button className={styles.wallet__button} onClick={() => setIsConnectWalletOpen(true)}>Connect Wallet</button>
                </div>
            </div>
            <div className={styles.mobile__menu}>
                <div className={styles.burger__menu}>
                    <input ref={burgerInputRef} type="checkbox" value={isBurgerOpen} onChange={(e) => setIsBurgerOpen(e.target.checked)} />
                    <div className={styles.scalable__nav}>
                        <ul className={styles.main__nav}>
                            {menuItems.map((item, index) => {
                                return (
                                    <li key={item.url + index} className={styles.main__nav__item}>
                                        <Link to={item.url} onClick={closeBurger}>{item.title}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className={styles.wallet__button__container}>
                            <button className={styles.wallet__button} onClick={() => setIsConnectWalletOpen(true)}>Connect Wallet</button>
                        </div>
                    </div>
                    <span className={styles.line1}></span>
                    <span className={styles.line2}></span>
                    <span className={styles.line3}></span>
                </div>
            </div>
            {isConnectWalletOpen && <Connect setIsConnectWalletOpen={setIsConnectWalletOpen} />}
        </nav>
    );
}

export default Navbar;