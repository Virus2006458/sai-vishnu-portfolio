import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    institution: "SRM IST Ramapuram, Chennai",
    program: "B.Tech CSE in Cloud Computing",
    period: "2024–Present",
    grade: "CGPA: 8.75"
  },
  {
    institution: "Alvas PU College, Moodbidri",
    program: "Pre-University",
    period: "2022–2024",
    grade: "86%"
  },
  {
    institution: "Alvas Central School, Moodbidri",
    program: "SSLC",
    period: "2022",
    grade: "80%"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-accent uppercase tracking-widest text-sm font-bold font-display">The Foundation</span>
        <h2 className="text-5xl md:text-7xl font-display font-black mt-4">Education</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group p-8 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden flex flex-col items-center text-center transition-all duration-300 hover:border-accent/40 shadow-xl hover:shadow-accent/5"
          >
            {/* Centered Graduation Cap Icon */}
            <div className="p-4 bg-accent/10 text-accent rounded-full border border-accent/20 mb-6 group-hover:bg-accent group-hover:text-black transition-all duration-500">
               <GraduationCap size={40} />
            </div>
            
            <div className="flex flex-col items-center flex-1">
              {/* Degree/Course Name - Bold White */}
              <h3 className="text-2xl md:text-2xl font-display font-black text-softWhite mb-2 leading-tight">
                {edu.program}
              </h3>
              
              {/* Institution Name - Gray */}
              <h4 className="text-softWhite/50 font-bold uppercase text-xs tracking-[0.2em] mb-3">
                {edu.institution}
              </h4>
              
              {/* Year Range - Gray */}
              <p className="text-softWhite/40 text-sm font-medium italic mb-8">
                {edu.period}
              </p>
              
              {/* Cyan pill/badge at bottom showing grade */}
              <div className="mt-auto px-6 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-bold text-sm tracking-widest shadow-[0_0_15px_rgba(0,245,212,0.1)] group-hover:bg-accent group-hover:text-black transition-all duration-500">
                {edu.grade}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
