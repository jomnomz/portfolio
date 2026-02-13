import { motion } from 'framer-motion'
import styles from './techStack.module.css'
import css from '../../../assets/css.png'
import HTML from '../../../assets/HTML.png'
import javaScript from '../../../assets/javaScript.png'
import react from '../../../assets/react.svg'

export default function TechStack({ scrollProgress }) {
    const techStack = [
        { name: 'React/React Native', color: '#ADC1C2', icon: react },
        { name: 'Node.js', color: '#91ACC8', icon: '🟢' },
        { name: 'Express', color: '#6A7D93', icon: '⚡' },
        { name: 'Supabase', color: '#CFCDA2', icon: javaScript },
        { name: 'JavaScript', color: '#CFCDA2', icon: javaScript },
        { name: 'HTML', color: '#6F779D', icon: HTML },
        { name: 'CSS', color: '#607F83', icon: css },
    ]

    return (
        <div className={styles.container}>
            <div className={styles.bookStack}>
                {techStack.map((tech, index) => {
                    const isBottomBook = index === 0;
                    return (
                        <motion.div 
                            key={index} 
                            className={styles.book}
                            style={{
                                backgroundColor: tech.color,
                                zIndex: index + 1,
                                position: 'relative'
                            }}
                            initial={{ 
                                x: 200,
                                opacity: 0 
                            }}
                            whileInView={{ 
                                x: 0,
                                opacity: 1,
                                rotate: Math.random() * 3 - 1.5
                            }}
                            transition={{ 
                                duration: 0.3, 
                                delay: index * 0.08,
                                ease: "easeOut" 
                            }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <div className={styles.bookSpine}>
                                <div className={styles.bookTop}></div>
                                <div className={styles.bookContent}>
                                    <div className={styles.bookIcon}>
                                        {typeof tech.icon === 'string' && tech.icon.length > 2 ? (
                                            <img src={tech.icon} alt={tech.name} />
                                        ) : (
                                            tech.icon
                                        )}
                                    </div>
                                    <div className={styles.bookName}>{tech.name}</div>
                                </div>
                                <div className={styles.bookBottom}></div>
                            </div>
                            <div className={styles.bookPages}></div>
                            <div className={styles.bookShadow}></div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}