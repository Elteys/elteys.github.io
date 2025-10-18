// src/components/Education.jsx
import React from 'react';
import { FaUniversity } from 'react-icons/fa';

function Education() {
    return (
        <section id="education" className="py-20 my-20">
            {/* Nagłówek */}
            <div className="mb-12">
                <h2 className="text-4xl font-extrabold text-brand-primary mb-4 uppercase tracking-wide">
                    Education
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent-hover rounded-full"></div>
            </div>

            {/* Karta edukacyjna */}
            <div className="bg-bg-secondary/60 p-8 rounded-lg border border-ui-border hover:border-accent transition-colors duration-300">
                <div className="flex items-center mb-4">
                    <div className="text-4xl text-accent mr-5">
                        <FaUniversity />
                    </div>
                    <div>
                        <p className="text-sm text-accent mb-2">09.2021 – present </p>
                        <h3 className="text-2xl font-bold text-text-primary">
                            SCI Technical School of Information Technology in Szczecin
                        </h3>
                        <p className="text-md text-accent">
                            Specialization: IT Technician - specialization cybersecurity
                        </p>
                    </div>
                </div>
                <p className="text-text-secondary leading-relaxed">
                    During my education, I participated in two large, year-long team projects created from scratch – a web portal
                    based on the MongoDB database and an online forum, which we secured using various known techniques,
                    protecting them from common types of attacks, such as SQL Injection or XSS.
                </p>
            </div>
        </section>
    );
}

export default Education;
