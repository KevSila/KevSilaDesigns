import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Mail, ArrowUpRight, ChevronRight, Palette, Code, BarChart, Smartphone } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILLS } from './constants';
import { ProjectCategory } from './types';

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
    { name: 'Work', href: '#work' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-950/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold tracking-tight text-white">
              K.Sila
            </a>
          </div>
          
          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
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
        <div className="md:hidden bg-dark-900 border-b border-white/5">
          <div className="px-4 py-4 space-y-2">
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

// 2. Minimal Hero Component
const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-3 py-1 mb-8 text-xs font-medium tracking-wider text-brand-500 uppercase bg-brand-500/10 rounded-full">
          Digital Portfolio
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
          Strategy met<br className="hidden md:block"/> design.
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
          {PERSONAL_INFO.tagline} I'm {PERSONAL_INFO.name}, crafting digital solutions that merge technical precision with aesthetic clarity.
        </p>
        
        <div className="flex justify-center gap-6">
          <a href="#work" className="text-white border-b border-brand-500 pb-1 hover:text-brand-500 transition-colors flex items-center gap-2">
            See selected work <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

// 3. Expertise Component
const Services: React.FC = () => {
  return (
    <section id="expertise" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Expertise</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              My approach combines data-driven insights with creative execution. I don't just build designs; I build systems that work.
            </p>
            
            <div className="space-y-4">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-slate-800"></div>
                  <span className="text-sm text-slate-300 font-medium whitespace-nowrap">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 border border-slate-800 rounded-lg hover:border-slate-600 transition-colors">
              <Palette className="text-brand-500 mb-4" size={24} />
              <h3 className="text-white font-semibold mb-2">Design</h3>
              <p className="text-sm text-slate-400">UI/UX, Branding, and Print design using Figma & Canva.</p>
            </div>
            <div className="p-6 border border-slate-800 rounded-lg hover:border-slate-600 transition-colors">
              <Code className="text-brand-500 mb-4" size={24} />
              <h3 className="text-white font-semibold mb-2">Development</h3>
              <p className="text-sm text-slate-400">Responsive web solutions using React and WordPress.</p>
            </div>
            <div className="p-6 border border-slate-800 rounded-lg hover:border-slate-600 transition-colors">
              <BarChart className="text-brand-500 mb-4" size={24} />
              <h3 className="text-white font-semibold mb-2">Analysis</h3>
              <p className="text-sm text-slate-400">SQL and Python for actionable data insights.</p>
            </div>
            <div className="p-6 border border-slate-800 rounded-lg hover:border-slate-600 transition-colors">
              <Smartphone className="text-brand-500 mb-4" size={24} />
              <h3 className="text-white font-semibold mb-2">Strategy</h3>
              <p className="text-sm text-slate-400">Digital presence, SEO optimization, and content planning.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 4. Text-Based Portfolio Component
const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const categories = ['All', ...Object.values(ProjectCategory)];

  return (
    <section id="work" className="py-24 bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
          <h2 className="text-3xl font-bold text-white">Selected Work</h2>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as ProjectCategory | 'All')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filter === cat 
                    ? 'bg-white text-dark-900' 
                    : 'bg-dark-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <a 
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group block p-8 bg-dark-950 border border-slate-800 rounded-xl hover:border-brand-500/50 transition-all hover:shadow-lg hover:shadow-brand-500/5"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-2 py-1 rounded bg-slate-900 text-[10px] font-bold tracking-wider text-slate-400 uppercase group-hover:text-brand-400 transition-colors">
                  {project.category}
                </span>
                <ArrowUpRight size={18} className="text-slate-600 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs text-slate-600">
                    #{tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. Contact Component
const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Connect</h2>
        <p className="text-slate-400 mb-12 max-w-xl mx-auto">
          I'm currently available for freelance projects and consulting.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="px-8 py-4 rounded-full bg-white text-dark-950 font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
            <Mail size={18} /> {PERSONAL_INFO.email}
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold hover:bg-slate-800 hover:text-white transition-colors flex items-center justify-center gap-2">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}</p>
          <p>Nairobi, Kenya</p>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <div className="bg-dark-950 min-h-screen text-slate-300 font-sans selection:bg-brand-500 selection:text-white">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  );
};

export default App;