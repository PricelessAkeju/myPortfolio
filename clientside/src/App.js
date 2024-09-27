import { useState } from 'react';
import Header from './COMPONENTS/Header';
import Hero from './COMPONENTS/Hero';
import Services from './COMPONENTS/Services';
import Tools from './COMPONENTS/Tools';
import Skills from './COMPONENTS/Skills';
import Projects from './COMPONENTS/Projects';
import Contact from './COMPONENTS/Contact';
import Footer from './COMPONENTS/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode && "dark"} >
    

    <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
    <main className='bg-white dark:bg-gray-900 dark:text-white'>
    <Hero/>
    <Services/>
    <Tools/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </main>
    </div>
  );
}

export default App;
