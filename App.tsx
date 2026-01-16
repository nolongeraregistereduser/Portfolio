
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ProjectCard from './components/ProjectCard';
import Education from './components/Education';
import { PROJECTS, PERSONAL_INFO, SOCIAL_LINKS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main>
        <Hero />

        <About />

        <Skills />

        <Experience />

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6 bg-neutral-950/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <div className="text-[10px] font-mono text-emerald-500 tracking-widest uppercase mb-4">
                  / FEATURED WORK
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
                  Selected <br />
                  <span className="text-neutral-600">Projects</span>
                </h2>
              </div>
              <p className="text-neutral-400 text-sm max-w-md font-light leading-relaxed">
                From B2B enterprise APIs to healthcare platforms — building solutions that matter.
                <span className="block mt-2 text-neutral-600 italic">Projects can be updated anytime.</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PROJECTS.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <Education />

        {/* Contact Section */}
        <section id="contact" className="py-40 px-6 text-center border-t border-neutral-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-[10px] font-mono text-emerald-500 tracking-widest uppercase mb-6">
              / LET'S CONNECT
            </div>
            
            <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
              Have a project<br />
              <span className="text-neutral-600">in mind?</span>
            </h2>
            
            <p className="text-lg text-neutral-400 mb-12 font-light max-w-xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just a friendly chat about technology.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group flex items-center gap-3 px-6 py-4 border border-neutral-800 rounded-lg hover:border-emerald-500 transition-all"
              >
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className="text-neutral-300 group-hover:text-white transition-colors">{PERSONAL_INFO.email}</span>
              </a>
              <a 
                href={`tel:${PERSONAL_INFO.phone}`}
                className="group flex items-center gap-3 px-6 py-4 border border-neutral-800 rounded-lg hover:border-emerald-500 transition-all"
              >
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span className="text-neutral-300 group-hover:text-white transition-colors">{PERSONAL_INFO.phone}</span>
              </a>
            </div>

            {/* CTA Button */}
            <a 
              href={`mailto:${PERSONAL_INFO.email}?subject=Let's work together`}
              className="inline-flex items-center gap-3 px-12 py-5 bg-emerald-500 text-black font-bold uppercase tracking-widest text-sm hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 hover:-translate-y-1"
            >
              Send a Message
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-neutral-900 bg-black text-neutral-600">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Creative Logo */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <a href="#" className="font-mono text-sm tracking-wider flex items-center">
                <span className="text-emerald-500">&lt;</span>
                <span className="mx-1 text-white font-bold tracking-widest">M0H4M3D</span>
                <span className="text-neutral-600 mx-1">/</span>
                <span className="text-neutral-500 tracking-widest">Z0UH4IRI</span>
                <span className="text-emerald-500">&gt;</span>
              </a>
              <div className="text-[10px] font-mono tracking-widest uppercase">
                &copy; {new Date().getFullYear()} All Rights Reserved.
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm">
              <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>{PERSONAL_INFO.location}</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold uppercase tracking-widest hover:text-emerald-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="mt-12 pt-8 border-t border-neutral-900 text-center">
            <p className="text-[10px] font-mono text-neutral-800">
              Built with <span className="text-emerald-500">React</span> + <span className="text-emerald-500">TypeScript</span> + <span className="text-emerald-500">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
