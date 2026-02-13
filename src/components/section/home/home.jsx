import styles from './home.module.css'
import catLogo from '../../../assets/catLogo.png'
import { motion } from "framer-motion";

export default function Home(){
    return(
        <div className={styles.mainContainer}>
            <div className={styles.catLogoContainer}>
                <motion.img
                    className={styles.catLogo}
                    src={catLogo}
                    alt="Cat Logo"
                    initial={{ y: -300, opacity: 0 }}   
                    animate={{ y: 0, opacity: 1 }}      
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            </div>
        </div>
    )
}
