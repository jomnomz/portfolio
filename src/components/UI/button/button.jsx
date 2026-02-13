import { Children } from 'react'
import styles from './button.module.css'

export default function Button(){
    return(
        <div className={styles.button} >
            <div>
                {Children}
            </div>
        </div>
    )
}