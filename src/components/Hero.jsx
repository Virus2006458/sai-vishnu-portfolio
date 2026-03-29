import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Download, ArrowRight } from 'lucide-react';

const subtitles = [
  "Cloud Computing Student",
  "UI/UX Designer",
  "Full Stack Developer",
  "Tech Club President"
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20">
      {/* Background Mesh Effect */}
      <div className="absolute inset-x-0 top-0 h-full w-full -z-10 opacity-30 select-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_20%,_rgba(0,245,212,0.1)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left md:max-w-4xl w-full"
      >
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-accent uppercase tracking-widest font-medium mb-4 text-sm md:text-base animate-pulse"
        >
          Welcome to my digital space
        </motion.p>
        
        <h1 className="text-5xl md:text-7xl lg:text-6xl font-display font-black leading-tight mb-6">
          <span className="text-softWhite">Sai Vishnu</span> <br />
          <span className="text-accent">Kandur C</span>
        </h1>

        <div className="h-12 mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl text-softWhite/80 font-display font-medium italic"
            >
              {subtitles[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p 
          className="text-lg md:text-xl text-softWhite/60 max-w-2xl leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Cloud Computing student at SRM IST passionate about building practical, user-centered digital solutions. I blend technical development with design thinking to create efficient, scalable, and beautiful applications.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="projects" smooth={true} duration={500} offset={-100}>
              <button className="btn-primary flex items-center gap-2 group">
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="/resume.pdf" download="Sai_Vishnu_Kandur_C_Resume.pdf">
              <button className="btn-secondary flex items-center gap-2 w-full">
                Download Resume
                <Download size={20} />
              </button>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Particles or Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ height: [4, 12, 4], opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
