import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Programming",
    skills: ["C/C++", "Python"]
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS"]
  },
  {
    category: "UI/UX Design",
    skills: ["Figma", "Wireframing", "Prototyping", "User Flow Design", "Responsive Design"]
  },
  {
    category: "Tools & Platforms",
    skills: ["VS Code", "Canva", "Figma"]
  },
  {
    category: "Soft Skills",
    skills: ["Leadership", "Public Speaking", "Communication"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-accent uppercase tracking-widest text-sm font-bold">The Toolkit</span>
        <h2 className="text-5xl md:text-7xl font-display font-black mt-4">My Skills</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {skillsData.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-accent/40 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
            
            <h3 className="text-accent font-display font-bold text-lg mb-6 uppercase tracking-widest">{group.category}</h3>
            
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, sIdx) => (
                <motion.span
                  key={sIdx}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 245, 212, 0.2)', borderColor: 'rgba(0, 245, 212, 0.4)' }}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-softWhite/80 transition-all cursor-default shadow-sm hover:shadow-accent/40"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
