
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import { PERSONAL_INFO, SOCIAL_LINKS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Journey />

        {/* Contact Section */}
        <section id="contact" className="py-40 px-6 text-center border-t border-neutral-900 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-[10px] font-mono text-emerald-500 tracking-widest uppercase mb-6 flex items-center justify-center gap-3">
              <span>/ LET'S CONNECT</span>
              <span className="text-neutral-700">•</span>
              <span className="text-neutral-600">Ready to build something amazing?</span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
              Have a project<br />
              <span className="text-neutral-600">in mind?</span>
            </h2>
            
            <p className="text-lg text-neutral-400 mb-16 font-light max-w-xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, 
              or just a friendly chat about technology. Let's turn your ideas into reality.
            </p>

            {/* Creative Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Email Card */}
              <a 
                href={`mailto:${PERSONAL_INFO.email}?subject=Let's work together`}
                className="group relative p-8 border border-neutral-800 rounded-xl bg-neutral-950/50 hover:border-emerald-500 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-emerald-400 mb-3">Email</h3>
                  <p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors break-all">{PERSONAL_INFO.email}</p>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a 
                href="https://wa.me/212650668795"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-8 border border-neutral-800 rounded-xl bg-neutral-950/50 hover:border-green-500 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-green-400 mb-3">WhatsApp</h3>
                  <p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">+212 650 668 795</p>
                </div>
              </a>

              {/* Phone Card */}
              <a 
                href={`tel:${PERSONAL_INFO.phone}`}
                className="group relative p-8 border border-neutral-800 rounded-xl bg-neutral-950/50 hover:border-blue-500 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-blue-400 mb-3">Phone</h3>
                  <p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">{PERSONAL_INFO.phone}</p>
                </div>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center justify-center gap-6 mb-12 flex-wrap">
              {SOCIAL_LINKS.map((link, index) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-6 py-3 border border-neutral-800 rounded-lg hover:border-emerald-500 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    {link.icon === 'github' && (
                      <svg className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    )}
                    {link.icon === 'linkedin' && (
                      <svg className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )}
                    {link.icon === 'email' && (
                      <svg className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    )}
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 group-hover:text-emerald-400 transition-colors">{link.name}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Main CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={`mailto:${PERSONAL_INFO.email}?subject=Let's work together`}
                className="group relative inline-flex items-center gap-3 px-12 py-5 bg-emerald-500 text-black font-bold uppercase tracking-widest text-sm hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/30 rounded-lg overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                <span className="relative z-10">Send Email</span>
                <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/212650668795"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-12 py-5 bg-green-500 text-white font-bold uppercase tracking-widest text-sm hover:bg-green-400 transition-all shadow-lg shadow-green-500/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/30 rounded-lg overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="relative z-10">Chat on WhatsApp</span>
              </a>
            </div>
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
