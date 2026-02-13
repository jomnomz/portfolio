import styles from './IdCard.module.css'
import { ResponsiveFrontCardImage, ResponsiveBackCardImage } from '../../UI/responsiveImage/responsiveImage'

export default function IdCard(){
    return(
        <div className={styles.mainContainer}> 
            <div className={styles.card}>
                <div className={styles.frontCard}>
                    <ResponsiveFrontCardImage />
                </div>
                <div className={styles.backCard}>
                    <ResponsiveBackCardImage />
                </div>
            </div>
        </div>
    )
}