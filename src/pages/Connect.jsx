import ReactDOM from 'react-dom'
import styles from '../styles/Connect.module.scss'
import { useStopScroll } from '../custom-hooks'
import closeIcon from '../assets/Wallet/close.svg'
import chevronIcon from '../assets/Wallet/chevron.svg'
import metamaskFoxIcon from '../assets/Wallet/metamaskFox.png'
import otherWalletIcon from '../assets/Wallet/otherWallet.png'
import { useEffect, useRef } from 'react'

const Connect = ({ setIsConnectWalletOpen }) => {
    useStopScroll()
    return ReactDOM.createPortal(
        <div className={styles.modal__container} onClick={() => setIsConnectWalletOpen(false)}>
            <div className={styles.modal} onClick={(e)=>e.stopPropagation()}>
                <div className={styles.modal__top}>
                    <div className={styles.title}>Connect Wallet</div>
                    <div className={styles.close} onClick={() => setIsConnectWalletOpen(false)}>
                        <img src={closeIcon} alt="close modal" />
                    </div>
                </div>
                <div className={styles.modal__bottom}>
                    <div className={styles.prompt}>Choose your preffered wallet:</div>
                    <div className={`${styles.wallet} ${styles.active}`}>
                        <div className={styles.wallet__image__container}>
                            <img src={metamaskFoxIcon} alt="metamask wallet" />
                        </div>
                        <div className={styles.wallet__name}>Metamask</div>
                        <div className={styles.wallet__chevron__container}>
                            <img src={chevronIcon} alt="metamask wallet" />
                        </div>
                    </div>
                    <div className={styles.wallet}>
                        <div className={styles.wallet__image__container}>
                            <img src={otherWalletIcon} alt="other wallet" />
                        </div>
                        <div className={styles.wallet__name}>WalletConnect</div>
                        <div className={styles.wallet__chevron__container}>
                            <img src={chevronIcon} alt="metamask wallet" />
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById("modals")
    );
}

export default Connect;