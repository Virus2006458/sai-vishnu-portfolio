import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Trophy, MapPin } from 'lucide-react';

const quickFacts = [
  { icon: GraduationCap, text: "B.Tech CSE in Cloud Computing — SRM IST, Chennai (CGPA: 8.75)" },
  { icon: Briefcase, text: "UI/UX Design Intern — Future Interns" },
  { icon: Trophy, text: "President — Andropedia Tech Club" },
  { icon: MapPin, text: "Chennai, India" }
];

const About = () => {
  return (
    <section id="about" className="py-20 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-accent uppercase tracking-widest text-sm font-bold">The Story</span>
        <h2 className="text-5xl md:text-7xl font-display font-black mt-4">About Me</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left Aspect: Stylized Avatar Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center group"
        >
          <div className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden flex items-center justify-center p-8 backdrop-blur-xl group-hover:border-accent/40 transition-all duration-500 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent pointer-events-none" />
            <div className="text-[150px] md:text-[200px] font-display font-black text-white/5 absolute select-none group-hover:text-accent/10 transition-colors duration-500">SVK</div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="z-10 w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-3xl overflow-hidden border-4 border-accent shadow-[0_0_30px_rgba(0,245,212,0.4)] relative"
            >
              <img 
                src="/profile.jpeg" 
                alt="Sai Vishnu Kandur C" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-accent/10 mix-blend-overlay pointer-events-none" />
            </motion.div>

            {/* Glowing Accent Lines */}
            <div className="absolute top-10 left-10 w-20 h-[2px] bg-accent/30 rounded-full" />
            <div className="absolute bottom-10 right-10 w-2 h-20 bg-accent/30 rounded-full" />
          </div>
        </motion.div>

        {/* Right Aspect: Bio + Quick Facts */}
        <div className="flex flex-col space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-softWhite/70 leading-relaxed font-body"
          >
            I am a Cloud Computing student at SRM Institute of Science and Technology, Chennai. My journey in tech is driven by an insatiable curiosity about how digital products can be both technically sound and aesthetically pleasing.
            <br /><br />
            With a focus on <span className="text-accent italic font-medium">Cloud and UI/UX</span>, I aim to bridge the gap between back-end efficiency and front-end usability.
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickFacts.map((fact, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col gap-4 hover:border-accent/30 transition-all group"
              >
                <div className="p-3 bg-accent/10 w-max rounded-xl text-accent group-hover:bg-accent group-hover:text-black transition-colors duration-300">
                  <fact.icon size={24} />
                </div>
                <p className="text-softWhite/80 text-sm font-medium leading-tight">{fact.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
