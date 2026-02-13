import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './projects.module.css'
import Book from '../../objects/book/book'
import TechStack from '../../objects/techStack/techStack'

export default function Projects(){
    const ref = useRef(null)
    
    // Track scroll progress of this component
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"] // Animation starts when element enters viewport
    })
    
    // Transform scroll progress to scale (starts at 0.7, grows to 1, then shrinks)
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7])
    
    // Opacity fades in and then fades out
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
    
    return(
        <div ref={ref} className={styles.bookContainer}>
            <motion.div 
                style={{ scale, opacity }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <Book className={styles.book}></Book>
            </motion.div>
            <TechStack scrollProgress={scrollYProgress} />
        </div>
    )
}