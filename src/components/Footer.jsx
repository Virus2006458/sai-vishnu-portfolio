import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer bg-white/[0.02] border-t border-white/5 py-12 mt-20">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-display font-black text-accent mb-8"
        >
           SVK<span className="text-softWhite">.</span>
        </motion.div>
        
        <div className="flex gap-10 mb-10">
           <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href="https://github.com/saivishnukandurc" className="text-softWhite/40 hover:text-accent transition-colors"><Github size={24} /></motion.a>
           <motion.a whileHover={{ scale: 1.2, rotate: -10 }} href="https://linkedin.com/in/saivishnukandurc" className="text-softWhite/40 hover:text-accent transition-colors"><Linkedin size={24} /></motion.a>
           <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href="mailto:saivishnukandur2006@gmail.com" className="text-softWhite/40 hover:text-accent transition-colors"><Mail size={24} /></motion.a>
           <motion.a whileHover={{ scale: 1.2, rotate: -10 }} href="#" className="text-softWhite/40 hover:text-accent transition-colors"><Twitter size={24} /></motion.a>
        </div>
        
        <div className="text-softWhite/30 text-xs font-bold uppercase tracking-widest text-center px-8 py-4 bg-white/5 rounded-2xl border border-white/10 hover:border-accent/40 transition-all duration-500 transform-gpu mb-8 group cursor-default">
           Built with passion by <span className="text-accent underline decoration-accent/20 decoration-2 underline-offset-4 group-hover:decoration-accent transition-all duration-300">Sai Vishnu Kandur C</span>
        </div>
        
        <p className="text-[10px] text-softWhite/20 uppercase tracking-[0.3em]">
           &copy; {currentYear} &bull; ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
