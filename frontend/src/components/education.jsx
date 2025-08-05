// src/components/Education.jsx
import React from 'react';
import { FaUniversity } from 'react-icons/fa';

function Education() {
    return (
        <section id="education" className="py-20 my-20">
            <div className="mb-12">
                <h2 className="text-4xl font-extrabold text-white mb-4 uppercase tracking-wide">
                    Education
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-teal-400 rounded-full"></div>
            </div>

            <div className="bg-[#0b0c1a]/60 p-8 rounded-lg border border-gray-700 hover:border-teal-400 transition-colors duration-300">
                <div className="flex items-center mb-4">
                    <div className="text-4xl text-teal-400 mr-5">
                        <FaUniversity />
                    </div>
                    <div>
                        <p className="text-sm text-pink-400 mb-2">09.2021 – present </p>
                        <h3 className="text-2xl font-bold text-white">SCI Technical School of Information Technology in Szczecin</h3>
                        <p className="text-md text-teal-400">Specialization: IT Technician - specialization cybersecurity</p>
                    </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                    During my education, I participated in two large, year-long team projects created from scratch – a web portal
                    based on the MongoDB database and an online forum, which we secured using various known techniques,
                    protecting them from common types of attacks, such as SQL Injection or XSS.
                </p>
            </div>
        </section>
    );
}

export default Education;
