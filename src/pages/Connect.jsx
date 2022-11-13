import ReactDOM from 'react-dom'
import styles from '../styles/Connect.module.scss'
import { useStopScroll } from '../custom-hooks'

const Connect = ({setIsConnectWalletOpen}) => {
    useStopScroll()
    return ReactDOM.createPortal(
        <div className={styles.modal__container} onClick={()=>setIsConnectWalletOpen(false)}>
            <div className={styles.modal}>
                Connect
            </div>
        </div>,
        document.getElementById("modals")
    );
}

export default Connect;