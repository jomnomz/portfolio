import frontCardBlue1 from '../../../assets/frontCardBlue1.png'
import backCardBlue1 from '../../../assets/backCardBlue1.png'
import idPicture from '../../../assets/idPicture.png'
import styles from './responsiveImage.module.css'

export function ResponsiveFrontCardImage(){
    return(
        <picture>
            <source media='(min-width: 992px)' srcSet={frontCardBlue1} />
            <img src={idPicture} alt="" />
        </picture>
    )
}

export function ResponsiveBackCardImage(){
    return(
        <picture>
            <source media='(min-width: 992px)' srcSet={backCardBlue1} />
            <img src={idPicture} alt="" />
        </picture>
    )
}