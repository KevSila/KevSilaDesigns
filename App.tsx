import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Mail, ArrowUpRight, ChevronRight, Palette, Code, BarChart, Smartphone, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILLS, MAIN_PORTFOLIO_URL } from './constants';
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
            <a href="#top" aria-label="Kevin Sila — back to top" className="text-xl font-bold tracking-tight text-white">
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
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu" aria-expanded={isOpen} className="text-slate-300 hover:text-white p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
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

// 2. Hero Component
const Hero: React.FC = () => {
  return (
    <section id="top" className="relative min-h-[88vh] flex items-center justify-center pt-24 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full bg-brand-500/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-72 h-72 rounded-full bg-sky-300/5 blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-3.5 py-1.5 mb-8 text-xs font-semibold tracking-[0.18em] text-brand-400 uppercase bg-brand-500/10 border border-brand-500/20 rounded-full">
          UI/UX · Graphic Design · Digital Strategy
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 tracking-[-0.045em] leading-[0.98]">
          Design that makes ideas
          <span className="block text-brand-400">clear and useful.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
          I'm Kevin Yumbya Sila, a Nairobi-based designer and digital strategist. I create brand assets,
          web experiences, print layouts and SEO-led digital content that help people understand,
          trust and act.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#work"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-dark-950 font-semibold hover:bg-brand-400 transition-colors inline-flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950"
          >
            View selected work <ChevronRight size={17} />
          </a>
          <a
            href={MAIN_PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-slate-700 text-slate-200 font-semibold hover:border-slate-500 hover:bg-white/5 transition-colors inline-flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            Professional portfolio <ExternalLink size={16} />
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-500">
          <span>Brand & visual design</span>
          <span aria-hidden="true">•</span>
          <span>Web & UI assets</span>
          <span aria-hidden="true">•</span>
          <span>Print & editorial</span>
          <span aria-hidden="true">•</span>
          <span>Content & SEO</span>
        </div>
      </div>
    </section>
  );
};

// 3. Expertise Component
const Services: React.FC = () => {
  return (
    <section id="expertise" className="py-24 border-t border-white/5 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-400 mb-4">How I work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Design with purpose, not decoration.</h2>
            <p className="text-slate-400 leading-relaxed mb-9 max-w-xl">
              I combine visual design, user experience thinking and digital strategy so the final work is
              not only polished, but clear, usable and aligned to the audience it needs to reach.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-7 border border-slate-800 bg-white/[0.015] rounded-2xl hover:border-brand-500/40 hover:-translate-y-0.5 transition-all">
              <Palette className="text-brand-400 mb-5" size={25} />
              <h3 className="text-white font-semibold mb-2">Brand & Graphic Design</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Campaign graphics, visual identity assets, posters, social content and brand-consistent collateral.</p>
            </div>
            <div className="p-7 border border-slate-800 bg-white/[0.015] rounded-2xl hover:border-brand-500/40 hover:-translate-y-0.5 transition-all">
              <Code className="text-brand-400 mb-5" size={25} />
              <h3 className="text-white font-semibold mb-2">UI/UX & Web</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Responsive interfaces, web assets and page experiences built for clarity across desktop and mobile.</p>
            </div>
            <div className="p-7 border border-slate-800 bg-white/[0.015] rounded-2xl hover:border-brand-500/40 hover:-translate-y-0.5 transition-all">
              <BarChart className="text-brand-400 mb-5" size={25} />
              <h3 className="text-white font-semibold mb-2">Content & Editorial</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Presentations, print layouts, book assets and information design that make complex ideas easier to absorb.</p>
            </div>
            <div className="p-7 border border-slate-800 bg-white/[0.015] rounded-2xl hover:border-brand-500/40 hover:-translate-y-0.5 transition-all">
              <Smartphone className="text-brand-400 mb-5" size={25} />
              <h3 className="text-white font-semibold mb-2">Digital Strategy & SEO</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Search-aware content, digital presence and design decisions shaped around discoverability and audience intent.</p>
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
    <section id="work" className="py-24 bg-dark-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Selected work</h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl text-slate-400 text-lg leading-relaxed">
              <p className="mb-4">
                A focused selection of branding, web assets, print, motion and digital strategy work. Each project opens to the original design so you can review the execution in context.
              </p>
              <a 
                href={MAIN_PORTFOLIO_URL} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-brand-500 hover:text-brand-400 font-medium transition-colors border-b border-brand-500/30 pb-0.5 hover:border-brand-500"
              >
                View full professional portfolio & experience <ExternalLink size={16} />
              </a>
            </div>
            
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <a 
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group block h-full p-8 bg-gradient-to-br from-dark-950 to-slate-950 border border-slate-800 rounded-2xl hover:border-brand-500/50 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
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
                  <span key={tag} className="text-xs text-slate-500">
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
    <section id="contact" className="py-24 border-t border-white/5 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-400 mb-4">Contact</p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Have a project that needs clearer design?</h2>
        <p className="text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          I'm available for freelance design, digital content and selected web projects. Share what you're
          building and what the audience needs to understand or do.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-8 py-4 rounded-full bg-white text-dark-950 font-semibold hover:bg-brand-400 transition-colors flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950"
          >
            <Mail size={18} /> Email me
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold hover:bg-slate-800 hover:text-white transition-colors flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>

        <footer className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row gap-3 justify-between items-center text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}</p>
          <p>Nairobi, Kenya · UI/UX & Digital Design</p>
        </footer>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <div className="bg-dark-950 min-h-screen text-slate-300 font-sans">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-white focus:text-dark-950 focus:font-semibold"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Portfolio />
        <Services />
        <Contact />
      </main>
    </div>
  );
};

export default App;