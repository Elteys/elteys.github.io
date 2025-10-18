// src/components/About.jsx
import React from 'react';
import profilePic from '../assets/alex.jpg';

function About() {
  return (
    <section id="about" className="py-16 md:py-20">
      {/* Nagłówek */}
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-4xl font-extrabold text-brand-primary mb-4 uppercase tracking-wide">
          About Me
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent-hover rounded-full mx-auto md:mx-0"></div>
      </div>

      {/* Flex kontener */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Kolumna z tekstem */}
        <div className="flex-1 max-w-3xl text-lg text-text-secondary leading-relaxed text-center md:text-left space-y-6">
          <p>
            I am planning my future in the IT industry, although I am also open to other opportunities. I would like to develop in a
            technical profession that combines design with practical implementation – I want my ideas to become reality.
          </p>
          <p>
            For 4 years I have been gaining professional experience, at the same time learning and developing my skills in
            practice. I am a student of a technical school, which allows me to combine theoretical knowledge with a real work
            environment.
          </p>
          <p>
            In addition to technical skills, I have experience in organizing team work. I can effectively plan tasks and take care of
            a good atmosphere. I act consistently, pursuing a clearly defined professional goal.
          </p>
        </div>

        {/* Kolumna ze zdjęciem */}
        <div className="flex-shrink-0">
          <img
            src={profilePic}
            alt="Alex Łysakowski - portret"
            className="w-64 h-64 md:w-[22rem] md:h-[22rem] rounded-full object-cover border-4 border-accent shadow-lg shadow-accent/20"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
