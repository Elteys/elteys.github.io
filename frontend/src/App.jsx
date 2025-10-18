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
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import ScrollAnimationWrapper from './components/ScrollAnimationWrapper.jsx';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedCode, setTypedCode] = useState('');
  const [typedJobTitle, setTypedJobTitle] = useState('');
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

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

  const fullJobTitle = 'Junior Software Developer.';
  const alexName = 'ALEX';
  const lysakowskiName = 'ŁYSAKOWSKI';

  // Animacja pisania kodu
  useEffect(() => {
    const emptyPlaceholder = fullCodeString.replace(/[^\n]/g, ' ');
    let i = 0;
    const typeCharacter = () => {
      if (i >= fullCodeString.length) return;
      const typedPart = fullCodeString.substring(0, i + 1);
      const remainingPart = emptyPlaceholder.substring(i + 1);
      setTypedCode(typedPart + remainingPart);
      i++;
      const delay = Math.floor(Math.random() * (80 - 20 + 1)) + 20;
      setTimeout(typeCharacter, delay);
    };
    const typingTimeout = setTimeout(typeCharacter, 100);
    return () => clearTimeout(typingTimeout);
  }, [fullCodeString]);

  // Animacja nagłówka i stanowiska
  useEffect(() => {
    let jobTitleInterval;
    const headerVisibleTimeout = setTimeout(() => setIsHeaderVisible(true), 200);
    const jobTitleTimeout = setTimeout(() => {
      let jobTitleIndex = 0;
      const emptyPlaceholder = fullJobTitle.replace(/./g, ' ');
      jobTitleInterval = setInterval(() => {
        const typedPart = fullJobTitle.substring(0, jobTitleIndex + 1);
        const remainingPart = emptyPlaceholder.substring(jobTitleIndex + 1);
        setTypedJobTitle(typedPart + remainingPart);
        jobTitleIndex++;
        if (jobTitleIndex >= fullJobTitle.length) clearInterval(jobTitleInterval);
      }, 80);
    }, 1000);
    return () => {
      clearTimeout(headerVisibleTimeout);
      clearTimeout(jobTitleTimeout);
      clearInterval(jobTitleInterval);
    };
  }, [fullJobTitle]);

  const navItems = ["About", "Experience", "Skills", "Education", "Certificates", "Projects"];
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  const handleScrollDown = () => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });

  return (
    <div className="min-h-screen animated-gradient-bg visible-grid">
      <style>
        {`
          @keyframes blink {
            50% { opacity: 0; }
          }

          .typing-cursor { 
            animation: blink 1s step-end infinite; 
            font-size: 0.7em; /* 👈 DODAJ TĘ LINIĘ */
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          .floating-element { animation: float 6s ease-in-out infinite; }
        `}
      </style>

      {/* NAWIGACJA */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-6 relative z-10">
        <h1 className="text-2xl md:text-3xl font-extrabold bg-main-gradient bg-clip-text text-transparent">A.Ł.</h1>
        <ul className="hidden md:flex space-x-8 text-sm uppercase tracking-wide">
          {navItems.map(item => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScroll(e, item)}
                className="hover:text-accent transition-colors cursor-pointer hover:bg-gradient-to-r hover:from-accent-start hover:to-accent-end hover:bg-clip-text hover:text-transparent"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
            <FaBars className="text-2xl text-text-primary" />
          </button>
        </div>
      </nav>

      {/* MENU MOBILNE */}
      <div className={`fixed top-0 left-0 w-full h-full bg-bg-primary/95 backdrop-blur-lg z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            <FaTimes className="text-3xl text-brand-text" />
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center h-full -mt-12 space-y-8">
          {navItems.map(item => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScroll(e, item)}
                className="text-2xl uppercase tracking-widest bg-gradient-to-r from-accent-start to-accent-end bg-clip-text text-transparent hover:scale-110 transition-transform duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* TREŚĆ STRONY */}
      <div className="px-10 md:px-20 lg:px-32 relative z-10">
        <main className="flex flex-col md:flex-row mt-20 gap-12">
          {/* Lewa strona */}
          <section className="flex-1 flex flex-col justify-center max-w-xl">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight overflow-hidden flex flex-col space-y-4">
              <div className="flex flex-col">
                <span className={`bg-gradient-to-r from-accent-start to-gradient-cyan bg-clip-text text-transparent transition-all duration-700 ease-out transform block ${isHeaderVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                  {alexName}
                </span>
                <span className={`bg-gradient-to-r from-gradient-neon to-accent-end bg-clip-text text-transparent transition-all duration-700 ease-out transform block ${isHeaderVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
                  {lysakowskiName}
                </span><br />
              </div>
              <span className="bg-gradient-to-r from-gradient-electric to-accent bg-clip-text text-transparent block min-h-[4rem] mt-4" style={{ minHeight: '4rem' }}>
                {typedJobTitle}<span className="typing-cursor text-accent">|</span>
              </span>
            </h2>
            <div className="flex space-x-4 text-3xl mt-6">
              <a
                href="https://github.com/Elteys"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-1 transition-all duration-300 hover:scale-110 group"
              >
                <FaGithub className="text-text-secondary group-hover:text-accent transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/share/16rwRj619U/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-1 transition-all duration-300 hover:scale-110 group"
              >
                <FaFacebook className="text-text-secondary group-hover:text-accent transition-colors" />
              </a>
              <a
                href="https://discord.gg/jssX3kkG"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="p-1 transition-all duration-300 hover:scale-110 group"
              >
                <FaDiscord className="text-text-secondary group-hover:text-accent transition-colors" />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  alert("The contact system is currently under construction.\n\nIf you need to reach me, please contact me via Facebook or by email: x.lysakowski@gmail.com\n\n");
                }}
                className="px-6 py-3 border-2 border-accent text-accent rounded-full text-sm uppercase tracking-wide font-semibold hover:bg-accent hover:text-bg-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
              >
                Contact Me
              </button>
              <button
                onClick={handleScrollDown}
                className="px-6 py-3 bg-main-gradient text-bg-primary rounded-full text-sm uppercase tracking-wide font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-accent/50"
              >
                Get Resume ↓
              </button>
            </div>
          </section>

          {/* Ramka z kodem */}
          <section className="flex-1 max-w-2xl bg-bg-card backdrop-blur-sm rounded-2xl p-6 md:p-8 font-mono text-sm leading-relaxed overflow-x-auto shadow-2xl shadow-accent/10 hover:shadow-accent/20 transition-all duration-300">
            <div className="flex space-x-2 mb-4">
              <span className="w-3 h-3 bg-gradient-to-r from-gradient-neon to-pink-500 rounded-full"></span>
              <span className="w-3 h-3 bg-gradient-to-r from-accent to-gradient-cyan rounded-full"></span>
              <span className="w-3 h-3 bg-gradient-to-r from-gradient-electric to-accent-end rounded-full"></span>
            </div>
            <div className="text-accent">
              <SyntaxHighlighter
                language="javascript"
                style={dracula}
                wrapLongLines={true}
                customStyle={{
                  background: 'transparent',
                  padding: 0,
                  fontSize: '1.125rem',
                  fontStyle: 'italic',
                }}
              >
                {typedCode}
              </SyntaxHighlighter>
              {typedCode.length < fullCodeString.length && <span className="typing-cursor text-accent">|</span>}
            </div>
          </section>
        </main>

        {/* Sekcje */}
        <div className="space-y-10 mt-24 relative z-10">
          <ScrollAnimationWrapper><About /></ScrollAnimationWrapper>
          <ScrollAnimationWrapper><Experience /></ScrollAnimationWrapper>
          <ScrollAnimationWrapper><Skills /></ScrollAnimationWrapper>
          <ScrollAnimationWrapper><Education /></ScrollAnimationWrapper>
          <ScrollAnimationWrapper><Certificates /></ScrollAnimationWrapper>
          <ScrollAnimationWrapper><Projects /></ScrollAnimationWrapper>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
