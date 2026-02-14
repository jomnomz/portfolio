import { X, ChevronLeft, ChevronRight } from 'react-feather'
import { createPortal } from 'react-dom'
import { useEffect, useRef } from 'react'
import styles from './modal.module.css'

export default function Modal({ isOpen, onClose, children, currentIndex, totalSlides, onPrev, onNext }) {
    const touchStartX = useRef(0)
    const touchEndX = useRef(0)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    if (!isOpen) return null

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX
    }

    const handleTouchEnd = () => {
        const diff = touchStartX.current - touchEndX.current

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // Swiped left → next
                onNext()
            } else {
                // Swiped right → prev
                onPrev()
            }
        }
    }

    return createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    <X />
                </button>

                {/* Desktop buttons */}
                <button className={styles.navButton} onClick={onPrev}>
                    <ChevronLeft />
                </button>
                <button className={styles.navButtonRight} onClick={onNext}>
                    <ChevronRight />
                </button>

                <div
                    className={styles.content}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
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
    )
}
