import { useRef, useEffect, useState } from 'react';
import NavBar from './components/section/navBar/navBar';
import Home from './components/section/home/home';
import About from './components/section/about/about';
import Projects from './components/section/projects/projects';
import Contact from './components/section/contact/contact';
import './App.css';

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null); 
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState('home');

 const scrollToSection = (ref) => {
  if (ref.current) {
    const elementPosition = ref.current.offsetTop;
    const offsetPosition = elementPosition - (window.innerHeight * 0.3);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { name: 'home', ref: homeRef },
        { name: 'about', ref: aboutRef },
        { name: 'projects', ref: projectsRef },
        { name: 'contact', ref: contactRef }
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = section.ref.current;
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
        <div className='NavBar'>
          <NavBar 
            scrollToSection={scrollToSection}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            refs={{
              home: homeRef,
              about: aboutRef,
              projects: projectsRef,
              contact: contactRef,
            }}
          />
        </div>
        <div className="sections"> 
          <div ref={homeRef} className='Home'>
            <Home />
          </div>
          <div ref={aboutRef} className='About'>
            <About />
          </div>
          <div ref={projectsRef} className='Projects'>
            <Projects />
          </div>
          <div ref={contactRef} className='Contact'>
            <Contact />
          </div>
        </div>
    </div>
  );
}

export default App;