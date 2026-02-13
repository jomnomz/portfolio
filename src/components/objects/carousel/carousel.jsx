import { useState } from 'react'
import styles from './carousel.module.css'
import { ChevronLeft } from 'react-feather'
import { ChevronRight } from 'react-feather'
import Modal from '../modal/Modal'

export default function Carousel ({ children: slides}){

    const [curr, setCurr] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const prev = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    }

    const next = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    }

    const handleImageClick = (e) => {
        console.log("Image clicked!"); 
        e.stopPropagation();
        e.preventDefault();
        setIsModalOpen(true);
    }

    return(
        <>
            <div className={styles.mainContainer}>
                <div className={styles.slides} style={{transform:`translateX(-${curr*100}%)`}}>
                    {slides.map((slide, index) => (
                        <div 
                            key={index} 
                            className={styles.slideItem}
                            onClick={handleImageClick}
                        >
                            {slide}
                        </div>
                    ))}
                </div>
                <div className={styles.buttonContainer} onClick={(e) => e.stopPropagation()}>
                    <button onClick={prev} className={styles.button}>
                        <ChevronLeft></ChevronLeft>
                    </button>
                    <button onClick={next} className={styles.button}>
                        <ChevronRight></ChevronRight>
                    </button>
                </div>
                <div className={styles.indicatorContainer}>
                    {slides.map((_, i) => (
                        <div 
                            key={i}
                            className={`${styles.indicator} ${curr === i ? styles.active : ''}`}
                        />
                    ))}
                </div>
            </div>
            
            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
                currentIndex={curr}
                totalSlides={slides.length}
                onPrev={prev}
                onNext={next}
            >
                {slides[curr]}
            </Modal>
        </>
    )
}