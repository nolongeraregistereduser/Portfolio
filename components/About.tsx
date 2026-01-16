
import React from 'react';
import { PERSONAL_INFO, LANGUAGES, INTERESTS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-neutral-800/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <div className="text-[10px] font-mono text-emerald-500 tracking-widest uppercase mb-4">
            / WHO AM I
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
            About <span className="text-neutral-600">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Profile Image Column */}
          <div className="lg:col-span-5 relative group">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-neutral-800 rounded-2xl group-hover:border-emerald-500/30 transition-colors duration-700"></div>
              <div className="absolute -inset-8 border border-neutral-900 rounded-3xl opacity-50"></div>
              
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="/images/profile.png" 
                  alt={PERSONAL_INFO.name}
                  className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Glass reflection sweep */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </div>
                
                {/* Name overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="font-mono text-[10px] text-emerald-500 tracking-widest uppercase mb-1">
                    Full Stack Developer
                  </div>
                  <h3 className="text-2xl font-black tracking-tight text-white">
                    {PERSONAL_INFO.name}
                  </h3>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 px-4 py-2 bg-emerald-500 text-black font-bold text-xs uppercase tracking-widest rounded-lg shadow-lg shadow-emerald-500/30 rotate-3 group-hover:rotate-0 transition-transform">
                Available for Work
              </div>
            </div>

            {/* Quick stats under image */}
            <div className="mt-16 grid grid-cols-3 gap-4">
              <div className="text-center p-4 border border-neutral-900 rounded-lg hover:border-emerald-500/30 transition-colors">
                <div className="text-3xl font-black text-emerald-500">3+</div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mt-1">Years Exp.</div>
              </div>
              <div className="text-center p-4 border border-neutral-900 rounded-lg hover:border-emerald-500/30 transition-colors">
                <div className="text-3xl font-black text-emerald-500">10+</div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mt-1">Projects</div>
              </div>
              <div className="text-center p-4 border border-neutral-900 rounded-lg hover:border-emerald-500/30 transition-colors">
                <div className="text-3xl font-black text-emerald-500">5+</div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mt-1">Clients</div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-10">
            {/* Bio */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-emerald-500"></span>
                Profile
              </h3>
              <p className="text-neutral-300 leading-relaxed text-lg font-light mb-6">
                {PERSONAL_INFO.bio}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 glass rounded-full text-sm text-emerald-400 border border-emerald-500/20">
                  🚀 Problem Solver
                </span>
                <span className="px-4 py-2 glass rounded-full text-sm text-emerald-400 border border-emerald-500/20">
                  ⚡ Performance Driven
                </span>
                <span className="px-4 py-2 glass rounded-full text-sm text-emerald-400 border border-emerald-500/20">
                  🎯 Detail Oriented
                </span>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="w-6 h-[2px] bg-emerald-500"></span>
                Languages
              </h3>
              <div className="flex flex-wrap gap-4">
                {LANGUAGES.map((lang) => (
                  <div 
                    key={lang.name}
                    className="group px-5 py-3 border border-neutral-800 rounded-lg hover:border-emerald-500/50 transition-all hover:-translate-y-1"
                  >
                    <div className="text-white font-medium">{lang.name}</div>
                    <div className="text-[10px] text-neutral-500 uppercase tracking-wider">{lang.level}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="w-6 h-[2px] bg-emerald-500"></span>
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest) => (
                  <span 
                    key={interest}
                    className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-sm text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-neutral-900">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group flex items-center gap-4 p-4 border border-neutral-800 rounded-lg hover:border-emerald-500/50 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Email</div>
                  <div className="text-neutral-300 text-sm group-hover:text-white transition-colors">{PERSONAL_INFO.email}</div>
                </div>
              </a>
              
              <a 
                href={`tel:${PERSONAL_INFO.phone}`}
                className="group flex items-center gap-4 p-4 border border-neutral-800 rounded-lg hover:border-emerald-500/50 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Phone</div>
                  <div className="text-neutral-300 text-sm group-hover:text-white transition-colors">{PERSONAL_INFO.phone}</div>
                </div>
              </a>
              
              <a 
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 border border-neutral-800 rounded-lg hover:border-emerald-500/50 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-wider">GitHub</div>
                  <div className="text-neutral-300 text-sm group-hover:text-white transition-colors">@nolongeraregistereduser</div>
                </div>
              </a>
              
              <div className="group flex items-center gap-4 p-4 border border-neutral-800 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Location</div>
                  <div className="text-neutral-300 text-sm">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

