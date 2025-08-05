// src/components/Certificates.jsx
import React from 'react';
import { FaCertificate, FaAward } from 'react-icons/fa'; // Dodano ikonę FaAward

// Uzupełniona lista certyfikatów
const certificatesData = [
  {
    icon: <FaAward />,
    title: "Vocational Exam: Qualification INF.03",
    issuer: "Central Examination Commission (CKE)",
    year: "2025",
    description: "State-certified exam confirming professional skills in creating and managing web applications and databases, including backend development, SQL, and dynamic frontends."
  },
  {
    icon: <FaAward />,
    title: "Vocational Exam: Qualification INF.02",
    issuer: "Central Examination Commission (CKE)",
    year: "2024",
    description: "A state exam validating core competencies in IT systems administration. This qualification covers hardware assembly, OS configuration, and local area network management."
  },
  {
    icon: <FaCertificate />,
    title: "eJPT (eLearnSecurity Junior Penetration Tester)",
    issuer: "INE Security",
    year: "2023",
    description: "A hands-on certification for penetration testers, validating practical skills in network and web application testing within a real-world lab environment."
  },
  {
    icon: <FaCertificate />,
    title: "IC3 (Internet and Computing Core Certification)",
    issuer: "Certiport",
    year: "2022",
    description: "A globally recognized certification that validates essential computer and internet literacy skills, covering hardware, software, and online best practices."
  },
];

function Certificates() {
  return (
    <section id="certificates" className="py-20">
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold text-white mb-4 uppercase tracking-wide">
          Licenses & Certifications
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-teal-400 rounded-full"></div>
      </div>

      <div className="space-y-8">
        {certificatesData.map((cert, index) => (
          <div key={index} className="bg-[#0b0c1a]/60 p-6 rounded-lg border border-gray-700 hover:border-teal-400 transition-colors duration-300 flex items-start">
            <div className="text-3xl text-teal-400 mr-5 pt-1">
              {cert.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{cert.title}</h3>
              <p className="text-md text-pink-400 mb-2">{cert.issuer} · Issued {cert.year}</p>
              <p className="text-gray-300 leading-relaxed text-sm">
                {cert.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
