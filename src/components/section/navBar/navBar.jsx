import styles from './navBar.module.css'
import DropDownButton from '../../UI/dropDownButton/dropDownButton'
import TableRowsIcon from '@mui/icons-material/TableRows';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHighlighter } from '@fortawesome/free-solid-svg-icons';
import nameLogo1 from '../../../assets/nameLogo1.png'
import { useState, useEffect, useRef } from 'react';

export default function NavBar ({ scrollToSection, refs, activeSection, setActiveSection }) {

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isCursorVisible, setIsCursorVisible] = useState(false);
    const navContainerRef = useRef(null);

    const handleSectionClick = (sectionName, sectionRef) => {
        setActiveSection(sectionName);
        scrollToSection(sectionRef);
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => {
            setIsCursorVisible(true);
        };

        const handleMouseLeave = () => {
            setIsCursorVisible(false);
        };

        const navContainer = navContainerRef.current;
        
        if (navContainer) {
            navContainer.addEventListener('mousemove', handleMouseMove);
            navContainer.addEventListener('mouseenter', handleMouseEnter);
            navContainer.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (navContainer) {
                navContainer.removeEventListener('mousemove', handleMouseMove);
                navContainer.removeEventListener('mouseenter', handleMouseEnter);
                navContainer.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return(
        <div ref={navContainerRef} className={styles.mainContainer}>

                <div className={styles.logoContainer}>
                    <img src={nameLogo1} alt="logo" />
                </div>

                <div className={styles.sectionsContainer}>
                    <div 
                        onClick={() => handleSectionClick('home', refs.home)} 
                        className={`${styles.sections} ${activeSection === 'home' ? styles.active : ''}`}
                    >
                        Home
                    </div>
                    <div 
                        onClick={() => handleSectionClick('about', refs.about)} 
                        className={`${styles.sections} ${activeSection === 'about' ? styles.active : ''}`}
                    >
                        About
                    </div>
                    <div 
                        onClick={() => handleSectionClick('projects', refs.projects)} 
                        className={`${styles.sections} ${activeSection === 'projects' ? styles.active : ''}`}
                    >
                        Projects & Tech Stack
                    </div>
                    <div 
                        onClick={() => handleSectionClick('contact', refs.contact)} 
                        className={`${styles.sections} ${activeSection === 'contact' ? styles.active : ''}`}
                    >
                        Contact
                    </div>
                </div>

                <div>
                    <DropDownButton buttonContent={<TableRowsIcon />} className={styles.navDropDown}>
                        <div className={styles.dropDownContentContainer}>
                            <div 
                                onClick={() => handleSectionClick('home', refs.home)} 
                                className={`${styles.dropDownContent} ${activeSection === 'home' ? styles.active : ''}`}
                            >
                                Home
                            </div>
                            <div 
                                onClick={() => handleSectionClick('about', refs.about)} 
                                className={`${styles.dropDownContent} ${activeSection === 'about' ? styles.active : ''}`}
                            >
                                About
                            </div>
                            <div 
                                onClick={() => handleSectionClick('projects', refs.projects)} 
                                className={`${styles.dropDownContent} ${activeSection === 'projects' ? styles.active : ''}`}
                            >
                                Projects & Tech Stack
                            </div>
                            <div 
                                onClick={() => handleSectionClick('contact', refs.contact)} 
                                className={`${styles.dropDownContent} ${activeSection === 'contact' ? styles.active : ''}`}
                            >
                                Contact
                            </div>
                        </div>
                    </DropDownButton>
                </div>

                <div 
                    className={styles.customCursor}
                    style={{
                        left: `${cursorPosition.x}px`,
                        top: `${cursorPosition.y}px`,
                        opacity: isCursorVisible ? 1 : 0
                    }}
                >
                    <FontAwesomeIcon icon={faHighlighter} />
                </div>
        </div>
    )
}