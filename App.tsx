import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin, Mail, ExternalLink, ChevronRight, Palette, Code, BarChart, Smartphone } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCE, SKILLS } from './constants';
import { ProjectCategory } from './types';

// --- Sub-components defined internally for simplicity in this single-file output structure, 
// normally these would be in separate files in /components ---

// 1. Navigation Component
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-brand-500 to-teal-400 bg-clip-text text-transparent">
              K.Sila
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-300 hover:text-brand-500 transition-colors text-sm font-medium tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-800 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// 2. Hero Component
const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-brand-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-sm font-semibold mb-6 animate-fade-in-up">
          Available for Hire
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Designing the Future <br />
          <span className="bg-gradient-to-r from-brand-500 via-teal-400 to-brand-500 bg-clip-text text-transparent bg-300% animate-gradient">
            Data-Driven & Visual
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          {PERSONAL_INFO.tagline} I am {PERSONAL_INFO.name}, a {PERSONAL_INFO.role} blending technical precision with creative strategy.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#portfolio" className="px-8 py-3.5 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-semibold transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] flex items-center gap-2">
            View My Work <ChevronRight size={18} />
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="px-8 py-3.5 rounded-full border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold transition-all flex items-center gap-2">
            <Linkedin size={18} /> LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

// 3. Stats/Skills Component
const Services: React.FC = () => {
  const services = [
    { icon: <Palette className="text-pink-500" size={32} />, title: 'UI/UX & Branding', desc: 'Creating intuitive wireframes, prototypes, and brand assets that tell a story.' },
    { icon: <Code className="text-blue-500" size={32} />, title: 'Web Development', desc: 'Building responsive websites with React, WordPress, and modern CMS tools.' },
    { icon: <BarChart className="text-emerald-500" size={32} />, title: 'Data Analytics', desc: 'Visualizing insights using SQL, Tableau, and Python to drive decisions.' },
    { icon: <Smartphone className="text-purple-500" size={32} />, title: 'Digital Strategy', desc: 'SEO, content calendars, and strategic planning for digital growth.' },
  ];

  return (
    <section id="services" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">My Expertise</h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 group">
              <div className="mb-6 p-4 rounded-full bg-slate-800/50 w-fit group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Technical Skills Bars */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
             <h3 className="text-2xl font-bold text-white mb-8">Technical Proficiency</h3>
             <p className="text-slate-400 mb-6">
               My toolkit allows me to bridge the gap between creative design and technical implementation.
             </p>
          </div>
          <div className="space-y-6">
            {SKILLS.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300 font-medium">{skill.name}</span>
                  <span className="text-brand-400 font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-brand-600 to-teal-400 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// 4. Portfolio Component
const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const categories = ['All', ...Object.values(ProjectCategory)];

  return (
    <section id="portfolio" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Selected Work</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A curation of my design, strategy, and technical projects. 
            Click on any project to view the full design in Canva.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as ProjectCategory | 'All')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat 
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25' 
                  : 'bg-dark-800 text-slate-400 hover:bg-dark-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative rounded-xl overflow-hidden bg-dark-800 border border-slate-700 hover:border-brand-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-900/20">
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden bg-slate-800 relative">
                <img 
                  src={project.imagePlaceholder} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-90" />
                
                {/* Overlay Button */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-dark-900/60 backdrop-blur-sm"
                >
                  <span className="px-6 py-3 bg-white text-dark-900 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    View Project <ExternalLink size={16} />
                  </span>
                </a>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm line-clamp-3 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs rounded bg-slate-700/50 text-slate-300 border border-slate-600/50">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. Experience Component
const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-dark-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Professional Journey</h2>
        
        <div className="relative border-l border-slate-700 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE.map((job, idx) => (
            <div key={job.id} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-brand-500 group-hover:scale-150 transition-transform duration-300 ring-4 ring-dark-800" />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">{job.role}</h3>
                <span className="text-sm font-mono text-slate-500 bg-dark-900 px-3 py-1 rounded-full border border-slate-700">{job.period}</span>
              </div>
              <div className="text-lg text-brand-500 mb-3 font-medium">{job.company}</div>
              <p className="text-slate-400 mb-4">{job.description}</p>
              <ul className="list-disc list-outside ml-4 space-y-1 text-slate-400 text-sm marker:text-brand-600">
                {job.achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 6. Contact/Footer Component
const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-dark-900 to-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something Great</h2>
        <p className="text-xl text-slate-400 mb-12">
          Whether you need a digital strategy audit, a new website, or a comprehensive design system, I'm ready to help you achieve your goals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="glass-card p-6 rounded-xl flex flex-col items-center hover:bg-slate-800 transition-colors">
            <Mail className="text-brand-500 mb-4" size={32} />
            <span className="text-slate-300 text-sm">Email Me</span>
            <span className="text-white font-semibold mt-1">{PERSONAL_INFO.email}</span>
          </a>
          <a href="#" className="glass-card p-6 rounded-xl flex flex-col items-center hover:bg-slate-800 transition-colors">
            <Smartphone className="text-teal-500 mb-4" size={32} />
            <span className="text-slate-300 text-sm">Call / WhatsApp</span>
            <span className="text-white font-semibold mt-1">{PERSONAL_INFO.phone}</span>
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="glass-card p-6 rounded-xl flex flex-col items-center hover:bg-slate-800 transition-colors">
            <Linkedin className="text-blue-500 mb-4" size={32} />
            <span className="text-slate-300 text-sm">Connect</span>
            <span className="text-white font-semibold mt-1">LinkedIn Profile</span>
          </a>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Github</a>
             <a href="#" className="hover:text-white transition-colors">Twitter</a>
             <a href="#" className="hover:text-white transition-colors">Medium</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <div className="bg-dark-900 min-h-screen text-slate-200 font-sans selection:bg-brand-500 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <ExperienceSection />
      <Contact />
    </div>
  );
};

export default App;