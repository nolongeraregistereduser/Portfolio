
import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-[10px] font-mono text-purple-400 tracking-widest uppercase mb-4">
              / ACADEMIC BACKGROUND
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              Education <br />
              <span className="text-neutral-600">& Training</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EDUCATION.map((edu, index) => (
            <div
              key={`${edu.school}-${index}`}
              className="group relative p-8 border border-neutral-800 rounded-lg hover:border-purple-500/50 bg-gradient-to-br from-purple-500/5 to-transparent transition-all duration-500 hover:-translate-y-2"
            >
              {/* Decorative number */}
              <div className="absolute top-4 right-4 text-[100px] font-black text-white/[0.02] leading-none select-none pointer-events-none">
                0{index + 1}
              </div>

              {/* Period */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-[10px] font-mono text-purple-400 mb-6">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {edu.period}
              </div>

              {/* Degree */}
              <h3 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-purple-400 transition-colors">
                {edu.degree}
              </h3>

              {/* School */}
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-neutral-400 font-medium">{edu.school}</span>
                {edu.location && (
                  <span className="text-neutral-600 text-sm">• {edu.location}</span>
                )}
              </div>

              {/* Description */}
              <p className="text-neutral-500 text-sm leading-relaxed font-light">
                {edu.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Certifications placeholder */}
        <div className="mt-16 p-8 border border-dashed border-neutral-800 rounded-lg text-center">
          <div className="text-neutral-600 font-mono text-sm">
            <span className="text-purple-500">// </span>
            Certifications & Courses coming soon...
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

