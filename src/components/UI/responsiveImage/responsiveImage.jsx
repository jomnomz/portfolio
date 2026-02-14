import frontCardBlue1 from '../../../assets/frontCardBlue1.png'
import backCardBlue1 from '../../../assets/backCardBlue1.png'
import frontCardBlue2 from '../../../assets/frontCardBlue2.png'
import backCardBlue2 from '../../../assets/backCardBlue2.png'
import idPicture from '../../../assets/idPicture.png'
import styles from './responsiveImage.module.css'

export function ResponsiveFrontCardImage(){
    return(
        <picture>
            <source media='(min-width: 992px)' srcSet={frontCardBlue1} />
            <source media='(min-width: 768px)' srcSet={frontCardBlue1} />
            <source media='(min-width: 500px)' srcSet={frontCardBlue1} />
            <img src={frontCardBlue2} alt="" />
        </picture>
    )
}

export function ResponsiveBackCardImage(){
    return(
        <picture>
            <source media='(min-width: 992px)' srcSet={backCardBlue1} />
            <source media='(min-width: 768px)' srcSet={backCardBlue1} />
            <source media='(min-width: 500px)' srcSet={backCardBlue1} />
            <img src={backCardBlue2} alt="" />
        </picture>
    )
}