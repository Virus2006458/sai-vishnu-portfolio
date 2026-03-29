import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill all fields.');
      setLoading(false);
      return;
    }

    // EmailJS Integration with Placeholder Slots
    // Replace these with your actual IDs from EmailJS Dashboard
    const SERVICE_ID = "service_x7ymiso"; 
    const TEMPLATE_ID = "template_xoe3rmi";
    const PUBLIC_KEY = "QHxnV-_XCKRyz-RlF";



    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        toast.success("Message sent successfully! ✅");
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        setLoading(false);
        console.error(error.text);
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="py-20 flex flex-col items-center">
      <Toaster position="bottom-right" reverseOrder={false} />
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-accent uppercase tracking-widest text-sm font-bold">Get In Touch</span>
        <h2 className="text-5xl md:text-7xl font-display font-black mt-4">Let's Connect</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-6xl">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center gap-12"
        >
          <div className="flex flex-col gap-8">
            <h3 className="text-3xl font-display font-black text-softWhite mb-4 drop-shadow-lg">Contact Details</h3>
            
            <motion.a 
              whileHover={{ x: 10, color: '#00f5d4' }}
              href="mailto:saivishnukandur2006@gmail.com" 
              className="flex items-center gap-6 group"
            >
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300">
                <Mail size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-softWhite/40 font-bold mb-1">Email Me</span>
                <span className="text-lg md:text-xl font-medium text-softWhite/80 group-hover:text-accent transition-colors">saivishnukandur2006@gmail.com</span>
              </div>
            </motion.a>

            <motion.a 
              whileHover={{ x: 10, color: '#00f5d4' }}
              href="tel:+918310616935" 
              className="flex items-center gap-6 group"
            >
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300">
                <Phone size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-softWhite/40 font-bold mb-1">Call Me</span>
                <span className="text-lg md:text-xl font-medium text-softWhite/80 group-hover:text-accent transition-colors">+91 8310616935</span>
              </div>
            </motion.a>

            <motion.a 
              whileHover={{ x: 10, color: '#00f5d4' }}
              href="https://linkedin.com/in/saivishnukandurc" 
              target="_blank" 
              className="flex items-center gap-6 group"
            >
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300">
                <Linkedin size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-softWhite/40 font-bold mb-1">LinkedIn</span>
                <span className="text-lg md:text-xl font-medium text-softWhite/80 group-hover:text-accent transition-colors">in/sai vishnu kandur c</span>
              </div>
            </motion.a>

             <div className="flex items-center gap-6 group">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-accent">
                <MapPin size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-softWhite/40 font-bold mb-1">Location</span>
                <span className="text-lg md:text-xl font-medium text-softWhite/80">Chennai, India</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden backdrop-blur-3xl group hover:border-accent/30 transition-all duration-500 shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[100px] -z-10 group-hover:bg-accent/10 transition-colors" />
          
          <form ref={formRef} className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs uppercase tracking-widest text-softWhite/40 font-bold ml-1">Name</label>
              <input 
                name="user_name"
                type="text" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex. Jane Doe"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-softWhite focus:outline-none focus:border-accent focus:bg-white/[0.08] transition-all placeholder:text-softWhite/20 italic" 
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs uppercase tracking-widest text-softWhite/40 font-bold ml-1">Email</label>
              <input 
                name="user_email"
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Ex. jane@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-softWhite focus:outline-none focus:border-accent focus:bg-white/[0.08] transition-all placeholder:text-softWhite/20 italic" 
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-softWhite/40 font-bold ml-1">Message</label>
              <textarea 
                name="message"
                id="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or just say hi!"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-softWhite focus:outline-none focus:border-accent focus:bg-white/[0.08] transition-all placeholder:text-softWhite/20 italic resize-none" 
              />
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0, 245, 212, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              className={`mt-4 w-full py-4 bg-accent text-black font-bold rounded-xl flex items-center justify-center gap-3 transition-all duration-300 transform-gpu group/submit ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
