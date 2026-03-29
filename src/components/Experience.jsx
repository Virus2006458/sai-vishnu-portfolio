import React from 'react';
import { motion } from 'framer-motion';

const experience = [
  {
    role: "Newsletter Lead",
    company: "SRM IST",
    period: "Dec 2025 – Jan 2026",
    details: ["Led college newsletter creation", "Managed content planning", "Coordinated with design teams"]
  },
  {
    role: "UI/UX Design Intern",
    company: "Future Interns",
    period: "Jan 2026 – Feb 2026",
    details: ["Designed web and mobile interfaces", "Created wireframes and prototypes", "Structured visual layouts"]
  },
  {
    role: "Media Lead",
    company: "Andropedia",
    period: "Jul 2024 – Mar 2026",
    details: ["Managed media and visual content", "Social media communication", "Handled event coverage"]
  },
  {
    role: "NSS Student Coordinator",
    company: "NSS",
    period: "Dec 2025 – Mar 2026",
    details: ["Organized community outreach", "Coordinated student volunteers", "Logistical event management"]
  },
  {
    role: "General Admin",
    company: "Andropedia",
    period: "Dec 2025 – Mar 2026",
    details: ["Coordinated logistics", "Managed event scheduling", "Execution of club activities"]
  },
  {
    role: "President",
    company: "Andropedia (Tech Club)",
    period: "Current",
    details: ["Leading a tech-driven club community", "Driving technical events and workshops", "Fostering campus innovation initiatives"],
    isSpecial: true
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-accent uppercase tracking-widest text-sm font-bold font-display">The Journey</span>
        <h2 className="text-5xl md:text-7xl font-display font-black mt-4">Experience</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`group relative bg-white/5 border border-white/10 p-8 rounded-2xl border-l-[6px] border-l-accent/40 hover:border-l-accent hover:bg-white/[0.08] transition-all duration-300 shadow-xl ${exp.isSpecial ? 'md:col-span-2 border-l-accent shadow-[0_0_30px_rgba(0,245,212,0.15)] ring-1 ring-accent/20' : ''}`}
          >
            {exp.isSpecial && (
              <div className="absolute top-4 right-8 text-4xl transform -rotate-12 select-none">
                 👑
              </div>
            )}
            
            <div className="flex flex-col h-full">
              <span className="text-xs font-bold text-softWhite/40 uppercase tracking-[0.2em] mb-2">{exp.period}</span>
              <h3 className={`font-display font-black text-softWhite mb-1 ${exp.isSpecial ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                {exp.role}
              </h3>
              <h4 className="text-accent font-bold uppercase text-xs tracking-widest mb-6">
                {exp.company}
              </h4>
              
              <ul className="space-y-3">
                {exp.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex gap-3 text-softWhite/60 text-sm leading-relaxed">
                    <span className="text-accent mt-1">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* Glowing Effect on Hover */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/20 transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
