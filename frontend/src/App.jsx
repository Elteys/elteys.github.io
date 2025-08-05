// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaDiscord, FaBars, FaTimes } from 'react-icons/fa';
import About from './components/about.jsx';
import Skills from './components/skills.jsx';
import Experience from './components/experience.jsx';
import Education from './components/education.jsx';
import Certificates from './components/certificates.jsx';
import Projects from './components/projects.jsx';
import Footer from './components/footer.jsx';
import ScrollAnimationWrapper from './components/ScrollAnimationWrapper.jsx';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedCode, setTypedCode] = useState('');
  const [typedJobTitle, setTypedJobTitle] = useState('');
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  // Pełny kod do sekcji z kodem na stronie
  const fullCodeString = `const coder = {
  name: 'Alex Łysakowski',
  skills: ['React', 'Tailwind', 'JavaScript', 
  'NodeJS', 'MongoDB', 'MySQL', 'AI'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker && 
      this.problemSolver && 
      this.skills.length >= 5
    );
  },
};`;

  // Pełne teksty do animacji nagłówka
  const fullJobTitle = 'Junior Software Developer.';
  const alexName = 'ALEXXXX';
  const lysakowskiName = 'ŁYSAKOWSKI';

  // Efekt pisania kodu z bardziej nieregularnymi przerwami
  useEffect(() => {
    const emptyPlaceholder = fullCodeString.replace(/[^\n]/g, ' ');
    let i = 0;
    
    // Zmieniono na rekurencyjny setTimeout, aby wprowadzić losowe opóźnienia
    const typeCharacter = () => {
      if (i >= fullCodeString.length) {
        return;
      }
      
      const typedPart = fullCodeString.substring(0, i + 1);
      const remainingPart = emptyPlaceholder.substring(i + 1);
      setTypedCode(typedPart + remainingPart);
      
      i++;
      
      // Losowe opóźnienie w milisekundach (np. od 20 do 80 ms)
      const minDelay = 20; 
      const maxDelay = 80;
      const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
      
      setTimeout(typeCharacter, delay);
    };

    const typingTimeout = setTimeout(typeCharacter, 100); // Małe opóźnienie przed startem

    return () => clearTimeout(typingTimeout);
  }, [fullCodeString]);

  // Efekt pojawiania się nagłówka i pisania stanowiska
  useEffect(() => {
    let jobTitleInterval;
    
    // Uruchamia animację płynnego pojawiania się imienia i nazwiska
    const headerVisibleTimeout = setTimeout(() => {
      setIsHeaderVisible(true);
    }, 200);

    // Uruchamia animację pisania stanowiska po zakończeniu animacji imienia/nazwiska
    const jobTitleTimeout = setTimeout(() => {
      let jobTitleIndex = 0;
      // Zastosowanie placeholderu, aby tekst nie przesuwał się podczas pisania
      const emptyPlaceholder = fullJobTitle.replace(/./g, ' ');
      jobTitleInterval = setInterval(() => {
        const typedPart = fullJobTitle.substring(0, jobTitleIndex + 1);
        const remainingPart = emptyPlaceholder.substring(jobTitleIndex + 1);
        setTypedJobTitle(typedPart + remainingPart);
        jobTitleIndex++;
        if (jobTitleIndex >= fullJobTitle.length) {
          clearInterval(jobTitleInterval);
        }
      }, 80); // Szybkość pisania stanowiska
    }, 1000); // Opóźnienie przed rozpoczęciem pisania stanowiska

    return () => {
      clearTimeout(headerVisibleTimeout);
      clearTimeout(jobTitleTimeout);
      clearInterval(jobTitleInterval);
    };
  }, [fullJobTitle]);

  const navItems = ["About", "Experience", "Skills", "Education", "Certificates", "Projects"];

  // Funkcja obsługująca płynne przewijanie
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Funkcja do płynnego przewijania w dół strony
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0e1a] via-[#1a1641] to-[#120a42] text-white font-sans">
      <style>
        {`
          @keyframes blink {
            50% {
              opacity: 0;
            }
          }
          .typing-cursor {
            animation: blink 1s step-end infinite;
          }
        `}
      </style>
      
      {/* --- NAWIGACJA --- */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-6">
        <h1 className="text-2xl md:text-3xl font-extrabold text-teal-400">ALEX ŁYSAKOWSKI</h1>
        
        <ul className="hidden md:flex space-x-8 text-sm uppercase tracking-wide">
          {navItems.map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => handleScroll(e, item)} 
                className="hover:text-pink-500 cursor-pointer transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
            <FaBars className="text-2xl text-white" />
          </button>
        </div>
      </nav>

      {/* --- PANEL MENU MOBILNEGO --- */}
      <div className={`fixed top-0 left-0 w-full h-full bg-[#0d0e1a] z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            <FaTimes className="text-3xl text-white" />
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center h-full -mt-12 space-y-8">
          {navItems.map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => handleScroll(e, item)} 
                className="text-2xl uppercase tracking-widest hover:text-pink-500 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* --- GŁÓWNA TREŚĆ STRONY --- */}
      <div className="px-10 md:px-20 lg:px-32">
        <main className="flex flex-col md:flex-row mt-20 gap-12">
          {/* Lewa strona */}
          <section className="flex-1 flex flex-col justify-center max-w-xl">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight overflow-hidden flex flex-col space-y-4">
              <div className="flex flex-col">
                <span 
                  className={`text-pink-500 transition-all duration-700 ease-out transform block ${isHeaderVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
                >
                  {alexName}
                </span>
                <span 
                  className={`text-pink-500 transition-all duration-700 ease-out transform block ${isHeaderVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`} 
                  style={{ transitionDelay: '0.2s' }}
                >
                  {lysakowskiName}
                </span><br />
              </div>
              <span className="text-teal-400 block" style={{ minHeight: '4rem' }}>
                {typedJobTitle}
                {/* Zmiana: Kursor będzie migać zawsze po zakończeniu pisania */}
                <span className="typing-cursor">|</span>
              </span>
            </h2>
            <div className="flex space-x-6 text-pink-500 text-3xl mt-6">
              <a href="https://github.com/Elteys" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-pink-400 transition-colors">
                <FaGithub />
              </a>
              <a href="https://www.facebook.com/share/16rwRj619U/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-pink-400 transition-colors">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/liv3d3xipv?igsh=ZzU1OWEwdGk4dGQ1" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400 transition-colors">
                <FaInstagram />
              </a>
              <a href="https://discord.gg/jssX3kkG" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="hover:text-pink-400 transition-colors">
                <FaDiscord />
              </a>
            </div>
            <div className="flex space-x-6 mt-10">
              {/* Zmiana: Przycisk Contact Me otwiera klienta poczty */}
              <a href="mailto:x.lysakowski@gmail.com" className="border border-pink-500 px-6 py-3 rounded-full text-sm uppercase tracking-wide hover:bg-pink-500 hover:text-white transition">
                Contact Me
              </a>
              {/* Zmiana: Przycisk Get Resume przewija w dół strony */}
              <button onClick={handleScrollDown} className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-full text-sm uppercase tracking-wide hover:opacity-90 transition">
                Get Resume ↓
              </button>
            </div>
          </section>

          {/* Prawa strona (ramka z kodem) */}
          <section className="flex-1 max-w-2xl bg-[#0b0c1a] rounded-xl p-8 font-mono text-sm leading-relaxed overflow-x-auto">
            <div className="flex space-x-2 mb-4">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
            </div>
            <div className="text-teal-400">
              <SyntaxHighlighter
                language="javascript"
                style={dracula}
                wrapLongLines={true}
                customStyle={{
                  background: 'transparent',
                  padding: 0,
                  fontSize: '1.125rem',
                  fontStyle: 'italic', // Dodanie kursywy
                }}
              >
                {typedCode}
              </SyntaxHighlighter>
              {/* Dodanie migającego kursora po zakończeniu pisania */}
              {typedCode.length < fullCodeString.length && <span className="typing-cursor text-white">|</span>}
            </div>
          </section>
        </main>

        {/* Sekcje z animacją pojawiania się */}
        <div className="space-y-10 mt-24">
          <ScrollAnimationWrapper>
            <About />
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper>
            <Experience />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <Skills />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <Education />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <Certificates />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <Projects />
          </ScrollAnimationWrapper>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
