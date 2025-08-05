// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="w-full text-center py-8 mt-24 relative">
      {/* Gradientowa linia na górze stopki */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 md:w-1/3 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
      
      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} ELTEYS. All rights reserved.
      </p>
      <p className="text-gray-500 text-xs mt-2">
        Inspired by:{" "}
        <a 
          href="https://abusaid.netlify.app" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-pink-400 hover:underline transition-colors"
        >
          abusaid.netlify.app
        </a>
      </p>
    </footer>
  );
}

export default Footer;
