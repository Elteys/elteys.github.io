// src/components/Skills.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaLinux, FaWindows, FaServer, FaGithub, FaPhp, FaChevronLeft, FaChevronRight 
} from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb, SiMysql, SiKalilinux } from 'react-icons/si';

const skillsData = [
  { name: 'JavaScript', icon: <SiJavascript className="text-accent" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-accent" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-accent" /> },
  { name: 'SQL', icon: <FaDatabase className="text-accent" /> },
  { name: 'React', icon: <FaReact className="text-accent" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-accent" /> },
  { name: 'PHP', icon: <FaPhp className="text-accent" /> },
  { name: 'MySQL', icon: <SiMysql className="text-accent" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-accent" /> },
  { name: 'Linux', icon: <FaLinux className="text-accent" /> },
  { name: 'Kali Linux', icon: <SiKalilinux className="text-accent" /> },
  { name: 'Windows Server', icon: <FaWindows className="text-accent" /> },
  { name: 'Linux Server', icon: <FaServer className="text-accent" /> },
  { name: 'GitHub', icon: <FaGithub className="text-accent" /> },
];

function Skills() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

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

  const handleTransitionEnd = () => {
    if (currentIndex >= skillsData.length + visibleCount) {
      setIsTransitioning(false);
      setCurrentIndex(visibleCount);
      setTimeout(() => setIsTransitioning(true), 50); 
    }
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

  useEffect(() => {
    let interval;
    if (isMobileView || !isHovering) {
      interval = setInterval(() => {
        setCurrentIndex(prev => prev + 1);
      }, 1500);
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
        <h2 className="text-4xl font-extrabold text-brand-primary mb-4 uppercase tracking-wide">
          My Tech Stack
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent-hover rounded-full"></div>
      </div>

      <div 
        className="relative flex items-center" 
        onMouseEnter={() => setIsHovering(true)} 
        onMouseLeave={() => setIsHovering(false)}
      >
        {!isMobileView && (
          <button onClick={handlePrev} className="absolute -left-4 md:-left-8 z-10 p-2 bg-brand-light/30 rounded-full hover:bg-brand-light/50 transition" aria-label="Previous">
            <FaChevronLeft className="text-xl text-text-primary" />
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
                <div className="bg-bg-secondary/60 p-6 rounded-lg flex flex-col items-center justify-center text-center h-full border border-ui-border">
                  <div className="text-5xl">{skill.icon}</div>
                  <p className="mt-4 text-lg font-semibold text-text-primary h-12 flex items-center justify-center">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {!isMobileView && (
          <button onClick={handleNext} className="absolute -right-4 md:-right-8 z-10 p-2 bg-brand-light/30 rounded-full hover:bg-brand-light/50 transition" aria-label="Next">
            <FaChevronRight className="text-xl text-text-primary" />
          </button>
        )}
      </div>
    </section>
  );
}

export default Skills;
