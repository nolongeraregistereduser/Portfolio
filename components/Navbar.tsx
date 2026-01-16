
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'border-b border-white/5 bg-black/90 backdrop-blur-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Creative Logo */}
        <a href="#" className="group flex items-center font-mono text-sm tracking-wider">
          <span className="text-emerald-500 group-hover:text-emerald-400 transition-colors">&lt;</span>
          <span className="mx-1 text-white font-bold group-hover:text-emerald-400 transition-colors tracking-widest">M0H4M3D</span>
          <span className="text-neutral-600 mx-1">/</span>
          <span className="text-neutral-500 group-hover:text-white transition-colors tracking-widest">Z0UH4IRI</span>
          <span className="text-emerald-500 group-hover:text-emerald-400 transition-colors">&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-widest text-neutral-500">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="relative hover:text-white transition-colors group py-2"
            >
              {link.name}
              <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-emerald-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-3 bg-emerald-500 text-black rounded-lg hover:bg-emerald-400 hover:-translate-y-0.5 transition-all shadow-lg shadow-emerald-500/20 font-bold"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-neutral-800 transition-all duration-300 ${
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg font-bold text-neutral-300 hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-block px-6 py-3 bg-emerald-500 text-black rounded-lg font-bold text-sm"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
