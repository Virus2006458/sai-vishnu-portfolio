import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const certs = [
  { name: "UI/UX Design – Complete Web & Mobile Designer", issuer: "Udemy", year: "2026" },
  { name: "Oracle Cloud Infrastructure Foundations", issuer: "Oracle", year: "2025" },
  { name: "Deloitte Cybersecurity Job Simulation", issuer: "Deloitte/Forage", year: "2025" },
  { name: "Getting Started with Artificial Intelligence", issuer: "IBM", year: "2026" }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-accent uppercase tracking-widest text-sm font-bold">The Credentials</span>
        <h2 className="text-5xl md:text-7xl font-display font-black mt-4">Certifications</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {certs.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-start gap-4 hover:border-accent/30 hover:bg-white/10 transition-all shadow-xl group border-l-4 border-l-accent/50"
          >
            <div className="p-3 bg-accent/20 text-accent rounded-xl group-hover:bg-accent group-hover:text-black transition-colors duration-300">
               <Award size={24} />
            </div>
            
            <div className="flex-1">
              <h3 className="text-softWhite font-bold text-lg leading-tight mb-2 group-hover:text-accent transition-colors duration-300 transform-gpu">{cert.name}</h3>
              <div className="flex items-center gap-2 text-xs font-bold text-softWhite/40 uppercase tracking-widest">
                 <CheckCircle size={14} className="text-accent/50" /> {cert.issuer}
              </div>
            </div>
            
            <span className="text-xs bg-white/5 px-3 py-1 rounded-full text-softWhite/60 font-medium">{cert.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
