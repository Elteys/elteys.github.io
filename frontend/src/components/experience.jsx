// src/components/Experience.jsx
import React from 'react';
import { FaBriefcase, FaCode, FaReact } from 'react-icons/fa';

const experienceData = [
  {
    icon: <FaReact />,
    date: "18.07.2025 – 08.08.2025 <3 weeks.>",
    title: "Full-Stack Development Training / Intern (React & Node.js)",
    company: "ESMOVIA - Training and Mobility",
    description: "Completed an intensive, hands-on training program focused on modern web development. Gained practical experience in building and deploying full-stack applications using React for the frontend and Node.js for the backend."
  },
  {
    icon: <FaCode />,
    date: "07.2024 – 09.2024 < 3 months. >",
    title: "E-commerce Website Developer",
    company: "Retail 24 Limited Liability Company",
    description: "Configuring a website using an e-commerce engine (IdoSell), editing graphics, coding in HTML/CSS, writing articles for the company blog, and creating a website design based on a brand book."
  },
  {
    icon: <FaCode />,
    date: "02.2023 – 02.2023 <1 month. >",
    title: "Programmer Intern",
    company: "Retail 24 Limited Liability Company",
    description: "Working with Node.js and MSSQL to create an internal company system, developing practical skills in backend technologies and databases."
  },
];

function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-4xl font-extrabold text-white mb-4 uppercase tracking-wide">
          My Experience
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-teal-400 rounded-full mx-auto md:mx-0"></div>
      </div>

      <div className="relative">
        {/* Pionowa linia osi czasu */}
        <div className="absolute left-4 md:left-5 top-0 h-full w-0.5 bg-gray-700"></div>

        {experienceData.map((item, index) => (
          // Zmniejszone wcięcie na mobilkach
          <div key={index} className="relative pl-12 md:pl-16 mb-12">
            {/* Responsywna kropka z ikoną */}
            <div className="absolute left-0 md:left-0 top-1 w-10 h-10 md:w-12 md:h-12 bg-[#1a1641] rounded-full flex items-center justify-center border-2 border-teal-400">
              <span className="text-teal-400 text-xl md:text-2xl">{item.icon}</span>
            </div>

            {/* Content */}
            <div className="bg-[#0b0c1a]/60 p-6 rounded-lg ml-2 md:ml-4">
              <p className="text-sm text-pink-400 mb-2">{item.date}</p>
              <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
              <p className="text-md text-gray-400 mb-3">{item.company}</p>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
