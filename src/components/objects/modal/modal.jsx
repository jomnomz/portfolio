import { X, ChevronLeft, ChevronRight } from 'react-feather'
import { createPortal } from 'react-dom'
import { useEffect } from 'react'
import styles from './modal.module.css'

export default function Modal({ isOpen, onClose, children, currentIndex, totalSlides, onPrev, onNext }) {
    useEffect(() => {
        if (isOpen) {
            // Disable scrolling when modal opens
            document.body.style.overflow = 'hidden';
        } else {
            // Re-enable scrolling when modal closes
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to re-enable scrolling when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    <X />
                </button>
                
                <button className={styles.navButton} onClick={onPrev}>
                    <ChevronLeft />
                </button>
                <button className={styles.navButtonRight} onClick={onNext}>
                    <ChevronRight />
                </button>

                <div className={styles.content}>
                    {children}
                    
                    <div className={styles.indicatorContainer}>
                        {Array.from({ length: totalSlides }).map((_, i) => (
                            <div 
                                key={i}
                                className={`${styles.indicator} ${currentIndex === i ? styles.active : ''}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}