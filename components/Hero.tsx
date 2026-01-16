
import React, { useEffect, useState, useRef } from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = ['Full Stack Developer', 'DevOps' , 'System Administrator', 'Problem Solver', 'Performance Driven', 'Detail Oriented'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCvDropdown, setShowCvDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCvDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 pt-20 pb-0">
      {/* Dynamic Background Grid */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      {/* Floating Glass Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 glass rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-neutral-900/50 to-transparent rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-5xl flex flex-col items-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-neutral-800 rounded-full text-[10px] font-mono text-neutral-500 mb-10 tracking-[0.2em] uppercase hover:border-emerald-800 hover:text-emerald-400 transition-all duration-500 group">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span>Available for opportunities</span>
          <span className="hidden group-hover:inline">• {PERSONAL_INFO.location}</span>
        </div>

        {/* Name with creative styling */}
        <h1 className="text-5xl md:text-[90px] font-black mb-4 tracking-tighter leading-[0.9]">
          <span className="bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent hover:from-emerald-400 hover:via-white hover:to-emerald-400 transition-all duration-1000">
            {PERSONAL_INFO.name.split(' ')[0].toUpperCase()}
          </span>
          <br />
          <span className="text-neutral-700 hover:text-neutral-400 transition-colors duration-700">
            {PERSONAL_INFO.name.split(' ')[1]?.toUpperCase() || ''}
          </span>
        </h1>

        {/* Animated Role */}
        <div className="h-12 flex items-center justify-center mb-8">
          <span className="text-xl md:text-2xl font-mono text-emerald-500">
            {'<'}
          </span>
          <span className="text-xl md:text-2xl font-light text-neutral-300 mx-2">
            {displayText}
            <span className="animate-pulse text-emerald-500">|</span>
          </span>
          <span className="text-xl md:text-2xl font-mono text-emerald-500">
            {'/>'}
          </span>
        </div>

        {/* Creative Bio - Full Stack + DevOps */}
        <div className="text-sm md:text-base text-neutral-400 mb-10 max-w-3xl mx-auto font-mono">
          <p 
            className="mb-3 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.2s_forwards]"
          >
            <span className="text-emerald-400">&gt;</span>{' '}
            <span className="text-white font-medium">Code meets infrastructure.</span>{' '}
            I build <span className="text-emerald-400">scalable backends</span> with{' '}
            <span className="text-neutral-200">Spring Boot</span> &{' '}
            <span className="text-neutral-200">Laravel</span>,
          </p>
          <p 
            className="mb-3 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.4s_forwards]"
          >
            <span className="text-emerald-400">&gt;</span>{' '}
            automate <span className="text-emerald-400">deployments</span>,{' '}
            and manage <span className="text-emerald-400">cloud infrastructure</span>{' '}
            with precision.
          </p>
          <p 
            className="text-neutral-500 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.6s_forwards]"
          >
            <span className="text-emerald-400">&gt;</span>{' '}
            <span className="text-neutral-400">// </span>
            From <span className="text-neutral-300">REST APIs</span> to{' '}
            <span className="text-neutral-300">CI/CD pipelines</span>,{' '}
            <span className="text-neutral-300">Docker</span> to{' '}
            <span className="text-neutral-300">production</span> —{' '}
            <span className="text-white font-medium">I ship code that scales.</span>
          </p>
          
          {/* Tech tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {['Full Stack', 'DevOps', 'Backend', 'SysAdmin', 'Security'].map((tag, index) => (
              <span 
                key={tag}
                className="group px-4 py-1.5 text-[10px] font-black uppercase tracking-widest border border-neutral-800 rounded-full text-neutral-500 hover:border-emerald-500/50 hover:text-emerald-400 hover:-translate-y-0.5 transition-all cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 mb-12">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300"
            >
              {link.icon === 'github' && (
                <svg className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              )}
              {link.icon === 'linkedin' && (
                <svg className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              )}
              {link.icon === 'email' && (
                <svg className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              )}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#projects" 
            className="group px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-emerald-400 hover:text-black transition-all duration-300 flex items-center gap-3"
          >
            View Projects
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          
          {/* CV Download with Language Selection */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowCvDropdown(!showCvDropdown);
              }}
              className="group px-8 py-4 border border-neutral-700 text-white font-bold uppercase tracking-widest text-xs hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300 flex items-center gap-3"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Download CV
              <svg className={`w-3 h-3 transition-transform duration-300 ${showCvDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <div 
              className={`absolute top-full left-0 right-0 mt-2 z-[100] transition-all duration-200 ${
                showCvDropdown 
                  ? 'opacity-100 visible translate-y-0' 
                  : 'opacity-0 invisible -translate-y-2 pointer-events-none'
              }`}
            >
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden shadow-2xl shadow-black/50">
                <a 
                  href="/docs/MOHAMED-ZOUHAIRI-CV-EN.pdf"
                  download="MOHAMED-ZOUHAIRI-CV-EN.pdf"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowCvDropdown(false);
                  }}
                  className="group/item flex items-center gap-4 px-6 py-4 text-neutral-300 hover:bg-emerald-500/10 hover:text-emerald-400 transition-all border-b border-neutral-800 cursor-pointer"
                >
                  <span className="text-lg font-bold">EN</span>
                  <div className="flex-1">
                    <span className="font-black uppercase tracking-widest text-xs block">English</span>
                    <span className="text-[10px] text-neutral-500 group-hover/item:text-emerald-400/60">CV in English</span>
                  </div>
                  <svg className="w-4 h-4 opacity-50 group-hover/item:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                </a>
                <a 
                  href="/docs/MOHAMED-ZOUHAIRI-CV-FR.pdf"
                  download="MOHAMED-ZOUHAIRI-CV-FR.pdf"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowCvDropdown(false);
                  }}
                  className="group/item flex items-center gap-4 px-6 py-4 text-neutral-300 hover:bg-emerald-500/10 hover:text-emerald-400 transition-all cursor-pointer"
                >
                  <span className="text-lg font-bold">FR</span>
                  <div className="flex-1">
                    <span className="font-black uppercase tracking-widest text-xs block">Français</span>
                    <span className="text-[10px] text-neutral-500 group-hover/item:text-emerald-400/60">CV en Français</span>
                  </div>
                  <svg className="w-4 h-4 opacity-50 group-hover/item:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
