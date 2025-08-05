// src/components/Projects.jsx
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import retail24Image from '../assets/Projects/retail24.png';
import boombat from '../assets/Projects/boombat.png';
import trapify from '../assets/Projects/trapify.gif';

// Uzupełnione opisy projektów
const projectsData = [
  {
    title: "Retail24 - E-commerce Platform",
    description: "Design of the website and the entire sales management logic via the IdoSell sales platform; configuration, styling, and adaptation with other sales portals.",
    image: retail24Image, 
    tags: ["HTML", "CSS", "IdoSell engine"],
    liveUrl: "https://retail24.pl",
    githubUrl: "none"
  },
  {
    title: "BoomBat - group internship project",
    description: "A group project focusing on the React and Node.js environment, utilizing numerous APIs to create a small site for random games without real money, earned through mini-games.",
    image: boombat,
    tags: ["React", "Node.js", "MongoDB", "Express", "Vite","Tailwind CSS"],
    liveUrl: "none",
    githubUrl: "https://github.com/BoomBat-esmovia"
  },
  {
    title: "Trapify - find your own trap",
    description: "A larger school project written in pure JS in the Node.js environment, focusing on using a NoSQL database - MongoDB. The site was intended to allow users to search for events and create their own listings.",
    image: trapify,
    tags: [ "Node.js", "MongoDB", "JavaScript", "CSS", "HTML5"],
    liveUrl: "none",
    githubUrl: "https://github.com/Elteys/Trapify"
  }
];

function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold text-white mb-4 uppercase tracking-wide">
          Featured Projects
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-teal-400 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-[#0b0c1a]/60 rounded-lg overflow-hidden border border-gray-800 transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <img src={project.image} alt={project.title} className="w-full h-48 object-contain bg-black/20"/>
            
            <div className="p-6 flex flex-col flex-grow">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4 h-24 overflow-y-auto">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-teal-500/20 text-teal-300 px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto pt-4">
                <div className="flex items-center space-x-4">
                  {project.liveUrl !== "none" && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors flex items-center">
                      <FaExternalLinkAlt className="mr-2"/> URL
                    </a>
                  )}
                  
                  {project.githubUrl !== "none" && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors flex items-center">
                      <FaGithub className="mr-2"/> View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
