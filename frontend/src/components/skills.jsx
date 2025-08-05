// src/components/Skills.jsx
import React, { useState, useEffect } from 'react';
// Importy ikon
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaLinux, FaWindows, FaServer, FaShieldAlt, FaGithub, FaPhp, FaChevronLeft, FaChevronRight 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiJavascript, SiMongodb, SiMysql, SiCplusplus, SiKalilinux, SiVite
} from 'react-icons/si';

const skillsData = [
  // Twoje dane umiejętności
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'C++', icon: <SiCplusplus className="text-blue-600" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'SQL', icon: <FaDatabase className="text-indigo-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'PHP', icon: <FaPhp className="text-indigo-500" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'Linux', icon: <FaLinux className="text-yellow-300" /> },
  { name: 'Kali Linux', icon: <SiKalilinux className="text-sky-500" /> },
  { name: 'Windows Server', icon: <FaWindows className="text-sky-500" /> },
  { name: 'Linux Server', icon: <FaServer className="text-gray-400" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-300" /> },
];

function Skills() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Responsywność
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 640;
      setIsMobileView(isMobile);
      let count = 5;
      if (isMobile) count = 2;
      else if (window.innerWidth < 768) count = 3;
      else if (window.innerWidth < 1024) count = 4;
      setVisibleCount(count);
      setCurrentIndex(count);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Nowa, uproszczona logika do obsługi "magicznego przeskoku"
  const handleTransitionEnd = () => {
    // Sprawdzenie, czy doszło do przejścia na koniec i powrót do początku
    if (currentIndex >= skillsData.length + visibleCount) {
      setIsTransitioning(false);
      setCurrentIndex(visibleCount);
      // Używamy setTimeout, aby zapewnić, że stan isTransitioning zostanie zaktualizowany
      setTimeout(() => setIsTransitioning(true), 50); 
    }
    // Sprawdzenie, czy doszło do przejścia na początek i powrót do końca
    if (currentIndex <= visibleCount - 1) {
      setIsTransitioning(false);
      setCurrentIndex(skillsData.length + visibleCount - 1);
      setTimeout(() => setIsTransitioning(true), 50);
    }
  };

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex(prev => prev - 1);
  };

  // Efekt do obsługi automatycznego przewijania
  useEffect(() => {
    let interval;
    // Automatyczne przewijanie tylko na urządzeniach mobilnych lub gdy nie ma hovera na desktopie
    if (isMobileView || !isHovering) {
      interval = setInterval(() => {
        setCurrentIndex(prev => prev + 1);
      }, 1500); // Automatyczne przewijanie co 1 sekundę
    }
    return () => clearInterval(interval);
  }, [isMobileView, isHovering, visibleCount]);

  const itemsToRender = [
    ...skillsData.slice(skillsData.length - visibleCount),
    ...skillsData,
    ...skillsData.slice(0, visibleCount),
  ];

  return (
    <section id="skills" className="py-20">
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold text-white mb-4 uppercase tracking-wide">
          My Tech Stack
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-teal-400 rounded-full"></div>
      </div>

      <div 
        className="relative flex items-center" 
        onMouseEnter={() => setIsHovering(true)} 
        onMouseLeave={() => setIsHovering(false)}
      >
        {!isMobileView && (
          <button onClick={handlePrev} className="absolute -left-4 md:-left-8 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition" aria-label="Previous">
            <FaChevronLeft className="text-xl text-white" />
          </button>
        )}

        <div className="overflow-hidden w-full">
          <div 
            className={`flex ${isTransitioning ? 'transition-transform duration-300 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {itemsToRender.map((skill, index) => (
              <div 
                key={`${skill.name}-${index}`} 
                className="px-2" 
                style={{ flex: `0 0 ${100 / visibleCount}%` }}
              >
                <div className="bg-[#0b0c1a]/60 p-6 rounded-lg flex flex-col items-center justify-center text-center h-full">
                  <div className="text-5xl">{skill.icon}</div>
                  <p className="mt-4 text-lg font-semibold h-12 flex items-center">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {!isMobileView && (
          <button onClick={handleNext} className="absolute -right-4 md:-right-8 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition" aria-label="Next">
            <FaChevronRight className="text-xl text-white" />
          </button>
        )}
      </div>
    </section>
  );
}

export default Skills;
