import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ArrowRight } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl rounded-3xl bg-gradient-to-tr from-accent/5 via-white/[0.03] to-accent/20 border border-white/10 p-12 md:p-20 relative overflow-hidden group hover:border-accent/40 transition-all duration-500 shadow-2xl flex flex-col items-center text-center"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[120px] -z-10 group-hover:bg-accent/20 transition-colors" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[120px] -z-10 group-hover:bg-accent/10 transition-colors" />
        
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="p-6 bg-accent rounded-full text-black mb-10 shadow-[0_0_30px_rgba(0,245,212,0.4)]"
        >
           <FileText size={56} />
        </motion.div>
        
        <h2 className="text-4xl md:text-6xl font-display font-black text-softWhite mb-6 uppercase tracking-tighter drop-shadow-lg">
           Want the full picture?
        </h2>
        
        <p className="text-softWhite/60 text-lg md:text-xl font-body max-w-2xl leading-relaxed mb-12 italic">
           For a detailed look at my technical expertise, project history, and academic milestones, feel free to grab my resume.
        </p>
        
        <a href="/resume.pdf" download="Sai_Vishnu_Kandur_C_Resume.pdf">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 245, 212, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-accent text-black text-xl font-bold rounded-full flex items-center gap-4 transition-all duration-300 transform-gpu group/btn"
          >
             <Download size={28} className="group-hover:translate-y-1 transition-transform" />
             📄 Download Resume
             <ArrowRight size={28} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
};

export default Resume;
