// src/components/ScrollAnimationWrapper.jsx

import React, { useRef, useEffect, useState } from 'react';

/**
 * Komponent wrapper, który dodaje animację "fade-in-on-scroll" do swoich dzieci.
 * Wykorzystuje IntersectionObserver do wykrywania, kiedy element wchodzi w widok,
 * a następnie dodaje klasy Tailwind CSS, aby uruchomić płynną animację.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Elementy do animacji.
 */
function ScrollAnimationWrapper({ children }) {
  // useRef do uzyskania referencji do elementu DOM
  const domRef = useRef();
  
  // useState do śledzenia, czy element jest widoczny
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Upewnij się, że element DOM istnieje przed utworzeniem obserwatora
    const currentRef = domRef.current;

    // Tworzymy nowy IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      // Obserwator uruchamia się, gdy element wejdzie lub wyjdzie z widoku.
      // `entry.isIntersecting` jest true, gdy element jest widoczny.
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opcjonalnie, po wykryciu można przestać obserwować element
          // aby animacja uruchomiła się tylko raz.
          observer.unobserve(currentRef);
        }
      });
    }, {
      // Opcje obserwatora
      // threshold: 0.1 oznacza, że animacja uruchomi się, gdy 10% elementu
      // będzie widoczne w widoku.
      threshold: 0.1,
    });

    // Zaczynamy obserwować nasz element
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Funkcja czyszcząca. Ważne, aby usunąć obserwatora,
    // gdy komponent zostanie odmontowany, aby uniknąć wycieków pamięci.
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Pusta tablica zależności oznacza, że efekt uruchomi się tylko raz po zamontowaniu komponentu

  return (
    // Używamy referencji do tego elementu, aby go obserwować
    <div
      ref={domRef}
      // Poniższe klasy Tailwind CSS kontrolują animację.
      // Początkowo element jest niewidoczny i przesunięty w dół.
      // Gdy `isVisible` stanie się `true`, klasy zmieniają się,
      // a `transition` zapewnia płynne przejście.
      className={`transition-all duration-1000 ease-in-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {children}
    </div>
  );
}

export default ScrollAnimationWrapper;
