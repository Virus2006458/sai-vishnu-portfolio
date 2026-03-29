import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Users } from 'lucide-react';

const projects = [
  {
    name: "AI Code Reviewer",
    type: "Full Stack",
    teamSize: 4,
    description: "An AI-powered code review platform that analyzes code and provides optimization suggestions using the Gemini API.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API"],
    gradient: "from-purple-600 to-blue-500",
    badge: "⭐ Featured Project",
    links: { github: "#", live: "https://codexa-ai.netlify.app/" }
  },
  {
    name: "BloodLink",
    type: "UI/UX",
    teamSize: 4,
    description: "Blood donation platform UI connecting donors with patients in emergencies with intuitive user flows.",
    tech: ["Figma"],
    gradient: "from-red-600 to-pink-500",
    links: { github: "#", live: "https://blood-d-seven.vercel.app/" }
  },
  {
    name: "Snip – Salon Booking App",
    type: "UI/UX",
    teamSize: 1,
    description: "Mobile app interface for booking salon services with time-slot selection and smooth appointment flows.",
    tech: ["Figma"],
    gradient: "from-amber-500 to-yellow-400",
    links: { github: "#", live: "https://www.figma.com/design/DeAOPr30CMEMw9kCryG2gJ/ui-ux-task-2?node-id=0-1&t=PWBDaZxXp2TCttnp-1" }
  },
  {
    name: "Fork & Flow – Food Delivery",
    type: "UI/UX",
    teamSize: 1,
    description: "Responsive food ordering website with restaurant browsing, menu viewing, and seamless checkout experience.",
    tech: ["Figma"],
    gradient: "from-green-500 to-lime-400",
    links: { github: "#", live: "https://www.figma.com/design/84VV6TJfMLB3rjWOwcP8Qt/ui-ux-1?node-id=0-1&t=kMwO86KW2jflpaLo-1" }
  },
  {
    name: "TradeSphere – Trading App",
    type: "UI/UX",
    teamSize: 1,
    description: "Modern trading dashboard with market overview, portfolio tracking, and financial data visualization.",
    tech: ["Figma"],
    gradient: "from-blue-600 to-teal-400",
    links: { github: "#", live: "#" }
  }
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="h-[400px] w-full perspective-1000 group cursor-pointer"
  >
    <div className="relative w-full h-full preserve-3d transition-all duration-700 ease-in-out group-hover:rotate-y-180 shadow-2xl">
      {/* Front Face */}
      <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden bg-white/5 border border-white/10 flex flex-col group/front">
        <div className={`h-2/3 w-full bg-gradient-to-tr ${project.gradient} relative flex items-center justify-center p-12 overflow-hidden`}>
          <div className="absolute inset-0 bg-black/10 group-hover/front:bg-black/0 transition-all duration-500" />
          
          <div className="absolute top-4 left-4 flex gap-2">
            {project.badge && (
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase rounded-full border border-white/20">
                {project.badge}
              </span>
            )}
          </div>
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-black/30 backdrop-blur-md text-white text-[10px] uppercase rounded-full border border-white/10">
              {project.type}
            </span>
          </div>

          <motion.div 
            animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="text-white font-display font-black text-4xl md:text-5xl lg:text-3xl text-center leading-tight drop-shadow-xl"
          >
            {project.name.split(' – ')[0]}
          </motion.div>

          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 justify-center opacity-0 transform translate-y-4 group-hover/front:opacity-100 group-hover/front:translate-y-0 transition-all duration-500">
             {project.tech.slice(0, 3).map((t, i) => (
               <span key={i} className="text-[9px] px-2 py-1 bg-white/20 backdrop-blur-md text-white rounded-lg border border-white/10 uppercase tracking-widest font-bold">{t}</span>
             ))}
          </div>
        </div>
        <div className="flex-1 p-6 flex items-center justify-between">
          <h3 className="text-xl md:text-2xl font-display font-bold text-softWhite group-hover:text-accent transition-colors duration-300">{project.name}</h3>
          <a 
            href={project.links.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent/50 group-hover:text-accent transition-colors duration-300"
          >
             <ExternalLink size={20} />
          </a>
        </div>
      </div>

      {/* Back Face */}
      <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl bg-background/90 backdrop-blur-2xl border-2 border-accent/30 p-8 flex flex-col justify-between overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10" />
        
        <div>
          <h3 className="text-2xl font-display font-bold text-accent mb-4">{project.name}</h3>
          <p className="text-softWhite/70 text-sm leading-relaxed mb-6 h-20 overflow-hidden line-clamp-3">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t, i) => (
              <span key={i} className="text-[10px] px-2 py-1 bg-accent/10 text-accent rounded-md border border-accent/20 uppercase tracking-widest font-medium">{t}</span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-softWhite/40 text-xs uppercase font-bold tracking-widest">
            <Users size={14} /> Team Size: {project.teamSize === 1 ? 'Solo' : `${project.teamSize} Members`}
          </div>
        </div>

        <div className="flex gap-4">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.links.github} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl text-softWhite/80 hover:bg-white/10 transition-colors font-bold text-sm"
          >
            <Github size={18} /> GitHub
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.links.live} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-accent text-black rounded-xl hover:shadow-[0_0_20px_rgba(0,245,212,0.4)] transition-all font-bold text-sm"
          >
            <ExternalLink size={18} /> View Project
          </motion.a>
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-accent uppercase tracking-widest text-sm font-bold">Selected Works</span>
        <h2 className="text-5xl md:text-7xl font-display font-black mt-4 underline decoration-accent/20 underline-offset-8">Things I've Built</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>

      <motion.button 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
        className="mt-16 px-10 py-4 bg-transparent border-2 border-accent text-accent rounded-full font-bold uppercase tracking-widest transition-all hover:bg-accent/10"
      >
        Explore More on GitHub
      </motion.button>
    </section>
  );
};

export default Projects;
