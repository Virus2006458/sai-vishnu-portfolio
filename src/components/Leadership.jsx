import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Calendar, Quote, Trophy } from 'lucide-react';

const stats = [
  { icon: Calendar, value: "15+", label: "Events" },
  { icon: Users, value: "200+", label: "Members" },
  { icon: Award, value: "3", label: "Semesters of Leadership" }
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-accent uppercase tracking-widest text-sm font-bold">Leading the Way</span>
        <h3 className="text-5xl md:text-7xl font-display font-black mt-4">Leadership Spotlight</h3>
      </motion.div>

      <div className="w-full max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 overflow-hidden group hover:border-accent/40 transition-all duration-500 shadow-2xl"
        >
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 group-hover:bg-accent/10 transition-colors" />
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-2/3 flex flex-col items-start gap-8">
              <div className="p-4 bg-accent/10 rounded-3xl text-accent border border-accent/20">
                 <Trophy size={48} />
              </div>
              
              <div>
                <h3 className="text-3xl md:text-5xl font-display font-black text-softWhite mb-4">President, Andropedia — Tech-Driven Club</h3>
                <div className="relative pl-12 py-4 italic text-softWhite/70 text-lg md:text-2xl font-display leading-tight">
                   <Quote className="absolute top-0 left-0 text-accent/30 scale-[1.5]" />
                   "Leading a community of builders, thinkers, and innovators."
                </div>
              </div>
              
              <p className="text-softWhite/60 text-lg leading-relaxed max-w-xl">
                 As President, I oversee the strategic direction of Andropedia, coordinating with various departments to deliver high-impact technical workshops and events for the student community.
              </p>
            </div>

            <div className="lg:w-1/3 grid grid-cols-1 gap-6 w-full">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-6 hover:border-accent/30 hover:bg-white/10 transition-all shadow-lg"
                >
                  <div className="p-3 bg-accent text-black rounded-xl shadow-[0_0_15px_rgba(0,245,212,0.4)]">
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <span className="block text-3xl font-display font-black text-accent leading-none mb-1">{stat.value}</span>
                    <span className="text-xs uppercase tracking-widest text-softWhite/50 font-bold">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
