// src/components/ScrollAnimationWrapper.jsx
import React, { useRef, useEffect, useState } from 'react';

/**
 * Wrapper do animacji "fade-in-on-scroll".
 * Dodaje efekt pojawiania się elementu przy przewijaniu.
 */
function ScrollAnimationWrapper({ children }) {
  const domRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(currentRef); // animacja tylko raz
          }
        });
      },
      { threshold: 0.1 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-in-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {children}
    </div>
  );
}

export default ScrollAnimationWrapper;
